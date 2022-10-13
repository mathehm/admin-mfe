<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore()
</script>

<template>
  <div class="greetings">
    <h1>Importou o HelloWorld</h1>
    <h1>count: {{ counter.count }}</h1>
    <button @click="counter.increment">ADD</button>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  color: black;
}
</style>
