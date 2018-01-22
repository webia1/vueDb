<template>
    <div>
        <div v-for="person in persons">
            {{ person.abbr + ': ' + person.name }}
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import {Component, Prop} from 'vue-property-decorator';

    @Component({})
    export default class Content extends Vue {
        persons = [
            { name: 'Michael Jackson', abbr: 'mj'},
            { name: 'George Michael', abbr: 'gm'},
            { name: 'Tom Johnson', abbr: 'tj'},
        ];
    }
</script>