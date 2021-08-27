import React from 'react';
import SideBarState from './Contexts/sideBar/SideBarState'
import YouTubeClone from './Components/Index'


const App = () => {
  // const {isToggled} = useContext(sideBarContext)

  return (
    <React.Fragment>
      <SideBarState>
        <YouTubeClone />
      </SideBarState>
    </React.Fragment>
  );
}

export default App;
