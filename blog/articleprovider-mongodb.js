var mongo = require('mongodb'),
    Db = mongo.Db,
    Connection = mongo.Connection,
    Server = mongo.Server,
    BSON = mongo.BSON,
    ObjectID = mongo.ObjectID;
    
ArticleProvider = function(host, port) {
    this.db = new Db('node-mongo-blog', new Server(host, port, {auto_reconnect:true}, {}));
    this.db.open(function(){console.log("mongodb connected")});
};

ArticleProvider.prototype.getCollection = function(callback) {
    this.db.collection('articles', function(err, article_collection){
        if(err) callback(err);
        else callback(null, article_collection);
    });
};

ArticleProvider.prototype.findAll = function(callback) {
    this.getCollection(function(err, article_collection){
        if(err) callback(err);
        else {
            article_collection.find().toArray(function(err, results){
               if(err) callback(err);
               else callback(null, results); 
            });
        }
    });
};

ArticleProvider.prototype.findById = function(id, callback) {
    this.getCollection(function(err, article_collection){
       if(err) callback(err);
       else {
           article_collection.findOne({_id:article_collection.db.bson_serializer.ObjectID.createFromHexString(id)},
                function(err, result){
                    if(err) callback(err);
                    else callback(null, result);
                })
       }
    });
};

ArticleProvider.prototype.save = function(articles, callback) {
  this.getCollection(function(err, article_collection){
      if(err){callback(err);}
      else {
          if(typeof(articles.length) == "undefined") {
              articles = [articles];
          }
          for(var i=0; i<articles.length;i++){
              article = articles[i];
              article.created_at = new Date();
              if(article.comments === undefined) {
                  article.comments = [];
              }
              for(var j=0; j<article.comments.length; j++){
                  article.comments[j].created_at = new Date();
              }
          }
          
          article_collection.insert(articles, function(){
             callback(null, articles); 
          });
      }
  });
};


ArticleProvider.prototype.addCommentToArticle = function(articleId, comment, callback) {
    this.getCollection(function(err, article_collection){
        if(err) callback(err);
        else {
            article_collection.update(
               {_id:article_collection.db.bson_serializer.ObjectID.createFromHexString(articleId)},
               {"$push": {comments:comment}},
               function(err, article){
                   if(err) callback(err);
                   else callback(null, article);
               }
            );
        }
    });
};

exports.ArticleProvider = ArticleProvider;
