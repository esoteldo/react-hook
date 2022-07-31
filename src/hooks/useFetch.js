import { useEffect, useState } from "react";


export const useFetch = (url) => {

    const [state,setState]=useState({
        data:null,
        isLoading:true,
        hasError:null
    })

    const getFetch=async()=>{

        setState({
            ...setState,
            isLoading:true
        })

        try{
            const res = await fetch(url);
             const data=await  res.json();

            setState({
                data,
                isLoading:false,
                hasError: null,
            })

            }catch(e) {
                    console.log("Can't connect to backend try latter:",e);
        
                }
        
      
    }

useEffect(() => {

getFetch();
  
}, [url])


  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError
  };
}
