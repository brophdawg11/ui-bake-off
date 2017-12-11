<template>
  <div>
    <button @click="onIncrement()">
      Increment
    </button>
    <button @click="onDecrement()">
      Decrement
    </button>
    <hr />
    <div>
      Clicked: {{value}} times
    </div>
  </div>
</template>

<script>
export default {
    name: 'counter',

    computed: {
        value() {
            return this.$store.state.count;
        },
    },

    methods: {
        onIncrement() {
            return this.$store.commit('INCREMENT');
        },
        onDecrement() {
            return this.$store.commit('DECREMENT');
        },
    }
};
</script>

<style scoped>
</style>
