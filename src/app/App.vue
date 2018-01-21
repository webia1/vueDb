<template>
    <div>
        {{ message }}
        <button @click="onClick">Und?</button>
        <slot></slot>
    </div>
</template>

<script>

    import Vue from 'vue';
    import {Component, Prop} from 'vue-property-decorator';

    @Component({})
    export default class App extends Vue {
        @Prop ({ default: 'Dies mal Prop Decorator'})
        message

        onClick() {
            this.message = 'Ist das aber einfach?';
        }
    }

</script>



