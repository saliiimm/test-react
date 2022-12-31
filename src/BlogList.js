const BlogList = ({blogs,title,handledelete}) => {


    return ( 
        <div className="Blog-List">
         <h2>{title}</h2>

            {
                blogs.map((blog) =>(
                   <div className="blog-review" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <button onClick={() => handledelete(blog.id)}>delete blog</button>
                   </div> 
                ))
            }
        </div>
     );
}
 
export default BlogList ;