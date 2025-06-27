import { useState } from "react";
import BlogList from "./BlogList";
const Home = () => {
const  [blogs, setBlogs] =useState(
    [
        {title: 'My new website', body: 'lorem mm...', author:'mario', id: 1},
        {title: 'Welcome party!', body: 'lorem mm...', author:'yoshi', id: 2},
        {title: 'Web dev top tips', body: 'lorem mm...', author:'mario', id: 3}
    ]);

    return ( 
        <div className="home">
            <BlogList bloguud={blogs} title="All blogs"/>    
            <BlogList bloguud={blogs.filter((blog)=> blog.author==='mario')} title="Mario's Blog" />
                       
        </div>
     );
}

export default Home;