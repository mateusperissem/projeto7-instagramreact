export default function User(props){
    return(
        <div class="usuario">
                <img src={props.src} />
                <div class="texto">
                    <div class="nome">{props.name}</div>
                    <div class="razao">{props.razao}</div>
                </div>
            </div>
    )
};