import React from "react";
import "./About.css";
import { AiFillSignal,AiOutlinePoweroff,AiFillHeart,AiOutlineFileDone,AiTwotoneHighlight,AiFillSafetyCertificate,AiFillTool } from "react-icons/ai";
import {BsGlobe2} from "react-icons/bs";
// import { FaGlobeAmericas } from "react-icons/ai";
const About = () => {
  return (
    <>
 <div className="container-fluid text-center" id="bg">
  <h1 className="heading">About Us</h1>
  <h2 className="heading">What we offer</h2>
  <br/>
  <div className="row">
    <div className="col-sm-4">
      <span className="glyphicon glyphicon-off logo-small" style={{color: "#440303",fontSize: "60px"}}><AiOutlinePoweroff/></span>
      <h3 className="heading">What are we?</h3>
      <p class="font-italic">The Student Art Guide publishes art project ideas, tips, best practice, and helpful learning strategies for high school art students around the world. We feature outstanding student artwork from a wide range of qualifications, including IGCSE, GCSE, A Level, NCEA, AP Studio, and IB Art (if you are interested in submitting your own high school art projects, please read our submission guidelines). The Student Art Guide is classroom-friendly and managed by experienced art educators. Our resources are recommended by leading educational institutions (see below) and have been shared on social media over one million times. Reaching half a million pageviews per month, we are one of the largest high school art education websites in the world, used by a growing number of high school art departments</p>
    </div>
    <div className="col-sm-4">
      <span className="glyphicon glyphicon-heart logo-small" style={{color: "#440303",fontSize: "60px"}}><AiFillHeart/></span>
      <h4 className="heading">LOVE</h4>
      <p class="font-italic">here we love to offer students new oppertunities to explore their talents. We make sure that all provisions are made for the requirements, a professional needs in that particular field. Needless to say that Institute believes in conjugation as faculty & each staff play their role so well that the working culture and support is smooth & soothing giving an ideal ambiance to its students.</p>
    </div>
    <div className="col-sm-4">
      <span className="glyphicon glyphicon-lock logo-small" style={{color: "#440303",fontSize: "60px"}}><AiOutlineFileDone/></span>
      <h4 className="heading">JOB DONE</h4>
      <p class="font-italic">The Student Art Guide is a premier institute bestow a prolific path to the aspirants having creative mind.Minerva make sure that all provisions are made for the requirements, a professional needs in that particular field. Needless to say that Institute believes in conjugation as faculty & each staff play their role so well that the working culture and support is smooth & soothing giving an ideal ambiance to its students.</p>
    </div>
  </div>
   <br></br>
    <div className="row">
    <div className="col-sm-4">
      <span className="glyphicon glyphicon-leaf logo-small"><AiTwotoneHighlight/></span>
      <h4 className="heading">MISSION</h4>
      <p class="font-italic"> The Student Art Guideuses media, art and technology to celebrate the best of humanity, one story at a time. We shine a light on positive role models to help students of all ages realize their own potential to make positive change in the world.</p>
    </div>
    <div className="col-sm-4">
      <span className="glyphicon glyphicon-certificate logo-small"><AiFillSafetyCertificate/></span>
      <h4 className="heading">CERTIFIED</h4>
      <p class="font-italic">The student Art guide is a non-profit educational project that empowers people of all ages to realize their potential to effect positive change in the world.
Since 1995, over 100 million people from 197 countries have participated in The MY HERO Project. Our award-winning programs raise awareness for the amazing work being done by heroes globally and at the grass roots level to address some of the greatest challenges of our time. We work to promote cross-cultural communication, human rights, environmental awareness, tolerance, media literacy and the arts.</p>
    </div>
    <div className="col-sm-4">
      <span className="glyphicon glyphicon-wrench logo-small"><AiFillTool/></span>
      <h4 className="heading">HARD WORK</h4>
      <p class="font-italic">For over a quarter century, The student Art guide has provided hundreds of millions of students access to a safe, commercial-free online venue, where they can discover and share essays, art, audio and films that celebrate positive role models from around the world. Our non-profit educational project showcases those working for human rights, social justice, peace and environmental protection. We honor diverse women, children and men whose accomplishments in the arts, science and technology pave the way for future heroes. Teachers use MY HERO in the classroom and for distance learning to promote values, creativity, self-expression, cross-cultural understanding and an appreciation of diversity with students of all ages and grade levels. Through our website, digital storytelling tools, teacher training, salons, contests, film festival and workshops, we help students gain an understanding of their ability to follow in the footsteps of heroes.</p>
    </div>
  </div>
</div>
</>
  )

};

export default About;
