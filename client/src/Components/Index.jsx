import React, { useState, useEffect, useContext } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import SideBarState from '../Contexts/sideBar/SideBarState';
import NavigationBar from './NavigationBar/index';
import SideBar from './SideBar/Index'

const Index = () => {
  return (
    <React.Fragment>
      <Router>
        <SideBarState>
          <NavigationBar />
          <SideBar />
        </SideBarState>
        <Switch>

        </Switch>
      </Router>
    </React.Fragment>
  )
}

export default Index
