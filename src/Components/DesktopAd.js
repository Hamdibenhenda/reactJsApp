import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card} from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/fontawesome-free-solid'

function DesktopAd() {
  const previewUrl = useSelector((state) => state?.picture_url);

  const position = useSelector((state) => state?.pictureHeight);

  console.log("position ===>", position);


  return (
    <div className="desktop-ad  p-2">
      <p className="block-title"> Desktop Ad</p>

      <Card>
        <Card.Body>
          {previewUrl && (
            <div
              className="image-container"
              style={{
                background: "url(" + previewUrl + ")",
                backgroundPositionX: position?.x,
                backgroundPositionY: position?.y,
              }}
            ></div>
          )}

          {
             !previewUrl && (
               <FontAwesomeIcon icon={faImage} />
             )
          }
        </Card.Body>
      </Card>
    </div>
  );
}

export default DesktopAd;
