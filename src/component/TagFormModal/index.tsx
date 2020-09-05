import React, { FC, useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

import NameInput from '@appComponent/TagFormModal/NameInput';
import ParentTagInput from '@appComponent/TagFormModal/ParentTagInput';

import './style.scss';
import { statusType, successStatus } from '@appUtil/appStatus';

interface ComponentStateProps {
  appStatus: statusType
}
interface ComponentDispatchProps {
  
}
interface ComponentOwnProps {
  opened: boolean,
  onClose: () => void
  onSubmit: (tag: TagEntity) => void,
  initialTag?: TagEntity
}
type ComponentProps = ComponentStateProps & ComponentDispatchProps & ComponentOwnProps;
const TagFormModal: FC<ComponentProps> = props => {
  const [tag, setTag] = useState({ nameJa: '', nameEn: '', parentTagId: 0 } as TagEntity)

  useEffect(() => {
    if (props.opened && props.initialTag) {
      setTag({ ...props.initialTag });
    }else if(!props.opened){
      setTag({ nameJa: '', nameEn: '', parentTagId: 0 })
    }
  }, [props.opened]);

  useEffect(() => {
    if (props.appStatus === successStatus.CREATED_TAG) {
      props.onClose();
    }
  }, [props.appStatus]);

  const setNameJa = (value: string) => {
    const newTag = { ...tag };
    newTag.nameJa = value;
    setTag(newTag);
  }
  const setNameEn = (value: string) => {
    const newTag = { ...tag };
    newTag.nameEn = value;
    setTag(newTag);
  }
  const setParentTagId = (value: number) => {
    const newTag = { ...tag };
    newTag.parentTagId = value;
    setTag(newTag);
  }

  const headerName = props.initialTag ? `Edit Tag ${props.initialTag.nameJa}` : "New Tag"
;
  const Footer = () =>
    <div>
      <Button
        label="Cancel"
        className="p-button-secondary"
        onClick={() => props.onClose()}
      />
      <Button
        label="Submit"
        className="p-button-danger"
        onClick={() => props.onSubmit(tag)}
      />
    </div>;

  return (
    <Dialog
      visible={props.opened}
      header={headerName}
      style={{ width: '50vw' }}
      onHide={() => props.onClose()}
      footer={<Footer />}
      appendTo={document.getElementById('app')!!}
    >
      <NameInput value={tag.nameJa} name="Name(Ja)" onInput={value => setNameJa(value)} />
      <NameInput value={tag.nameEn} name="Name(En)" onInput={value => setNameEn(value)} />
      <ParentTagInput tagId={tag.parentTagId} onChange={newTagId => setParentTagId(newTagId)} />
		</Dialog>
  );
};
const mapStateToProps = state => ({ appStatus: state.util.appStatus.status });
const mapDispatchToProps = dispatch => ({});

export default connect<ComponentStateProps, ComponentDispatchProps>(mapStateToProps, mapDispatchToProps)(TagFormModal);