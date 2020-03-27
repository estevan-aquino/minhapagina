const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function(req, res){
    const info = {
        avatar_url:"https://avatars3.githubusercontent.com/u/58669992?s=400&u=cf22091aadf66ac96e1a4135a637e29defa61db8&v=4",
        name:"Estevan Aquino",
        role:"Web developer & Artist",
        description:'-- "Tenho 20 anos, sou formado em Desing Gráfico e em Análise e Desenvolvimento de Sistemas, gosto de jogar vários tipos de jogos diferentes 🕹️ , sou cristão 🙌 e estou focado em estudar programação para um dia me tornar um lendário developer FullStack!" 👨‍💻😉',
        links: [
            {
                name:"",
                url:""
            }
        ]
    }

    return res.render("sobre", {sobre: info})
})

server.get("/classes", function(req, res){
    return res.render("classes", {items: videos})
})

server.get("/video", function(req, res){
    const id = req.query.id

    const video = videos.find(function(video){
        return video.id == id
    })

    if (!video){
        return res.send("Video Not Found!")
    }

    return res.render("video", {item: video})
})

server.listen(5000, function(){
    console.log("Server is running")
})