<template>
    <div>
        {{ message }}
        <button @click="onClick">Und?</button>
    </div>
</template>

<script>

    import Vue from 'vue';
    import Component from 'vue-class-component';

    @Component({})
    export default class App extends Vue {
        message =  "Hallo Jungs!";
        onClick() {
            this.message = 'Ist das aber einfach?';
        }
    }

</script>



