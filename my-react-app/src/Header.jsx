import "./App.css";

function Header() {
  return (
    <header>
      
      <div className="img-container">
      </div>
     
      <h1>Celeste Evertsen</h1>
      <p className="career">Frontend Developer</p>
      <p className="email-text">celeste_margarita@gmail.com</p>
      <nav>
        <div >
          <button className="btn-mail">
            <img
              className="email-logo"
              src="src/assets/mail_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png"
              alt=""
            />
            Email
          </button>
        </div>
        <div>
          <button className="btn-linked">
            <img  className="linked-logo"
              src="src/assets/linked.svg"
              alt="" />
            LinkedIn
            </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
