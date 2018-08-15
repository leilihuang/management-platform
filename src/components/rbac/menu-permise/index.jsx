import React, { Component } from 'react';
import { Tree } from 'antd';

const TreeNode = Tree.TreeNode;

const treeData = [{
  title: 'BOSS',
  key: '0-0',
  children: [
    {
      title: '工作台',
      key: '0-0-0',
      children: [
        { title: '我的工作台', key: '0-0-0-0' },
        { title: '个人信息', key: '0-0-0-1' },
      ],
    }, {
      title: '系统管理',
      key: '0-0-1',
      children: [
        { title: '系统用户管理', key: '0-0-1-0' },
        { title: '流程配置管理', key: '0-0-1-1' },
        { title: '流程运营管理', key: '0-0-1-2' },
      ],
    }],
},
{
  title: 'ECM',
  key: '0-1',
  children: [
    {
      title: '智能柜订单',
      key: '0-1-0',
      children: [
        { title: '订单列表', key: '0-1-0-0' },
        { title: '订单详情', key: '0-1-0-1' },
      ],
    },
    {
      title: '促销管理',
      key: '0-1-1',
      children: [
        { title: '限时优惠', key: '0-1-1-0' },
        { title: '满就送', key: '0-1-1-1' },
        { title: '组合促销', key: '0-1-1-2' },
      ],
    },
  ]
}];

export default class MenuPermise extends Component {
    state = {
      expandedKeys: ['0-0-0', '0-0-1'],
      autoExpandParent: true,
      checkedKeys: ['0-0-0'],
      selectedKeys: [],
    }

      onExpand = (expandedKeys) => {
        console.log('onExpand', expandedKeys);
        // if not set autoExpandParent to false, if children expanded, parent can not collapse.
        // or, you can remove all expanded children keys.
        this.setState({
          expandedKeys,
          autoExpandParent: false,
        });
      }

      onCheck = (checkedKeys) => {
        console.log('onCheck', checkedKeys);
        this.setState({ checkedKeys });
      }

      onSelect = (selectedKeys, info) => {
        console.log('onSelect', info);
        this.setState({ selectedKeys });
      }

      renderTreeNodes = (data) => {
        return data.map((item) => {
          if (item.children) {
            return (
              <TreeNode title={item.title} key={item.key} dataRef={item}>
                {this.renderTreeNodes(item.children)}
              </TreeNode>
            );
          }
          return <TreeNode {...item} />;
        });
      }

      render () {
        return (
          <Tree
            checkable
            onExpand={this.onExpand}
            expandedKeys={this.state.expandedKeys}
            autoExpandParent={this.state.autoExpandParent}
            onCheck={this.onCheck}
            checkedKeys={this.state.checkedKeys}
            onSelect={this.onSelect}
            selectedKeys={this.state.selectedKeys}
          >
            {this.renderTreeNodes(treeData)}
          </Tree>
        );
      }
}
