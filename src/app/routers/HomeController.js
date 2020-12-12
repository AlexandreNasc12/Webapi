module.exports = app =>{

    app.get('/',(req,res) => {
         res.json({ status: 'Iniciando APIs com JS' })
    })
}