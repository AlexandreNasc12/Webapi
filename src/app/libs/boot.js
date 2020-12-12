module.exports = app =>{
    app.listen(app.set('port'),() =>{
        console.log(`Api- rodando na porta ${app.get('port')}`)
    })
}