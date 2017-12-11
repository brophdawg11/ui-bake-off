<template>
    <counter :value="value"
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
        onIncrement() {
            return this.$store.commit('INCREMENT');
        },
        onDecrement() {
            return this.$store.commit('DECREMENT');
        },
    },
}
</script>
