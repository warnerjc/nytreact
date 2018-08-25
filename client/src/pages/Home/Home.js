import React, { Component } from 'react';
import API from '../../utils/API';
import Article from '../../components/Article';
import { List } from "../../components/List";

class Home extends Component {

    state = {
        articles: [],
        q: '',
        start_year: '',
        end_year: '',
        message: 'Search for Articles to Begin!'
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleArticleSearch = event => {
        event.preventDefault();
        this.getArticles();
    };

    handleArticleSave = id => {
        const article = this.state.articles.find(article => article._id === id);

        API.saveArticle(article)
            .then(res => this.getArticles());
    };

    getArticles = () => {
        API.getArticles({
            q: this.state.q,
            start_year: this.state.start_year,
            end_year: this.state.end_year
        })
            .then(res => {
                this.setState({
                    articles: res.data,
                    message: !res.data.length ? 'No new Articles found, try a different search!' : ''
                })
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <React.Fragment>
                <div className='container'>

                    {/* START */}
                    {/* NYT Scrubber Section */}
                    <div className='jumbotron bg-white'>

                        {/* START */}
                        {/* Search Articles Section */}
                        <div className='row'>
                            <div className='col'>
                                <h1 className='h3'>
                                    Search Articles
                                </h1>
                            </div>
                            <div className='col text-right'>
                                <button className='btn btn-outline-secondary btn-md' onClick={this.handleArticleSearch}>
                                    Search
                                </button>
                            </div>
                        </div>

                        <hr className='my-4' />
                        
                        <form>
                            <div className='form-row'>
                                <div className='col-7'>
                                    <input type='text' className='form-control' name='q' onChange={this.handleInputChange} placeholder='Topic' />
                                </div>
                                <div className='col'>
                                    <input type='text' className='form-control' name='start_year' onChange={this.handleInputChange} placeholder='Start Year' />
                                </div>
                                <div className='col'>
                                    <input type='text' className='form-control' name='end_year' onChange={this.handleInputChange} placeholder='End Year' />
                                </div>
                            </div>
                        </form>

                        <hr className='my-4' />
                        {/* Search Articles Section */}
                        {/* END */}

                        {/* START */}
                        {/* Result Articles Section */}
                        <div className='row'>
                            <div className='col'>
                                <h1 className='h3'>
                                    Result Articles
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
                                        title={article.headline.main}
                                        url={article.web_url}
                                        date={article.pub_date}
                                        handleClick={this.handleArticleSave}
                                        buttonText="Save Article"
                                    />
                                ))}
                            </List>
                        ) : (
                            <p className='lead'>{this.state.message}</p>
                        )}

                        <hr className='my-4' />
                        {/* Result Articles Section */}
                        {/* END */}

                    </div>
                    {/* NYT Scrubber Section */}
                    {/* END */}

                </div>
            </React.Fragment>
        );
    }
}

export default Home;