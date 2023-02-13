import React from 'react'
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar'
import "./home.css";
const Home = () => {
  return (
    <div>
     <Navbar/>
     <div className="cards">
      <card className="card1">
        <img className='cardImage' src="./Welcome To Eagle.png"/>
         
      </card>
      <card className="card1">
        <img className='cardImage' src="./New.png"/>
         
      </card>
      <card className="card1">
        <img className='cardImage' src="./Light.png"/>
         
      </card>
     </div>
     <form>
  
  <div class="form-group">
    <label for="exampleInputEmail1">Phone Number</label>
    <input type="Phone Number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Number"/>
    <small id="emailHelp" class="form-text text-muted">Log in via E-mail OTP.</small>
  </div>
  <button type="submit" class="New-Button bg-primary">Submit</button>
</form>
<form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">Log in via E-mail OTP.</small>
  </div>
  
  
  <button type="submit" class="New-Button bg-primary">Submit</button>
</form>
<Footer/>
    </div>
  )
}

export default Home
