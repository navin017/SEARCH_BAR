import React from "react";
import "./SearchFinalResult.css"
export const SearchFinalResults =({result})=>{
    return <div className="search-result" onClick={(e)=>alert(`You Clicked on ${result.name}`)}>{result.name}</div>
}