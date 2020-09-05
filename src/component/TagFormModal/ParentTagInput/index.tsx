import React, { FC, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { TableName, appDB } from '@appUtil/database';

import { Dropdown } from 'primereact/dropdown';

import FormLabel from '@appComponent/TagFormModal/FormLabel'

import './style.scss';

interface ComponentOwnProps {
  tagId?: number,
  onChange: (newTagId: number) => void
}
interface ComponentStateProps {
  tags: TagEntity[]
}
type ComponentProps = ComponentOwnProps & ComponentStateProps;
const TagsInput: FC<ComponentProps> = props => {
  const [allTags, setAllTags] = useState([] as TagEntity[])


  useEffect(() => {
    appDB[TableName.Tags].toArray().then(result => {
      setAllTags(result);
    });
  }, []);

  const selectedTag = () => {
    return allTags.find(tag => tag.id === props.tagId);
  }

  const handleChange = (tag?: TagEntity) => {
    if (tag) {
      props.onChange(tag.id!!)
    }else {
      props.onChange(0)
    }
  } 

  return (
    <div className="tags-input">
      <FormLabel name="Tags" />
      <Dropdown
        value={selectedTag()}
        options={allTags}
        onChange={event => handleChange(event.value)}
        optionLabel="nameJa"
        filter showClear
        filterBy="nameJa"
        placeholder="Select a parent tag"
    />
    </div>
  );
};

const mapStateToProps = state => ({ tags: state.entity.tag.tags });

export default connect<ComponentStateProps>(mapStateToProps, {})(TagsInput);