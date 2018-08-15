import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Layout, Menu, Icon } from 'antd';

const { SubMenu } = Menu;
const { Sider } = Layout;

export default class LeftMenus extends Component {
  render () {
    const { match, location, leftMenus } = this.props;
    return (
      <div className='left-menu-box'>
        <Sider width={200} style={{ background: '#fff' }}>
          <Menu
            mode='inline'
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['0']}
            style={{ height: '100%', borderRight: 0 }}
          >
            {
              leftMenus.map((t, i) => (
                <SubMenu key={i} title={<span><Icon type='user' />{t.title}</span>}>
                  {
                    t.children.map((item, j) => (
                      <Menu.Item key={`${t.type}${j}`} className={location.pathname === (match.url + item.url) ? 'ant-menu-item-selected' : ''}>
                        <Link to={match.url + item.url}>{item.title}</Link>
                      </Menu.Item>
                    ))
                  }
                </SubMenu>
              ))
            }
          </Menu>
        </Sider>
      </div>
    );
  }
}

LeftMenus.propTypes = {
  match: PropTypes.object,
  location: PropTypes.object,
  leftMenus: PropTypes.array
};
