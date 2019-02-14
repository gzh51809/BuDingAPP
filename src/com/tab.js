import { TabBar } from 'antd-mobile';
import React from 'react';
import './css/tab.css';
import {withRouter} from 'react-router-dom';

class TabBarExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: false,
      fullScreen: false,
      // imglist: { a: require('./img/tab-1.jpg'), b: require('./img/tab-11.jpg') },
      
    };
  }

  render() {
    let {history,match} =this.props;
    return (
      <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : {
        height: '400',
        position: 'fixed',
        bottom: '0',
        left: '0',
        width: '100%'
      }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#FF5A00"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            selected={this.props.match.path === '/home'}
            title="首页"
            key="Life"
            icon={<div className="tab1"
            />
            }
            selectedIcon={<div className="tab11"
            />
            }
            onPress={() => {
              history.push('/home')
            }}
            data-seed="logId"
          >
          </TabBar.Item>
          <TabBar.Item
            selected={this.props.match.path === '/detail'}
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
              />
            }
            title="发现"
            key="Koubei"
            onPress={() => {
              history.push('/detail')
            }}
            data-seed="logId1"
          >
          </TabBar.Item>
          <TabBar.Item
          selected={this.props.match.path === '/app'}
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
              />
            }
            title="我的"
            key="Friend"
            onPress={() => {
              history.push('/app')
            }}
          >
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

TabBarExample = withRouter(TabBarExample)

export default TabBarExample;