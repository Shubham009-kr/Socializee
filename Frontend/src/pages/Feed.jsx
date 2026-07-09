import React, { useState } from 'react'

const Feed = () => {
    const [posts, setPosts] = useState([
        {
            _id:"1",
            image:"https://plus.unsplash.com/premium_vector-1711987575704-af36af537a3f?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            caption:"Eyes are for all, misses none. Beauty lies within, not in the sight but in the vision."
        }
    ])
  return (
    <section className="w-full h-full flex items-center justify-center text-white bg-yellow-600">
      {
        posts.length > 0 ? (
            posts.map((post) => (
                <div key={post._id} className="w-1/2 h-full flex items-center justify-center flex-col gap-4">
                    <img src={post.image} alt="Post" className="w-full h-2/3 object-cover rounded-3xl shadow-2xl border-1 border-gray-600 border-t-0 border-b-2"/>
                    <p className="text-lg comfortaa">{post.caption}</p>
                </div>
            ))) : (
                <h1 className="text-2xl comfortaa">No posts available</h1>
            )
          }
        </section>
  )
}

export default Feed