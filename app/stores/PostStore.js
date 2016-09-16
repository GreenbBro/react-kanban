import PostActions from '../actions/PostActions';
import axios from 'axios';

// actions list for posts store
export default class PostStore {
    constructor(){
        this.bindActions(PostActions);
        this.posts = [];
        this.bindListeners({
            handleUpdatePosts: PostActions.update,
            handleFetchPosts: PostActions.fetch
        });
    }

    handleUpdatePosts(posts){
        this.posts = posts;
    }

    handleFetchPosts(){
        this.posts = [];
    }

    create(post){
        this.setState({
            posts: this.posts.concat(post)
        });
    }

    update(post){
        console.log('update post');
    }

    delete(post){
        console.log('delete post');
    }

    fetch(){
        return (dispatch) => {
            dispatch();
            axios.get('http://jsonplaceholder.typicode.com/posts').then(function(response){
                this.update(response.data);
            }).catch(function(error){
                console.log('error occured ', error);
            });
        }
    }

}