import Story from "./Story";

export default function Stories() {
    const arrayStoriesName = ["9gag",
        "meowed",
        "nathanwpylestrangeplanet",
        "barked",
        "wawawicomics",
        "respondeai",
        "filomoderna",
        "memeriagourmet"
    ];

    return (
        <div class="stories">
            {
                arrayStoriesName.map((storieName) =>
                    <Story user={storieName} src={"assets/img/" + storieName + ".svg"} />
                )
            }


            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );

}