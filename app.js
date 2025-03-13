const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//é um módulo capaz de converter o body da requisição para vários formatos. (google)

const fs = require('fs')

app.use(bodyParser.urlencoded({extended: false}));
//Configura o Express para usar o middleware 'body-parser' para lidar com dados de formulários HTML codificados em URL.
app.use(bodyParser.json());


app.use(express.static('public'));

app.listen(3000,()=>{
    console.log('Servidor Aberto');
})


app.get('/',(req,res) => {
    res.sendFile(__dirname + '/public/index.html');
})

app.post('/contact',  (req,res) => {
    const dados = req.body;
    
    fs.readFile('public/json/dados.json','utf8', (err,data)=>{
        if(err){
            console.log(err)
        }else{
            // const content = (JSON.stringify({...dados}))
            const content =[dados,JSON.parse(data)]

            fs.writeFile('public/json/dados.json',JSON.stringify(content,null,2), (err) => {
                if(err){
                    console.log(err)
                }else{
                    console.log('dados enviados')
                    res.send('DADOS ENVIADOS COM SUCESSO')
                }
                })
        }
    })


}
)