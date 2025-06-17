import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Raju</a></li>
          <li><a href="#bts">BTS Gallery</a></li>
          <li><a href="#friendship">Our Friendship</a></li>
        </ul>
      </nav>

      <header id="home">
        <h1>💖 Bestfriend's Day to my bokachodaaaa 💖</h1>
        <p>It's a bit of surprise, not suprise wala suprise but yaaaa..... bandhuuuuu!</p>
      </header>

      <section className="gallery">
        <img src="Raju.jpg" alt="Raju" className="photo" />
        <img src="bts.jpg" alt="BTS" className="photo" />
      </section>

      <section id="about" className="card">
        <h2>About Raju</h2>
        <p>
          Raju,not only my chotuuuuuu,but also my dumbbb head bokachoda.....
          she is the only only who didn't give up on me when the whole world was,
          but stuck through the thick and thins,can't appreciate enough dude....
          
          Now for the chatgpt stuffs,because apan kaam padha likha hai...

          "Happy Best Friend’s Day to the most incredible person in my life! You’ve been my rock, my constant support, and the one person who’s always had my back no matter what. When I felt like giving up, you were the one who didn’t give up on me. Your belief in me means more than words can express, and I’m beyond grateful to have you by my side. Through every high and every low, you’ve stood strong with me, and that’s something I will never take for granted. You truly are one in a million, and I feel so lucky to call you my best friend. Thank you for always being there, for lifting me up when I needed it most, and for just being you. I hope today reminds you of how special you are to me – and to so many others."          
           💜
        </p>
      </section>

      <section id="bts" className="card">
        <h2>Your BTS Moments</h2>
        <p>
          From singing "Dynamite" to dancing to "Butter",you shared the best
          BTS vibes and ofc how can we forget Taylor didiiiiiiiiiiii. Here's to many more!
        </p>
      </section>

      <section id="friendship" className="card">
        <h2>Our Friendship</h2>
        <p>
          Raju, you're not just my best friend. You're family. This page is a
          small way to say: I appreciate you more than words can say! 
          To the late nighterrrrrrrrrr we have to those we gonnnaaaaa be havinggggggggg.....💫
        </p>
      </section>
    </div>
  );
}

export default App;