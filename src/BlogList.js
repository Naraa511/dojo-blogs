const BlogList = ({bloguud, title}) => {
    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
                    {bloguud.map((blog) =>(
                    <div className="blog-preview" key={blog.id}>
                        <h2>{blog.title}</h2> 
                        <p>Written by {blog.author}</p>
                    </div> 
                    ))}
        </div>
     );
}
 
export default BlogList;