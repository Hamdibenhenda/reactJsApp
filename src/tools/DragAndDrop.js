import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes,faCloudUploadAlt } from '@fortawesome/fontawesome-free-solid'
import PropTypes from 'prop-types'
import { FocusedImage, FocusPicker, Focus } from "image-focus";
import { connect, useDispatch } from "react-redux";
import ZoomSlider from "./ZoomSlider";

// actions
import {
  changePicture,
  changePictureWidth,
  changePictureHeight,
} from "../store/pictures/actions"


const ImageUploader = props=> {
  // const dispatch = useDispatch();
  const fileInput = useRef(null);
  const [image, setImage] = useState(null);
  let [previewUrl, setPreviewUrl] = useState("");


  const deleteImage = () => {
    setPreviewUrl('');
    props.changePicture();
    props.changePictureHeight( { x: 0, y: 0 });
  }


  const handleFile = (file) => {
    setImage(file);
    setPreviewUrl(URL.createObjectURL(file));

    const focusPickerEl = document.getElementById("focus-picker-img");
    const imgSrcEl = document.getElementById("image-src");
    const focusedImageElements = document.querySelectorAll(".focused-image");

    const focus: Focus = { x: 0, y: 0 }

    console.log(focusPickerEl);
    props.changePicture(URL.createObjectURL(file));
    const focusedImages: FocusedImage[] = [];

    Array.prototype.forEach.call(focusedImageElements, (imageEl: HTMLImageElement) => {
      focusedImages.push(
        new FocusedImage(imageEl, {
          focus,
          debounceTime: 17,
          updateOnWindowResize: true,
        }),
      )
    })

    const focusPicker = new FocusPicker(focusPickerEl, {
      focus,
      onChange: (newFocus: Focus) => {
        const x = newFocus.x.toFixed(2)
        const y = newFocus.y.toFixed(2);
        
        focus.x = newFocus.x * 50;
        focus.y = newFocus.y * 50;

        console.log(focus);
        props.changePictureHeight(focus)
        
        focusedImages.forEach(focusedImage => focusedImage.setFocus(newFocus));
      },
    })

  };


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

    <div className="wrapper">
      {!previewUrl && (
        <div
          className="drop_zone"
          onDragOver={handleOndragOver}
          onDrop={handleOndrop}
          onClick={() => fileInput.current.click()}
        >
          <p className="text-center m-0">  
          <span className="icon"><FontAwesomeIcon icon={faCloudUploadAlt} /> </span><br/>
          Drag file here or <br/> BROWSE </p>
          <input
            type="file"
            accept="image/*"
            ref={fileInput}
            hidden
            onChange={(e) => handleFile(e.target.files[0])}
          />
        </div>
      )}

      <div className="focused-image-container">
        {previewUrl &&
          <div className="image-container">
            <span onClick={() => deleteImage()} className="btn btn-delete"> <FontAwesomeIcon icon={faTimes} />  </span>
          </div>
        }
       

      </div>

      <img id="focus-picker-img" src={previewUrl} alt="" data-focus-x="0" data-focus-y="0" />      
    </div>
  );
};

ImageUploader.propTypes = {
  changePicture: PropTypes.func,
  changePictureWidth: PropTypes.func,
  changePictureHeight: PropTypes.func,

}

const mapStateToProps = state => {
  return { ...state.Layout }
}

export default connect(mapStateToProps, {
  changePicture,
  changePictureWidth,
  changePictureHeight,
})(ImageUploader)



// export default ImageUploader