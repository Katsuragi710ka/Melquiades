import React, { FC } from 'react';
import { connect } from 'react-redux';

import './style.scss';

import { Button } from 'primereact/button';

interface ComponentStateProps {
  tag: TagEntity
}
interface ComponentDispatchProps {

}
interface ComponentOwnProps { }
type ComponentProps = ComponentStateProps & ComponentDispatchProps & ComponentOwnProps;
const Dashboard: FC<ComponentProps> = props => {

  const handleClick = (url: string) => {
    window.open(url, '_blank');
  }

  const tagNameJa = props.tag ? props.tag.nameJa : "";
  const tagNameEn = props.tag ? props.tag.nameEn : "";

  const services = [
    { color: 'pixiv', url: `https://www.pixiv.net/en/tags/${tagNameJa}/artworks`, text: 'Pixiv' },
    { color: 'pinterest', url: `https://www.pinterest.jp/search/pins/?q=${tagNameJa}`, text: 'Pinterest' },
  ];

  return (
    <div className="service-links">
      {services.map(service => <Button className={service.color} label={`Go to ${service.text}`} onClick={() => handleClick(service.url)} />)}
    </div>
  );
};

const mapStateToProps = state => ({ tag: state.entity.tag.selectedTag });

const mapDispatchToProps = dispatch => ({
});

export default connect<ComponentStateProps, ComponentDispatchProps>(mapStateToProps, mapDispatchToProps)(Dashboard);