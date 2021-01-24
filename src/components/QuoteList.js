import React, { useEffect, useState } from 'react';
import './QuoteList.css';
import Quote from './Quotes.js';



    function QuoteList() {

        const [quoteList, setQuoteList] = useState([]);
        
        useEffect(() => {
            fetch("https://type.fit/api/quotes")
                .then((res) => res.json())
                .then((data) => {                
                    setQuoteList(data.slice(0, 9));
                });
        }, []);

        return (
            <div className="QuoteList">
                <h3>Quote List</h3>
                {quoteList.map((quote, i) => (
                    <Quote
                        key={i}
                        author={quote.author}
                        text={quote.text}
                        date={quote.date}
                    />
                ))}
            </div>
        );
    }

    export default QuoteList;