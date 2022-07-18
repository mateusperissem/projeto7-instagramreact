import Icone from "../Icone";
import React from 'react';

export default function PostActions() {

 

    return (
        <div class="acoes">
            <div>
                <Icone name="heart"  />
                <Icone name="chatbubble-outline" />
                <Icone name="paper-plane-outline" />
            </div>
            <div>
                <Icone name="bookmark-outline" />
            </div>
        </div>
    );
}