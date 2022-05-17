import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linksMap = links.map(link=>{
    const hashLink = '#'+link
    return <a key={link} href={hashLink}>{link}</a>
  })

  return <nav>{linksMap}</nav>;
}

export default NavBar;
