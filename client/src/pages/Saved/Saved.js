import React, { Component } from 'react';
import API from '../../utils/API';
import Article from '../../components/Article';
import { List } from "../../components/List";

class Saved extends Component {

    state = {
        articles: [],
    };

    componentDidMount() {
        this.getSavedArticles();
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleArticleDelete = id => {
        API.deleteArticle(id).then(res => this.getSavedArticles());
    };

    getSavedArticles = () => {
        API.getSavedArticles()
            .then( res => 
                this.setState({
                    articles: res.data
                })
            )
            .catch( err => console.log(err));            
    }

    render() {
        return (
            <React.Fragment>
                <div className='container'>

                    {/* START */}
                    {/* MongoDB Saved Article Section */}
                    <div className='jumbotron bg-white'>

                        {/* START */}
                        {/* Saved Articles Section */}
                        <div className='row'>
                            <div className='col'>
                                <h1 className='h3'>
                                    Saved Articles
                                </h1>
                            </div>
                        </div>

                        <hr className='my-4' />
                        { this.state.articles.length ? (
                            <List>
                                {this.state.articles.map(article => (
                                    <Article
                                        key={article._id}
                                        _id={article._id}
                                        title={article.title}
                                        url={article.url}
                                        date={article.date}
                                        handleClick={this.handleArticleDelete}
                                        buttonText="Delete Article"
                                        saved
                                    />
                                ))}
                            </List>
                        ) : (
                            <p className='lead'>No saved Articles!</p>
                        )}

                        <hr className='my-4' />
                        {/* Saved Articles Section */}
                        {/* END */}

                    </div>
                    {/* MongoDB Saved Article Section */}
                    {/* END */}

                </div>
            </React.Fragment>
        );
    }
}

export default Saved;