module.exports = app =>{

    app.get('/usuario',(req,res) =>{
        res.json([
            {
                nome : 'Alexandre',
                email : 'alexandre.nascimento@live.com'
            },
            {
                nome : 'Thais Nascimento',
                email : 'tatydourado@gmail.com'
            }
        ])
    })
}