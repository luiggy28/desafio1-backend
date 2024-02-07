class ProductManager {
    constructor() {
        this.products = [];
        this.nextId = 1;
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        if (!title || !price || !code || !stock) {
            console.error("Todos los campos son obligatorios.");
            return;
        }

        if (this.products.some(p => p.code === code)) {
            console.error("El código ya existe para otro producto.");
            return;
        }

        const product = {
            id: this.nextId++,
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        };

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

    getProductById(id) {
        const product = this.products.find(p => p.id === id);
        if (product) {
            return product;
        } else {
            throw new Error("Producto no encontrado.");
        }
    }

    updateProduct(id, updatedProduct) {
        const index = this.products.findIndex(p => p.id === id);
        if (index === -1) {
            throw new Error("Producto no encontrado.");
        }

        updatedProduct.id = this.products[index].id;
        this.products[index] = { ...this.products[index], ...updatedProduct };
        console.log("Producto actualizado:", this.products[index]);
    }

    deleteProduct(id) {
        const index = this.products.findIndex(p => p.id === id);
        if (index === -1) {
            throw new Error("Producto no encontrado.");
        }
        this.products.splice(index, 1);
        console.log("Producto eliminado.");
    }
}


const manager = new ProductManager();
console.log("Todos los productos (vacío):", manager.getProducts());

manager.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25);
console.log("Todos los productos (con un producto):", manager.getProducts());