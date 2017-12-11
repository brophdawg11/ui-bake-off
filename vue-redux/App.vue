<template>
    <counter :value="value"
             :onIncrementAsync="onIncrementAsync"
             :onIncrement="onIncrement"
             :onDecrement="onDecrement">
    </counter>
</template>

<script>
import store from './revue';
import Counter from './Counter';

const action = type => store.dispatch({type});

export default {
    name: 'app',
    components: {
        Counter,
    },
    data() {
        return {
            value: this.$select('count as value'),
        };
    },
    methods: {
        onIncrementAsync() {
            return action('INCREMENT_ASYNC');
        },
        onIncrement() {
            return action('INCREMENT');
        },
        onDecrement() {
            return action('DECREMENT');
        },
    },
}
</script>
