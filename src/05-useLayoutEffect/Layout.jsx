import { LoadingQuote } from "../03-examples/LoadingQuote";
import { Quote } from "../03-examples/Quote";
import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch"



export const Layout = () => {
  
    const {counter,reset,decrementar,incrementar}=useCounter(1);

     const {data,isLoading,hasError}=useFetch(`https://breakingbadapi.com/api/quotes/${counter}`); 

     /* console.log(data,isLoading,hasError); */
    const {author, quote}=!!data && data[0];


    

  return (
    <>
    <h2>Breaking Bad Hooks</h2>
    <hr />
    {
    isLoading
    ?(
        <LoadingQuote/>
        
    )
    :(
        <Quote author={author} quote={quote}/>
    
    )
    }

    <button className="btn btn-primary" onClick={incrementar}>
      Next quote
    </button>
    

    </>
  )
}