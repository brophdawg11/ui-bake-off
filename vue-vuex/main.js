// Vue-related Modules
import Vue from 'vue';

// App Components
import Counter from './Counter';

// Utilities
import store from './store';

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    render: h => h(Counter),
});
/* eslint-enable no-new */
