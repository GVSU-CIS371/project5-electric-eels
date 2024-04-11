<template>
  <v-row> 
    <v-col>
      <template v-for="prod in store.items" :key="prod">
        <StoreItem :prod = "prod"></StoreItem>
      </template>
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
  import StoreItem from './StoreItem.vue';
  import { useProductStore } from '../stores/ProductStore';

  const store = useProductStore();

  // your answer
</script>
