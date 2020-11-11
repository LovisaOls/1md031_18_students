var vm = new Vue({
el: "#menu",
data:{
    MyBurgers: burgers
}
})

var vbutton = new Vue({
    el: "#orders",
    methods: {
        getInfoVue: function(){
            getInfo()
        }
    }
})
 

