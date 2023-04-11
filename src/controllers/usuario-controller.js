class UsauarioController{
    static getUsauarioController( app ) {
        app.get('/Teste', (req, res) =>
        res.send('Hello World')
        );
    }
}

export default UsauarioController;