import React,{useState}from "react";
import {FaSearch} from "react-icons/fa";
import './SearchBar.css'
export const SearchBar =({setResults})=>{
    const[input,setInput] = useState("")

    const fetchData = (value)=>{
        fetch("https://jsonplaceholder.typicode.com/users").then((response)=>response.json()).then(json=>{
            
            const results = json.filter((user)=>{
                return value && user.name && user.name.toLowerCase().includes(value)
            })
            setResults(results)
        })
    }
    const handleChange = (value)=>{
        setInput(value)
        fetchData(value)
    }

    return(
        <div className="input">
            <FaSearch id="search-icon"/>
            <input
            className="textbox"
            placeholder="Type to search...."
            value={input}
            onChange={(e)=>handleChange(e.target.value)}
            >

            </input>
        </div>

    );
}
