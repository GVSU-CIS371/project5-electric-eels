import { defineStore } from "pinia";
import { ProductDoc } from "../types/product";
import { initProducts } from "../data-init";

export const useProductStore = defineStore("ProductStore", {
  // your answer
  //initProducts is the list of items
  //ProductDoc is the type of each item


  state: () => {
      return { items: [] as ProductDoc[] };
    },
    actions: {
      init() {
        this.items = initProducts;
      },
      filterByCategory(category: string) {
        return this.items.filter((item) => item.data.category === category);
      },
      filterByRating(minRating: number) {
        return this.items.filter((item) => item.data.rating >= minRating);
      }
    },
});
