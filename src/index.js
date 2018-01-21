import Vue from "vue"
import App from "./app/App"

new Vue({
    el: "#app",
    render: h => <App>
        <h2> Ein H2 von index </h2>
    </App>
})