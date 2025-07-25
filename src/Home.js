import { useState, useEffect } from "react";
import BlogList from "./BlogList";
const Home = () => {
const  [blogs, setBlogs] =useState(null);
const [isPending, setIsPending] = useState(true);
useEffect(()=>{
    setTimeout(()=>{
    fetch('http://localhost:8000/blogs')
        .then(res =>{
            return res.json()
        })
        .then((data => {
            setBlogs(data);
            setIsPending(false); // өгөгдөл амжилттай ирсний дараа false болгоно
        }))
    },1000);
},[]);
    return ( 
        <div className="home">
            {isPending && <div>Loading...</div>}
          {blogs && <BlogList bloguud={blogs} title="All blogs" />}       
        </div>
     );
}

export default Home;