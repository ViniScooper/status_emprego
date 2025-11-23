import express from 'express'


const app = express()
app.use(express.json())

app.get('/usuarios',(req , res) => {
    res.send('usuario safado')
})


app.post('/cadastro',(req,res)=>{
    

    console.log(req.body)

    res.send('user cadastrado')
    
        

    


})



app.listen(3000)
console.log('rodando...')


