import './Blog.css'
import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog, handleAddBookmark,handleReadingTime}) => {
    const {id,title,cover, author, author_img, posted_date, reading_time, hashtags} = blog;
    return (
        <div className='mb-10 space-y-2 img-cover'>
            <img className='w-full min-h-72 mb-5 rounded-lg'  src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between'>
                <div className='author_img flex'>
                    <img src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={()=>handleAddBookmark(blog)} className='ml-2 text-red-600 text-2xl'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">{hash}</a></span>)
                }
            </p>
            <button onClick={()=>handleReadingTime(id,reading_time)} className='text-purple-800 font-bold underline'>Mark As Read</button>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddBookmark: PropTypes.func,
    handleReadingTime: PropTypes.func
}
export default Blog;