import React from 'react';
import {
    Link
} from "react-router-dom";



import { paths } from '../data';

const {
  eventsOverviewScreenPath
} = paths;

/* Saloni */
function CalendarScreen() {
    return (
        <html>
            <head>
                <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet" />
                <link href="./prebuild-styles.css" text="text/css" rel="stylesheet" />
            </head>
            <body>

                <span class="day">03
</span>
                <span class="date">August 2020
</span>

                <div class="YourEventsBox">
                    <div class="YourEventsBorder">
                    </div>
                    <span class="YourEvents">Your Events</span>
                    <div class="gatorBG"></div>
                    <span class="GatorFestText"><b>9:00 PM</b> GatorFest</span>
                    <div class="groceriesBG"></div>
                    <span class="GroceriesText"><b>2:00 PM</b> Gator Groceries</span>
                    <div class="studyBG"></div>
                    <span class="studyText"> <b>9:30 AM</b> Study Session @ Library </span>
                </div>

                <div class="ClassScheduleBox">
                    <div class="ClassScheduleBorder">
                    </div>
                    <span class="ClassSched">Class Schedule</span>
                    <div class="philBG"></div>
                    <span class="phil"><b>04:00 PM</b> PHIL 101</span>
                    <div class="cscBG"></div>
                    <span class="csc"><b>01:00 PM</b> CSC 510</span>
                    <div class="mathBG"></div>
                    <span class="math"><b>11:00 AM</b> Math 321</span>
                </div>

                <div class="eventBG"></div>
                <span class="addEvent">Create an event</span>

                <div class="viewAllBG"></div>
                <Link to={eventsOverviewScreenPath}>
                    <span class="viewAll">View All Events</span>
                </Link>

            </body>
        </html>
    )
}

export default CalendarScreen;
