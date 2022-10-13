<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore()

</script>

<template>
  <div>
    <h1>count: {{ counter.count }}</h1>
    <button @click="counter.increment">ADD</button>
  </div>
</template>
