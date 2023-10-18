import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleStop } from "@fortawesome/free-solid-svg-icons";
import { FacebookShareButton, FacebookIcon } from "next-share";

export default function Footer() {
  return (
    <div className="footer">
      <div className="topRow">
        <div>
          <h1>Jaspal Singh Ahuja</h1>
          <p>it is a great adventure in joining us</p>
        </div>
        <div className="iconCont">
          <i className="fi fi-brands-linkedin"></i>
          <i className="fi fi-brands-facebook"></i>
          <i className="fi fi-brands-twitter"></i>
          <i className="fi fi-brands-discord"></i>
        </div>
      </div>
      <div className="bottomRow">
        <div>
          <h4>Projects</h4>
          <a href="/">Changelog</a>
          <a href="/">status</a>
          <a href="/">licence</a>
          <a href="/">All Versions</a>
        </div>
        <div>
          <h4>Community</h4>
          <a href="/">Github</a>
          <a href="/">issues</a>
          <a href="/">project</a>
          <a href="/">twitter</a>
        </div>
        <div>
          <h4>Projects</h4>
          <a href="/">support</a>
          <a href="/">troubleshooting</a>
          <a href="/">Contact Us</a>
        </div>
        <div>
          <h4>Others</h4>
          <a href="/">Terms of service</a>
          <a href="/">privacy policy</a>
          <a href="/">licence</a>
        </div>
      </div>
    </div>
  );
}
