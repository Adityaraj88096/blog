import React, { useState, useRef, useEffect } from 'react';
import { submitComment } from '../services';

const CommentForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const commentE1 = useRef();
  const nameE1 = useRef();
  const emailE1 = useRef();
  const storeDataE1 = useRef();
  useEffect(() => {
    nameE1.current.value = window.localStorage.getItem('name');
    emailE1.current.value = window.localStorage.getItem('email');
  }, [])

  const handleCommentSubmission = () => {
    setError(false);
    const {value: comment} = commentE1.current;
    const {value: name} = nameE1.current;
    const {value: email} = emailE1.current;
    const {checked: storeData} = storeDataE1.current;

    if(!comment || !name || !email) {
      setError(true)
      return ;
    }
    const commentObj = { name, email, comment, slug };
    console.log(`name: ${name}, email: ${email}, comment: ${comment}, slug: ${slug}`);
    if(storeData) {
      window.localStorage.setItem('email', email);
      window.localStorage.setItem('name', name);
    } else {
      window.localStorage.removeItem('email', email);
      window.localStorage.removeItem('name', name);
    }
    submitComment(commentObj)
    .then((res) => {
      setShowSuccessMessage(true);

      setTimeout(() => {
        setShowSuccessMessage(false)
      }, 3000);
    })
  }

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className='text-xl mb-8 font-semibold'>Leave your query</h3>
      <div className='grid grid-cols-1 gap-4 mb-4'>
        <textarea
          ref={commentE1} className="p-4 outline-none w-full rounded-lg
         focus:ring-gray-200 bg-gray-200 text-gray-700 "
          placeholder='comment'
          name='comment'
        />
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4'>
        <input
          type="text" ref={nameE1}
          className="py-2 outline-none w-full rounded-lg 
        focus:ring-gray-200 bg-gray-200 text-gray-700"
          placeholder='   Name'
          name='name' />
        <input
          type="text" ref={emailE1}
          className="py-2 outline-none w-full rounded-lg 
        focus:ring-gray-200 bg-gray-200 text-gray-700"
          placeholder=' Email'
          name='email' />
      </div>
      <div className='ml-2 grid grid-cols-1 gap-4 mb-4'>
        <div>
          <input ref={storeDataE1} type="checkbox" id="storeData" name='storeData' value="true" />
          <label className='text-gray-500 cursor-pointer ml-2' htmlFor='storeData'>save my email and name for the next time I comment</label>
        </div>
        </div>
      {error && <p className="text-xs text-red-500">All fields are mandatory</p>}
      <div className='mt-4'>
        <button
          type="button"
          onClick={handleCommentSubmission}
          className="transition duration-500 ease hover:bg-indigo-900 inline-block
         bg-pink-600 text-lg rounded-full text-white px-8 py-3 cursor-pointer"
        >
          Post comment
        </button>
        {showSuccessMessage && <span className='text-xl float-right font-semibold mt-3 text-green-500'>comment submitted for review</span>}
      </div>
    </div>
  )
}

export default CommentForm