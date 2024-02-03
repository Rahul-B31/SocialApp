import { useContext, useEffect, useState } from "react";
import PostCard from "../PostCard";
import axios from 'axios'
import PostContext from "../../Provider/PostContextProvider";



function PostCardList(){

      let {posts} =  useContext(PostContext);
      console.log(posts)
  return posts.map((post)=><PostCard
                        key={post.id}
                        firstName={post.owner.firstName}
                        lastName={post.owner.lastName}
                        image={post.image}
                        content={post.text}
                        likes={post.likes}
                      
                          />)


}
export default PostCardList;