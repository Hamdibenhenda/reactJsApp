import React from "react";
import { Row, Dropdown } from "react-bootstrap";
function Navbar() {
  return (
    <div className="nav-bar">
      <div className="container-fluid">
        <Row
          className="align-items-center"
          style={{ justifyContent: "space-between" }}
        >
          <div className="col-md-4">
            <svg
              width="156"
              height="32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M60.468 25.99c2.39 0 4.306-.77 5.734-2.199 1.986-1.986 1.983-4.61 1.98-7.427a347.335 347.335 0 010-.647c.003-2.818.006-5.441-1.98-7.428-1.431-1.428-3.343-2.198-5.734-2.198-2.39 0-4.306.77-5.734 2.198-1.986 1.987-1.983 4.61-1.98 7.428v.647c-.003 2.818-.006 5.441 1.98 7.427 1.431 1.428 3.343 2.2 5.734 2.2zm.002-15.61c.873 0 1.83.384 2.188.852.44.578.715 1.236.715 4.81 0 3.575-.276 4.208-.715 4.784-.347.466-1.315.879-2.188.879-.874 0-1.831-.41-2.189-.878-.452-.577-.715-1.21-.715-4.785 0-3.574.276-4.234.715-4.81.348-.468 1.315-.852 2.189-.852zM82.57 25.827l-6.267-9.842v9.842h-4.81V6.254H75.7l6.268 9.842V6.254h4.81v19.57l-4.208.003zM106.988 25.827V6.254h13.303v4.287h-8.492v3.272h7.256V18.1h-7.256v3.435h8.492v4.287l-13.303.005zM151.131 10.543v15.284h-4.81V10.543H141.5v-4.29h14.431v4.288l-4.8.002zM44.316 10.46h5.524V6.171h-5.553c-2.28 0-4.013.77-5.441 2.199-2.062 2.062-1.978 4.734-1.978 7.67 0 2.935-.082 5.607 1.978 7.669 1.428 1.428 3.156 2.199 5.442 2.199h5.539v-4.287h-5.524a2.335 2.335 0 01-1.896-.826c-.44-.576-.742-1.181-.742-4.756 0-3.574.303-4.179.742-4.755a2.336 2.336 0 011.91-.826zM135.903 17.665a5.4 5.4 0 003.42-5.113c0-3.217-2.336-6.294-6.681-6.294h-8.595v19.57h4.81V10.575h3.577c1.315 0 2.089 1.194 2.089 2.21 0 1.014-.771 2.208-2.089 2.208l-2.782.003 5.144 10.82h5.342l-4.235-8.15zM97.838 10.459h5.524V6.172h-5.547c-2.28 0-4.014.77-5.442 2.199-2.062 2.062-1.978 4.734-1.978 7.67 0 2.934-.081 5.607 1.978 7.669 1.428 1.428 3.156 2.198 5.442 2.198h5.547v-4.287h-5.524a2.336 2.336 0 01-1.896-.826c-.437-.576-.734-1.18-.734-4.75 0-3.569.303-4.179.742-4.755a2.336 2.336 0 011.888-.831zM22.113 31.863H11.179a10.93 10.93 0 01-9.773-15.817A10.93 10.93 0 0111.182.223h10.93V12.3H11.18a8.627 8.627 0 00-7.106 3.745 8.627 8.627 0 007.101 3.74h10.93l.009 12.078zM2.95 18.336a8.632 8.632 0 008.232 11.223h8.63v-7.464h-8.633a10.91 10.91 0 01-8.23-3.759zm1.273-12.29A8.632 8.632 0 0111.18 2.52h8.627v7.474h-8.63a10.91 10.91 0 00-8.23 3.748 8.632 8.632 0 011.275-7.696z"
                fill="#fff"
              ></path>
            </svg>
          </div>

          <div className="col-md-3">
            <div className="user-picture">
              <img src="https://picsum.photos/seed/picsum/50/50" />
            </div>
            <div className="user-info">
              <span className="user-name">Josh</span>
              <span className="user-role">Admin</span>
            </div>

            <Dropdown>
              <Dropdown.Toggle  id="dropdown-basic">
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#">My profile</Dropdown.Item>
                <Dropdown.Item href="#">My Adverts</Dropdown.Item>
                <Dropdown.Item href="#">Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Row>
      </div>
    </div>
  );
}

export default Navbar;
