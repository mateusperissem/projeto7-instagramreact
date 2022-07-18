import Post from "./Post";

export default function Posts() {
    const arrayObjtsPost = [
        {
            userName: "meowed",
            userSrc: "assets/img/meowed.svg",
            contentSrc: "assets/img/gato-telefone.svg",
            likeSrc: "assets/img/respondeai.svg",
            likeUser: "respondeai",
            likeCount: "outras 101.523 pessoas"
        },
        {
            userName: "barked",
            userSrc: "assets/img/barked.svg",
            contentSrc: "assets/img/dog.svg",
            likeSrc: "assets/img/adorable_animals.svg",
            likeUser: "adorable_animals",
            likeCount: "outras 99.159 pessoas"
        }

    ];

    return (
        <div class="posts">
            {arrayObjtsPost.map((objPost) =>
                <Post
                    userName={objPost.userName}
                    userSrc={objPost.userSrc}
                    contentSrc={objPost.contentSrc}
                    likeSrc={objPost.likeSrc}
                    likeUser={objPost.likeUser}
                    likeCount={objPost.likeCount}
                />
            )}

        </div>


    );
}