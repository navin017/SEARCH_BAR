import React from "react";
import "./SearchResultList.css"
import { SearchFinalResults } from "./SearchFinalResuts";
export const SearchResult = ({results})=>{
    
    return(
        <div className="result-list">
            {
                results.map((result,id)=>{
                    return<SearchFinalResults result ={result} key={id}/>
                })
            }
        </div>
    )
}