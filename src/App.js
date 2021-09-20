import React from 'react';
import SideBarState from './Contexts/sideBar/SideBarState'
import SearchState from './Contexts/search/SearchState';
import YouTubeClone from './Components/index'
import UserState from './Contexts/user/UserState';


const App = () => {

  return (
    <React.Fragment>
      <UserState>
        <SearchState>
          <SideBarState>
            <YouTubeClone />
          </SideBarState>
        </SearchState>
      </UserState>
    </React.Fragment>
  );
}

export default App;
