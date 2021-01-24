import React, { useState } from 'react';
import "./Votes.css";

function Votes() {

    const [chocVotes, setChocCount] = useState(0);
    const [vanVotes, setVanCount] = useState(0);
    const [strawVotes, setStrawCount] = useState(0);

    function upChoc() {
        setChocCount(chocVotes + 1);
    }
    function upVan() {
        setVanCount(vanVotes + 1);
    }
    function upStraw() {
        setStrawCount(strawVotes + 1);
    } 
    function reset() {
        setChocCount(0);
        setVanCount(0);
        setStrawCount(0);
    }

    return (
        <div className="Votes">
            <h3>Chocolate: {chocVotes} ({chocVotes / (chocVotes + vanVotes + strawVotes) * 100})%</h3>
            <h3>Vanilla: {vanVotes} ({vanVotes / (chocVotes + vanVotes + strawVotes) * 100})%</h3>
            <h3>Strawberry: {strawVotes} ({strawVotes / (chocVotes + vanVotes + strawVotes) * 100})%</h3>
            <p>
                <button onClick={upChoc}>Chocolate</button>
                <button onClick={upVan}>Vanilla</button>
                <button onClick={upStraw}>Strawberry</button>               
            </p>
            <p>
                {vanVotes, strawVotes, chocVotes !== 0 &&
                    <button onClick={reset}>Reset Votes</button>}
            </p>

        </div>
        );
}

export default Votes;