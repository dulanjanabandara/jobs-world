import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt="jobifi" className="logo" />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            Job <span>tracking</span> app
          </h1>
          <p>
            I'm baby fingerstache woke tattooed quinoa. Mixtape godard master
            cleanse fam blue bottle glossier unicorn synth bespoke blog
            letterpress bitters stumptown church-key. Keytar mumblecore
            knausgaard four dollar toast cronut aesthetic iPhone fit
            dreamcatcher shaman same chartreuse keffiyeh brunch salvia.
            Mumblecore franzen cliche, man bun drinking vinegar literally 8-bit
            jianbing mustache raclette.
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
        {/* image */}
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
