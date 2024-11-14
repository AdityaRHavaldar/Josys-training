interface InventoryItem {
  id: string;
  name: string;
}

interface Book extends InventoryItem {
  author?: string;
  pages?: number;
}

interface Clothing extends InventoryItem {
  size: string;
  material: string;
}

interface Electronics extends InventoryItem {
  brand?: string;
  warranty?: boolean;
}

class Inventory<T extends InventoryItem> {
  items: T[] = [];

  addItem(item: T): void {
    this.items.push(item);
  }

  removeItem(id: string): T | undefined {
    const index = this.items.findIndex((item) => item.id === id);
    if (index !== -1) {
      return this.items.splice(index, 1)[0];
    }
    return undefined;
  }

  findItem(id: string): T | undefined {
    return this.items.find((item) => item.id === id);
  }

  getItems(): T[] {
    return this.items;
  }
}

const bookInventory = new Inventory<Book>();
bookInventory.addItem({
  id: "1",
  name: "Book 1",
  author: "Archit",
  pages: 253,
});
bookInventory.addItem({
  id: "2",
  name: "Book 2",
  author: "Aviral",
  pages: 281,
});
bookInventory.addItem({
  id: "3",
  name: "Book 3",
  author: "Aditya",
  pages: 319,
});
bookInventory.addItem({
  id: "4",
  name: "Book 4",
  author: "Samir",
});
bookInventory.addItem({
  id: "2",
  name: "Book 2",
  pages: 343,
});

const clothingInventory = new Inventory<Clothing>();
clothingInventory.addItem({
  id: "1",
  name: "Tshirt",
  size: "S",
  material: "Cotton",
});
clothingInventory.addItem({
  id: "2",
  name: "Jeans",
  size: "L",
  material: "Denim",
});
clothingInventory.addItem({
  id: "3",
  name: "Shorts",
  size: "XL",
  material: "Nilon",
});
clothingInventory.addItem({
  id: "4",
  name: "Shirt",
  size: "M",
  material: "Cotton",
});

const electronicsInventory = new Inventory<Electronics>();
electronicsInventory.addItem({
  id: "1",
  name: "Smartphone",
  brand: "Apple",
  warranty: true,
});
electronicsInventory.addItem({
  id: "2",
  name: "Laptop",
  brand: "Dell",
  warranty: false,
});
electronicsInventory.addItem({
  id: "3",
  name: "Tablet",
  brand: "Samsung",
  warranty: true,
});

console.log("All Books:", bookInventory.getItems());
console.log("Find Books by ID 2:", bookInventory.findItem("2"));
console.log("");
console.log("All Cloths:", clothingInventory.getItems());
console.log("Find Clothing by ID 3:", clothingInventory.findItem("3"));
console.log("");
console.log(
  "Removed Electronics with ID 1:",
  electronicsInventory.removeItem("1")
);
console.log("Remaining Electronics:", electronicsInventory.getItems());
