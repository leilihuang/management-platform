import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb, Layout } from 'antd';

const { Content } = Layout;

export default class Contents extends Component {
  render () {
    return (
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          {/* <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item> */}
        </Breadcrumb>
        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
          {/* <Route path={`${match.url}/work-bench`} component={WorkBench} /> */}
          {this.props.children}
        </Content>
      </Layout>
    );
  }
}

Contents.propTypes = {
  children: PropTypes.element
};
