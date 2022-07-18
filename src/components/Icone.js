import React from 'react';


export default function Icone(props) {
  let outline = "-outline";
  let colorStyle = "";

  if (props.name == "heart"){
    if (props.liked){
      outline = "";
      colorStyle = "red";
    }else{
      outline = "-outline";
      colorStyle = "";

    }  
    return <ion-icon name={props.name+outline} onClick= {props.toggleLike} style={{color:colorStyle}}></ion-icon>;

    }

  return <ion-icon name={props.name} ></ion-icon>;



}
