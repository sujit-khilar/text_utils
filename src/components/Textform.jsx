import React, {useState} from 'react'


const Textform=(props)=>{
  
  const handleUpClick=()=>{
    // console.log('uppercase was clicked'+text);
    let newtext=text.toUpperCase();
    setText(newtext)
    props.showAlert("converted to uppercase",'success');
  }
  const handlelcClick=()=>{
    // console.log('lowercase was clicked'+text);
    let newtext=text.toLowerCase();
    setText(newtext)
    props.showAlert('converted to lowercase','success');
  }
  const handleclearclick=()=>{
    let newText='';
    setText(newText)
    props.showAlert('Text cleared','success');
  }
  const handleonChange=(event)=>{
    // console.log('on change');
    setText(event.target.value);
  }
  const handlecopy=()=>{
    console.log('i am copy')
    var text=document.getElementById('mybox');
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert('copied to clipboard','success');
  }
  const handleExtraspaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert('Extra spaces removed','success');
  }

  const[text,setText]=useState(' ');
  // text='newtext'; //wrong way to change the state
  // setText('new text'); //correct way to cahnge the stete
  return (
    <>
    <div className='container'style={{color:props.mode==='dark'?'white':'black'}}>
        <h1 className='mb-3'>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleonChange} id="mybox" style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'black'}} rows="7" ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handlelcClick}>convert to lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>convert to uppercase</button>
        <button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleclearclick}>clear</button>
        <button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handlecopy}>Copy Text</button>
        <button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleExtraspaces}>Clear Extra Spaces</button>

    </div>
    <div className='container my-3'style={{color:props.mode==='dark'?'white':'black'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").filter((element)=>{return element.length !==0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  )

}
export default Textform


