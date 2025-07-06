import React from react;
import '../styles/Home.css'

function Home () {
    return (
        <div classNme="home">
            <img src="/public/french_girl.png" alt="French Girl" className="home-image"></img>
            <h1> French Made Easy: Learn What Matters </h1>
            <p> 5 practical lessons covering important french expressions!<br />
                Just what you need to get started.
            </p>
            <a href="#course" class="start-button"> Start Here </a>
        </div>
    );
}

export default Home;