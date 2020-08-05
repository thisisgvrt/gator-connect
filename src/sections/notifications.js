import React from 'react';
import { Link } from 'react-router-dom';
import{ paths } from '../data';

const{
    messageScreenPath,
    eventsOverviewScreenPath

} = paths;

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
                                    Unread message from Jane
      </p>
      <Link to={ messageScreenPath}>
                            <p class="text-xs">
                                Click to View
      </p>
      </Link>
                            </div>
                            <div class="text-sm text-gray-500">
                              
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex bg-blue-200 p-4 mt-1 rounded-lg">
            
                    <div class="flex justify-between w-full">
                        <div class="text-blue-600">
                            <p class="mb-2 font-bold">
                                Unread Message from Chris
      </p>
                        <Link to={ messageScreenPath}>
                            <p class="text-xs">
                                Click to View
      </p>
      </Link>
                        </div>
                        <div class="text-sm text-gray-500">
                           
                        </div>
                    </div>
                </div>
                <p>
            

                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseExample" >
                Expand
</button>
  
</p>
<div class="collapse" id="collapseOne">
  <div class="card card-body">
    
  <div class="flex bg-blue-200 p-4 mt-1 rounded-lg">
                     
                     <div class="flex justify-between w-full">
                         <div class="text-blue-600">
                             <p class="mb-2 font-bold">
                                 Unread Message from Jacky
   </p>
   <Link to={ messageScreenPath}>
                            <p class="text-xs">
                                Click to View
      </p>
      </Link>
                         </div>
                         <div class="text-sm text-gray-500">
                           
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
                                Today: Microbiology Study Group
      </p>
      <Link to={ eventsOverviewScreenPath}>
                            <p class="text-xs">
                                J. Leonard Library @ 9:30 AM
      </p>
      </Link>
                        </div>
                        <div class="text-sm text-gray-500">
                       
                        </div>
                    </div>
                </div>
                

                <div class="flex bg-orange-200 mt-1 rounded-lg p-4">
               
                    <div class="flex justify-between w-full">
                        <div class="text-orange-600">
                            <p class="mb-2 font-bold">
                                Today: Gator Groceries
      </p>
      <Link to={ eventsOverviewScreenPath}>
                            <p class="text-xs">
                                J. Leonard Library @ 2:00 PM
      </p>
      </Link>
                        </div>
                        <div class="text-sm text-gray-500">
                            
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
                               Today: Gator Groceries
 </p>
 <Link to={ eventsOverviewScreenPath}>
                            <p class="text-xs">
                                Bookstore @ 9:00 PM
      </p>
      </Link>
                       </div>
                       <div class="text-sm text-gray-500">
                        
                       </div>
                   </div>
               </div>
</div>
</div>
                
            </div>
          
           

     
    )
}

export default NotificationScreen;