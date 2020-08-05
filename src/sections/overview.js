import React from 'react';

function EventsOverviewScreen() {
    return (
        <>
            <span class="events"> Events happening</span>
            <div class="dateBG"></div>
            <span class="date"><b>Today</b></span>

            <div class="Border">
                <div class="greyBox">
                </div>

                <div id="div1" style={{ "top": "-88px", "height": "600px", "position": "absolute" }}>
                    <div id="div2" style={{ "max-height": "100%", "overflow": "scroll", "overflow-x": "hidden"}}>
                        <div class="whiteBox1">
                            <p style={{ "margin-top": "18px", "margin-bottom": "-10px", color: "rgba(47,128,237,1)", "text-align": "center", "font-family": "roboto" }}><b>Gator Groceries</b></p>
                        
                            <pre style={{ "font-weight":"bold","font-size": "15px", "text-align": "center", "font-family": "roboto" }}>{`
    Providing free nutritious food for students to
    take home...
                            `}</pre>
                            <img src="http://www.pngall.com/wp-content/uploads/2016/10/Calendar-Download-PNG.png" width="40" height="40" style={{ "position": "absolute", "left": "70px", "top": "90px", }}></img>
                            <pre style={{ "font-weight":"bold","font-size": "15px", "text-align": "center", "font-family": "roboto" }}>{`
    4th August                  Cesar Chavez,
    2:00 PM - 4:00 PM        Center Plaza Level  `}</pre>
                            <img src="https://cdn.onlinewebfonts.com/svg/img_500834.png" width="25" height="32" style={{ "position": "absolute", "left": "241px", "top": "90px" }}></img>
                            <p style={{ "margin-top": "4px", "font-size": "15px", "text-align": "center", "font-family": "roboto", border: "2px", "border-style": "solid", "border-color": "#FFCF06", "background-color": "#FFCF06" }}><b>Add to Calender</b></p>
                        </div>

                        <div class="whiteBox1">
                            <p style={{ "margin-top": "18px", "margin-bottom": "-10px", color: "rgba(47,128,237,1)", "text-align": "center", "font-family": "roboto" }}><b>Gator Fest</b></p>
                            <pre style={{ "font-weight":"bold","font-size": "15px", "text-align": "center", "font-family": "roboto" }}>{`
    A week-long event for incoming students to 
    integrate with the uni...
                            `}</pre>
                            <img src="http://www.pngall.com/wp-content/uploads/2016/10/Calendar-Download-PNG.png" width="40" height="40" style={{ "position": "absolute", "left":  "70px", "top": "90px", }}></img>
                            <pre style={{ "font-weight":"bold","font-size": "15px", "text-align": "center", "font-family": "roboto" }}>{`
    4th August                  Malcom X Plaza
    1:00 PM - 5:00 PM          `}</pre>
                            <img src="https://cdn.onlinewebfonts.com/svg/img_500834.png" width="25" height="32" style={{ "position": "absolute", "left": "241px", "top": "90px" }}></img>
                            <p style={{ "margin-top": "4px", "font-size": "15px", "text-align": "center", "font-family": "roboto", border: "2px", "border-style": "solid", "border-color": "#FFCF06", "background-color": "#FFCF06" }}><b>Add to Calender</b></p>
                        </div>


                        <div class="whiteBox1">
                            <p style={{ "margin-top": "18px", "margin-bottom": "-10px", color: "rgba(47,128,237,1)", "text-align": "center", "font-family": "roboto" }}><b>Transfer Student Induction</b></p>
                        
                            <pre style={{ "font-weight":"bold","font-size": "15px", "text-align": "center", "font-family": "roboto" }}>{`
    Transfer students will choose their classes 
    under the guidance of dept...
                            `}</pre>
                            <img src="http://www.pngall.com/wp-content/uploads/2016/10/Calendar-Download-PNG.png" width="40" height="40" style={{ "position": "absolute", "left":  "70px", "top": "90px", }}></img>
                            <pre style={{ "font-weight":"bold","font-size": "15px", "text-align": "center", "font-family": "roboto" }}>{`
    4th August                  Jack Adams Hall,
    9:00 AM-11:15 AM           Upper Plaza Level  `}</pre>
                            <img src="https://cdn.onlinewebfonts.com/svg/img_500834.png" width="25" height="32" style={{ "position": "absolute", "left": "241px", "top": "90px" }}></img>
                            <p style={{ "margin-top": "4px", "font-size": "15px", "text-align": "center", "font-family": "roboto", border: "2px", "border-style": "solid", "border-color": "#FFCF06", "background-color": "#FFCF06" }}><b>Add to Calender</b></p>
                        </div>


                        <div class="whiteBox1">
                            <p style={{ "margin-top": "18px", "margin-bottom": "-10px", color: "rgba(47,128,237,1)", "text-align": "center", "font-family": "roboto" }}><b>Hack 2020</b></p>
                        
                            <pre style={{ "font-weight":"bold","font-size": "15px", "text-align": "center", "font-family": "roboto" }}>{`
    Can you build an app in 48 hours? Build one 
    and pitch it against hun...
                            `}</pre>
                            <img src="http://www.pngall.com/wp-content/uploads/2016/10/Calendar-Download-PNG.png" width="40" height="40" style={{ "position": "absolute", "left":  "70px", "top": "90px", }}></img>
                            <pre style={{ "font-weight":"bold","font-size": "15px", "text-align": "center", "font-family": "roboto" }}>{`
    4th August                  Cesar Chavez,
    12:00 PM - 4:00 PM        Center Plaza Level  `}</pre>
                            <img src="https://cdn.onlinewebfonts.com/svg/img_500834.png" width="25" height="32" style={{ "position": "absolute", "left": "241px", "top": "90px" }}></img>
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
