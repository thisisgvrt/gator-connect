import React from "react";
import { MainContainer, Footer } from "../css/message";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faChevronLeft,
  faChevronCircleDown,
  faEllipsisV,
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import { paths } from '../data';

const { membersWithTeamsPath } = paths;

function MessageScreen() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <MainContainer>
        <nav>
          <Link to={membersWithTeamsPath}>
            <button>
              <FontAwesomeIcon
                icon={faChevronLeft}
                color="rgba(85,19,126)"
                size="2x"
              />
            </button>
          </Link>
          <div className="hashtag">Team 01</div>
          <button>
            <FontAwesomeIcon
              icon={faEllipsisV}
              color="rgba(0,0,0,0.5)"
              size="2x"
            />
          </button>
        </nav>
<br></br>
        <button class="bg-purple-900 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" >
                Key Messages
</button>

<div class="collapse" id="collapseExample">
<div class="card card-body">
<div className="messages">
  <br></br>
<div class="h-10 w-10 mr-2 text-white bg-yellow-400 rounded-full flex justify-center items-center">
                            <i class="material-icons"><svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></i>
                        </div>
          <div>
            <h2>
              
               M2 is due Friday @ 11:59 PM 
            </h2>
            
          </div>
        </div>

        <div className="messages">
        <div class="h-10 w-10 mr-2 text-white bg-yellow-400 rounded-full flex justify-center items-center">
                            <i class="material-icons"><svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></i>
                        </div>
       
          <div>
          
            <h2>
              Team 01 Weekly Meeting is Sat @ 10 AM
            </h2>
            
          </div>
        </div>

</div>
</div>


        <div className="messages">
          <img src="https://cdn0.iconfinder.com/data/icons/set-ui-app-android/32/8-512.png"></img>
          <div>
            <h2>
              Chris <span className="time">9:00 pm</span>
            </h2>
            <p> Are there any online tutorial?</p>
          </div>
        </div>

        <div className="messages">
          <img src="https://cdn0.iconfinder.com/data/icons/set-ui-app-android/32/8-512.png"></img>
          <div>
            <h2>
              Jane <span className="time">10:00 pm</span>
            </h2>

            <p> Yes, there are few of them.</p>
          </div>
        </div>
        <div className="messages">
          <img src="https://cdn0.iconfinder.com/data/icons/set-ui-app-android/32/8-512.png"></img>
          <div>
            <h2>
              Evan <span className="time">11:00 pm</span>
            </h2>

            <p> Has anyone finished their project?</p>
          </div>
        </div>
        <div className="messages">
          <img src="https://cdn0.iconfinder.com/data/icons/set-ui-app-android/32/8-512.png"></img>
          <div>
            <h2>
              Mark <span className="time">1:00 pm</span>
            </h2>
            <p> I just started on mine </p>
          </div>
        </div>
        <div className="messages">
          <img src="https://cdn0.iconfinder.com/data/icons/set-ui-app-android/32/8-512.png"></img>
          <div>
            <h2>
              Jacky <span className="time">2:00 pm</span>
            </h2>
            <p> We should all get on Zoom for discussion. </p>
          </div>
        </div>
        <div className="messages">
          <img src="https://cdn0.iconfinder.com/data/icons/set-ui-app-android/32/8-512.png"></img>
          <div>
            <h2>
              Ron <span className="time">2:10 pm</span>
            </h2>
            <p> Sounds Good 👍 </p>
          </div>
        </div>
      </MainContainer>
      <Footer>
        <input type="message" placeholder="Message to Team 01" />
        <button className="btn">Send</button>
      </Footer>
    </div>
  );
}

export default MessageScreen;
