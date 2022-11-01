import React from "react"


export default function SearchMovie() {


    return (
        <form className="form">
            <label className="label" htmlFor="query">Movie Name</label>
            <input type="text" name="query" placeholder="i.e. Jurassic Park" className="input"></input>
            <button type="submit" className="button">Search</button>
        </form>
    )
}