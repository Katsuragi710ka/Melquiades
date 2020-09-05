import React, { FC, useState } from 'react';
import { connect } from 'react-redux';

import './style.scss';

import MenuItem from '@appComponent/DrawerItem/MenuItem';

import { createTag } from '@appAction/entity/tag';
import TagFormModal from '@appComponent/TagFormModal';

interface ComponentStateProps {
}
interface ComponentDispatchProps {
  onSubmit: (tag: TagEntity) => void
}
interface ComponentOwnProps { }
type ComponentProps = ComponentStateProps & ComponentDispatchProps & ComponentOwnProps;
const NewTagForm: FC<ComponentProps> = props => {
  const [modalOpened, setModalOpened] = useState(false);

 return  <div className="new-tag-form">
   <MenuItem icon="pi pi-tag" text="New Tag" onClick={() => setModalOpened(true)} />;
    <TagFormModal
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
      onSubmit={(tag) => props.onSubmit(tag)}
    />
  </div> 
};
const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({ onSubmit: (tag) => dispatch(createTag.action(tag)) });

export default connect<ComponentStateProps, ComponentDispatchProps>(mapStateToProps, mapDispatchToProps)(NewTagForm);