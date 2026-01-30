const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <span className="footer-brand">Myles Council</span> • AI Data Engineer
          <br />
          <small>&copy; {new Date().getFullYear()} All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
