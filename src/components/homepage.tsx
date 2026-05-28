import {
  ArrowDown,
  Code,
  ExternalLink,
  Github,
  Layers,
  Mail,
} from "lucide-react";
import type React from "react";
import { useState } from "react";
import { PERSONAL_INFO, PROJECTS, SKILLS, SOCIALS } from "../constants";
import Typewriter from "./typewriter";

const Homepage: React.FC = () => {
  // Mobile Nav State
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="">
      <h1>Jan Philipps</h1>
      <p>I'm a 19 year old Software Engineer based in Germany.</p>
      <p>
        My passion for computer science started in 2018, I was 11 years old when
        I decided that software is my life.
      </p>
      <p></p>
    </div>
  );
};

export default Homepage;
