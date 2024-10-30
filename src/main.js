const app = Vue.createApp({
    data(){
        return {
            title : '三字經',
            content: '這裡會放經文',
            line: 1,
        }
    },
    methods:{
        addLine(){
            this.line++;
        },
        subLine(){
            this.line--;
        }
    }
});

app.mount('#app');