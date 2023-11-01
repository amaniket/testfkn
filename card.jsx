import React, { useState } from 'react'
import './card.css'

const data = [
    {
        question: 'Faîtes le choix de l’efficacité en digitalisant et automatisant tous vos flux B2B',
        answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing.',
    },
    {
        question: 'Pilotez sereinement vos flux EDI',
        answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing.',
    },
    {
        question: 'Reprenez le contrôle par la flexibilité',
        answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing.',
    }
]

const Card = () => {
    const [select, setSelect] = useState(null);

    const toggle = (i) => {
        if (select === i) {
            setSelect(null);
        } else {
            setSelect(i);
        }
    };

    return (
        <div className="full-screen">
            <img src="img1" alt="Your Image" className="left-image" />
            <div className="wrapper">
                <div className="accordion">
                    {data.map((item, i) => (
                        <div className={`item ${select === i ? 'open' : ''}`} key={i}>
                            <div className="title" onClick={() => toggle(i)}>
                                <h2>{item.question}</h2>
                                <span>{select === i ? '-' : '+'}</span>
                            </div>
                            <div className={`content ${select === i ? 'show' : ''}`}>{item.answer}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Card;
