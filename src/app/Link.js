'use client'
import { useState } from "react";
import { useContext } from "react";

function Link({count, link, setLinks, platform}) {

    function updateLink(count, text){
        setLinks(link.link)
    }

    return(
        (
        <div className="w-full mt-5 bg-gray-50 rounded-lg h-fit p-5">
            <span className="flex justify-between">
                <p className="font-semibold text-lg">Link #{count}</p>
                <button onClick={()=>{
                    setLinks(link.filter((e) => e.id != count));
                }}>Remove</button>
            </span>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col pl-1 pt-5">
                <label>Platform</label>
                <select className="mt-4 mb-4 border-slate-200 border-2 h-10">
                    <option>Github</option>
                    <option>Youtube</option>
                    <option>Linkdin</option>
                </select>
                <label>Link</label>
                <input className="mt-4 border-2 border-slate-200  pt-2 pb-2 p-1.5" type="text" value={link.link} onChange={(e) => setLinks(e.target.value)}></input>
            </form>
        </div>)
    )
}


export default Link