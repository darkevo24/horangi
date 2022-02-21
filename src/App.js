import logo from './logo.svg';
import './App.css';

function App() {
  function button(){
    document.getElementById("navbarNav").classList.toggle("collapse");
  }
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <img id="logo" src={require("./logo.png")}></img>
    <button onClick={button} class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Products</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Customers</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Partners</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Resources</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Careers</a>
        </li>
      </ul>
      <div id="saless">
      <p>SALES@HORANGI.COM</p>
      <div id="sign">
        <div id="signin">
          <p id="p">Sign In</p>
        </div>
        <div id="contactus">
          <p id="p">Contact Us</p>
        </div>
      </div>
    </div>
    
    </div>
  </div>
</nav>
<br></br>
<br></br>
<h3>Warden Anual Subscription Pricing</h3>
<p id="plan">A plan for everyone on the one-click cloud security platform</p>
<br></br>
<br></br>
<div id="card">
  <div id="left">
    <h4>Starter</h4>
    <p id="usd">USD $9,000</p>
    <br></br>
    <div id="line">
    </div>
    <br></br>
    <p id="text"><img id="check"src={require("./Checkmark.png")} ></img>Up to 500 resources</p>
    <p id="text"><img id="check"src={require("./Checkmark.png")} ></img>Priority support</p>
    <p id="text"><img id="check"src={require("./Checkmark.png")} ></img>Managed service</p>
    <p id="text"><img id="check"src={require("./Checkmark.png")} ></img>Compliance framework mapping</p>
    <p id="text"><img id="check"src={require("./Checkmark.png")} ></img>Integrations</p>
    <p id="text"><img id="check"src={require("./Checkmark.png")} ></img>Vulnerability Remediation</p>
    <p id="text"><img id="check"src={require("./Cross.png")} ></img>IAM Explorer</p>
    <p id="text"><img id="check"src={require("./Cross.png")} ></img>Threat Detection</p>
    <p id="text"><img id="check"src={require("./Cross.png")} ></img>SIEM support</p>
    <p id="text"><img id="check"src={require("./Cross.png")} ></img>Custom rules</p>
    <br></br>
    <div id="getstarted">
      <p id="get">GET STARTED</p>
    </div>
  </div>
  <div id="mid">
  <h4>Starter</h4>
    <p id="us">USD $12,000</p>
    <br></br>
    <div id="line">
    </div>
    <br></br>
    <p id="text"><img id="check"src={require("./Checkmark.png")} ></img>Up to 1000 resources</p>
    <p id="text"><img id="check"src={require("./Checkmark.png")} ></img>Priority support</p>
    <p id="text"><img id="check"src={require("./Checkmark.png")} ></img>Managed service</p>
    <p id="text"><img id="check"src={require("./Checkmark.png")} ></img>Compliance framework mapping</p>
    <p id="text"><img id="check"src={require("./Checkmark.png")} ></img>Integrations</p>
    <p id="text"><img id="check"src={require("./Checkmark.png")} ></img>Vulnerability Remediation</p>
    <p id="text"><img id="check"src={require("./Checkmark.png")} ></img>IAM Explorer</p>
    <p id="text"><img id="check"src={require("./Checkmark.png")} ></img>Threat Detection</p>
    <p id="text1"><img id="check"src={require("./Cross.png")} ></img>SIEM support</p>
    <p id="text1"><img id="check"src={require("./Cross.png")} ></img>Custom rules</p>
    <br></br>
    <div id="getstarted">
      <p id="get">GET STARTED</p>
    </div>
    </div>
    <div id="right">
    <h4>Enterprise</h4>
    <p id="usd">Contact Sales</p>
    <br></br>
    <div id="line">
    </div>
    <br></br>
    <p id="text"><img id="check" src={require("./Checkmark.png")} ></img>More than 1000 resources</p>
    <p id="text"><img id="check"src={require("./Checkmark.png")} ></img>Priority support</p>
    <p id="text"><img id="check"src={require("./Checkmark.png")} ></img>Managed service</p>
    <p id="text"><img id="check"src={require("./Checkmark.png")} ></img>Compliance framework mapping</p>
    <p id="text"><img id="check"src={require("./Checkmark.png")} ></img>Integrations</p>
    <p id="text"><img id="check"src={require("./Checkmark.png")} ></img>Vulnerability Remediation</p>
    <p id="text"><img id="check"src={require("./Checkmark.png")} ></img>IAM Explorer</p>
    <p id="text"><img id="check"src={require("./Checkmark.png")} ></img>Threat Detection</p>
    <p id="text"><img id="check"src={require("./Checkmark.png")} ></img>SIEM support</p>
    <p id="text"><img id="check"src={require("./Checkmark.png")} ></img>Custom rules</p>
    <br></br>
    <div id="getstarted">
      <p id="get">GET STARTED</p>
    </div>
    </div>
</div>
    </div>
  );
}

export default App;
