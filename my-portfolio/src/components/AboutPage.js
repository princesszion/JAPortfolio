// // const imageUrl = "https://media.istockphoto.com/id/1626847905/photo/a-happy-businessman-looking-at-camera-while-working-on-his-computer.jpg?s=2048x2048&w=is&k=20&c=AtIEJACDjaDH7N2x_AgcIrD8bdwCAkw8scCDfKS9MJc="; // Replace with the correct image URL

// import React from 'react';
// import styles from './About.module.css';

// const AboutPage = () => {
//  const imageUrl = "https://media.istockphoto.com/id/1626847905/photo/a-happy-businessman-looking-at-camera-while-working-on-his-computer.jpg?s=2048x2048&w=is&k=20&c=AtIEJACDjaDH7N2x_AgcIrD8bdwCAkw8scCDfKS9MJc="; // Replace with the correct image URL
//  const imageUrl2 = "https://media.istockphoto.com/id/1492247375/photo/business-woman-portrait-and-lawyer-at-a-law-firm-feeling-proud-of-corporate-vision-happiness.jpg?s=1024x1024&w=is&k=20&c=kipqwc3btIsUaYY0YKTUrWa5dXWk-y4GcCcHbpfCyog="
//   return (
//     <div className={styles.aboutPage}>
//       <header className={styles.header}>
//         <div className={styles.logoContainer}>
//           <div className={styles.logo}>K</div>
//         </div>
//         <nav className={styles.nav}>
//           <ul>
//             <li><a href="#home">Home</a></li>
//             <li><a href="#about" className={styles.active}>About</a></li>
//             <li><a href="#portfolio">Portfolio</a></li>
//             <li><a href="#pages">Pages</a></li>
//             <li><a href="#blog">Blog</a></li>
//           </ul>
//         </nav>
//       </header>
      
//       <main className={styles.mainContent}>
//        <div className={styles.aboutText}>
//           <h1>About Myself</h1>
//           <div className={styles.headingCircle}></div>
//           <div className={styles.headingLine}></div>
//           <p>Inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why it’s crucial that, as women, our behavior on the job is beyond reproach. Inappropriate behavior is often laughed off as “boys will be boys,” women face higher.</p>
//           <p>That’s why it’s crucial that, as women, our behavior on the job is beyond reproach. Inappropriate behavior is often laughed.</p>
//           <div className={styles.buttons}>
//             <button className={styles.moreInfoBtn}>More Info</button>
//             <button className={styles.resumeBtn}>Resume</button>
//           </div>
//         </div>
//         <div className={styles.profilePictureContainer}>
//           <div className={styles.blueBackdrop}></div>
//           <img className={styles.profilePicture} src={imageUrl} alt="Kenedy Jackson" />
//         </div>
//         </main>
        
//     </div>
//   );
// };

// export default AboutPage;


import React from 'react';
import styles from './About.module.css';

const AboutPage = () => {
    const imageUrl = "https://media.istockphoto.com/id/1626847905/photo/a-happy-businessman-looking-at-camera-while-working-on-his-computer.jpg?s=2048x2048&w=is&k=20&c=AtIEJACDjaDH7N2x_AgcIrD8bdwCAkw8scCDfKS9MJc="; // Replace with the correct image URL
    const imageUrl2 = "https://media.istockphoto.com/id/1492247375/photo/business-woman-portrait-and-lawyer-at-a-law-firm-feeling-proud-of-corporate-vision-happiness.jpg?s=1024x1024&w=is&k=20&c=kipqwc3btIsUaYY0YKTUrWa5dXWk-y4GcCcHbpfCyog="

  return (
    <div className={styles.aboutPage}>

      <main className={styles.mainContent}>
        <div className={styles.profilePictureContainer}>
          <div className={styles.blueBackdrop}></div>
          <img className={styles.profilePicture} src={imageUrl} alt="Kenedy Jackson" />
        </div>
        <div className={styles.aboutText}>
          <h1>About Myself</h1>
          <div className={styles.headingLine}></div>
          <p>Inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why it’s crucial that, as women, our behavior on the job is beyond reproach. Inappropriate behavior is often laughed off as “boys will be boys,” women face higher.</p>
          <p>That’s why it’s crucial that, as women, our behavior on the job is beyond reproach. Inappropriate behavior is often laughed.</p>
          <div className={styles.buttons}>
            <button className={styles.moreInfoBtn}>More Info</button>
            <button className={styles.resumeBtn}>Resume</button>
          </div>
        </div>
      </main>
      <main className={styles.mainContent}>
        <div className={styles.aboutText}>
          <h1>About Myself</h1>
          <div className={styles.headingLine}></div>
          <p>Inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why it’s crucial that, as women, our behavior on the job is beyond reproach. Inappropriate behavior is often laughed off as “boys will be boys,” women face higher.</p>
          <p>That’s why it’s crucial that, as women, our behavior on the job is beyond reproach. Inappropriate behavior is often laughed.</p>
          <div className={styles.buttons}>
            <button className={styles.moreInfoBtn}>More Info</button>
            <button className={styles.resumeBtn}>Resume</button>
          </div>
        </div>
        <div className={styles.profilePictureContainer}>
          <div className={styles.blueBackdrop}></div>
          <img className={styles.profilePicture} src={imageUrl2} alt="Kenedy Jackson" />
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
