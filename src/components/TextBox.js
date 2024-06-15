import React, { useState } from 'react'

export default function TextBox () {
    const [text , setText] = useState('')

   const valueOnChange = (e) =>{
        setText(e.target.value)
    }

    const convertToUpperCase = () =>{
        setText(text.toUpperCase())
    }
    return (
        <>
        <div className='container mb-3 my-3'>
            <textarea className="form-control" value={text} place holder="Leave a comment here" onChange={valueOnChange} id="floatingTextarea"></textarea>
            <button type="button" className="btn btn-primary my-3" onClick={convertToUpperCase}>Convert to upperCase</button>
            <p>{text}</p>
        </div>
        
        </>
    )
}