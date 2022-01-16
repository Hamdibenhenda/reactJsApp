import React from "react";
import ImageUploader from "../tools/DragAndDrop";
import { Card, Accordion, Row } from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImages, faAlignCenter,faImage, faParagraph } from '@fortawesome/fontawesome-free-solid'

function LeftSide() {
    return (

    <div className="left-nav p-2">
    
    <p className="block-title"> Ad builder (Image) </p>

      <Card>
        <Card.Body>
          <p className="sub-block-title">Layout Guide</p>
          <p className="block-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="sub-block-title"> Image </p>
            <Row>
                <ImageUploader/>
            </Row>
            <p className="block-description">
            Add in you Desktop background     
        
          </p>
        </Card.Body>
      </Card>
      
      <p className="block-title"> Options </p>

      <Card>
        <Card.Body>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>  
               <FontAwesomeIcon icon={faImages} />  <span className="ml-2" >  Mobile Background Image  </span>
               </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header> <FontAwesomeIcon icon={faImage} />  <span className="ml-2" > Logo  </span> </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header> <FontAwesomeIcon icon={faParagraph} />  <span className="ml-2" >  Message  </span> </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header> <FontAwesomeIcon icon={faParagraph} />  <span className="ml-2" >  Call to Action  </span></Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud ex
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header> <FontAwesomeIcon icon={faAlignCenter} />  <span className="ml-2" >  Allignment  </span> </Accordion.Header>
              <Accordion.Body>
    
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header> <FontAwesomeIcon icon={faParagraph} />  <span className="ml-2" >  Accessibility  </span> </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
         
        </Card.Body>
      </Card>
    </div>
  );
}

export default LeftSide;
