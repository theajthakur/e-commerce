import {
  GitBranch,
  GithubIcon,
  InstagramIcon,
  Linkedin,
  LinkedinIcon,
} from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="bg-light p-3">
        <div className="d-flex gap-2 gap-lg-4 justify-content-center align-items-center">
          <p className="m-0">
            <a href="https://github.com/theajthakur" target="_blank">
              <GithubIcon size={15} /> <span>Github</span>
            </a>
          </p>
          <p className="m-0">
            <a href="https://linkedin.com/in/theajthakur" target="_blank">
              <LinkedinIcon size={15} /> <span>Linkedin</span>
            </a>
          </p>
          <p className="m-0">
            <a href="https://instagram.com/aj_thakur_rock" target="_blank">
              <InstagramIcon size={15} /> <span>Instagram</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
