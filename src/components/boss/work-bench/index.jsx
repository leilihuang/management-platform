import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button, Table } from 'antd';
import './index.scss';

const FormItem = Form.Item;

class WorkBench extends Component {
  constructor (props) {
    super(props);
    this.state = {
      dataSource: [{
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号'
      }, {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号'
      }],
      columns: [{
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
      }, {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
      }, {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
      }]
    };
  }
  render () {
    const { getFieldDecorator } = this.props.form;
    const { dataSource, columns } = this.state;
    return (
      <div className='work-bench'>
        <Form layout='inline' onSubmit={this.handleSubmit}>
          <FormItem
            label='流程编号'
          >
            {getFieldDecorator('processNo')(
              <Input placeholder='请输入流程编号' />
            )}
          </FormItem>
          <FormItem
            label='流程名称'
          >
            {getFieldDecorator('processName')(
              <Input placeholder='请输入流程名称' />
            )}
          </FormItem>
          <FormItem>
            <Button
              type='primary'
              htmlType='submit'
            >
            查找流程
            </Button>
          </FormItem>
        </Form>

        <Table columns={columns} dataSource={dataSource} className='top40' />
      </div>
    );
  }
}

WorkBench.propTypes = {
  form: PropTypes.object
};

export default Form.create()(WorkBench);
