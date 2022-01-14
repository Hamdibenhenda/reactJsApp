import Navbar from './Components/Navbar'
import BreadCrumbs from './Components/BreadCrumbs'
import LeftSide from './Components/LeftSide'
import MobileAd from './Components/MobileAd'
import DesktopAd from './Components/DesktopAd'
import { Row } from 'react-bootstrap';

function App() {
  return (
    <div>
        <Row>
           <Navbar/>
        </Row>
        <Row>
           <BreadCrumbs/>
        </Row>
        <Row>
           <div className='col-md-3's>
               <LeftSide/> 
           </div>
           <div className='col-md-5'>
               <DesktopAd/> 
           </div>
           <div className='col-md-4'>
               <MobileAd/> 
           </div>
        </Row>

    </div>
  );
}

export default App;
