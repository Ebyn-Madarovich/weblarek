import { IProduct } from "../../types/index.ts";

export class Catalog {
  items: IProduct[] = [];
  selectedItem: IProduct | null = null;

  constructor() {}

  saveItems(items: IProduct[]): void {
    this.items = items;
  }
  getItems(): IProduct[] {
    return this.items;
  }
  getItem(id: string): IProduct | undefined {
    return this.items.find((item) => item.id === id);
  }
  saveSelectedItem(item: IProduct): void {
    this.selectedItem = item;
  }
  getSelectedItem(): IProduct | null {
    return this.selectedItem;
  }
}
