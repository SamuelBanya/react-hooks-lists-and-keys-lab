import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  // Personal function I created to take in the links above, and return an anchor tag for each in 'JSX' format:
  const displayLinks = links.map((link) => {
    console.log("link (from .map() function): ");
    console.log(link);
    return (
      <a key={link} href={"#" + link}>
        {link}
      </a>
    );
  });

  return <nav>{displayLinks}</nav>;
}

export default NavBar;
