import React, { useState, useRef } from "react";
import PropTypes from 'prop-types'
import { FocusedImage, FocusPicker, Focus } from "image-focus";
import { connect, useSelector } from "react-redux";
import ZoomSlider from "./ZoomSlider";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/fontawesome-free-solid';
import { Row } from "react-bootstrap";

import {

  changePictureMobile,
  changePicturePositionMobile,
} from "../store/pictures/actions"


const ImageUploaderMobile = props => {
  // const dispatch = useDispatch();
  const fileInput = useRef(null);
  const [image, setImage] = useState(null);
  let [ showFocalPointMobile,setShowFocalPointMobile] = useState(false);


  const previewUrl = useSelector((state) => state?.picture_url_mobile);


  const FocalPointPickerMobile = () => {
    const focusPickerMobileEl = document.getElementById("focus-picker-img-mobile");
    const focus: Focus = { x: 0, y: 0 }

    setShowFocalPointMobile(true);

    const focusPicker = new FocusPicker(focusPickerMobileEl, {
      focus,
      onChange: (newFocus: Focus) => {
        const x = newFocus.x.toFixed(2)
        const y = newFocus.y.toFixed(2);

        focus.x = newFocus.x * 50;
        focus.y = newFocus.y * 50;
        props.changePicturePositionMobile(focus)
      },
    })

  }


  return (

    <div>
    
       {previewUrl !== '' && 
        
        <div className="wrapper mobile-wrapper">
        <div className={(showFocalPointMobile === false ? 'show' : 'hidden')}>            
            {previewUrl &&
              <div className="image-container">
                <span className="btn edit-focalpoint" onClick={() => ( FocalPointPickerMobile () ) }> Edit </span>
                <div  className="image" 
                style={{background: "url(" + previewUrl + ")"}}>
                </div>                
                 {/* <FocalPointPicker /> */}

              </div>

            } 
          </div>
      

     
          <div className={(showFocalPointMobile === true ? 'show' : 'hidden')}>
              <div className="focused-image-container ">
                  <img hidden={showFocalPointMobile === false}   id="focus-picker-img-mobile" src={previewUrl} alt="" data-focus-x="0" data-focus-y="0" />
                </div>

                <Row  className="mt-5" > 
                    <ZoomSlider/>
                </Row>

                <div className="buttons-actions">
                <button className="btn" onClick={() => ( setShowFocalPointMobile(false) ) }> Save </button>
                <button className="btn" onClick={() => ( setShowFocalPointMobile(false) ) }> Cancel </button>
                <button className="btn" onClick={() => ( setShowFocalPointMobile(false) ) }> Reset </button>
                </div>

          </div>  
        </div>
       } 

       {!previewUrl && (
                        <div className="empty-card" >
                        <FontAwesomeIcon icon={faImage} />
                        </div>
        )
       }
    </div>
  );
};

ImageUploaderMobile.propTypes = {
  changePictureMobile: PropTypes.func,
  changePicturePositionMobile: PropTypes.func


}

const mapStateToProps = state => {
  return { ...state.PictureState }
}

export default connect(mapStateToProps, {
  changePictureMobile,
  changePicturePositionMobile,

})(ImageUploaderMobile)



// export default ImageUploader