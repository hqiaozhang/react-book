import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import Home from '../containers/Home'
import Detail from '../containers/Detail'
import Frame from '../layouts/Frame'

// 使用hashHistory作为前端路由的实现方式
const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Frame}>
      <IndexRoute component={Home} />
      <Route path='/detail/:id' component={Detail} />
    </Route>
  </Router>
)

export default routes