import React from 'react';
import coverImage from '../../assets/images/me.jpg';

function About() {
  return (
    <section className="my-5">
      <h1 id="about">About me</h1>
      <h2>Hello, my name is Sean. Welcome to my professional portfolio.
        Can you believe I've only studied React for the past six days and have 
        managed to build this portfolio? Yeah, me too. I'm a vegan music obsessive, 
        and I love burritos. Check out this picture of me with my 
        bird, Pepper. She loves apples and k.d. lang.
      </h2>
      <img
        src={coverImage}
        className="my-2"
        style={{ width: '100%' }}
        alt="cover"
      />
    </section>
  );
}
export default About;