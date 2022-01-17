import React from "react"
import Navbar from './Components/Navbar'
import BreadCrumbs from './Components/BreadCrumbs'
import LeftSide from './Components/LeftSide'
import MobileAd from './Components/MobileAd'
import DesktopAd from './Components/DesktopAd'
import { Provider } from 'react-redux'
import { Row } from 'react-bootstrap';
import { persistor, store } from "./store"

function App() {
  return (
  <Provider store={store}>
        <Row>
           <Navbar/>
        </Row>
        <Row>
           <BreadCrumbs/>
        </Row>
        <Row className='mt-3 p-2'>
           <div className='col-md-3's>
               <LeftSide/> 
           </div>
           <div className='col-md-6'>
               <DesktopAd/> 
           </div>
           <div className='col-md-3'>
               <MobileAd/> 
           </div>
        </Row>
   </Provider>
  );
}

export default App;
