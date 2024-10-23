import Bookmark from '../Bookmark/Bookmark';
import './Bookmarks.css'
import PropTypes from 'prop-types';

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className='w-1/3 '>
            <div>
                <h2 className='text-2xl font-bold bg-gray-300 ml-4 mt-4 p-4 rounded-lg'>Reading Time: {readingTime}</h2>
            </div>
           <div className='bg-gray-300 ml-4 mt-4 rounded-lg pb-4'>
            <h2 className='text-3xl p-4'>Bookmarks blogs: {bookmarks.length}</h2>
                {
                    bookmarks.map((bookmark, idx) => <Bookmark 
                        key={idx} bookmark={bookmark}
                        ></Bookmark>)
                }
            </div>
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;

// key hisabe jokhon key={bookmark.id} aita dichhe tokhon nicher warning ta dichhe
// chunk-TYILIMWK.js?v=7634f308:521 Warning: Encountered two children with the same key, `1`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.
// er mane hochhe j amra jokhon bookmark kor tokhon dekha jay j ekoi item k bar bar add kore
// tokhon oder id kintu same e thake tai react ai warning ta dichhe, react chai prottek tar jonno unique id
// ar solution hochhe nicher moto
// bookmarks.map((bookmark, idx) => <Bookmark 
//                  key={idx} bookmark={bookmark}
//                  ></Bookmark>)
