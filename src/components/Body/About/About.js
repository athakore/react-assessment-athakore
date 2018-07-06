import React, { Component } from 'react'
import './About.css'

class About extends Component {
  render () {
    return (
      <div className='about'>
        <h1 className='about-title'>About Me</h1>
        <p className='about-me left'>
          I was born in Fremont, Illinois, but, had to move shortly after I was born because the weather didn’t agree with me. I moved around alot as an infant, living is Saint Louis, Alpharetta, Bridgewater and then eventually settling back  in Alpharetta, where I’ve lived to this day. In terms of ethnicity, my parents were born a western state of India called Gujarat. My dad was born in a city called Ahmedabad and my mom was born in a city called Baroda, now called Vadodara.
        </p>
        <p className='about-me right'>
          I graduated high school in 2010 and received my Associate of Science degree in General Studies in 2011 at Georgia Perimeter College. After that, I began working towards my Bachelor of Science in Computer Science at Georgia State University, however, not really having a reason to pursue Computer Science beyond “because it was what I thought was expected of me,” I quickly dropped out. After taking time off to figure out what I wanted to do and why, I re-enrolled at Kennesaw State University to get a Bachelor of Science degree in Computer Game Design & Development, where I am still enrolled. I have decided to take a break from studies because at this juncture I felt it was more important that I achieve some level of independence for myself.
        </p>
        <p className='about-me left'>
          It is difficult for me to say what started my interest in technology. For as long as I can remember the way and speed at which technology changed fascinated me. My interest in being a developer stems from my childhood. As a child, I often found the people around didn’t seem to understand me. I got more excited about things that most other people did, I saw things in ways people didn’t understand, and I cared about things that other people didn’t seem to care about. It got to a point where I reached the conclusion that if the people around me weren’t going to understand me, it didn’t make sense for me to be me. So, I stopped expressing my own thoughts and feelings and began mimicking what I believed was expected of me. I spend my life in this was until after I left Georgia State University. It was at this time that I realized that even if I could tell people how I felt, I could show them. I saw how games were being used to give people a new perspective and saw in developing video games a means through which to let people see the world through my eyes.
        </p>
        <p className='about-me right'>
          Between my time at Georgia State University and Kennesaw State University, I worked at H&R Block as a Tax Professional. I found the experience to be valuable because it helped me hone my ability to explain complex topics to people with ease.
        </p>
        <p className='about-me left'>
          What is unique about my story is that while most of my formal education is centered around development, I’ve also take almost as much time to hone my design skills. Most people to either favor analytical thinking or creative thinking whereas I try to walk the line in between both as much as possible.
        </p>
      </div>
    )
  }
}

export default About
