// 根组件
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import Home from './pages/Home'
import City from './pages/City'
import Map from './pages/Map'
import NotFined from './pages/404'

class App extends React.Component {
  render() {
    return (
      <Router>
        {/* --------配置 路由的规则--------- */}
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route path="/home" component={Home} />
          <Route path="/city" component={City} />
          <Route path="/map" component={Map} />
          <Route component={NotFined} />
        </Switch>
      </Router>
    )
  }
}

export default App
