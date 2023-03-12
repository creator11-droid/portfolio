import React from "react";
import "./experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What skills i have</h5>
      <h2>My experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3> Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4>Javascript</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__detail-icon"/>
              <div>
                <h4>Html</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__detail-icon"/>
              <div>
                <h4>Css</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__detail-icon"/>
              <div>
                
                <h4>Bootstrap</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__detail-icon"/>
              <div>
                <h4>React</h4>
                <small>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__detail-icon"/>
              <div>
                <h4>Node js</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__detail-icon"/>
              <div>
                
                <h4>MongoDB</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__detail-icon"/>
              <div>
                <h4>mySQL</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__detail-icon"/>
              <div>
                <h4>Express js</h4>
                <small>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
