import { Github, Instagram, Linkedin, Mail, Twitter, Youtube } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-800/50 py-8 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center text-sm text-gray-400">
        Made by Manaswini Reddy
      </div>

      <div className="flex gap-4 items-center">
        <a
          href="https://www.linkedin.com/in/manaswini-reddy-79261328a/?originalSubdomain=in"
          className="text-gray-400"
        >
          <Linkedin />
        </a>
        <a
          href="https://github.com/manaswini1216"
          className="text-gray-400"
        >
          <Github className="w-5 h-5" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;