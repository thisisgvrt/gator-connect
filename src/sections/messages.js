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
