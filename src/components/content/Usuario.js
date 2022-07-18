import Img from "../Img";

export default function Usuario(props) {
  return (
    <div class="usuario">
      <Img src={props.src} />
      <div class="texto">
        <strong>{props.login}</strong>
        {props.userName}
      </div>
    </div>
  );
}
