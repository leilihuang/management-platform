import React, { Component } from 'react';
import App from 'ROOT/components/app';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import MenuPermise from '../menu-permise';
import './index.scss';

export default class Home extends Component {
  constructor (props) {
    super(props);
    this.state = {
      menus: [
        {
          title: '菜单管理',
          type: 'menu-manage',
          children: [
            {
              title: '菜单权限控制',
              url: '/menu-permise'
            },
          ]
        },
        {
          title: '人员管理',
          type: 'role-manage',
          children: [
            {
              title: '角色分配',
              url: '/role-distri'
            },
          ]
        },
      ]
    };
  }
  render () {
    const { match } = this.props;
    const { menus } = this.state;
    return (
      <App {...this.props} leftMenus={menus} headIndex='7'>
        <Route path={`${match.url}/menu-permise`} component={MenuPermise} />
      </App>
    );
  }
}

Home.propTypes = {
  match: PropTypes.object
};
