<template>
    <div>
        <SomeLayout />
    </div>
</template>

<script>

    import Vue from 'vue';
    import {Component, Prop} from 'vue-property-decorator';
    import SomeLayout from '../layouts/SomeLayout';

    @Component({
        components: {
            SomeLayout
        }
    })
    export default class App extends Vue {
        @Prop ({ default: 'Dies mal Prop Decorator'})
        message

        onClick() {
            this.message = 'Ist das aber einfach?';
        }
    }

</script>



