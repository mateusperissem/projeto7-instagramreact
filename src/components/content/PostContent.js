import Img from "../Img";

export default function PostContent(props) {
    return (
        <div class="conteudo">
            <img src={props.contentSrc} onClick={props.darUmLike} />
        </div>
    );
}