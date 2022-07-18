import Icone from "../Icone";
import React from 'react';

export default function PostActions(props) {
   

    return (
        <div class="acoes">
            <div>
                <Icone name={"heart"}  liked={props.liked} toggleLike={props.toggleLike} />
                <Icone name="chatbubble-outline" />
                <Icone name="paper-plane-outline" />
            </div>
            <div>
                <Icone name="bookmark-outline" />
            </div>
        </div>
    );
}