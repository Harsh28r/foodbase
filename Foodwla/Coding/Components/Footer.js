// Footer component for footer section
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      Created By
      <i className="fa-solid fa-heart"></i>
      <a
        href="https://www.linkedin.com/in/harsh-gupta-313380205/"
        target="_blank"
        title="Harsh Gupta's Linkedin Profile"
      >
        Harsh Gupta
      </a>
      <i className="fa-solid fa-copyright"></i>
        {year}
        <strong>
          Food<span>Wala</span>
        </strong>
    </div>
  );
};

export default Footer;
