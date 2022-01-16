import React, { useState, useRef } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes} from '@fortawesome/fontawesome-free-solid'



const ImageUploader = () => {
  const fileInput = useRef(null);
  const [image, setImage] = useState(null);
  let [previewUrl, setPreviewUrl] = useState("");

  const handleFile = (file) => {
    setImage(file);
    setPreviewUrl(URL.createObjectURL(file));
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
      {previewUrl && 
        <div className="image-container">
            <span  onClick={() => setPreviewUrl("") } className="btn btn-delete"> <FontAwesomeIcon icon={faTimes} />  </span>
             <img src={previewUrl} alt="image" />
        </div>
      }
    </div>
  );
};
export default ImageUploader;
