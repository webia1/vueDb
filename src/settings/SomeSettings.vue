<template>
    <div>
        <slot :header="header" :footer="footer"/>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Component from 'vue-class-component';

    Component ({})
    export default class SomeSettings extends Vue {
        header = "Some Settings Header";
        footer = "Some Settings Footer"
    }
</script>