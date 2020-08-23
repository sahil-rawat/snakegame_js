var express = require('express');
const path = require('path');
const router = express.Router();


var app= express()

app.use(express.static('res'));



//App Routing Functions start
router.get('/',function(req,res){
    res.setHeader('Content-type','text/html')
    res.sendFile(path.join(__dirname, 'index.html'))
})



app.use('/',router);

app.listen(process.env.PORT || 8080)