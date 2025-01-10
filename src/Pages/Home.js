import React from 'react'
import {Link} from 'react-router-dom'

export default function Home() {

    const name="Hansi";

    function getGreeting()
    {
        return "Hello,User!";
    }


  return (
    <div>
        <h1>{name} Welcome to Home Page</h1>

        <h2>{getGreeting()}</h2>

        {/* <h2>{alert("National Institute Of Business Management")}</h2> */}

        <Link to="/About">Go to About Us Page</Link> 
        <br /><br />

        <Link to ="/Contact">Go to Contact Us Page</Link>
    </div>
  )
}
