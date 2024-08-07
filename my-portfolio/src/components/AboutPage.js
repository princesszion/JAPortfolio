// import React, { useState } from 'react';
// import styles from './About.module.css';
// import image1 from '../assets/images/Jackson.png';
// import image2 from '../assets/images/Alice.png';

// const AboutPage = () => {
//   const [showMoreInfo, setShowMoreInfo] = useState(false);

//   const handleMoreInfoClick = () => {
//     setShowMoreInfo(!showMoreInfo);
//   };

 

//   return (
//     <div className={styles.aboutPage}>
//       <main className={styles.mainContent}>
//         <div className={styles.profilePictureContainer}>
//           <div className={styles.blueBackdrop}></div>
//           <img className={styles.profilePicture} src={image1} alt="Kenedy Jackson" />
//         </div>
//         <div className={styles.aboutText1}>
//           <h1>Meet Jackson</h1>
//           <div className={styles.headingLine1}></div>
//           <p>I am:</p>
//           <p>
//           <ul>
//           <li>A believer in the birth, the death and resurrection of Jesus Christ – This is the hope of my calling.</li>
//           <li>A teacher of God’s word – I love how that the Word of God touches on every area of human existence.</li>
//           <li>Filled with the holy ghost – What joy to have the holy spirit teach you all things!</li>
//           <li>A son to fathers and mothers  in the faith. Several parents in the faith have laid hands on me and poured into me!</li>
//           <li>A mentor to several young people -  Endless joy to see you living separated unto the Lord.</li>
//           <li>A recreational player of Tennis, Badminton, Golf and Chess – For bodily exercise profits little</li>
//         </ul>
//         </p>
//           {showMoreInfo && (
//             <div className={styles.moreInfo}>
//               <p><ul>
//           <li>An academic & a development consultant – Currently on a journey to build more expertise in my professional life through a PhD Entrepreneurship program at the University of Louisville.  Learn more about my professional journey on <span><a href="https://www.linkedin.com/in/jacksonakor/">LinkedIn</a></span></li>
//           <li>A blessed man – I love my darling Alice; you’ve added so much colour to my life.</li>
//         </ul></p>
//             </div>
//           )}
//           <div className={styles.buttons1}>
//             <button className={styles.moreInfoBtn1} onClick={handleMoreInfoClick}>
//               {showMoreInfo ? 'Show Less' : 'More Info'}
//             </button>
//           </div>
//         </div>
//       </main>
//       <main className={styles.mainContent}>
//         <div className={styles.aboutText}>
//           <h1>Meet Alice</h1>
//           <div className={styles.headingLine}></div>
//           <p>I am:</p>
//           <p>
//           <ul>
//           <li>A believer in the God of the Bible</li>
//           <li>A lover of God’s Word: I love how God speaks to me, everything I am and have has come to me through the Word.</li>
//           <li>I love how the Holy spirit inspires me without any drama. He talks to me like a friend talks to his friend. He causes me to know deep things that no man taught me. He is my teacher.</li>
//           <li>A social worker and youth educator: find out more about my work with <span><a href="https://wit21hub.com/">Wit21-Hub </a></span> and on <span><a href="https://www.linkedin.com/in/alice-apejoye/">LinkedIn</a></span></li>
//           <li>A wife to God’s Prince: With my darling Jackie, I have enjoyed a slice of heaven here on earth.</li>
//         </ul>
//         </p>
//                     {showMoreInfo && (
//             <div className={styles.moreInfo}>
//               <p></p>
//             </div>
//           )}
//           <div className={styles.buttons}>
//             <button className={styles.moreInfoBtn} onClick={handleMoreInfoClick}>
//               {showMoreInfo ? 'Show Less' : 'More Info'}
//             </button>
//           </div>
//         </div>
//         <div className={styles.profilePictureContainer2}>
//           <div className={styles.blueBackdrop}></div>
//           <img className={styles.profilePicture} src={image2} alt="Kenedy Jackson" />
//         </div>
//       </main>
//     </div>
//   );
// };

// export default AboutPage;


import React, { useState } from 'react';
import styles from './About.module.css';
import image1 from '../assets/images/Jackson.png';
import image2 from '../assets/images/Alice.png';

const AboutPage = () => {
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const handleMoreInfoClick = () => {
    setShowMoreInfo(!showMoreInfo);
  };

  return (
    <div className={styles.aboutPage}>
      <div className={styles.mainContent}>
        <div className={styles.profilePictureContainer}>
          <img className={styles.profilePicture} src={image1} alt="Kenedy Jackson" />
        </div>
        <div className={styles.aboutText1}>
          <h1>Meet Jackson</h1>
          <div className={styles.headingLine1}></div>
          <p>I am:</p>
          <ul>
            <li>A believer in the birth, the death and resurrection of Jesus Christ – This is the hope of my calling.</li>
            <li>A teacher of God’s word – I love how that the Word of God touches on every area of human existence.</li>
            <li>Filled with the holy ghost – What joy to have the holy spirit teach you all things!</li>
            <li>A son to fathers and mothers in the faith. Several parents in the faith have laid hands on me and poured into me!</li>
            <li>A mentor to several young people - Endless joy to see you living separated unto the Lord.</li>
            <li>A recreational player of Tennis, Badminton, Golf and Chess – For bodily exercise profits little</li>
          </ul>
          {showMoreInfo && (
            <div className={styles.moreInfo}>
              <ul>
                <li>An academic & a development consultant – Currently on a journey to build more expertise in my professional life through a PhD Entrepreneurship program at the University of Louisville. Learn more about my professional journey on <a href="https://www.linkedin.com/in/jacksonakor/">LinkedIn</a></li>
                <li>A blessed man – I love my darling Alice; you’ve added so much colour to my life.</li>
              </ul>
            </div>
          )}
          <div className={styles.buttons}>
            <button className={styles.moreInfoBtn} onClick={handleMoreInfoClick}>
              {showMoreInfo ? 'Show Less' : 'More Info'}
            </button>
          </div>
        </div>
      </div>
      <div className={styles.mainContent}>
        <div className={styles.aboutText}>
          <h1>Meet Alice</h1>
          <div className={styles.headingLine}></div>
          <p>I am:</p>
          <ul>
            <li>A believer in the God of the Bible</li>
            <li>A lover of God’s Word: I love how God speaks to me, everything I am and have has come to me through the Word.</li>
            <li>I love how the Holy spirit inspires me without any drama. He talks to me like a friend talks to his friend. He causes me to know deep things that no man taught me. He is my teacher.</li>
            <li>A social worker and youth educator: find out more about my work with <a href="https://wit21hub.com/">Wit21-Hub</a> and on <a href="https://www.linkedin.com/in/alice-apejoye/">LinkedIn</a></li>
            <li>A wife to God’s Prince: With my darling Jackie, I have enjoyed a slice of heaven here on earth.</li>
          </ul>
          <div className={styles.buttons}>
            <button className={styles.moreInfoBtn} onClick={handleMoreInfoClick}>
              {showMoreInfo ? 'Show Less' : 'More Info'}
            </button>
          </div>
        </div>
        <div className={styles.profilePictureContainer2}>
          <img className={styles.profilePicture} src={image2} alt="Kenedy Jackson" />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
