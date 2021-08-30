import React from 'react';
import SideBarState from './Contexts/sideBar/SideBarState'
import SearchState from './Contexts/search/SearchState';
import YouTubeClone from './Components/index'


const App = () => {
  // const {isToggled} = useContext(sideBarContext)

  return (
    <React.Fragment>
      <SearchState>
        <SideBarState>
          <YouTubeClone />
        </SideBarState>
      </SearchState>
    </React.Fragment>
  );
}

export default App;
