import React from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
// import { motion, useCycle } from "framer-motion";
import "./HeroSection.css";

function HeroSection({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headLine,
  description,
  buttonLabel,
  textColor,
  buttonColor,
  shadowBg,
  filterBg,
  img,
  alt,
  imgStart,
  tag,
  shape,
}) {
  return (
    <>
      <div
        className={lightBg ? "home__hero-section" : "home__hero-section darkBg"}
      >
        <div className='container'>
          <div
            className='row home__hero-row'
            style={{
              display: "flex",
              flexDirection: imgStart === "start" ? "row-reverse" : "row",
            }}
          >
            <div className='col'>
              <div
                className='home__hero-text-wrapper'
                style={{ boxShadow: shadowBg, fiter: filterBg }}
              >
                <div className='top-line' style={{ color: textColor }}>
                  {topLine}
                </div>
                <h1 className={lightText ? "heading" : "heading dark"}>
                  {headLine}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? "home__hero-subtitle"
                      : "home__hero-subtitle dark"
                  }
                >
                  {description}
                </p>
                <Link to={tag}>
                  <Button buttonSize='btn--wide' buttonColor={buttonColor}>
                    {buttonLabel}
                  </Button>
                </Link>
              </div>
            </div>

            <div className='col'>
              <div className='home__hero-img-wrapper'>
                <img src={img} alt={alt} className='home__hero-img' />
              </div>
            </div>
          </div>
        </div>
        <div className={shape ? "svgShape" : "not-svgShape"}>
          <div className='custom-shape-divider-bottom-1613737056'>
            <svg
              data-name='Layer 1'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 1200 120'
              preserveAspectRatio='none'
            >
              <path
                d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'
                class='shape-fill'
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
