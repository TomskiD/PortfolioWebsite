import * as React from 'react';
import './styles/style-button.css'

interface ButtonProps  {
    text:string,
}

export const Button = (prop:ButtonProps) => {
    return(
        <button>
            {prop.text}
        </button>
    )
}