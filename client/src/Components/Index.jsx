import React, { useState, useEffect, useContext } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import SideBarContext from '../Contexts/sideBar/SideBarContext';
import SideBarState from '../Contexts/sideBar/SideBarState';
import NavigationBar from './NavigationBar/index';
import SmallSideBar from './SideBar/SmallSideBar';
import BigSideBar from './SideBar/BigSideBar';

const Index = () => {
  const {isToggled} = useContext(SideBarContext)
  return (
    <React.Fragment>
      <Router>
        <NavigationBar />
        {
          isToggled
          ? <BigSideBar />
          : <SmallSideBar />
        }
        <Switch>
          <main>
            <Route />
            <Route />
            <Route />
            <Route />
            <Route />
          </main>
        </Switch>
      </Router>
    </React.Fragment>
  )
}

export default Index
