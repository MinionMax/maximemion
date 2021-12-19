import { getWords } from "../../lib/posts";

const Post = (props) => {
    const post_objects = [];

    props.posts.forEach(element => {
        post_objects.push(
            <a>{element}</a>
        )
    });

    return(
        <div>
            {posts}
        </div>
    )
}

const Index = () => (<Post posts={getWords()}></Post>)

export default Index;
