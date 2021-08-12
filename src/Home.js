// import backimage from './vecteezy.jpg';
import {Link} from 'react-router-dom';
import Navbar from "./Navbar";
import Footer from './Footer';

const Home = () => {
    const scrollDown = () => {

    }
  return (
    <div className="home">
      <div className="section head-content">
        <Navbar />
        <div className="section-content">
          <h3 className="sec-intro bonjour">Bonjour!</h3>
          <h2 className="sec-intro">I brainstorm ideas and code it to life</h2>
          <small>Shreyas R - Web Application Developer</small>
        </div>
      </div>
      <div className="section-ofw">
        <div className="section-content">
          <h2 className="header">Who am I?</h2>
          <p className="brief">
            I'm a CSE graduate who can build websites, design products and
            research the market. Recently I have been loving to write articles
            on tech, do give it a read :D
          </p>
          <p className="brief">
            I like to everything related to technology be it from processors to
            Web Technologies.
          </p>
          <p className="brief">Have an idea? Let's talk</p>
          {/* <button className="btn">Contact </button> */}
          <Link to="/" className="btn" onClick={scrollDown} >Contact</Link>
        </div>
      </div>
      <div className="section">
        <div className="section-content">
          <p className="header">Work and Projects</p>
          <p className="brief">What are my skills?</p>
          <p className="brief">
            HTML | CSS | JavScript | Bootstrap | Python | SQL | Git{" "}
          </p>
          <p className="brief">
            {" "}
            are some of the langauges I'm familiar with. I have also been
            working with ReactJs, check out my work section for more information
          </p>
          <Link to="/Work" className="btn">Work</Link>
        </div>
      </div>
      {/* <div className="section-ofw">
          <div className="section-content">
              <p className="header">Resources</p>
              <p className="brief">I also store alot of resources, do check em out</p>
              <Link to="/Resources" className="btn">Goodies</Link>
          </div>
      </div> */}
    </div>
  );
};

export default Home;