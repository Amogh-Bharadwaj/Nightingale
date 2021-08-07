import React from "react";

const AuthCheck= async ()=>{
   let pass=-1;
   await fetch(`http://127.0.0.1:5000/tail/logged-in`,
    {
        method: "GET",
        headers: {
                "Content-type": "application/json;",
                "Authorization": `Bearer ${localStorage.getItem("jwt")}`,
                },
    }
    ).then((response) => response.json())
     .then((json) => {
        if(json.authPass==="true"){pass=1;}
        else {pass=0;}
    })
    console.log("Pass inside AuthCheck:",pass);

    if(pass>0)return pass;
}

export default AuthCheck;