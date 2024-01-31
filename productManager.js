class ProductManager {
    constructor() {
        this.products = [];
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        if (!title, !price, !code || !stock) {
            console.error("Todos los campos son obligatorios.");
            return;
        }

        const product = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        };


        if (this.products.some(p => p.code === code)) {
            console.error("El código ya existe para otro producto.");
            return;
        }

        this.products.push(product);
        console.log("Producto agregado:", product);
    }

    getProducts() {
        return this.products;
    }

    getProductByCode(code) {
        const product = this.products.find(p => p.code === code);
        if (product) {
            return product;
        } else {
            console.error("Producto no encontrado.");
        }
    }
}

const manager = new ProductManager();

manager.addProduct("Producto 1", "Descripción 1", 10423, "imagen1.jpg", "CODE1", 20);
manager.addProduct("Producto 2", "Descripción 2", 15990, "imagen2.jpg", "CODE2", 30);

console.log("Todos los productos:", manager.getProducts());