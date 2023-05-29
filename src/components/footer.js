import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import banner from './banner.png'
import { FormattedMessage } from "react-intl";

function Footer() {
 return (
        <div style= {{textAlign: "center", marginTop: "300px", marginBottom: "auto"}}>
        <h6> <FormattedMessage id="Contact"/> </h6>
        </div>
 );
}

export default Footer;  