
//     const imageUrl = "https://images.unsplash.com/photo-1522941471521-6ee21ec5cc26?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QWZyaWNhbiUyMENvdXBsZXxlbnwwfHwwfHx8MA%3D%3D";
  
import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import imageUrl from '../assets/images/home.jpg';

const HomePage = () => {
  // const imageUrl = "https://img.freepik.com/free-photo/black-man-with-happy-expression_155003-11386.jpg?size=626&ext=jpg"
  return (
    <div className="homepage">
                <div>
                <h1 className="names">The Christian Youth: Separated Unto the Lord <span>                <p className = "contentt">Let no man despise <span className="highlight designer">thy youth;</span> but be thou an example of the believers, in word, in conversation, in charity, in spirit, in faith, in purity. <span className="highlight developer">1Tim 4:12</span></p>
                </span></h1> 
                </div>
       <main className="main-content">
        <div className="intro">
          {/* <span className="intro-tag">It's me</span> */}
          <p className="vision"> Our <strong>vision</strong> is to support the spiritual growth of the Christian youth in this generation. This is through the undiluted word of God from the bible;  so that they become a worthy example in word, in conversation, in charity, in spirit, in faith and in purity.</p>
          <p className="paragraph1">As a <strong>young person</strong> visiting this website, we pray that the content of this website will encourage and inspire you to become fully separated unto the Lord and live a vibrant life where Jesus Christ takes the absolute control of every area of your life.</p>
          <button className="hire-me-btn"><li className="hire-link"><Link to="/about">Learn More</Link></li></button>
        </div>
        <div className="profile-picture-container">
          <img className="profile-picture" src={imageUrl} alt="Kenedy Jackson" />
        </div>
      </main>
      
    </div>
  );
};

export default HomePage;