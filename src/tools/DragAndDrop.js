import React, { useState, useRef } from "react";
import {Row } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes} from '@fortawesome/fontawesome-free-solid'

import { FocusedImage, FocusPicker, Focus } from "image-focus"

const ImageUploader = () => {
  const fileInput = useRef(null);
  const [image, setImage] = useState(null);
  let [previewUrl, setPreviewUrl] = useState("");

  const handleFile = (file) => {
    setImage(file);
   setPreviewUrl(URL.createObjectURL(file));

   // if (setPreviewUrl(URL.createObjectURL(file))) {

        
    const focusPickerEl = document.getElementById("focus-picker-img");
    const imgSrcEl = document.getElementById("image-src");
    const focusedImageElements = document.querySelectorAll(".focused-image");



            // Set our starting focus
        const focus: Focus = { x: 0, y: 0 }

        // Iterate over images and instantiate FocusedImage from each
        // pushing into an array for updates later
        const focusedImages: FocusedImage[] = []
        Array.prototype.forEach.call(focusedImageElements, (imageEl: HTMLImageElement) => {
        focusedImages.push(
            new FocusedImage(imageEl, {
            focus,
            debounceTime: 17,
            updateOnWindowResize: true,
            }),
        )
        })

        // Instantiate our FocusPicker providing starting focus
        // and onChange callback
        const focusPicker = new FocusPicker(focusPickerEl, {
        focus,
        onChange: (newFocus: Focus) => {
            const x = newFocus.x.toFixed(2)
            const y = newFocus.y.toFixed(2)
            focusedImages.forEach(focusedImage => focusedImage.setFocus(newFocus))
        },
        })

        // Add event listener for updating image sources
        imgSrcEl.addEventListener("input", () => {
        focusPicker.img.src = imgSrcEl.value
        focusedImages.forEach(focusedImage => (focusedImage.img.src = imgSrcEl.value))
        })
      

  };


  const handleOndragOver = (event) => {
    event.preventDefault();
    event.stopPropagation()
   // console.log("event ====>",event);
    let imageFile = event.dataTransfer.files[0];

   //handleFile(imageFile);
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
          <p>Click to select or Drag and drop image here....</p>
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
            <span  onClick={() => setPreviewUrl("") } className="btn btn-delete"> <FontAwesomeIcon icon={faTimes} />  </span>
        </div>
      }
            
        </div>  

            <img id="focus-picker-img" src={previewUrl} alt="" data-focus-x="0" data-focus-y="0" /> 
            
            <input hidden id="image-src" type="text" defaultValue={"https://picsum.photos/2400/1400?image=1001"} />
            {/* <img className="focused-image" src={previewUrl} data-focus-x="0" data-focus-y="0" />       */}

    </div>
  );
};
export default ImageUploader;
