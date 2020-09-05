import React, { FC, useEffect, useState } from 'react';
import { TableName, appDB } from '@appUtil/database';
import { connect } from 'react-redux';

import './style.scss';

import MenuItem from '@appComponent/DrawerItem/MenuItem';
import ConfirmationModal from '@appComponent/ConfirmationModal';
import TagFormModal from '@appComponent/TagFormModal';

import { ScrollPanel } from 'primereact/scrollpanel';
import { Button } from 'primereact/button';

import {
  fetchTagsByParentId,
  fetchTagById,
  updateTag,
  deleteTag
} from '@appAction/entity/tag';

import { statusType, successStatus, warningStatus } from '@appUtil/appStatus';

interface ComponentStateProps {
  tags: TagEntity[]
  appStatus: statusType
}
interface ComponentDispatchProps {
  onSelectTag: (tagId: number) => void
  onSubmit: (tag: TagEntity) => void
  onDelete: (tagId: number) => void
}
interface ComponentOwnProps {
}
type ComponentProps = ComponentStateProps & ComponentDispatchProps & ComponentOwnProps;
const TagList: FC<ComponentProps> = props => {
  const [selectedTagIds, setSelectedTagIds] = useState([]);
  const [tagFormModalOpened, setTagFormModalOpened] = useState(false);
  const [tagFormModalData, setTagFormModalData] = useState({ nameJa: '', nameEn: '', parentTagId: 0 } as TagEntity);
  const [confirmationModalOpened, setConfirmationModalOpened] = useState(false);
  const [confirmationModalData, setConfirmationModalData] = useState({ nameJa: '', nameEn: '', parentTagId: 0 } as TagEntity);

  useEffect(() => {
    props.onSelectTag(selectedTagIds.slice(-1)[0] || 0);
  }, []);

  useEffect(() => {
    props.onSelectTag(selectedTagIds.slice(-1)[0] || 0);
  }, [selectedTagIds]);

  useEffect(() => {
    if (props.appStatus === successStatus.UPDATED_TAG) {
      handlecloseTagFormModal();
    } else if (props.appStatus === warningStatus.DELETED_TAG) {
      handlecloseConfirmationModal();
    }
  }, [props.appStatus]);

  const handleMoveNext = (tagId: number) => {
    const newTagIds = selectedTagIds.concat([tagId as never]);
    setSelectedTagIds(newTagIds);
  }

  const handleMovePrev = () => {
    const newTagIds = selectedTagIds.slice(0, -1);
    setSelectedTagIds(newTagIds);
  }

  const handleMoveBeginning = () => {
    setSelectedTagIds([]);
  }

  // handling TagFormModal
  const handleOpenTagFormModal = (tagId: number) => {
    appDB[TableName.Tags].get({ id: tagId }).then(result => {
      setTagFormModalData(result!!);
      setTagFormModalOpened(true);
    });
  }

  const handlecloseTagFormModal = () => {
    setTagFormModalData({ id: undefined, nameJa: '', nameEn: '', parentTagId: 0 });
    setTagFormModalOpened(false);
  }
  // handling TagFormModal end

  // handling ConfirmationModal
  const handleOpenConfirmationModal = (tagId: number) => {
    appDB[TableName.Tags].get({ id: tagId }).then(result => {
      setConfirmationModalData(result!!);
      setConfirmationModalOpened(true);
    });
  }

  const handlecloseConfirmationModal = () => {
    setConfirmationModalData({ id: undefined, nameJa: '', nameEn: '', parentTagId: 0 });
    setConfirmationModalOpened(false);
  }
  // handling ConfirmationModal end

  const TagItem = (tag: TagEntity, idx: number) =>
    <div className="tag-link" key={idx} >
      <div onClick={() => handleMoveNext(tag.id!!)}><i className="pi pi-circle-on" />{tag.nameJa}</div>
      <div className="buttons">
        <Button onClick={() => handleOpenTagFormModal(tag.id!!)} icon="pi pi-pencil" className="button p-button-info" />
        <Button onClick={() => handleOpenConfirmationModal(tag.id!!)} icon="pi pi-times" className="button p-button-danger" />
      </div>
    </div>;

  return (
    <div className="tag-list">
      <MenuItem
        icon="pi pi-tags"
        text="Tag List"
        unclickable
      />
      <Button onClick={handleMoveBeginning} icon="pi pi-angle-double-left" className="button p-button-danger" />
      <Button onClick={handleMovePrev} icon="pi pi-angle-left" className="button p-button-danger" />
      <ScrollPanel className="scroll-panel">
        {props.tags.map((tag, idx) => {
          return TagItem(tag, idx);
        })}
      </ScrollPanel>
      <TagFormModal
        opened={tagFormModalOpened}
        onClose={() => handlecloseTagFormModal()}
        onSubmit={(tag) => props.onSubmit(tag)}
        initialTag={tagFormModalData}
      />
      <ConfirmationModal
        opened={confirmationModalOpened}
        name={confirmationModalData.nameJa}
        onDelete={() => props.onDelete(confirmationModalData.id!!)}
        onClose={handlecloseConfirmationModal}
      />
    </div>
  );
};
const mapStateToProps = state => ({
  tags: state.entity.tag.tags,
  appStatus: state.util.appStatus.status
});

const mapDispatchToProps = dispatch => ({
  onSelectTag: (tagId: number) => {
    dispatch(fetchTagsByParentId.action(tagId));
    dispatch(fetchTagById.action(tagId));
  },
  onSubmit: (tag) => dispatch(updateTag.action(tag)),
  onDelete: (tagId) => dispatch(deleteTag.action(tagId))
});

export default connect<ComponentStateProps, ComponentDispatchProps>(mapStateToProps, mapDispatchToProps)(TagList);