const BlogList = ({blogs, title}) => {

  // Having blogs and title above is the same as below and passing 'props' above
  
  // const blogs = props.blogs
  // const title = props.title


  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
}

export default BlogList;