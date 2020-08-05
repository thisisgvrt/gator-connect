import React from 'react';

/* Tania */
function NotificationScreen() {

    return (
     
            <div className = "border-solid border-8 border-gray-100 rounded-lg">
                <div class="overflow-x-auto">
                    <div class="flex bg-blue-200 p-4 rounded-lg ">
                        <div class="mr-4">
                        <div class="flex bg-blue-200 p-4 rounded-b-lg">
                    <div class="mr-4">
                        <div class="h-10 w-10 text-white bg-blue-600 rounded-full flex justify-center items-center">
                            <i class="material-icons">!</i>
                        </div>
                    </div>
                    <div class="flex justify-between w-full">
                        <div class="text-blue-600">
                            <p class="mb-2 font-bold">
                                Notifications
      </p>
                        </div>
                     
                    </div>
                </div>
         </div></div>



                    <div class="flex bg-blue-200 p-4 mt-1 rounded-lg">
                     
                        <div class="flex justify-between w-full">
                            <div class="text-blue-600">
                                <p class="mb-2 font-bold">
                                    SFSU Student Government posted an update
      </p>
                                <p class="text-xs">
                                    <a>Click to view</a>
      </p>
                            </div>
                            <div class="text-sm text-gray-500">
                                <p>x</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex bg-blue-200 p-4 mt-1 rounded-lg">
            
                    <div class="flex justify-between w-full">
                        <div class="text-blue-600">
                            <p class="mb-2 font-bold">
                                Event Milk and Bookies date and time was changed by host
      </p>
                            <p class="text-xs">
                                Now 9/3/2020 @ 5:30 PM
      </p>
                        </div>
                        <div class="text-sm text-gray-500">
                            <p>x</p>
                        </div>
                    </div>
                </div>
                <p>

                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" >
                Expand
</button>
  
</p>
<div class="collapse" id="collapseExample">
  <div class="card card-body">
    
  <div class="flex bg-blue-200 p-4 mt-1 rounded-lg">
                     
                     <div class="flex justify-between w-full">
                         <div class="text-blue-600">
                             <p class="mb-2 font-bold">
                                 Pending Invitation to join SFSU CS Club Group
   </p>
                             <p class="text-xs">
                                 <a>Accept/Decline</a>
   </p>
                         </div>
                         <div class="text-sm text-gray-500">
                             <p>x</p>
                         </div>
                     </div>
                 </div>
  </div>
</div>
              {/* <html lang = "en">
                  <head>
                      <meta charset = "utf-8">
                          <link rel="stylesheet" href="style.css">

                          </link>

                      </meta>
                  </head>
                  <body>
                      <div class="container">
                          <button class="Accordion">Click to expand</button>
                          <div class="accordion-content">
                              <p>
                                  "something here"
                              </p>
                          </div>
                      </div>

                  </body>
              </html> */}
    
                <div class="flex bg-orange-200 p-4 mt-2 rounded-lg">
                <div class="flex bg-orange-200 p-4 ">
                    <div class="mr-4">
                        <div class="h-10 w-10 text-white bg-orange-600 rounded-full flex justify-center items-center">
                            <i class="material-icons">?</i>
                        </div>
                    </div>
                    <div class="flex justify-between w-full">
                        <div class="text-orange-600">
                            <p class="mb-2 font-bold">
                                Reminders
      </p>
        
                        </div>
                        <div class="text-sm text-gray-500">
                            
                        </div>
                    </div>
                </div>

      </div>

                <div class="flex bg-orange-200 mt-1 rounded-lg p-4">
              
                    <div class="flex justify-between w-full">
                        <div class="text-orange-600">
                            <p class="mb-2 font-bold">
                                Today: Resume Builder Workshop
      </p>
                            <p class="text-xs">
                                <a>J. Leonard Library @ 1:15 PM</a>
      </p>
                        </div>
                        <div class="text-sm text-gray-500">
                            <span>x</span>
                        </div>
                    </div>
                </div>
                

                <div class="flex bg-orange-200 mt-1 rounded-lg p-4">
               
                    <div class="flex justify-between w-full">
                        <div class="text-orange-600">
                            <p class="mb-2 font-bold">
                                Today: Microbiology Study Group
      </p>
                            <p class="text-xs">
                                <a>Thornton Hall 220 @ 5:00 PM</a>
      </p>
                        </div>
                        <div class="text-sm text-gray-500">
                            <span>x</span>
                        </div>
                    </div>
                </div>

                
                <p>

                

  {/* <div class = "border-solid border-8 border-orange-500 rounded-lg">
    <div class ="text-orange-300">
      Click to expand 
  </div>
  </div> */}

<button class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" >
                Expand
</button>
</p>
<div class="collapse" id="collapseExample">
<div class="card card-body">
  
<div class="flex bg-orange-200 p-4 mt-1 rounded-lg">
                   
                   <div class="flex justify-between w-full">
                       <div class="text-orange-600">
                           <p class="mb-2 font-bold">
                               Pending Invitation to join SFSU CS Club Group
 </p>
                           <p class="text-xs">
                           <a>Accept/Decline</a>
 </p>
                       </div>
                       <div class="text-sm text-gray-500">
                           <p>x</p>
                       </div>
                   </div>
               </div>
</div>
</div>
                
            </div>
          
           

     
    )
}

export default NotificationScreen;