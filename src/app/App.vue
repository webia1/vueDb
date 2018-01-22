<template>
    <div>
        <SomeSettings>
            <SomeLayout slot-scope="{header, footer}">
                <Header slot="header" :header="header"></Header>
                <div slot="content">Content</div>
                <Footer slot="footer" :footer="footer"></Footer>
            </SomeLayout>
        </SomeSettings>
    </div>
</template>

<script>

    import Vue from 'vue';
    import {Component, Prop} from 'vue-property-decorator';
    import SomeLayout from '../layouts/SomeLayout';
    import SomeSettings from '../settings/SomeSettings';
    import {Header, Footer} from '../components';

    @Component({
        components: {
            SomeLayout,
            SomeSettings,
            Header,
            Footer
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



