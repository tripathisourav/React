import React from 'react'
import Card from './components/Card';

const App = () => {

  const profiles = [
    {
      coverImage: "https://i.pinimg.com/1200x/fe/dd/cc/feddcc8f3e932d10f8c5b4cca2e06827.jpg",
      profileImage: "https://api.dicebear.com/7.x/thumbs/svg?seed=Noah",
      fullName: "Noah Thompson",
      job: "Product Designer",
      description: "Focused on simplicity & usability, showing love",
      likes: "72.9K",
      posts: 828,
      views: "342.9K"
    },
    {
      coverImage: "https://i.pinimg.com/736x/2e/1e/f8/2e1ef855ab8626bfc55e008ca40a7064.jpg",
      profileImage: "https://api.dicebear.com/7.x/thumbs/svg?seed=Emma",
      fullName: "Emma Rodriguez",
      job: "UI/UX Designer",
      description: "Designing intuitive digital experiences 3d models",
      likes: "54.1K",
      posts: 612,
      views: "198.4K"
    },
    {
      coverImage: "https://i.pinimg.com/736x/94/23/ed/9423ed95fad53cf084a15ff7ca2ae21a.jpg",
      profileImage: "https://api.dicebear.com/7.x/thumbs/svg?seed=Liam",
      fullName: "Liam Carter",
      job: "Frontend Developer",
      description: "Building fast and accessible web apps scalable of multiple tasks",
      likes: "88.3K",
      posts: 941,
      views: "421.7K"
    },
    {
      coverImage: "https://i.pinimg.com/736x/61/45/51/6145514f3ca2de85d5a136413b6385f5.jpg",
      profileImage: "https://api.dicebear.com/7.x/thumbs/svg?seed=Olivia",
      fullName: "Olivia Nguyen",
      job: "Visual Designer",
      description: "Crafting modern and bold visuals with animations and libraries",
      likes: "39.6K",
      posts: 430,
      views: "160.2K"
    },
    {
      coverImage: "https://i.pinimg.com/736x/f5/a5/2d/f5a52d435416f1e55c17fab3bc15fffc.jpg",
      profileImage: "https://api.dicebear.com/7.x/thumbs/svg?seed=Ethan",
      fullName: "Ethan Walker",
      job: "Motion Designer",
      description: "Bringing interfaces to life with motion advanced development",
      likes: "46.8K",
      posts: 507,
      views: "214.9K"
    },
    {
      coverImage: "https://i.pinimg.com/736x/cc/c2/e7/ccc2e7a4a67460a19c0da1364a34da3f.jpg",
      profileImage: "https://api.dicebear.com/7.x/thumbs/svg?seed=Ava",
      fullName: "Ava Patel",
      job: "Product Manager",
      description: "Aligning business goals with user needs learning analytical skills ",
      likes: "61.2K",
      posts: 689,
      views: "287.3K"
    },
    {
      coverImage: "https://i.pinimg.com/1200x/30/f2/e0/30f2e056f45dbb1803209309bc90e1ff.jpg",
      profileImage: "https://api.dicebear.com/7.x/thumbs/svg?seed=Lucas",
      fullName: "Lucas Martin",
      job: "Brand Designer",
      description: "Creating strong and memorable brands for people",
      likes: "33.4K",
      posts: 388,
      views: "142.6K"
    },
    {
      coverImage: "https://i.pinimg.com/736x/ab/dc/7c/abdc7c2e51ba059be8b51bffc159f5b5.jpg",
      profileImage: "https://api.dicebear.com/7.x/thumbs/svg?seed=Sophia",
      fullName: "Sophia Lee",
      job: "Creative Director",
      description: "Leading design with vision and clarity ui-ux is everywhere",
      likes: "94.7K",
      posts: 1023,
      views: "509.8K"
    }
  ];


  return (
    <div className='flex flex-wrap gap-10 h-min-screen w-full bg-[#F5F5F5] py-4 justify-center'>
      {profiles.map(function(el){
        return <Card ci = {el.coverImage} pi = {el.profileImage} fn = {el.fullName} job = {el.job} des = {el.description} like = {el.likes} post = {el.posts} view = {el.views}/>
      })}
    </div>
  )
}

export default App
