import React from "react";
import { Row } from "react-bootstrap";


function BreadCrumbs() {
  return (
    <div className="bread-crumbs">
      <div className="container-fluid">
        <Row>
          <div className="col-md-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokelinejoin="round"
              className="feather feather-edit"
            >
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
            </svg>
                <span className="title"> My concert Add </span>
          </div>

            <div className="col-md-6">
                <ul className="steps">
                    <li className="active"> <span>1</span> Build </li>
                    <li> <span>2</span> Preview </li>
                    <li> <span>3</span> Deliver </li>
                    <li> <span>4</span> Review </li>

                </ul>
            </div>

        </Row>
      </div>
    </div>
  );
}

export default BreadCrumbs;
