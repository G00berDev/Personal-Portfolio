import React, { useEffect } from 'react';
import './App2.scss';
import Header from './components/Header';
import SplineScene2 from './components/SplineScene2';

function App2() {
useEffect(() => {
    const boxes = document.querySelectorAll('.box');

    // Apply effect to all '.box' elements (box1)
    boxes.forEach((box) => {
        const spans = box.querySelectorAll('span'); // Select span elements within each box
    
        const handleMouseMove = (e) => {
            let x = e.pageX - box.offsetLeft;
            let y = e.pageY - box.offsetTop;
    
            spans.forEach((span) => {
                span.style.left = `${x}px`;  // Update span position
                span.style.top = `${y}px`;
            });
        };
    
        // Add the mousemove event listener
        box.addEventListener('mousemove', handleMouseMove);
    
        // Cleanup event listener on unmount
        return () => {
            box.removeEventListener('mousemove', handleMouseMove);
        };
    });
    const box2 = document.querySelector('.box2');
    
    if (box2) {
        const spansBox2 = box2.querySelectorAll('span');
    
        const handleMouseMoveBox2 = (e) => {
            let x = e.pageX - box2.offsetLeft;
            let y = e.pageY - box2.offsetTop;
    
            spansBox2.forEach((span) => {
                span.style.left = `${x}px`; 
                span.style.top = `${y}px`;
            });
        };
    
        box2.addEventListener('mousemove', handleMouseMoveBox2);
    
        return () => {
            box2.removeEventListener('mousemove', handleMouseMoveBox2);
        };
    }
    
}, []); // Empty dependency array ensures this effect only runs once on mount

return (
<div className="app">
    <SplineScene2/>
    <Header />
    <main>
    </main>
    <div className="container">
        <div className="box">
        <div className="content">
            <h2>Coding Life</h2>
            <p>
                Hello there my name is Stryder Bateman i've been coding for about 4 years now. I have been very interested in the WebDevelopment field for quite some time I also love working with React and MongoDB for my newer higher level projects such as this one I'm proffecient with JS, HTML, CSS and partially proffecient in Python and C#
            </p>
        </div>
        <span></span> {/* This span will be manipulated on mousemove */}
        </div>
        
        <div className="box2">
        <div className="content2">
            <h2>Personal Life</h2>
            <p>
            Taking a look beyond my coding journey during my junior year in High School I began attending West-Mec NEC and FBLA (Future Business Leaders of America) I also am a two year officer from 2023-2024 I was Vice-President and from 2024 - 2025 I was Treasurer Im currently applied to Barrett ASU and Embry Riddle for Security Software Engineer as I believe thats my calling in this world.
            </p>
        </div>
        <span></span> {/* This span will be manipulated on mousemove */}
        </div>
    </div>
</div>
);
}

export default App2;
