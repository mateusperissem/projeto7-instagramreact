import PostBottom from "./PostBottom";
import PostContent from "./PostContent";
import PostTop from "./PostTop";

export default function Post(props) {
    return (
        <div class="post">
            <PostTop userSrc={props.userSrc} userName={props.userName} />
            <PostContent contentSrc={props.contentSrc} />
            <PostBottom 
                likeSrc={props.likeSrc}
                likeUser={props.likeUser}
                likeCount={props.likeCount} 
            />
        </div>
    );
}