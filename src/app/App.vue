<template>
    <div>
        <SomeSettings>
            <SomeLayout slot-scope="{header, footer}">
                <h1 slot="header">{{header}}</h1>
                <h3 slot="footer">{{footer}}</h3>
            </SomeLayout>
        </SomeSettings>
    </div>
</template>

<script>

    import Vue from 'vue';
    import {Component, Prop} from 'vue-property-decorator';
    import SomeLayout from '../layouts/SomeLayout';
    import SomeSettings from "../settings/SomeSettings";

    @Component({
        components: {
            SomeLayout,
            SomeSettings
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



