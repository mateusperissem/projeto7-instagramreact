import React from 'react';


export default function Icone(props) {
  const [outline,setOutline] = React.useState("-outline")
  const [style, setStyle] = React.useState("black");

  function toggleLike(){
    if (outline === "-outline"){
      setStyle("red");
      setOutline("");

    } else{
      setOutline("-outline");
      setStyle("black");
    }
  }
  if (props.name == "heart"){
    return <ion-icon name={props.name + outline} onClick= {toggleLike} style={{color:style}}></ion-icon>;
  }
  return <ion-icon name={props.name} ></ion-icon>;



}
