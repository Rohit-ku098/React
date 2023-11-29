import React from "react";
import { useLoaderData } from "react-router-dom";

function Github(){
   const data = useLoaderData()
    return(
        <>
            <div className="img">
                <img src={data.avatar_url} alt="github" width={300} />
            </div>
            <div className="follower">
                Github follower : {data.followers}
            </div>
        </>
    )
}

export default Github;

export  const Githubdata = async ()=>{
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}