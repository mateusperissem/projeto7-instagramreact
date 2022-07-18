import Img from "../Img";

export default function PostContent(props) {
    return (
        <div class="conteudo">
            <Img src={props.contentSrc} />
        </div>
    );
}