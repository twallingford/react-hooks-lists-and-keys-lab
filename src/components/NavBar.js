import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linkMap = links.map(function(link) {
    const hashLink = '#' + link;
    return <a key={link} href={hashLink}>{link}</a>
  })

  return (
    <nav>
      {linkMap}
    </nav>
  )
}

export default NavBar;
