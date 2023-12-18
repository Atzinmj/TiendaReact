const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");



app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "basetienda"
});
// Consultas Login 

app.post("/Insert", (req, res) => {
    const Nombre = req.body.Nombre;
    const Telefono = req.body.Telefono;
    const Direccion = req.body.Direccion;
    const Usuario = req.body.Usuario;
    const Correo = req.body.Correo;
    const Contra = req.body.Contra;
    //Insertar DAtos Login 
    db.query('INSERT INTO cliente (NombreClient,Telefono,Direccion,Usuario,Correo,Contra) VALUES(?,?,?,?,?,?)',
        [Nombre, Telefono, Direccion, Usuario, Correo, Contra],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Usuario Registrado");
            }
        }
    );
});

// Mostrar Clientes
app.get("/vizualizarC", (req, res) => {
    db.query('SELECT * FROM  cliente',
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    );

});

// Mostrar Tabla Productos en Json
app.get("/vizualizarP", (req, res) => {
    db.query('SELECT * FROM  productos',
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.json(result);
            
            }
        }
    );

});


//LOGIN 
app.post("/Ingresar",(req, res) =>{
    const Correo = req.body.Correo;
    const Contra = req.body.Contra;
    db.query('SELECT * from cliente WHERE Correo = ? and Contra = ?',
    [Correo,Contra],
    (err, result) => {
        if (err) {
            console.log(err);
        } else {
            return res.send("Bienvenido");
        }
    }
    );



});

// insertar Productos 
app.post("/InsertP", (req, res) => {
    const Producto = req.body.Producto;
    const Marca = req.body.Marca;
    const Talla = req.body.Talla;
    const Precio = req.body.Precio;
    const Cantidad = req.body.Cantidad;
    const IMG = req.body.IMG;
    //Insertar DAtos Login 
    db.query('INSERT INTO productos (name,Marca,Talla,price,Cantidad,imgUrl) VALUES(?,?,?,?,?,?)',
        [Producto, Marca, Talla, Precio, Cantidad,IMG],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Usuario Registrado");
            }
        }
    );
});


// prueba de creacion json




//puerto a utilizar
app.listen(3001, () => {
    console.log("me corro aaaaaaa")
});



