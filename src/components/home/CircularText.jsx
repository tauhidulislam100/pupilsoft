import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

const skills = [
  { title: 'Html', progress: '90' },
  { title: 'CSS', progress: '90' },
  { title: 'Javascript', progress: '90' },
  { title: 'React', progress: '90' },
  { title: 'NextJS', progress: '90' },
  { title: 'Sass', progress: '90' },
  { title: 'TailwindCSS', progress: '90' },
  { title: 'Redux', progress: '90' },
];

const CircularText = () => {
  const [isHovered, setIsHovered] = useState(false);
  const component = useRef(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    // gsap.to('#circles-wrapper', { display: 'none', duration: 2 });
    // gsap.to('#skills', { display: 'block', duration: 2 });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    const DOM = {
      enterCtrl: document.querySelector('.demo-2'),
    };

    if (DOM.enterCtrl) {
      class Intro {
        constructor(el) {
          this.DOM = { el: el };
          this.DOM.circleText = [
            ...this.DOM.el.querySelectorAll('text.circles__text'),
          ];
          this.circleTextTotal = this.DOM.circleText.length;
          this.setup();
        }
        setup() {
          gsap.set(this.DOM.circleText, { transformOrigin: '50% 50%' });
          gsap.set(this.DOM.circleText, { opacity: 0 });

          this.initEvents();
        }

        initEvents() {
          this.enterMouseEnterEv = () => {
            gsap.killTweensOf(this.DOM.circleText);

            gsap.to(this.DOM.circleText, {
              duration: 5,
              ease: 'expo',
              scale: 1.15,
              rotation: (i) => (i % 2 ? '+=180' : '+=160'),
              opacity: 0.4,
            });
          };
          this.enterMouseLeaveEv = () => {
            gsap.to(this.DOM.circleText, {
              duration: 1,
              ease: 'expo',
              scale: 1,
              rotation: (i) => (i % 2 ? '+=120' : '+=120'),
              opacity: 1,
              stagger: {
                amount: -0.2,
              },
            });
          };

          DOM.enterCtrl.addEventListener('mouseenter', this.enterMouseEnterEv);
          //   DOM.enterCtrl.addEventListener('mouseleave', this.enterMouseLeaveEv);

          this.enterClickEv = () => this.enter();
          //   DOM.enterCtrl.addEventListener('click', this.enterClickEv);
        }
        start() {
          this.startTL = gsap
            .timeline()
            .addLabel('start', 0)
            .to(
              this.DOM.circleText,
              {
                duration: 5,
                ease: 'expo.inOut',
                rotation: (i) => (i % 2 ? -90 : 90),
                stagger: {
                  amount: 0.8,
                },
              },
              'start'
            )
            .to(
              this.DOM.circleText,
              {
                duration: 5,
                ease: 'expo.inOut',
                startAt: { opacity: 0, scale: 0.8 },
                scale: 1,
                opacity: 1,
                stagger: {
                  amount: 0.8,
                },
              },
              'start'
            )
            .add(() => {
              gsap.set(DOM.enterCtrl, { pointerEvents: 'auto' });
            }, 'start+=1');
        }
        enter() {
          if (this.startTL) this.startTL.kill();

          gsap.set(DOM.enterCtrl, { pointerEvents: 'none' });
          DOM.enterCtrl.removeEventListener(
            'mouseenter',
            this.enterMouseEnterEv
          );
          DOM.enterCtrl.removeEventListener(
            'mouseleave',
            this.enterMouseLeaveEv
          );

          gsap
            .timeline()
            .addLabel('start', 0)
            .to(
              DOM.enterCtrl,
              {
                duration: 5,
                ease: 'back.in',
                scale: 0.2,
                opacity: 0,
              },
              'start'
            )
            .to(
              this.DOM.circleText,
              {
                duration: 3,
                ease: 'back.in',
                scale: 0,
                opacity: 0,
                stagger: {
                  amount: 0.8,
                },
              },
              'start'
            );
        }
      }

      const intro = () => {
        new Intro(document.querySelector('.circles'));
      };

      intro();
    }
  }, []);

  useLayoutEffect(() => {
    // let ctx = gsap.context(() => {
    gsap
      .timeline({ repeat: -1 })
      .fromTo(
        '.ml1 .letters',
        {
          scale: 0.3,
          opacity: 0,
          translateZ: 0,
        },
        {
          scale: 1,
          opacity: 1,
          translateZ: 0,
          ease: 'expo.out',
          duration: 0.9,
          stagger: (i) => 0.07 * (i + 1),
        }
      )
      .fromTo(
        '.ml1 .line',
        {
          scaleX: 0,
          opacity: 0.5,
        },
        {
          scaleX: 1,
          opacity: 1,
          ease: 'expo.out',
          duration: 0.7,
          stagger: (i, targets, len) => 0.08 * (len - i),
          offset: '-=0.875',
        }
      )
      .to('.ml1', {
        opacity: 0,
        ease: 'expo.out',
        duration: 1,
        delay: 1,
      });

    gsap
      .timeline({ repeat: -1 })
      .to('.ml5 .line', {
        opacity: 1,
        scaleX: 1,
        ease: 'expo.inOut',
        duration: 0.7,
      })
      .to('.ml5 .line', {
        duration: 0.6,
        ease: 'expo.out',
        translateY: (i) => `${-0.625 + 0.625 * 2 * i}em`,
      })
      .to('.ml5 .ampersand', {
        opacity: 1,
        scaleY: 1,
        ease: 'expo.out',
        duration: 0.6,
        offset: '-=0.6',
      })
      .to('.ml5 .letters-left', {
        opacity: 1,
        translateX: 0,
        ease: 'expo.out',
        duration: 0.6,
        offset: '-=0.3',
      })
      .to('.ml5 .letters-right', {
        opacity: 1,
        translateX: 0,
        ease: 'expo.out',
        duration: 0.6,
        offset: '-=0.6',
      })
      .to('.ml5', {
        opacity: 0,
        ease: 'expo.out',
        duration: 1,
        delay: 1,
      });
    // }, component);
    // return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    gsap.from('.progress', { width: 0, duration: 1 });
  }, []);

  console.log(isHovered);
  return (
    <>
      {!isHovered && (
        <div
          className={`relative demo-2 text-7xl w-full h-screen overflow-hidden perspective-1000`}
        >
          <div id="circles-wrapper" className={`text-7xl font-light`}>
            <button
              onClick={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="z-50 absolute w-[80px] h-[80px] hover:w-[96px] hover:h-[96px] transition-all duration-300 ease-in-out rounded-full text-primary bg-primary/20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-base font-medium"
            >
              Enter
            </button>
            <svg
              className="trigger circles -translate-x-1/2 w-full h-full pointer-events-none absolute"
              viewBox="0 0 1400 1400"
            >
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
                  href="#circle-1"
                  aria-label=""
                  textLength="2830"
                >
                  And now of ours may grow tall in the woods&nbsp;
                </textPath>
              </text>
              <text className="circles__text circles__text--2">
                <textPath
                  className="circles__text-path"
                  href="#circle-2"
                  aria-label=""
                  textLength="2001"
                >
                  Depth over distance every time&nbsp;
                </textPath>
              </text>
              <text className="circles__text circles__text--3">
                <textPath
                  className="circles__text-path"
                  href="#circle-3"
                  aria-label=""
                  textLength="1341"
                >
                  But it's the roots that will bind us here&nbsp;
                </textPath>
              </text>
              <text className="circles__text circles__text--4">
                <textPath
                  className="circles__text-path"
                  href="#circle-4"
                  aria-label=""
                  textLength="836"
                >
                  Depth over all I asked of you&nbsp;
                </textPath>
              </text>
            </svg>
          </div>
        </div>
      )}
      {isHovered && (
        <div className={`container mx-auto h-screen pt-20`}>
          <h1 className="ml5">
            <span className="text-wrapper">
              <span className="line line1"></span>
              {/* <span className="letters letters-left">Signal</span> */}
              <span className="letters ampersand inline-block">Skills</span>
              {/* <span className="letters letters-right">Noise</span> */}
              <span className="line line2"></span>
            </span>
          </h1>
          <div className="grid grid-cols-2 gap-10 mt-14">
            {skills.map((itm, idx) => (
              <div key={`skills_${idx}`} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="uppercase font-medium">{itm.title}</span>
                  <span className="">{itm.progress}%</span>
                </div>
                <div className="w-full min-h-1.5 h-2.5 bg-gray-300 border border-secondary/20">
                  <div
                    className={`w-4/5 h-full progress bg-gradient-to-l from-primary via-primary to-slate-200 duration-1000`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default CircularText;
