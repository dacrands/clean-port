import React from 'react'


const Landing = () => (

<main className="main">

    <div className="main__info">
        <h1>David Crandall</h1>
        <h3>React / Flask Developer</h3>
        <p>
        From responsive web-design to user authentication, 
        I love all aspects of building a website.
            </p>
        {/* <p>
            This site documents some of my old and perhaps
            new data science projects. Thanks for stopping by!
            </p> */}
    </div>
    <div className="main__side">
        {/* <h3>Links</h3> */}
        <ul>
            <li><a href="http://">Github</a></li>
            <li><a href="http://">Blog</a></li>
            <li><a href="http://">Resume</a></li>
            <li><a href="http://">Contact</a></li>
        </ul>
    </div>
</main>
)

export default Landing;