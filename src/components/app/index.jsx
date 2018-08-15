import React, { Component } from 'react';

import { Layout } from 'antd';
import Heads from './child/head';
import LeftMenu from './child/left-menu';
import Content from './child/content';

import './index.scss';

export default class App extends Component {
  render () {
    return (
      <Layout>
        <Heads {...this.props} />
        <Layout>
          <LeftMenu {...this.props} />
          <Content {...this.props} />
        </Layout>
      </Layout>
    );
  }
}
