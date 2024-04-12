<template>
  <v-card class="store-item">
    <v-img :src="image" height="200px"></v-img>
    <v-card-title>{{ name }}</v-card-title>
    <v-card-subtitle>{{ rating }} 
      <v-icon>mdi-cash</v-icon> {{ price }} {{ stock }}
    </v-card-subtitle>
    <v-card-text>{{ description }}</v-card-text>
  </v-card>
</template>

<script lang="ts" setup>
  import { ProductDoc } from '../types/product.ts';
  const props = defineProps<{prod: ProductDoc}>();

  const info = props.prod.data;
  const name = info.name;
  const image = info.image;
  const rating = info.rating;
  const price = info.price;
  const stock = info.stock;
  const description = info.description;

</script>
