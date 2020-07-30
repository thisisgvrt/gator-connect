import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './css/style.css';

import HomepageScreen from './sections/homepage';
import MemberScreen from './sections/members';
import CalendarScreen from './sections/calendar';
import MessageScreen from './sections/messages';
import NotificationScreen from './sections/notifications';

const homePagePath = "/";
const memberScreenPath = "/members";
const messageScreenPath = "/messages";
const calendarScreenPath = "/calendar";
const notificationScreenPath = "/notifications";

function App() {
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
        <header className="bg-gray-900 px-2">
          <h4 className="logo align-bottom leading-tight">GatorConnect</h4>
        </header>
        {/* 
          Section will contain the main content.
          the other items (header/footer) will only take the space they need to
          show the logo and icons - so they take very little vertical space.
          flex-grow will make this section to occupy all the available space.
        */}
        <section className="flex-grow">
          <Switch>
            <Route exact path={homePagePath}>
              <HomepageScreen />
            </Route>
            <Route path={memberScreenPath}>
              <MemberScreen />
            </Route>
            <Route path={messageScreenPath}>
              <MessageScreen />
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
        <footer className="bg-gray-900">
          {/* 
            For the next section, we have the change the flex direction to horizontal.
            So, `flex flex-row` are the two classes that will make it happen.
          */}
          <div className="text-gray-200 flex flex-row justify-around">
            <Link to={homePagePath}>
              <svg className="h-12 w-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>
            </Link>
            <Link to={messageScreenPath}>
              <svg className="h-12 w-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clip-rule="evenodd" /></svg>
            </Link>
            <Link to={calendarScreenPath}>
              <svg className="h-12 w-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" /></svg>
            </Link>
            <Link to={notificationScreenPath}>
              <svg className="h-12 w-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" /></svg>
            </Link>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;