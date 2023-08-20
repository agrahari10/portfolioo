import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
} from "react-icons/ai";
import { SiLeetcode ,SiGeeksforgeeks} from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Babunandan Agrahari</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} BN</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/agrahari10"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://auth.geeksforgeeks.org/user/babunandan10/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <SiGeeksforgeeks />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/babunandan-agrahari-5432611a6/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://leetcode.com/agrahari10/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <SiLeetcode />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
