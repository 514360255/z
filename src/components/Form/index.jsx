import React from 'react';
import {Button, Col, DatePicker, Form, Input, Row, Select, Space} from "antd";
import './index.less';
import icon6 from '../../assets/icon6.png';
import moment from 'moment';

export default () => {
  const [form] = Form.useForm();
  return(
    <>
      <Form form={form}>
        <Row className='form-container'>
          <Col span={12} className='form-item'>
            <span className='label'>用人单位：</span>
            <Space>
              <Form.Item>
                <Select defaultValue={1} placeholder='--选择--' options={[{label: '上海俊鹏建筑劳务有限公司', value: 1}]} />
              </Form.Item>
              <Space>
                <span className='title'>劳务队长</span>
                <Form.Item>
                  <Select placeholder='--选择--' options={[]} />
                </Form.Item>
              </Space>
            </Space>
          </Col>
          <Col span={12} className='form-item'>
            <span className='label'>人员：</span>
            <Space>
              <span className='title'>姓名</span>
              <Input style={{width: 50}}/>
              <span className='title'>身份证</span>
              <Input  style={{width: 120}}/>
              <Button className='btn'>读卡</Button>
            </Space>
          </Col>
          <Col span={12} className='form-item'>
            <span className='label'>主要工种：</span>
            <Form.Item>
              <Select placeholder='--选择--' options={[]} />
            </Form.Item>
          </Col>
          <Col span={12} className='form-item'>
            <span className='label'>进场状态：</span>
            <Form.Item>
              <Select placeholder='--选择--' options={[]} />
            </Form.Item>
          </Col>
          <Col span={12} className='form-item form-date'>
            <span className='label'>进场日期：</span>
            <Space>
              <Form.Item>
                <DatePicker defaultValue={moment('2018-06-01')} />
              </Form.Item>
              <span className='title'>--</span>
              <Form.Item>
                <DatePicker />
              </Form.Item>
            </Space>
          </Col>
          <Col span={12} className='form-item form-date'>
            <span className='label'>退场日期：</span>
            <Space>
              <Form.Item>
                <DatePicker />
              </Form.Item>
              <span className='title'>--</span>
              <Form.Item>
                <DatePicker />
              </Form.Item>
            </Space>
          </Col>
          <Col span={24} className='form-item form-btn'>
            <Button className='btn'>
              <img src={icon6} alt=""/>
              查询
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  )
}
