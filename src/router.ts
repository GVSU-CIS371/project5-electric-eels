import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "./components/Home.vue";
import GroceriesView from "./components/Groceries.vue";
import BestSellerView from "./components/BestSeller.vue";
import ElectronicsView from "./components/Electronics.vue";
import ClothingView from "./components/Clothing.vue";

const myRoutes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/electronics",
    name: "electronics",
    component: ElectronicsView,
  },
  {
    path: "/clothing",
    name: "clothing",
    component: ClothingView,
  },
  {
    path: "/groceries",
    name: "groceries",
    component: GroceriesView,
  },
  {
    path: "/bestseller",
    name: "bestseller",
    component: BestSellerView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes:myRoutes,
});

export default router;
