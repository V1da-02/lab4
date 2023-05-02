import {  Space } from 'antd';
import { FileOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Col, Layout, Menu, MenuProps, Row } from 'antd';
import Card from 'antd/es/card/Card';
import { Content, Header } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import React, { useState } from 'react';
import './App.css';
import './car'
import Car from './car';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];

const carCards: Car[] = [
  {
    producator: 'ULIM',
  model: '737',
  capacitate: 3.475,
  nivelCombustibil: 7.32,
  esteInZbor: false,
    image: "/ulim.jpg"
  },
  {
    producator: 'ASEM',
    model: 'A320',
    capacitate: 2.325,
    nivelCombustibil: 7.12,
    esteInZbor: true,
    image: "/asem.jpg"
  },  
  {
    producator: 'UTM',
    model: 'E175',
    capacitate: 4.231,
    nivelCombustibil: 8.21,
    esteInZbor: false,
    image: "/umt.jpg"
  }
]
function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [title, setTitle] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [cards, setCards] = useState<{
    title: string
    name: string
    email: string
    password: string
  }[]>([])


  return (
    <div className="App">
     <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value: any) => setCollapsed(value)}>
        <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout className="site-layout">
        <Header style={{ padding: 0, background: "#93949B " }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Ovidiu</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, minHeight: 360, background: "#93949B " }}>
            <form onSubmit={(e) => {
              e.preventDefault()
              console.log('Date: ',title, name, email, password)
              setCards([...cards, {
                title,
                name,
                email,
                password
              }])
            }}>
               <Row style={{
                marginBottom: "20px"
              }}>
                <Col span={6}>
                <label>
                  Titlu card:
                  <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
                </label>
                </Col>
              </Row>

              <Row style={{
                marginBottom: "20px"
              }}>
                <Col span={6}>
                <label>
                  Nume:
                  <input type="text" value={name} onChange={e => setName(e.target.value)} />
                </label>
                </Col>
              </Row>

                <Row style={{
                marginBottom: "20px"
              }}>
                <Col span={6}>
                <label>
                  Email:
                  <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
                </label>
                </Col>
                </Row>

              <Row style={{
                marginBottom: "20px"
              }}>
              <Col span={6}>
                <label>
                Password:
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
              </label>
                </Col>
              </Row>

              <Row>
                <Col span={6}>
                  <button>Submit</button>
                </Col>
              </Row>
            </form>
            <Space direction="horizontal" size={16}>
            {cards.map(card => (
              <Card title={card.title} style={{ width: 300, marginTop: "20px" }}>
                <p>Nume: {card.name}</p>
                <p>Email: {card.email}</p>
                <p>Password: {card.password}</p>
              </Card> 
            ))}
            
            <Row justify="center" gutter={16} >
              {carCards.map((car, index) => (
                <Col key={index} span={6}>
                     <Card title='' style={{ marginTop: "60px" }}>
                    <img src={car.image} style={{width: 100}} />
                    <p>Universitate: {car. producator}</p>
                   
                    <p>Nr. studenti: {car.capacitate}</p>
                    <p>Medie nota: {car.nivelCombustibil}</p>
                   
                    
                  </Card> 
                </Col>
              ))}
            </Row>
</Space>

          </div>
        </Content>
      </Layout>
    </Layout>
    
    </div>
  );
}

export default App;