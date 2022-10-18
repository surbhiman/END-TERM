import React, { useState, useEffect } from "react";
import "./Home.css";
import contentwriter from "./content writer.jpeg";
import SEOanalyst from "./SEO analyst.jpeg";
import designing from "./designing.jpeg";
import Journalist from './Journalist.jpeg'
import GrowthHacker from './GrowthHacker.jpeg'
import socialworker from './socialworker.jpeg'

const Home = () => {
  return (
    <div id="bg">
      <div>
      <h1 className="text-center1 text-capitalize my-6">Career In Art field</h1>
    <div className="container" id="main_div">
    <div className="row my-1">
  <div className="col-sm">
    <div className="card" >
    
  <img src={contentwriter} alt="..." height="250px" className="card-img-top" />
  
  <div className="card-body">
    <h5 className="card-title">Content Writer</h5>
    <p className="card-text" class="font-italic">A Content Writer is a professional who writes informative and engaging articles to help brands showcase their products. They write on a range of subjects and are responsible for creating the best possible written or visual content, from blog posts to press releases.</p>
    <a href="https://en.wikipedia.org/wiki/Website_content_writer" target="blank" className="btn btn-danger">Description</a>
  </div>
</div></div>
  <div className="col-sm"><div className="card">
    {/* <a href="https://en.wikipedia.org/wiki/Artificial_intelligence" target="blank"> */}
      <img src={SEOanalyst} className="card-img-top" alt="..." height="250px" />
    {/* </a> */}
  <div className="card-body">
    <h5 className="card-title">SEO Analyst</h5>
    <p className="card-text" class="font-italic">The Search Engine Optimization (SEO) Analyst will act as part of the SEO team, identifying and implementing search engine optimization efforts so that keyword searches and organic search engine traffic will funnel more visits to the website.</p>
    <a href="https://en.wikipedia.org/wiki/Search_engine_optimization" target="blank" className="btn btn-danger">Discription</a>
  </div>
</div></div>
  <div className="col-sm"><div className="card">
  <img src={designing} className="card-img-top" alt="..." height="250px" />
  <div className="card-body">
    <h5 className="card-title">Fashion/Interior Designer</h5>
    <p className="card-text" class="font-italic">  Interior design is taking a space & giving it beauty & flow, as well as functional purpose through decoration using art & furniture. Fashion design is taking textiles & creating wearables that accentuate style & personality. Both give art, style, & beauty a home in our culture.</p>
    <a href="https://en.wikipedia.org/wiki/Interior_design" target="blank" className="btn btn-danger">Description</a>
  </div>
</div></div>
</div><br/>
<div className="row">
<div className="col-sm"><div className="card">
  <img src={Journalist} className="card-img-top" alt="..." height="250px" />
  <div className="card-body">
    <h5 className="card-title">Creative Director/Media Manager/Journalist</h5>
    <p className="card-text" class="font-italic"> creative director determines the creative vision of a brand or project and manifests that vision through digital, print and film installations. The job is to maintain a cohesive look and feel of a project—be it an advertising campaign, fashion line, video game or magazine—by ensuring the visuals, messaging and/or interactive and motion designs are on point. A creative director also establishes budgets and timelines and manages client relationships.</p>
    <a href="https://en.wikipedia.org/wiki/Creative_director" target="blank" className="btn btn-danger">Description</a>
  </div>
</div></div>
{/* </div> */}
{/* <div className="row"> */}
<div className="col-sm"><div className="card">
  <img src={GrowthHacker} className="card-img-top" alt="..." height="250px" />
  <div className="card-body">
    <h5 className="card-title">Growth Hacker</h5>
    <p className="card-text" class="font-italic"> Growth hacking (also known as 'growth marketing') is the use of resource-light and cost-effective digital marketing tactics to help grow and retain an active user base, sell products and gain exposure.</p>
    <a href="https://en.wikipedia.org/wiki/Growth_hacking" target="blank" className="btn btn-danger">Description</a>
  </div>
</div></div>
<div className="col-sm"><div className="card">
  <img src={socialworker} className="card-img-top" alt="..." height="250px" />
  <div className="card-body">
    <h5 className="card-title">Social Worker</h5>
    <p className="card-text" class="font-italic">  Social workers help people cope with challenges in their lives. They help with a wide range of situations, such as adopting a child, being diagnosed with a terminal illness, or preventing and treating substance abuse
</p>
    <a href="https://en.wikipedia.org/wiki/Social_work" target="blank" className="btn btn-danger">Description</a>
  </div>
</div></div>
</div>
</div>
</div>
</div>
  );
};

export default Home;
