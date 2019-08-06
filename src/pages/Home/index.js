import React from 'react'
import { Route } from 'react-router-dom'
import Index from './Index/index.js'
import House from './House'
import News from './News'
import My from './My'
import './index.scss'
// 导入 TabBar 组件
import { TabBar } from 'antd-mobile'
// 封装一个显示tabBar的函数
// 抽取了所有的tabBar中的数据
const itemList = [
  { title: '首页', icon: 'icon-ind', path: '/home' },
  { title: '找房', icon: 'icon-findHouse', path: '/home/house' },
  { title: '资讯', icon: 'icon-infom', path: '/home/news' },
  { title: '我的', icon: 'icon-my', path: '/home/my' }
]
class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // 设置默认高亮 应为地址栏的地址
      selectedTab: this.props.location.pathname
    }
  }

  // 创建tabBar的函数
  renderItem() {
    return itemList.map(item => (
      <TabBar.Item
        title={item.title}
        key={item.title}
        icon={<i className={`iconfont ${item.icon}`} />}
        selectedIcon={<i className={`iconfont ${item.icon}`} />}
        selected={this.state.selectedTab === item.path}
        onPress={() => {
          this.setState({
            selectedTab: item.path
          })
          this.props.history.push(item.path)
        }}
      />
    ))
  }

  render() {
    return (
      <div className="home">
        {/* ----配置路由规则------ */}
        <Route exact path="/home" component={Index} />
        <Route path="/home/house" component={House} />
        <Route path="/home/news" component={News} />
        <Route path="/home/my" component={My} />
        {/* ---配置导航链接---------- */}
        <div className="nav">
          <TabBar
            unselectedTintColor="#888"
            tintColor="#21b97a"
            barTintColor="white"
            noRenderContent={true}
          >
            {/* ---- 调用方法来渲染tabBar---- */}
            {this.renderItem()}
          </TabBar>
        </div>
      </div>
    )
  }
}

export default Home
