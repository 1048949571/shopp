/**
 * Created by 李靖 on 2017/10/13.
 */
var gulp = require("gulp");
var server = require("gulp-webserver");
var fs=require("fs");
var path=require("path");
var url = require("url");


gulp.task("server", function () {
    gulp.src("./Data")
        .pipe(server({
            host:"localhost",
            port: "8080",
            livereload: true,
            directoryListing:{
                path:"./",
                enable:true
            },
            middleware:function(req,res){
                var urls=url.parse(req.url);
                var urlx= path.join(__dirname, "Data", urls.query + ".json");
                fs.exists(urlx,function(err){
                    if(!err){
                        res.writeHead(404,{
                            "Content-Type":"text/json;charset=utf-8",
                            "Access-Control-Allow-origin":"http://localhost:63342"
                        })
                        res.end();
                    }else{
                       fs.readFile(urlx,function(err,data){
                           if(err) return console.error(err);
                           res.writeHead(200,{
                               "Content-Type":"text/json;charset=utf-8",
                               "Access-Control-Allow-origin":"http://localhost:63342"
                           })
                           res.end(data.toString());
                       })
                    }
                })
            }
        }))
});
