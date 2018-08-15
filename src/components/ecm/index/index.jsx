import React, { Component } from 'react';
import App from 'ROOT/components/app';
import PropTypes from 'prop-types';

import { Route } from 'react-router-dom';
import './index.scss';

export default class Home extends Component {
  constructor (props) {
    super(props);
    this.state = {
      menus: [
        {
          title: '智能柜订单',
          type: 'zng',
          children: [
            {
              title: '订单列表',
              url: '/order-list'
            },
            {
              title: '订单详情',
              url: '/order-info'
            },
          ]
        },
        {
          title: '促销管理',
          type: 'cx',
          children: [
            {
              title: '限时优惠',
              url: '/xs-coupon'
            },
            {
              title: '满就送',
              url: '/xs-mj'
            },
            {
              title: '组合促销',
              url: '/xs-cx'
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
      <App {...this.props} leftMenus={menus} headIndex='1'>
        <Route path={`${match.url}`} />
      </App>
    );
  }
}

Home.propTypes = {
  match: PropTypes.object
};
