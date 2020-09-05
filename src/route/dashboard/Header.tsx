import React, { FC } from 'react';

import { connect } from 'react-redux';

import ItemContainer from '@appComponent/HeaderItem/ItemContainer';

interface ComponentStateProps {
	tag: TagEntity
}
interface ComponentDispatchProps { }
interface ComponentOwnProps { }
type ComponentProps = ComponentStateProps & ComponentDispatchProps & ComponentOwnProps;
const Dashboard: FC<ComponentProps> = props => {
	const tagName = props.tag ? props.tag.nameJa : "";

	return <ItemContainer title={tagName}>
	</ItemContainer>;

}

const mapStateToProps = state => ({ tag: state.entity.tag.selectedTag });
const mapDispatchToProps = dispatch => ({});

export default connect<ComponentStateProps, ComponentDispatchProps>(mapStateToProps, mapDispatchToProps)(Dashboard);
