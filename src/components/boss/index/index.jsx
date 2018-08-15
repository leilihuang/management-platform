import React, { Component } from 'react';
import App from 'ROOT/components/app';
import PropTypes from 'prop-types';

import { Route } from 'react-router-dom';
import WorkBench from '../work-bench';
import './index.scss';

export default class Home extends Component {
  constructor (props) {
    super(props);
    this.state = {
      menus: [
        {
          title: '工作台',
          type: 'gzt',
          children: [
            {
              title: '我的工作台',
              url: '/work-bench'
            },
            {
              title: '个人信息',
              url: '/user-info'
            },
          ]
        },
        {
          title: '系统管理',
          type: 'xt',
          children: [
            {
              title: '系统用户管理',
              url: '/user-gl'
            },
            {
              title: '流程配置管理',
              url: '/pro-set'
            },
            {
              title: '流程运营管理',
              url: '/pro-yy'
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
      <App {...this.props} leftMenus={menus} headIndex='0'>
        <Route path={`${match.url}/work-bench`} component={WorkBench} />
      </App>
    );
  }
}

Home.propTypes = {
  match: PropTypes.object
};
