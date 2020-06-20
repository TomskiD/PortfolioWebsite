import * as React from 'react';
import './style-button.css'

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