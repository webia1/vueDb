import Vue from "vue"
import App from "./app/App"

new Vue({
    el: "#app",
    render: h => <App>
        <h2 slot="footer"> Footertext, Reihenfolge bestimmt Template </h2>
        <h2 slot="header"> Headertext kommt auch über Index </h2>
    </App>
})