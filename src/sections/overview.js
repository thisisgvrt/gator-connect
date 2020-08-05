import React from 'react';

function EventsOverviewScreen() {
    return (
        <>
            <span class="events"> Events on</span>
            <div class="dateBG"></div>
            <span class="date"><b>3rd Aug, 2020</b></span>

            <div class="Border">
                <div class="greyBox">
                </div>

                <div id="div1" style={{ "top": "-88px", "height": "600px", "position": "absolute" }}>
                    <div id="div2" style={{ "max-height": "100%", "overflow": "scroll" }}>
                        <div class="whiteBox1">
                            <p style={{ "margin-top": "18px", "margin-bottom": "-10px", color: "rgba(47,128,237,1)", "text-align": "center", "font-family": "roboto" }}><b>Gator Groceries</b></p>
                            <pre style={{ "font-size": "15px", "text-align": "center", "font-family": "roboto" }}><b>Providing free nutritious food for students to
        take home</b></pre>
                            <img src="calender.jpg" width="40" height="40" style={{ "position": "absolute", "left": "50px", "top": "70px", }}></img>
                            <pre style={{ "text-align": "left", "margin-top": "33px", "font-size": "15px", "font-family": "roboto" }}>
                                <b>
                                    4th August                              Cesar Chavez,
           2:00 PM - 4:00 PM                  Center Plaza Level</b></pre>
                            <img src="location.png" width="25" height="40" style={{ "position": "absolute", "left": "250px", "top": "70px" }}></img>
                            <p style={{ "margin-top": "4px", "font-size": "15px", "text-align": "center", "font-family": "roboto", border: "2px", "border-style": "solid", "border-color": "#FFCF06", "background-color": "#FFCF06" }}><b>Add to Calender</b></p>
                        </div>

                        <div class="whiteBox1">
                            <p style={{ "margin-top": "18px", "margin-bottom": "-10px", color: "rgba(47,128,237,1)", "text-align": "center", "font-family": "roboto" }}><b>Gator Fest</b></p>
                            <pre style={{ "font-size": "15px", "text-align": "center", "font-family": "roboto" }}><b>A week-long event for incoming students to
        integrate with the uni..</b></pre>
                            <img src="calender.jpg" width="40" height="40" style={{ "position": "absolute", left: "50px", top: "70px" }}></img>
                            <pre style={{ "text-align": "left", "margin-top": "33px", "font-size": "15px", "font-family": "roboto" }}>
                                <b>
                                    4th August                              Malcom X Plaza
           1:00 PM - 5:00 PM                  </b></pre>
                            <img src="location.png" width="25" height="40" style={{ "position": "absolute", "left": "250px", "top": "70px" }}></img>
                            <p style={{ "margin-top": "4px", "font-size": "15px", "text-align": "center", "font-family": "roboto", border: "2px", "border-style": "solid", "border-color": "#FFCF06", "background-color": "#FFCF06" }}><b>Add to Calender</b></p>
                        </div>

                        <div class="whiteBox1">
                            <p style={{ "margin-top": "18px", "margin-bottom": "-10px", color: "rgba(47,128,237,1)", "text-align": "center", "font-family": "roboto" }}><b>Transfer Student Induction</b></p>
                            <pre style={{ "font-size": "15px", "text-align": "center", "font-family": "roboto" }}><b>Transfer students will choose their classes
        under the guidance of dept.</b></pre>
                            <img src="calender.jpg" width="40" height="40" style={{ "position": "absolute", "left": "50px", "top": "70px" }}></img>
                            <pre style={{ "text-align": "left", "margin-top": "33px", "font-size": "15px", "font-family": "roboto" }}>
                                <b>
                                    4th August                              Jack Adams Hall
           9:00 AM-11:15 AM                       Upper Plaza Level</b></pre>
                            <img src="location.png" width="25" height="40" style={{ "position": "absolute", left: "250px", top: "70px" }}></img>
                            <p style={{ "margin-top": "4px", "font-size": "15px", "text-align": "center", "font-family": "roboto", border: "2px", "border-style": "solid", "border-color": "#FFCF06", "background-color": "#FFCF06" }}><b>Add to Calender</b></p>
                        </div>

                        <div class="whiteBox1">
                            <p style={{ "margin-top": "18px", "margin-bottom": "-10px", color: "rgba(47,128,237,1)", "text-align": "center", "font-family": "roboto" }}><b>Hack 2020</b></p>
                            <pre style={{ "font-size": "15px", "text-align": "center", "font-family": "roboto" }}><b>Can you build an app in 48 hours? Build one
        and pitch it against hun..</b></pre>
                            <img src="calender.jpg" width="40" height="40" style={{ "position": "absolute", "left": "50px", "top": "70px" }}></img>
                            <pre style={{ "text-align": "left", "margin-top": "33px", "font-size": "15px", "font-family": "roboto" }}>
                                <b>
                                    4th August                              Cesar Chavez,
           12:00 PM - 4:00 PM                  Center Plaza Level</b></pre>
                            <img src="location.png" width="25" height="40" style={{ "position": "absolute", left: "250px", top: "70px" }}></img>
                            <p style={{ "margin-top": "4px", "font-size": "15px", "text-align": "center", "font-family": "roboto", border: "2px", "border-style": "solid", "border-color": "#FFCF06", "background-color": "#FFCF06" }}><b>Add to Calender</b></p>
                        </div>

                        <div class="whiteBox2">
                            <p style={{ "font-size": "15px", "margin-top": "20px", "margin-bottom": "-10px", "color": "rgba(47,128,237,1)", "text-align": "center", "font-family": "roboto" }}><b>End of List</b></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EventsOverviewScreen;