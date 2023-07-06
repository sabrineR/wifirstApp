import React from "react";
import "./footer.css";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { Card } from "react-bootstrap";

const Footer = () => {
  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Text>
          wifirst, <br />
          Wifirst 26 Rue de Berri, 75008 Paris
        </Card.Text>

        <div className="icons">
          <FaFacebook className="fb" />
          <FaYoutube />
          <FaInstagram />
        </div>
      </Card.Body>
      <Card.Footer className="text-muted">
        Développé par Sabrine BEN SASSI
      </Card.Footer>
    </Card>
  );
};

export default Footer;
