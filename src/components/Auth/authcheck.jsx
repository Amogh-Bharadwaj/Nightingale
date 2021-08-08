import React from "react";

const AuthCheck= async ()=>{
   let pass=-1;
   let alias="";
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
        console.log("authcheck json:",json);
        if(json.authPass==="true"){pass=1;alias=json.alias}
        else {pass=0;}
    })
    console.log("Pass inside AuthCheck:",alias);

    if(pass>0)return [pass,alias];
}

export default AuthCheck;