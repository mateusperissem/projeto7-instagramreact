import User from "./User";

export default function Sugestao(props){
    return (
        <div class="sugestao">
            <User src ={props.src} name={props.name} razao={props.razao}/>
            <div class="seguir">Seguir</div>
        </div>
    )

}