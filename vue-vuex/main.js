// Vue-related Modules
import Vue from 'vue';

// App Components
import App from './App';

// Utilities
import store from './store';

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    render: h => h(App),
});
/* eslint-enable no-new */
