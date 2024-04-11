<template>
  <span>a</span>
  <v-container>
    <span>b</span>
    <v-row align="center"> 
      <span>c</span>
      <v-col>
        <span>d</span>
        <!--<template v-for="(item) in store.items" :key="item" :item = "item">
          <span>this works</span>
          <StoreItem :prod = "item"></StoreItem>
          <span>this works</span>
        </template>
        -->
        <span>e</span>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
  import StoreItem from './StoreItem.vue';
  import { useProductStore } from '../stores/ProductStore';

  const store = useProductStore();
  console.log(store.items);

</script>
