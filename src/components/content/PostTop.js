export default function PostTop(props) {
    return (
        <div class="topo">
            <div class="usuario">
                <img src={props.userSrc} />
                {props.userName}
            </div>
            <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>
    );
}