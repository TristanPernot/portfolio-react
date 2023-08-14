import React from 'react';
import './HomePage.scss';

function HomePage() {
    return (
        <>
            <div className='container'>
                <h1 className='container__header'>
                    Hello, my name is Tristan Pernot
                </h1>
                <h3 className='container__subheader'>
                    and welcome to my portfolio
                </h3>
            </div>
            <div className='maincontainer'>
                <h2>
                    Check out some of my projects
                </h2>
                <div className="outercontainer">
                    <div className="innercontainer">
                        <h3>My programing projects</h3>
                    </div>
                    <div className="innercontainer">
                        <h3>My projects done at BrainStation</h3>
                    </div>
                    <div className="innercontainer">
                        <h3>My other projects</h3>
                    </div>
                    <div className="innercontainer">
                        <h3>About Me</h3>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePage;
