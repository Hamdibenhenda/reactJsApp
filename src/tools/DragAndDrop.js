import React, { useState, useRef,useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes,faTimesCircle, faCloudUploadAlt } from '@fortawesome/fontawesome-free-solid';
import PropTypes from 'prop-types';
import { FocusedImage, FocusPicker, Focus } from "image-focus";
import { connect, useDispatch } from "react-redux";
import ZoomSlider from "./ZoomSlider";
import { Row } from "react-bootstrap";
import FocalPointPicker from "./FocalPointPicker";

// actions
import {
  changePictureDesktop,
  changePicturePositionDesktop,
  changePictureMobile,
} from "../store/pictures/actions"


const ImageUploader = props => {

  const fileInput = useRef(null);
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  let [ showFocalPoint,setShowFocalPoint] = useState(false);

  const deleteImage = () => {
    setPreviewUrl('');
    props.changePictureDesktop();
    props.changePictureMobile();
    props.changePicturePositionDesktop({ x: 0, y: 0 });
  }


  const handleFile = (file) => {
    setImage(file);
    setPreviewUrl(URL.createObjectURL(file));
    setShowFocalPoint(false);
    props.changePictureDesktop(URL.createObjectURL(file));
    props.changePictureMobile(URL.createObjectURL(file))
  };


  const FocalPointPicker = () => {

      
    setShowFocalPoint(true);

    const focusPickerEl = document.getElementById("focus-picker-img");

    const focus: Focus = { x: 0, y: 0 }


    const focusPicker = new FocusPicker(focusPickerEl, {
      focus,
      onChange: (newFocus: Focus) => {
        const x = newFocus.x.toFixed(2)
        const y = newFocus.y.toFixed(2);
        focus.x = newFocus.x * 50;
        focus.y = newFocus.y * 50
        props.changePicturePositionDesktop(focus)      
      },
    })

  }



  const handleOndragOver = (event) => {
    event.preventDefault();
    event.stopPropagation()
    let imageFile = event.dataTransfer.files[0];
  };


  const handleOndrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    let imageFile = event.dataTransfer.files[0];
    setPreviewUrl(URL.createObjectURL(imageFile));
  };

  return (

    <div className="wrapper image-uploader mb-3">
      {!previewUrl && (
        <div
          className="drop_zone"
          onDragOver={handleOndragOver}
          onDrop={handleOndrop}
          onClick={() => fileInput.current.click()}>
          <p className="text-center m-0">
            <span className="icon"><FontAwesomeIcon icon={faCloudUploadAlt} /> </span><br />
          Drag file here or <br /> BROWSE </p>
          <input
            type="file"
            accept="image/*"
            ref={fileInput}
            hidden
            onChange={(e) => handleFile(e.target.files[0])}
          />
        </div>
      )}

        
        <div className={(showFocalPoint === false ? 'show' : 'hidden')}>            
            {previewUrl &&
              <div className="image-container">
                <span onClick={() => deleteImage()} className="btn-delete"> <FontAwesomeIcon icon={faTimesCircle} />  </span>
                <span className="btn edit-focalpoint" onClick={() => ( FocalPointPicker() ) }> Edit </span>
                <span className="btn uploadimage" onClick={() => fileInput.current.click()}> Upload </span>
                <div  className="image" 
                style={{background: "url(" + previewUrl + ")"}}>
                </div>
                <input
                type="file"
                accept="image/*"
                ref={fileInput}
                hidden
                onChange={(e) => handleFile(e.target.files[0])}
              />
                
                 {/* <FocalPointPicker /> */}

              </div>

            } 
          </div>
      

     
        <div className={(showFocalPoint === true ? 'show' : 'hidden')}>
        <div className="focused-image-container ">
            <img hidden={showFocalPoint === false}   id="focus-picker-img" src={previewUrl} alt="" data-focus-x="0" data-focus-y="0" />
          </div>

          <Row  className="mt-5" > 
              <ZoomSlider/>
          </Row>

          <div className="buttons-actions">
          <button className="btn" onClick={() => ( setShowFocalPoint(false) ) }> Save </button>
          <button className="btn" onClick={() => ( setShowFocalPoint(false) ) }> Cancel </button>
          <button className="btn" onClick={() => ( setShowFocalPoint(false) ) }> Reset </button>
          </div>

        </div>  
    
    </div>
  );
};

ImageUploader.propTypes = {
  changePictureDesktop: PropTypes.func,
  changePicturePositionDesktop: PropTypes.func,
  changePictureMobile: PropTypes.func

}

const mapStateToProps = state => {
  return { ...state.PictureState }
}

export default connect(mapStateToProps, {
  changePictureDesktop,
  changePictureMobile,
  changePicturePositionDesktop,
  
})(ImageUploader)



// export default ImageUploader