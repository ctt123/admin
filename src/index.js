import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import 'antd/dist/antd.css';
// import App from './App';
import Routes from './router';
import registerServiceWorker from './registerServiceWorker';
// import {Layout} from 'antd';
import {Layout, Menu, Icon} from 'antd';
import SliderBar from './components/SlideBar/SliderBar'
import {Link} from 'react-router-dom';


const {Header, Footer, Sider, Content}=Layout


const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const Item = Menu.Item;


// const {Header, Sider, Content} = Layout;

class SlideBar extends React.Component {
    state = {
        collapsed: false,
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        return (
            <Layout>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                >
                    <div className="logo"/>
                    <Menu
                        onClick={this.handleClick}
                        // style={{width: 240}}
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                        theme="dark"
                    >
                        <SubMenu key="subl" title={<span><Icon type="mail"/><span>导航1</span></span>}>
                            <MenuItemGroup key="g1" title="Item 1">
                                <Item key="1">
                                    <Link to="/Home">选项1</Link>
                                </Item>
                                <Item key="2">选项2</Item>
                            </MenuItemGroup>
                            <MenuItemGroup key="g2" title="Item 2">
                                <Item key="3">选项3</Item>
                                <Item key="4">选项4</Item>
                            </MenuItemGroup>
                        </SubMenu>

                        <SubMenu key="sub2" title={<span><Icon type="appstore"/><span>导航2</span></span>}>
                            <Item key="5">选项5</Item>
                            <Item key="6">选项6</Item>
                            <SubMenu key="sub3" title="Submenu">
                                <Item key="7">选项7</Item>
                                <Item key="8">选项8</Item>
                            </SubMenu>
                        </SubMenu>

                        <SubMenu key="sub4" title={<span><Icon type="setting"/><span>导航3</span></span>}>
                            <Item key="9">选项9</Item>
                            <Item key="10">选项10</Item>
                            <Item key="11">选项11</Item>
                            <Item key="12">选项12</Item>
                        </SubMenu>

                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{background: '#fff', padding: 0}}>
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                    </Header>
                    <Content style={{margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280}}>
                        Content
                    </Content>
                </Layout>
            </Layout>
        );
    }
}
//
// const App = (
//     <div>
//         <Header>ddd</Header>
//         <Layout>
//             <Sider>{SliderBar}</Sider>
//             <Content><Routes/></Content>
//         </Layout>
//
//     </div>
// )

ReactDOM.render(
    <SlideBar></SlideBar>,
    document.getElementById('root'));
// registerServiceWorker();
