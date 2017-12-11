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

    props: {
        value: Number,
        onIncrement: Function,
        onDecrement: Function,
    },
};
</script>
