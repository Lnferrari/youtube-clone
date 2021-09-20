import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import NavigationBar from './NavigationBar/index';
import SideBar from './SideBar/index'
import BodyContent from './BodyContent/index'

const Index = () => {
  
  return (
    <React.Fragment>
      <Router>
        <NavigationBar />
        <SideBar />
        <Switch>
          <BodyContent />
        </Switch>
      </Router>
    </React.Fragment>
  )
}

export default Index
