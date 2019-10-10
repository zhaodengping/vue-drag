new Vue({
    el:'#app',
    data:{
        boxPosition:{
            x:0,
            y:0
        }
    }, 
    mounted() {
        let box=this.$refs.box.getBoundingClientRect();//获取初始box的位置
        this.boxPosition={}
    },
    methods: {
        down(){
            this.$refs.whole.addEventListener('mousemove',this.mousemove)
        },
        up(){
            this.$refs.whole.removeEventListener('mousemove',this.mousemove)
            console.log('leave')
        },
        mousemove(e){
            console.log(e.screenX)
            console.log(e.screenY)
            console.log('move')
        },
    },
})