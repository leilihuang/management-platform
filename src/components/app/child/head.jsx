import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Menu, Layout } from 'antd';

const { Header } = Layout;

export default class Navtions extends Component {
  constructor (props) {
    super(props);
    this.state = {
      menus: [{
        title: 'BOSS',
        url: '/'
      }, {
        title: 'ECM',
        url: '/ecm'
      }, {
        title: 'BI',
        url: '/bi'
      }, {
        title: 'ERP',
        url: '/erp'
      }, {
        title: 'SCM',
        url: '/scm'
      }, {
        title: 'TMS',
        url: '/tms'
      }, {
        title: 'CRM',
        url: '/crm'
      }, {
        title: '权限管理',
        url: '/rbac'
      }]
    };
  }
  render () {
    const { menus } = this.state;
    const { headIndex } = this.props;
    return (
      <Header className='header'>
        <div className='logo' />
        <Menu
          theme='dark'
          mode='horizontal'
          defaultSelectedKeys={[headIndex]}
          style={{ lineHeight: '64px' }}
        >
          {
            menus.map((t, i) => (
              <Menu.Item key={i}>
                <Link to={t.url}>{t.title}</Link>
              </Menu.Item>
            ))
          }
        </Menu>
      </Header>
    );
  }
}

Navtions.propTypes = {
  headIndex: PropTypes.string
};
