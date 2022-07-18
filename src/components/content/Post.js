import PostBottom from "./PostBottom";
import PostContent from "./PostContent";
import PostTop from "./PostTop";
import React from "react";

export default function Post(props) {
    const [like, setLike] = React.useState(false);


    return (
        <div class="post">
            <PostTop userSrc={props.userSrc} userName={props.userName} />
            <PostContent contentSrc={props.contentSrc} darUmLike={()=>setLike(true)} />
            <PostBottom 
                likeSrc={props.likeSrc}
                likeUser={props.likeUser}
                likeCount={props.likeCount} 
                liked = {like}
                toggleLike={()=>{setLike(!like)}}
            />
        </div>
    );
}