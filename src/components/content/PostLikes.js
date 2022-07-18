export default function PostLikes(props) {
    return (
        <div class="curtidas">
            <img src={props.likeSrc} />
            <div class="texto">
                Curtido por <strong>{props.likeUser}</strong> e{" "}
                <strong>{props.likeCount}</strong>
            </div>
        </div>
    );
}