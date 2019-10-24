import React from 'react';
import Card from './card';
import './list.css';

export default function List(props) {
    return (
        <section className='List'>
            <header className='List-header'>
                <h2>
                    {props.header}
                </h2>
            </header>
            <div className='List-cards'>
                {props.cards.map(card => 
                    <Card
                        key={card.id}
                        title={card.title}
                        content={card.content}
                        // cardIdentifier is the id used for deleteting a card
                        cardIdentifier={card.id}
                        // passing onClickDelete to Card component
                        onClickDelete={props.onClickDelete}
                    />
                )}
                <button
                    type='button'
                    className='List-add-button'
                    onClick={() => props.onClickAdd(props.listIdentifier)}
                >
                    + Add Random Card
                </button>
            </div>
        </section>
    )
}

List.defaultProps = {
    onClickAdd: () => {}
};