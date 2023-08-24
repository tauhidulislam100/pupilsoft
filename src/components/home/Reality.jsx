import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Reality = () => {
  return (
    <div className="wrapper">
      <div className="rounded-text rotating min-h-screen">
        <svg className="circles text-white" viewBox="0 0 400 400">
          <def>
            <path
              id="circle-1"
              d="M250,700.5A450.5,450.5 0 1 11151,700.5A450.5,450.5 0 1 1250,700.5"
            />
            <path
              id="circle-2"
              d="M382,700.5A318.5,318.5 0 1 11019,700.5A318.5,318.5 0 1 1382,700.5"
            />
            <path
              id="circle-3"
              d="M487,700.5A213.5,213.5 0 1 1914,700.5A213.5,213.5 0 1 1487,700.5"
            />
            <path
              id="circle-4"
              d="M567.5,700.5A133,133 0 1 1833.5,700.5A133,133 0 1 1567.5,700.5"
            />
          </def>
          <text className="circles__text circles__text--1">
            <textPath
              className="circles__text-path"
              xmlnsXlink="#circle-1"
              aria-label=""
              textLength="2830"
            >
              And now this tree of ours may grow tall in the woods&nbsp;
            </textPath>
          </text>
          <text className="circles__text circles__text--2">
            <textPath
              className="circles__text-path"
              xmlnsXlink="#circle-2"
              aria-label=""
              textLength="2001"
            >
              Depth over distance every time&nbsp;
            </textPath>
          </text>
          <text className="circles__text circles__text--3">
            <textPath
              className="circles__text-path"
              xmlnsXlink="#circle-3"
              aria-label=""
              textLength="1341"
            >
              But it's the roots that will bind us here&nbsp;
            </textPath>
          </text>
          <text className="circles__text circles__text--4">
            <textPath
              className="circles__text-path"
              xmlnsXlink="#circle-4"
              aria-label=""
              textLength="836"
            >
              Depth over distance was all I asked of you&nbsp;
            </textPath>
          </text>
        </svg>
      </div>
      <div className="rounded-text rotating min-h-screen">
        <svg viewBox="0 0 200 200">
          <path
            id="textPath"
            d="M 85,0 A 85,85 0 0 1 -85,0 A 85,85 0 0 1 85,0"
            transform="translate(100,100)"
            fill="none"
            stroke-width="0"
          ></path>
          <g font-size="13.1px">
            <text text-anchor="start">
              <textPath class="coloring" xlinkHref="#textPath" startOffset="0%">
                - Pupil Soft - Software Company - PUPILSOFT.COM -
                info@pupilsoft.com
              </textPath>
            </text>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Reality;
