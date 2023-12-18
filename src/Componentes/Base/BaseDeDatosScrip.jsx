//Scrip de la base de datos

/*   


create TABLE Productos (
        ID_Productos int PRIMARY key AUTO_INCREMENT,
        Marca varchar(30),
        Talla varchar(10),
        Precio Float (20),
        Cantidad int(20)
        IMG_P MediumBlob, 
      )    	
);   	          

create TABLE Cliente (
ID_Cliente int PRIMARY KEY AUTO_INCREMENT ,
    `NombreClient` char(30) DEFAULT NULL,
  `Telefono` varchar(30) DEFAULT NULL,
  `Direccion` varchar(30) DEFAULT NULL,
  `Usuario` varchar(30) NOT NULL,
  `Correo` varchar(30) NOT NULL,
  `Contra` varchar(30) NOT NULL
);


CREATE TABLE Ventas (
	ID_Venta int PRIMARY KEY AUTO_INCREMENT ,
  `ID_Productos` int(11) ,
  `ID_Cliente` int(11) ,
	FOREIGN KEY (ID_Cliente) REFERENCES cliente(ID_Cliente),
    FOREIGN KEY (ID_Productos) REFERENCES productos (ID_Productos)
);
CREATE TABLE ImagenesP (
ID_IMG int PRIMARY KEY AUTO_INCREMENT,
  ID_Productos int,
  ImgP Blob,
  FOREIGN KEY (ID_Productos) REFERENCES productos(ID_Productos)   

);







*/