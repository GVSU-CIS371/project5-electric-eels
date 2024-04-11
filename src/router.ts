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
    props: true,
    component: HomeView,
  },
  {
    path: "/",
    name: "electronics",
    props: true,
    component: ElectronicsView,
  },
  {
    path: "/",
    name: "clothing",
    props: true,
    component: ClothingView,
  },
  {
    path: "/",
    name: "groceries",
    props: true,
    component: GroceriesView,
  },
  {
    path: "/",
    name: "bestseller",
    props: true,
    component: BestSellerView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes:myRoutes,
});

export default router;
