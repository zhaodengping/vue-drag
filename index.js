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
        this.boxPosition={
            x:box.left,
            y:box.top
        }
    },
    methods: {
        down(){
            this.$refs.whole.addEventListener('mousemove',this.mousemove,false)
            this.$refs.whole.addEventListener('mouseup',this.mouseup,false)
        }, 
        mouseup(){
            this.$refs.whole.removeEventListener('mousemove',this.mousemove)
        },
        mousemove(e){
            this.boxPosition={
                x:e.clientX,
                y:e.clientY
            }
        },
    },
})