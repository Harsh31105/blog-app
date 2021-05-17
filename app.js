const express = require('express');
const mongoose = require('mongoose');
const Article = require('./model/article')
const routes = require('./routes/articles')
const override = require('method-override')
const app = express();
const PORT = 3304

//Connecting Application with Database(MongoDB)
const connection = () => {
    mongoose.connect('mongodb+srv://HarshSingh:harsh3101@blogapp-cluster1.fo2q4.mongodb.net/blogApp?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("Connected to DataBase...")
}
connection()

//Setting up View Engine
app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: false }))

//This allows us to override a method in form tag
app.use(override('_method'))

//Routes
app.get('/', async(req, res) => {
        const articles = await Article.find().sort({ createdAt: 'desc' })
        res.render('articles/index', { articles: articles });
    })
    //app is using routes which was created in articles.js
app.use('/articles', routes)

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
})