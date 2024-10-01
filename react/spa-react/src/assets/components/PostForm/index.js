import React, { useState } from 'react'
import './index.css';

export default function index() {

    let [title, setTitle]=useState("");

    // let onChangeHandler = (e) => {
    //     setTitle(e.target.value)
    // }

    let resetForm = () => {
        setTitle('');
        console.log('updated Successfully');
    }

    let upload_post = (e) => {
        e.preventDefault();
        console.log(e);
    }

    return (
        <form className='post-form' onSubmit={upload_post}>
            <h1>Create Posts</h1>

            <div className="form-control">
                <label htmlFor="">Title</label>
                {/* <input type="text" onChange={onChangeHandler} /> */}
                <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
            </div>
            <p>{title}</p>
            <button type='button' onClick={resetForm}>Reset Form</button>
            <div className="form-control">
                <button type='submit'>Post Now</button>
            </div>
        </form>
    )
}
