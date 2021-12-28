import React from 'react';

export const ShowIncrement = React.memo(({increment}) => {
    console.log("Me volví a generar :(");
    
    return (
        <div>
            <button 
                onClick={()=>{
                    increment(5);
                }}
                className='btn btn-primary'>
                +1
            </button>
        </div>
    )
}
)