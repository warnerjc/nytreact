const axios = require('axios');
const db = require('../models');

// defining methods for the nytController

// findAll searches the NYT API, returning only the entries we haven't already saved
module.exports = {

    findAll: function(req, res) {

        const params = Object.assign(
            { api_key: "40a0c8bc34494063aaf22652d2483e34" },
            req.query
        );

        axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json", { params })
            .then( response => {
                
                db.Article
                    .find()
                    .then( dbArticles => 
                        response.data.response.docs.filter( article => 
                            dbArticles.every( dbArticle => 
                                dbArticle._id.toString() !== article._id
                            )
                        )
                    )
                    .then( articles => res.json(articles))
                    .catch( err => res.status(422).json(err));
            });
    }
};