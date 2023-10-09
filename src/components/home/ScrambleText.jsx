import React, { useState, useRef, useEffect } from 'react';
class TextScramble {
  constructor(el) {
    this.el = el;
    this.chars = '!<>-_\\/[]{}—=+*^?#________.';
    this.frame = 0;
    this.queue = [];
    this.frameRequest = null;
    this.resolve = null;
    this.update = this.update.bind(this);
    this.randomChar = this.randomChar.bind(this);
  }

  setText(newText) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    this.resolve && this.resolve();
    const promise = new Promise((resolve) => (this.resolve = resolve));
    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = newText[i] || '';
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({ from, to, start, end });
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }

  update() {
    let output = '';
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }
    this.el.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve && this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }

  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }

  cancelAnimation() {
    cancelAnimationFrame(this.frameRequest);
  }
}

const phrases = [
  'We Are a True Partner',
  'In Your Web',
  'And Mobile APP Development.',
];

const TextScrambleComponent = () => {
  const textRef = useRef(null);
  const fxRef = useRef(null);

  useEffect(() => {
    const el = textRef.current;
    fxRef.current = new TextScramble(el);

    let counter = 0;
    const next = () => {
      const currentCounter = counter;
      fxRef.current.setText(phrases[counter]).then(() => {
        const current = phrases[currentCounter];
        const extra = currentCounter === phrases.length - 1 ? 2000 : 0;
        const delay = current.length * 70 + extra;
        setTimeout(next, delay);
      });
      counter = (counter + 1) % phrases.length;
    };
    next();
    return () => {
      fxRef.current.cancelAnimation();
    };
  }, []);

  // Render text
  return (
    <h1
      className="max-w-full w-full overflow-hidden text-4xl text-center sm:text-5xl md:text-6xl font-bold"
      ref={textRef}
    ></h1>
  );
};

export default TextScrambleComponent;
