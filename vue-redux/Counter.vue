<template>
  <div>
    <button @click="onIncrementAsync()">
      Increment after 1 second
    </button>
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
        onIncrementAsync: Function,
        onIncrement: Function,
        onDecrement: Function,
    },
};
</script>
