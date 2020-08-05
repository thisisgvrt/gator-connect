import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link
} from "react-router-dom";

import './css/style.css';

import HomepageScreen from './sections/homepage';
import LandingPageScreen from './sections/landingPage'
import MemberScreen from './sections/members';
import CalendarScreen from './sections/calendar';
import MessageScreen from './sections/messages';
import ProfilePageScreen from './sections/profilePage'
import NotificationScreen from './sections/notifications';
import EventsOverviewScreen from './sections/overview';

import { paths } from './data';

const {
  homePagePath,
  landingPagePath,
  profilePagePath,
  membersWithTeamsPath,
  membersWithoutTeamsPath,
  messageScreenPath,
  calendarScreenPath,
  eventsOverviewScreenPath,
  notificationScreenPath
} = paths;

function App(props) {

  const [searchText, setSearchText] = useState(null);

  const [isHomePage, setIsHomePage] = useState(true);

  setInterval(() => {
    window.location.pathname === "/" ? setIsHomePage(true) : setIsHomePage(false)
  }, 200);

  return (
    <Router>
      {/*  
          Flex -> let's us arrange things in a layout
          Flex col -> forces it's children to be in a vertical layout
          justify-between -> maximizes the space between the items
          h-screen and w-screen maximizes the content to fill the mobile screen 
      */}
      <div className="flex flex-col justify-between h-screen w-screen">
        {/* 
          Header will be containing the logo.
        */}
        <header className="navbar-purple px-2 flex flex-row justify-between items-end">
          {
            searchText === null ?  <div className="w-full flex flex-row justify-between items-end"><Link to={landingPagePath}><h4 className="logo text-4xl align-bottom leading-tight tracking-wide">GatorConnect</h4></Link><svg fill="currentColor" className="h-10 w-10 search-logo" viewBox="0 0 20 20" onClick={() => setSearchText("")}><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg></div>
              : <form className="w-full max-w-sm">
                <div className="flex items-end py-1">
                  <input className="appearance-none muted-highlight-color bg-transparent border-none w-full mr-3 py-1 px-2 leading-none focus:outline-none text-xl" type="text" placeholder="Please enter enter the search text" aria-label="Search Text" onChange={e => setSearchText(e.target.value)} value={searchText} />
                  <button className="flex-shrink-0 border-none text-gray-300 text-xl font-extrabold py-1 muted-highlight-color" type="button" onClick={() => setSearchText(null)}>
                    X
                  </button>
                </div>
              </form>
          }
        </header>
        {/* 
          Section will contain the main content.
          the other items (header/footer) will only take the space they need to
          show the logo and icons - so they take very little vertical space.
          flex-grow will make this section to occupy all the available space.
        */}
        <section className="flex-grow overflow-y-auto">
          <Switch>
            <Route exact path={landingPagePath}>
              <LandingPageScreen />
            </Route>
            <Route exact path={homePagePath}>
              <HomepageScreen searchText={searchText} />
            </Route>
            <Route path={membersWithTeamsPath}>
              <MemberScreen classHasTeams={true} searchText={searchText} />
            </Route>
            <Route path={membersWithoutTeamsPath}>
              <MemberScreen classHasTeams={false} searchText={searchText} />
            </Route>
            <Route path={profilePagePath}>
              <ProfilePageScreen />
            </Route>
            <Route path={messageScreenPath}>
              <MessageScreen />
            </Route>
            <Route path={eventsOverviewScreenPath}>
              <EventsOverviewScreen />
            </Route>
            <Route path={calendarScreenPath}>
              <CalendarScreen />
            </Route>
            <Route path={notificationScreenPath}>
              <NotificationScreen />
            </Route>
          </Switch>
        </section>
        {/* 
          Footer will be containing the main navigation icons.
        */}
        {!isHomePage && <footer className="navbar-purple">
          {/* 
            For the next section, we have the change the flex direction to horizontal.
            So, `flex flex-row` are the two classes that will make it happen.
          */}
          <div className="text-gray-200 flex flex-row justify-around">
            <NavLink to={homePagePath} activeClassName="muted-highlight-color">
              <svg className="h-16 w-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>
            </NavLink>
            <NavLink to={profilePagePath} activeClassName="muted-highlight-color">
              <svg className="h-16 w-16" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
            </NavLink>
            <NavLink to={calendarScreenPath} activeClassName="muted-highlight-color">
              <svg className="h-16 w-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" /></svg>
            </NavLink>
            <NavLink to={notificationScreenPath} activeClassName="muted-highlight-color">
              <svg className="h-16 w-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
            </NavLink>
          </div>
        </footer>}
      </div>
    </Router>
  );
}

export default App;