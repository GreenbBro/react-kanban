import React from 'react';
import axios from 'axios';
import styles from './Articles.css';

export default ({articles}) => {
        return <Articles articles={articles}/>;
}

class Articles extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            articles: []
        };
    }

    convertDate(dt){
        const date = new Date(dt * 1000);
        return date.toLocaleString();
    }

    render() {
        const articles = this.state.articles;

        return <ul className={styles.articles}>
            {articles.map(article=>
                <li key={article.id} className={styles.article}>
                    <div><a href={article.url}>{article.title}</a></div>
                    <div>{this.convertDate(article.time)}</div>
                    <div>color = {article.color}</div>
                </li>
            )}
        </ul>;
    }

    componentWillMount(){
        const self = this;
        axios.get('/api?limit=50').then(function(response){
            self.setState({
                articles: response.data.articles
            });
        }).catch(function(error){
            console.log('error occured ', error);
        });
    }
}