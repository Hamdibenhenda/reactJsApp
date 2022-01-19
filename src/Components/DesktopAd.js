import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card} from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/fontawesome-free-solid'

function DesktopAd() {
  const previewUrl = useSelector((state) => state?.picture_url_desktop);

  const position = useSelector((state) => state?.picture_position_desktop);

  // let styles = {
  //   background: "url(" + previewUrl + ")"
  // }
  // if (position.x !== 0 && position.y !== 0 ) {
  //   styles = {  
  //     ... styles ,               
  //     backgroundPositionX : position?.x,
  //     backgroundPositionY : position?.y}
  // }

  let styles = {
    background: `url('${previewUrl}') ${-position.x}px ${-position.y}px`
  }

  console.log('styles_desktop ===> ',styles);


  return (
    <div className="desktop-ad  p-2">
      <p className="block-title"> Desktop Ad</p>
      <Card>
        <Card.Body>
          {previewUrl && (
            <div
              className="image-container"
              style={styles}></div>
          )}
          {!previewUrl && (
              <div className="empty-card" >
              <FontAwesomeIcon icon={faImage} />
              </div>)
          }
        </Card.Body>
      </Card>
    </div>
  );
}

export default DesktopAd;
