<template>
    <counter :value="value"
             :onIncrementAsync="onIncrementAsync"
             :onIncrement="onIncrement"
             :onDecrement="onDecrement">
    </counter>
</template>

<script>
import Counter from './Counter';

export default {
    name: 'app',
    components: {
        Counter,
    },
    computed: {
        value() {
            return this.$store.state.count;
        },
    },
    methods: {
        onIncrementAsync() {
            return this.$store.dispatch('INCREMENT_ASYNC');
        },
        onIncrement() {
            return this.$store.commit('INCREMENT');
        },
        onDecrement() {
            return this.$store.commit('DECREMENT');
        },
    },
}
</script>
