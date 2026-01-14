import React, { createContext } from 'react'

export const userDataContext = createContext()

const UserContext = (props) => {
    const users = [
  {
    userId: 1,
    name: "Aarav Sharma",
    username: "aarav_s",
    posts: [
      {
        postId: 101,
        title: "Learning React",
        content: "Started learning React today. Hooks are awesome!",
        likes: 120,
        comments: 18
      },
      {
        postId: 102,
        title: "JavaScript Tips",
        content: "Always understand closures before interviews.",
        likes: 89,
        comments: 10
      }
    ]
  },
  {
    userId: 2,
    name: "Neha Verma",
    username: "neha_codes",
    posts: [
      {
        postId: 201,
        title: "CSS Magic",
        content: "Flexbox + Grid makes layout so easy.",
        likes: 150,
        comments: 22
      }
    ]
  },
  {
    userId: 3,
    name: "Rohit Singh",
    username: "rohit_dev",
    posts: [
      {
        postId: 301,
        title: "Backend Life",
        content: "APIs should always be clean and documented.",
        likes: 95,
        comments: 12
      },
      {
        postId: 302,
        title: "Node.js",
        content: "Async/Await > Callbacks",
        likes: 110,
        comments: 14
      }
    ]
  },
  {
    userId: 4,
    name: "Priya Patel",
    username: "priya_ui",
    posts: [
      {
        postId: 401,
        title: "UI Design",
        content: "Good UI is invisible UI.",
        likes: 180,
        comments: 30
      }
    ]
  },
  {
    userId: 5,
    name: "Kunal Mehta",
    username: "kunal.tech",
    posts: [
      {
        postId: 501,
        title: "Debugging",
        content: "console.log is still my best friend 😂",
        likes: 210,
        comments: 40
      }
    ]
  }
];

  // console.log(props);
  

  return (
    <div className='context-div'>
        <userDataContext.Provider value={users}>
            {props.children}
        </userDataContext.Provider>
    </div>
  )
}

export default UserContext
