class ProductManager {
  constructor() {
    this.productos = [];
  }

  getProductos() {
    return this.productos;
  }

  addProduct(title, description, price, thumbnail, stock, code) {
    let idProducto = this.getProductos().length;

    let producto = {
      title: title,
      description: description,
      price: price,
      thumbnail: thumbnail,
      code: code,
      stock: stock,
      id: ++idProducto,
    };

    if (
      !producto.title ||
      !producto.description ||
      !producto.price ||
      !producto.thumbnail ||
      !producto.code ||
      !producto.stock
    ) {
      return console.log("Todos los campos son obligatorios");
    } else if (isNaN(price)) {
      return console.log("El precio ingresado debe ser un numero");
    } else if (isNaN(stock)) {
      return console.log("El Stock  ingresado debe ser un numero");
    }

    let codigo = this.productos.find((prod) => prod.code == producto.code);
    if (codigo) {
      return console.log("El code que ingreso ya existe, ingrese otro code");
    } else {
      this.productos.push(producto);
      return this.productos;
    }
  }

  getProductsById(idProducto) {
    let producto = this.productos.find(
      (producto) => producto.id === idProducto
    );

    if (producto) {
      return producto;
    } else {
      return console.log("Not Found");
    }
  }
}

const newproduct = new ProductManager();

let productos = newproduct.addProduct(
  "tinta",
  "tinta tattoo",
  5555,
  "imagen",
  4525,
  452562
);

newproduct.addProduct("maquina", "maquina Tattoo", 5252, "imagen", 5, 2322);

newproduct.addProduct("maquina2", "maquina 2 Tattoo", 666, "imagen", 344, 2322);

console.log(productos);
