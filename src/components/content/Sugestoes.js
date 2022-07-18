import Sugestao from "./Sugestao";
import TitleSugestoes from "./TitleSugestoes";

export default function Sugestoes() {
  const arraySugestaoName = ["bad.vibes.memes", 
  "chibirdart", 
  "razoesparaacreditar", 
  "adorable_animals", 
  "smallcutecats" 
  ];

  return (
    <div class="sugestoes">
      <TitleSugestoes />
      
      {arraySugestaoName.map((sugestao) => 
         <Sugestao src={"assets/img/" + sugestao + ".svg"} name={sugestao} razao="Segue você"/>
        )
      }

    </div>
  );
}
