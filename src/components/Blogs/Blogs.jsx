import { useState } from 'react';
import './Blogs.css'
import { useEffect } from 'react';
import Blog from '../Blog/Blog';
import PropTypes from 'prop-types';

const Blogs = ({handleAddBookmark, handleReadingTime}) => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    return (
        <div className='md:w-2/3'>
            <h1 className='text-2xl'>Blogs: {blogs.length}</h1>
            {
                blogs.map(blog => <Blog 
                    key={blog.id}
                    handleAddBookmark={handleAddBookmark}
                    handleReadingTime={handleReadingTime}
                    blog={blog}></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleAddBookmark: PropTypes.func,
    handleReadingTime: PropTypes.func
}
export default Blogs;