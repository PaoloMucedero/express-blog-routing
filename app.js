const express = require(`express`)
const app = express()
const port = 3000

// attivazione cartella public
app.use(express.static("public"));

// rotta home page
app.get("/", (req, res) => {
    res.send("<h1>Home Route app Blog</h1>")
})

// Routing tramite express - rotte CRUD
// index
app.get('/bacheca', function (req, res) {
res.send('Lista dei post');
});

// show
app.get('/bacheca/:id', function (req, res) {
res.send('dettagli post ' + req.params.id);
});

// store
app.post('/bacheca', function (req, res) {
res.send('Creazione nuovo post');
});

// update
app.put('/bacheca/:id', function (req, res) {
res.send('Modifica integrale del post ' + req.params.id);
});

// modify
app.patch('/bacheca/:id', function (req, res) {
res.send('Modifica parziale del post ' + req.params.id);
});

// destroy
app.delete('/bacheca/:id', function (req, res) {
res.send('Eliminazione del post ' + req.params.id);
});



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);

})