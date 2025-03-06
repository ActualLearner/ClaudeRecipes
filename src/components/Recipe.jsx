import React from 'react';
import ReactMarkdown from 'react-markdown';

export default function Recipe({recipe}) {
    return (
        <section className='suggested-recipe-container'>
            <h2>Chef Gemini Recommends:</h2>
            <ReactMarkdown>
            {recipe}
            </ReactMarkdown>
        </section>
    )
}