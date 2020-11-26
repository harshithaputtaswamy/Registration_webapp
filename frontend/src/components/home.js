import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
      <div className="yp_welcome">
              <center>                  
                  <h1 className="yp_third">Art of Living presents</h1>
                  <h3 className="yp_second">Living Out Loud</h3>
                  
              </center>
              
          </div> 
          <h5 className="yp_fifth">
                    Time<br/>
                    Sat 6pm to 7:30pm<br/>
                    Sun 10:30am to 12:30am</h5>
         
        <button className="buttonClass"><Link to="/Reg_Form" className="linkClass" >REGISTER</Link></button>
        
      </header>
    </div>
  );
};

export default Home;
