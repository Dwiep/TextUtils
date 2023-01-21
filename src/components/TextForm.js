import React , { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types'


// props..........................................
export default function TextForm(props) {
    // UpperCase function..................................
    const handleUpClick = () => {
        //console.log("UpperCase was clicked " + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase","success");

        if(text=== ""){
            props.showAlert("Please write something in side the Textbox to run the operation","warning");
        }
    }

    // LowerCase function..................................
    const handleLowClick = () => {
        //console.log("UpperCase was clicked " + text)
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase","success");

        if(text=== ""){
            props.showAlert("Please write something in side the Textbox to run the operation","warning");
        }
    }

    // Binary function..................................  
    const handleBinaryClick = () => { 
        let newText  = '';
        newText = text.split('').map(char => {
            return char.charCodeAt(0).toString(2);
        }).join(' ');
        setText(newText)
        props.showAlert("Converted to Binary","success");

        if(text=== ""){
            props.showAlert("Please write something in side the Textbox to run the operation","warning");
        }
    };


    // Remove Extra Spaces function..................................  
    const handleRemoveExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Removed extra spaces","success");

        if(text=== ""){
            props.showAlert("Please write something in side the Textbox to run the operation","warning");
        }
    }

    // Remove Empty Lines function..................................  
    const handleEmptyLines = () => {
        let newText = text.split(/\r?\n/) // Split input text into an array of lines
        .filter(line => line.trim() !== "") // Filter out lines that are empty or contain only whitespace
        setText(newText.join("\n"))// Join line array into a string
        props.showAlert("Removed extra spaces","success");

        if(text=== ""){
            props.showAlert("Please write something in side the Textbox to run the operation","warning");
        }
    }


    // Reamove Duplicate lines..................................

    const removeDuplicatedLines = () => {
        let newText = '';
        const blocker = {}; // prevents lines dupplication
        const lines = text.split(/\r\n|\n\r|\n|\r/g);
        for (const line of lines) {
            if (blocker.hasOwnProperty(line)) {
                continue;
            }
            blocker[line] = true;
            newText += line + '\n';
        }
        setText(newText);
        props.showAlert("Removed Duplicate Lines","success");

        if(text=== ""){
            props.showAlert("Please write something in side the Textbox to run the operation","warning");
        }
    }

    // Breaking Neaw Lines Function 

    const handleAddBreakLine = () => {
        let newText = text.split('. ').join(".\n\n").split('? ').join("?\n\n");
        setText(newText);
        props.showAlert("Breaking Neaw Liness","success");

        if(text=== ""){
            props.showAlert("Please write something in side the Textbox to run the operation","warning");
        }

    }
    
    // Read function..................................  
    const handleReadClick = () => {
        //console.log("UpperCase was clicked " + text)
        let newText = new SpeechSynthesisUtterance();
        newText.text = text;
        window.speechSynthesis.speak(newText);
        props.showAlert("Reading the text","success");

        if(text=== ""){
            props.showAlert("Please write something in side the Textbox to run the operation","warning");
        }
    }

    // Clear function.................................. 
    const handleClearClick = () => {
        //console.log("UpperCase was clicked " + text)
        let newText = "";
        setText(newText)
        props.showAlert("Cleared the Textbox","success");

    }

    //// Copy function.................................. 
    const handleCopy = () => {
        var text = document.getElementById("exampleForm.ControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied the clipboard","success");

        if(text=== ""){
            props.showAlert("Please write something in side the Textbox to run the operation","warning");
        }
    }


    // event handler......................................
    const handleOnChange = (event) => {
        //console.log("On Change ")
        setText(event.target.value)
    }


    // Declare a new state variable, which we'll call "text"
    const [text, setText] = useState('');
    //text = "new text" ; //wrong way to change the state
    //setText("new text") ; //right way to change the state

    // create array of words.............
    const words = text.split(/\s+/);
    //word counter.................  
    let wordCount = 0;
    words.forEach((word) => {
          if (word.trim() !== '') {
            wordCount++;
          }
    });
    // reading Timer.............. 
    let readTime = 0;
    words.forEach((word) => {
        if (word.trim() !== '') {
          readTime = 0.008*wordCount;
        }
    });
    


  return (
    <>
        <div className='container' style={{color: props.mode=== 'dark'?'white':'black'}}>
            <Form>
                <h1>{props.heading} </h1>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea"  value= {text} onChange={handleOnChange} rows={15}  style={{backgroundColor: props.mode=== 'dark'?'#212124':'white', color: props.mode=== 'dark'?'white':'black'}} />
                </Form.Group>
                <Button className='btn btn-secondary mx-2 my-1' onClick={handleUpClick}>
                    Convert to UpperCase
                </Button>
                <Button className='btn btn-secondary mx-2 my-1' onClick={handleLowClick}>
                    Convert to LowerCase
                </Button>  
                <Button className='btn btn-secondary mx-2 my-1' onClick={handleBinaryClick}>
                    Convert to Binary
                </Button>
                <Button disabled={text.length === 0} className='btn btn-secondary mx-2 my-1' onClick={handleRemoveExtraSpaces}>
                    Remove Extra Spaces
                </Button>  
                <Button disabled={text.length === 0} className='btn btn-secondary mx-2 my-1' onClick={removeDuplicatedLines}>
                    Remove Duplicate Lines
                </Button>
                <Button disabled={text.length === 0} className='btn btn-secondary mx-2 my-1' onClick={handleEmptyLines}>
                    Remove Empty Lines
                </Button>
                <Button disabled={text.length === 0} className='btn btn-secondary mx-2 my-1' onClick={handleAddBreakLine}>
                    Add Line Break 
                </Button>
                <Button disabled={text.length === 0} className='btn btn-secondary mx-2 my-1' onClick={handleReadClick}>
                    Read the text
                </Button>
                <Button disabled={text.length === 0} className='btn btn-danger mx-2 my-1' onClick={handleClearClick}>
                    Clear
                </Button> 
                <Button disabled={text.length === 0} className='btn btn-success mx-2 my-1' onClick={handleCopy}>
                    Copy Text
                </Button>
            </Form>
        </div>
        <div className='container my-5' style={{color: props.mode=== 'dark'?'white':'black'}}>
            <h2>Your Text Summury</h2>
            <div className='container my-3'>
                <p><b>{wordCount}</b> words and <b>{text.length}</b> characters  {/*<b>{text.split("\r\n|\r|\n").length}</b> Lines*/ } </p>
                <p><b>{readTime}</b> Minutes to read</p>
            </div>
        </div>
        <div className='container my-5' style={{color: props.mode=== 'dark'?'white':'black'}}>
            <h2>Preview</h2>
            <div className='container my-3' onChange={handleOnChange}>
            
             <p  >{text.length>0?text:"Write something in the textarea above to preview it here!"}</p>
            </div>
            
        </div>
     
    </>
  )
}

TextForm.propTypes = {
    heading: PropTypes.string.isRequired
}

TextForm.defaultProps = {
    title: 'Set title here'
  }
