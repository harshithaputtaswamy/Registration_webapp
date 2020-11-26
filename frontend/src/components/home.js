import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
      <div className="yp_welcome">
              <center>
                  
                  <h1 className="yp_third">Yes!+ Club Presents...</h1>
                  <h3 className="yp_second">Synergy</h3>
                  <h5 className="yp_fifth">A series of talks by Industry experts!!</h5>
              </center>
          </div> 
          
        <button className="buttonClass"><Link to="/Reg_Form" style={{color:"white"}}>REGISTER</Link></button>
                
      </header>
    </div>
  );
};

export default Home;
