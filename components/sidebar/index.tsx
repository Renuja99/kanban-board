import React from 'react'
import { Home2, TaskSquare, Diagram, LampCharge, Notification, Setting2 } from 'iconsax-react'

const Sidebar  = () =>{
    return (
        <div className="hidden lg:block relative z-50">
          <div className="fixed lg:hidden inset-0 bg-gray-800 opacity-10"></div>
          <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-3/4 lg:w-80 sm:max-w-xs pt-6 pb-8 bg-white border-r overflow-y-auto">
            <div className="flex w-full items-center px-6 pb-6 mb-6 lg:border-b border-blue-50">
              <a className="flex text-xl font-semibold" href="#">
                <img className="h-8" src="https://code94labs.com/wp-content/uploads/2022/09/1604514293650_LOGO-F-1024x1024.png" alt="" width="auto" />
                 <div>Code94 Labs</div>
              </a>
            </div>
            <div className="px-4 pb-6">
              <ul className="mb-8 text-sm font-medium">
              <li>
                  <a className="flex items-center pl-3 py-3 pr-2 text-gray-500 mb-3 bg-[#f6f6f6] hover:bg-indigo-50 rounded" href="#">
                  <Home2 className='mx-2'/>
                    <span>Home</span>
                  </a>
                </li>
                <li>
                  <a className="flex items-center pl-3 py-3 pr-4 text-white bg-indigo-500 rounded" href="#">
                    <TaskSquare className='mx-2'/>
                    <span>Tasks</span>
                  </a>
                </li>
                <li>
                  <a className="flex items-center pl-3 py-3 pr-2 mt-3 bg-[#f6f6f6] text-gray-500   hover:bg-indigo-50 rounded" href="#">
                  <Diagram className='mx-2'/>
                    <span>Report</span>
                  </a>
                </li> 
                <li>
                  <a className="flex items-center pl-3 py-3 pr-2 mt-3 bg-[#f6f6f6] text-gray-500 hover:bg-indigo-50 rounded" href="#">
                  <LampCharge className='mx-2'/>
                    <span>Insights</span>
                  </a>
                </li>  
                <li>
                  <a className="flex items-center pl-3 py-3 pr-2 mt-3 bg-[#f6f6f6] text-gray-500 hover:bg-indigo-50 rounded" href="#">
                  <Notification className='mx-2'/>
                    <span>Inbox</span>
                  </a>
                </li>  
                <li>
                  <a className="flex items-center pl-3 py-3 pr-2 mt-3 bg-[#f6f6f6] text-gray-500 hover:bg-indigo-50 rounded" href="#">
                  <Setting2 className='mx-2'/>
                    <span>Settings</span>
                  </a>
                </li>        
              </ul>
              
              
            </div>
          </nav>
        </div>
    )
}


export default Sidebar