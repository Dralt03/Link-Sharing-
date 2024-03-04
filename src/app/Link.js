function Link({count, OnRemove}) {
    
    
    return(
        (
        <div className="w-full mt-5 bg-gray-50 rounded-lg h-fit p-5">
            <span className="flex justify-between">
                <p className="font-semibold text-lg">Link #{count}</p>
                <button onClick={() => OnRemove(count)}>Remove</button>
            </span>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col pl-1 pt-5">
                <label>Platform</label>
                <select className="mt-4 mb-4 border-slate-200 border-2 h-10">
                    <option>Github</option>
                    <option>X</option>
                    <option>Facebook</option>
                    <option>Instagram</option>
                    <option>Youtube</option>
                    <option>Linkdin</option>
                </select>
                <label>Link</label>
                <input className="mt-4 border-2 border-slate-200  pt-2 pb-2 p-1.5" type="text" ></input>
            </form>
        </div>)
    )
}


export default Link