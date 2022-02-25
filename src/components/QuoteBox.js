import React, { useState } from 'react';
import quoteBox from "../quoteBox.json";

const getRandom = () => Math.floor(Math.random() * quoteBox.length);

const colors = [ "#845EC2", "#4B4453", "#B0A8B9", "#FF8066", "#3596B5", "#BA3CAF", "#FF9671"]

const QuoteBox = () => {

    const [ quote, setquote ] = useState(quoteBox[getRandom()])

    //const user = users[0];

    const changeUser = () =>{
        setquote(quoteBox[getRandom()])
    }

    const color = colors[Math.floor(Math.random()*6)]

    document.body.style = `background: ${color} `

    return (
        
        <div className='card' style={{color:color}} >
        
        <ul>
            <li><i class="fas fa-quote-left"></i>{quote.quote}</li>
            <li>{quote.author}</li>
       
        </ul>
        <button onClick={changeUser} style={{background: color}}><i class="fas fa-angle-right"></i> </button>
        
        </div>
    );
};



export default QuoteBox;