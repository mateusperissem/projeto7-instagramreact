import PostActions from "./PostActions";
import PostLikes from "./PostLikes";

export default function PostBottom(props) {
    return (
        <div class="fundo">
            <PostActions />
            <PostLikes likeSrc={props.likeSrc}
                likeUser={props.likeUser}
                likeCount={props.likeCount} />
        </div>
    );
}