import Sugestoes from "./Sugestoes";
import Usuario from "./Usuario";
import Links from "./Links";
import Copyright from "./Copyright";
import { useReducer } from "react/cjs/react.production.min";

export default function SideBar() {
  const user = {
    src:"assets/img/catanacomics.svg",
    userName:"Catana",
    login:"catanacomics"
  };

  return (
    <div class="sidebar">
      <Usuario src={user.src} userName={user.userName} login={user.login} />
      <Sugestoes />
      <Links />
      <Copyright />
    </div>
  );
}
