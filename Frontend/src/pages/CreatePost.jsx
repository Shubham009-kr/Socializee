

const CreatePost = () => {
    
  return (
    <section className="w-full max-w-full h-full flex flex-col items-center justify-start bg-gray-700 text-[#ffffff]">
      {/* <img src="https://plus.unsplash.com/premium_photo-1710286469759-a15530a4607d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Create Post" className="w-1/2 h-full object-cover flex items-center justify-center"/> */}
        <div className="w-1/2 h-full border-1 border-t-0 border-b-0 border-gray-700 outline-gray-800 shadow-xl/30 flex items-center justify-start flex-col bg-cover bg-[url(https://plus.unsplash.com/premium_photo-1710286469759-a15530a4607d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]">
            <div className="w-full h-full flex items-center justify-center flex-col bg-gradient-to-b from-black-100 to-gray-900 gap-10">
              <h1 className="flex items-center justify-center flex-col"><span className="text-7xl climate-crisis">CREATE</span> <span className="text-8xl climate-crisis">POST</span> </h1>
              <div className="w-1/2 h-1/3 rounded-3xl shadow-2xl border-1 border-gray-500 border-t-0 border-b-2 flex items-center justify-center flex-col bg-gradient-to-b from-gray-600 to-gray-950">
                <form className="w-full h-full flex flex-col items-center justify-center gap-4">
                  <label className="border-2 border-gray-600 rounded-xl w-2/3 h-1/3 bg-gray-950 flex items-center justify-center cursor-pointer text-gray-300 hover:bg-gray-800 transition-colors">
                    <span className="text-lg comfortaa">Add Image</span>
                    <input type="file" name="post-image" accept="image/*" className="hidden" />
                  </label>
                  <input type="text" name="caption" placeholder="Enter caption" required 
                  className="w-2/3 h-[5vh] bg-gray-950 rounded-[8px] shadow-2xl border-gray-700 border-2 comfortaa text-center placeholder:text-center"/>
                  <button type="submit" className="comfortaa w-2/3 h-[5vh] bg-gray-950 rounded-[8px] shadow-2xl border-gray-700 border-2">Create Post</button>
                </form>
              </div>
              <div className="w-1/2 h-1/5 rounded-3xl shadow-2xl border-1 border-gray-600 border-t-0 border-b-2 flex items-center justify-center gap-4 bg-gradient-to-b from-gray-800 to-gray-950">
                <img src="https://images.unsplash.com/photo-1636517687963-5299dab44ed4?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" 
                className="w-[110px] h-[110px] object-cover rounded-[8px] hover:scale-110 transition-transform duration-250"/>
                <img src="https://images.unsplash.com/photo-1709290649154-54c725bd4484?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" 
                className="w-[110px] h-[110px] object-cover rounded-[8px] hover:scale-110 transition-transform duration-250"/>
                <img src="https://images.unsplash.com/photo-1632516643720-e7f5d7d6ecc9?q=80&w=711&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" 
                className="w-[110px] h-[110px] object-cover rounded-[8px] hover:scale-110 transition-transform duration-250"/>
              </div>
            </div>
            <div>
              
            </div>
            {/* <h1 className="">
            <span className="text-2xl">Create Post</span>
            </h1>
            <form className="w-full h-full flex flex-col items-center justify-center gap-4">
                <input type="file" name="post-image" accept="image/*" 
                className="border-1 border-amber-200 rounded-xl w-1/3 h-1/3"/>
                <input type="text" name="caption" placeholder="Enter caption" required />
                <button type="submit">Create Post</button>
            </form> */}
        </div>

    </section>
  )
}

export default CreatePost