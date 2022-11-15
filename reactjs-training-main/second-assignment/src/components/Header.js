function Header() {
  return (
    <div>
      <div className="logo-container" style={{ fontWeight: "bolder" }}>
        Fiction Co.
      </div>

      <div className="menu-container">
        <ul className="menu">
          <li className="menu-item">
            <a href="about-us.html">About Us</a>
          </li>
          <li className="menu-item">
            <a href="contact-us.html">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Header;
