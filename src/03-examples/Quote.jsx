import { useLayoutEffect, useRef, useState } from "react"


export const Quote = ({author,quote}) => {

  const pref=useRef();
  const [boxSize,setBoxSize]=useState({width:0,height:0})

useLayoutEffect(() => {
  const {height,width}=pref.current.getBoundingClientRect();
  setBoxSize({height,width});
  
}, [quote])

  return (
    <>
    <blockquote className="blockquote text-end"
    style={{display:'flex'}}>
        <p ref={pref} className="mb-1">{author}</p>
        <footer className="blockquote-footer">{quote}</footer>
    </blockquote>
    <code>{JSON.stringify(boxSize)}</code>
    </>
  )
}
