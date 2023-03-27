import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright Gaurav-1211 &copy {year}</p>
    </footer>
  );
}

export default Footer;
