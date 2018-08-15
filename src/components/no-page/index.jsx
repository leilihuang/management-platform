import React, { Component } from 'react';
import App from 'ROOT/components/app';
import PropTypes from 'prop-types';
import './index.scss';

export default class Home extends Component {
  constructor (props) {
    super(props);
    this.state = {
      menus: [
      ]
    };
  }
  render () {
    // const { match } = this.props;
    const { menus } = this.state;
    return (
      <App {...this.props} leftMenus={menus} headIndex='7'>
        <div className='no-page'>占时为配置此菜单</div>
      </App>
    );
  }
}

Home.propTypes = {
  match: PropTypes.object
};
