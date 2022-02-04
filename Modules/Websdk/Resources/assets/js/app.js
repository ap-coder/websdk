

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

 import React from 'react'
 import ReactDOM from 'react-dom'
 import { BrowserRouter } from 'react-router-dom'
 import MyApp from './MyApp'
 import reportWebVitals from './reportWebVitals'
 import Context from './Context'
 
 ReactDOM.render(
   <React.StrictMode>
     <BrowserRouter>
       <Context>
         <MyApp />
       </Context>
     </BrowserRouter>
   </React.StrictMode>,
   document.getElementById('codecorpdemo')
 )
 // If you want to start measuring performance in your app, pass a function
 // to log results (for example: reportWebVitals(console.log))
 // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
 reportWebVitals()
