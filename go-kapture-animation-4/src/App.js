import React, { useRef, useEffect, useState } from 'react';
import './App.css';

import { TweenMax } from 'gsap';

const App = () => {
  let logoItem1 = useRef(null);
  let logoItem2 = useRef(null);
  let logoItem3 = useRef(null);
  let logoItem4 = useRef(null);
  let logoItem5 = useRef(null);
  let logoItem6 = useRef(null);
  let logoItem7 = useRef(null);
  let logoItem8 = useRef(null);
  let logoItem9 = useRef(null);
  let logoItem10 = useRef(null);

  const handleReload=()=>{
    TweenMax.to(logoItem2, 0, { css: { position:"relative" } })
    setTimeout(handleReload1,1000);
  }
  const handleReload1 = () => {
    TweenMax.to(logoItem1, 3, { css: { top:"0px", right:"0px", opacity: "1", transform: "rotateZ(0) scale(1)" } })
    setTimeout(handleReload2,3000);
  }
  const handleReload2 = () => {
    TweenMax.to(logoItem3, 3, { css: { top:"0px", right:"100px", opacity: "1", transform: "rotateZ(0) scale(1)" } })
    setTimeout(handleReload3,3000);
  }
  const handleReload3 = () => {
    TweenMax.to(logoItem4, 3, { css: { top:"0px", right:"200px", opacity: "1", transform: "rotateZ(0) scale(1)" } })
    setTimeout(handleReload4,3000);
  }
  const handleReload4 = () => {
    TweenMax.to(logoItem5, 3, { css: { top:"100px", right:"0px", opacity: "1", transform: "rotateZ(0) scale(1)" } })
    setTimeout(handleReload5,3000);
  }
  const handleReload5 = () => {
    TweenMax.to(logoItem6, 3, { css: { top:"100px", right:"100px", opacity: "1", transform: "rotateZ(0) scale(1)" } })
    setTimeout(handleReload6,3000);
  }
  const handleReload6 = () => {
    TweenMax.to(logoItem7, 3, { css: { top:"100px", right:"200px", opacity: "1", transform: "rotateZ(0) scale(1)" } })
    setTimeout(handleReload7,3000);
  }
  const handleReload7 = () => {
    TweenMax.to(logoItem8, 3, { css: { top:"200px", right:"0px", opacity: "1", transform: "rotateZ(0) scale(1)" } })
    setTimeout(handleReload8,3000);
  }
  const handleReload8 = () => {
    TweenMax.to(logoItem9, 3, { css: { top:"200px", right:"100px", opacity: "1", transform: "rotateZ(0) scale(1)" } })
    setTimeout(handleReload9,3000);
  }
  const handleReload9 = () => {
    TweenMax.to(logoItem10, 3, { css: { top:"200px", right:"200px", opacity: "1", transform: "rotateZ(0) scale(1)" } })
  }

  useEffect(handleReload, []);

  function getRandomPair() {
    const randomValue = Math.random();
    let top, right;

    if (randomValue < 0.25) {
      top = 0;
      right = Math.floor(Math.random() * 101);
    } else if (randomValue < 0.5) {
      right = 0;
      top = Math.floor(Math.random() * 101);
    } else if (randomValue < 0.75) {
      top = 105;
      right = Math.floor(Math.random() * 101);
    } else {
      right = 105;
      top = Math.floor(Math.random() * 101);
    }

    return { top, right };
  }

  return (
    <div style={{ display: "flex", justifyContent: "center", height: "100vh", alignItems: "center" }}>
      <div className='divu-container' ref={e => logoItem2 = e} >
        <div style={{ position: "absolute", top: `${getRandomPair().top}vh`, right: `${getRandomPair().right}vw` }} className='divu1' ref={e => logoItem1 = e} />
        <div style={{ position: "absolute", top: `${getRandomPair().top}vh`, right: `${getRandomPair().right}vw` }} className='divu2' ref={e => logoItem3 = e} />
        <div style={{ position: "absolute", top: `${getRandomPair().top}vh`, right: `${getRandomPair().right}vw` }} className='divu3' ref={e => logoItem4 = e} />
        <div style={{ position: "absolute", top: `${getRandomPair().top}vh`, right: `${getRandomPair().right}vw` }} className='divu4' ref={e => logoItem5 = e} />
        <div style={{ position: "absolute", top: `${getRandomPair().top}vh`, right: `${getRandomPair().right}vw` }} className='divu5' ref={e => logoItem6 = e} />
        <div style={{ position: "absolute", top: `${getRandomPair().top}vh`, right: `${getRandomPair().right}vw` }} className='divu6' ref={e => logoItem7 = e} />
        <div style={{ position: "absolute", top: `${getRandomPair().top}vh`, right: `${getRandomPair().right}vw` }} className='divu7' ref={e => logoItem8 = e} />
        <div style={{ position: "absolute", top: `${getRandomPair().top}vh`, right: `${getRandomPair().right}vw` }} className='divu8' ref={e => logoItem9 = e} />
        <div style={{ position: "absolute", top: `${getRandomPair().top}vh`, right: `${getRandomPair().right}vw` }} className='divu9' ref={e => logoItem10 = e} />
      </div>
    </div>
  );
};

export default App;
