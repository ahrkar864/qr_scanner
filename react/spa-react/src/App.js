// // import React, { Component } from 'react';
// import React from 'react';
// import './App.css';
// // import Sasuke from './assets/sasuke.jpeg';
// import { useState } from 'react';

// // class App extends Component {

// //     render() {
// //         let name = "ahrkar kyaw";
// //         return (
// //             <h1>Hello World {name}</h1>
// //         );
// //     }
// // }

//     function App() {
//         // let name = "Ahrkar kyaw";
//         let [name,setName] = useState("Ahrkar kyaw"); // [getter,setter]

//         let [posts,setPosts] = useState([
//             {
//                 id: 1,
//                 title: 'first post',
//             },
//             {
//                 id: 2,
//                 title: 'second post',
//             },
//             {
//                 id: false,
//                 title: 'third post',
//             }
//         ]);
//         console.log(posts);

//         let changeName = () => {
//             setName('Aung Aung');
//             console.log(name);
//         }

//         let deletePost = (id) => {
//             console.log("delete posts");
//             setPosts((prevState) => prevState.filter(post => post.id !== id))
//         }
//         return (
//             <div className='app'>
//                 <h1>Hello {name}</h1>
//                 <button onClick={changeName}>change name</button>
//                 <h1>Posts</h1>
//                 <ul>
//                     { !!posts.length && posts.map((post)=>(
//                         <li key={post.id}>
//                             {post.title}
//                             <button onClick={()=>deletePost(post.id)}>delete</button>
//                         </li>
//                     ))}
//                     { !posts.length && <p>No Post Availiable</p>}
//                 </ul>
//             </div> 
//         );
//     }

// export default App;


// import React, { useState } from 'react'

// export default function App() {
//     let [count,setCount] = useState(0);
//     let increment = () => {
//         // setcount(count+1)
//         setCount((prevState)=>prevState+1);
//         setCount((prevState)=>prevState+1);
//         setCount((prevState)=>prevState+1);
//         setCount((prevState)=>prevState+1);
//     }
//     return (
//         <div>
//             <h1>Counter</h1>
//             <h3>Count - {count}</h3>
//             <button onClick={increment}>increment</button>
//         </div>
//     )
// }


import React, { useState } from 'react';
// import React from 'react';
import Navbar from './assets/components/Navbar';
import PostList from './assets/components/PostsList';
import Modal from './assets/components/Modal';
import PostForm from './assets/components/PostForm';

export default function App() {
    let [showModal, setshowModal ] = useState(false);
    // let [posts, setPosts] = useState([
    //     {
    //         id:1,
    //         title: 'first post',
    //     },
    //     {
    //         id:2,
    //         title: 'second post'
    //     },
    //     {
    //         id:3,
    //         title: 'third post'
    //     }
    // ])
    let [posts] = useState([
        {
            id:1,
            title: 'first post',
        },
        {
            id:2,
            title: 'second post'
        },
        {
            id:3,
            title: 'third post'
        }
    ]);
    
    return (
        <div>
            <Navbar setshowModal={setshowModal} />
            <PostList  posts={ posts } />
            {  showModal &&  <Modal setshowModal={setshowModal} danger>

                <PostForm />
   
            </Modal>}
       </div>
    )
}
