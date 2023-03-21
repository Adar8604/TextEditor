import React, { useState } from 'react'


export default function Textform(props) {
    const UpperCase = () => {
        //console.log("upper")
        let newtxt = text.toUpperCase();
        setText(newtxt);
    }

    const handleLoClick = ()=>{ 
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleClearClick = ()=>{ 
        let newText = '';
        setText(newText);
    }

    const change = (e) => {
        setText(e.target.value)
    }

    let mystyle={
        border: '2px solid black',
        boxShadow: '5px 5px 5px gray'
    }
    const [text, setText] = useState("");
    return (
        <>
        <div className='container' tyle={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>Textarea</h1>
            <div className="mb-3">
                {/* <label htmlFor="myBox" className="form-label my-2">Textarea</label> */}
                <textarea className="form-control" value={text} onChange={change} id="myBox" rows="12" style={mystyle}></textarea>
            </div>
            <button type="button" disabled={text.length===0} className="btn btn-primary" onClick={UpperCase}>Convert To UpperCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
            </div>

            <div className='container my-2'>
                <h2>Text Summary</h2>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
                <h2>Preview</h2>
                <h6>{text.length>0?text:"Enter Something to preview!"}</h6>
            </div>
        </>
    )
}
