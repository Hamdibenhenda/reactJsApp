import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/fontawesome-free-solid'

function MobileAd() {
  const previewUrl = useSelector((state) => state?.picture_url);

  const position = useSelector((state) => state?.pictureHeight);

  return (
    <div className="mobile-ad  p-2">
      <p className="block-title"> Mobile Ad</p>

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

export default MobileAd;
