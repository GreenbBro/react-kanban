import PostActions from '../actions/PostActions';
import axios from 'axios';

// actions list for posts store
export default class PostStore {
    constructor(){
        this.bindActions(PostActions);

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
        const self = this;
        //exp
        axios.get('http://jsonplaceholder.typicode.com/posts').then(function(response){
            console.log('fetched');
            self.setState({
                posts: self.posts.concat(response.data)
            });
            console.log(self.posts);
        }).catch(function(error){
            console.log('error occured ', error);
        });
        //exp
    }

}