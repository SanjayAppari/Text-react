import React , {useState} from 'react'

export default function Textform(props) {

    const [text,setText] = useState("Enter Your Text");

    const handleOnchange = (event)=>{
        setText(event.target.value)
    }

    const handleUpcase = ()=>{
        let newText = text.toLocaleUpperCase();
        setText(newText)
        props.showAlert("Converted To UpperCase","success");
    }

    const handleLowcase = ()=>{
        let newText = text.toLocaleLowerCase();
        setText(newText)
        props.showAlert("Converted To LowerCase","success");
    }

    const handleClear = ()=>{
        let newText = "";
        setText(newText)
        props.showAlert("Text Was Cleared","success");
    }

    const handleCopy = ()=>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Was Copied","success");
    }

    const handleExtraSpaces = ()=>{
        let txt = text.split(/[  ]+/);
        setText(txt.join(" "));
        props.showAlert("Removed Extra Spaces","success");
    }

    
    return (
        <>
        <div className="container">
            <h3>{props.heading}</h3>
            <div className="mb-3 mt-3">
                <textarea className={`form-control bg-${props.mode} text-${props.modeReverse}`} value={text} id="myBox" onChange={handleOnchange} rows="13"></textarea>
            </div>
            <button className="btn btn-primary me-3 mt-2" onClick={handleUpcase}>Convert To Upper</button>
            <button className="btn btn-primary me-3 mt-2" onClick={handleLowcase}>Convert To Lower</button>
            <button className="btn btn-primary me-3 mt-2" onClick={handleClear}>Clear Text</button>
            <button className="btn btn-primary me-3 mt-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button className="btn btn-primary mt-2" onClick={handleCopy}>Copy Text</button>
        </div>
        <div className="container my-4">
            <h4>Your Text Details</h4>
            <p>{text.length===0?0:text.split(" ").length} Words and {text.length} Characters</p> 
            <p>{ text.length===0?0:0.008 * text.split(" ").length} Minutes Read</p>
        </div>
        </>

        
    )
}
