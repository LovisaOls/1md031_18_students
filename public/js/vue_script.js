var socket = io();
var vm = new Vue({
    el: "#main",
    data: {
        MyBurgers: burgers,
        orders: {},
        coordinates: {x:0, y:0}
    },
    methods: {
        getInfoVue: function () {
            getInfo()
        },
        displayOrder: function(event){
            var offset = {
                x: event.currentTarget.getBoundingClientRect().left,
                y: event.currentTarget.getBoundingClientRect().top
            };
            this.coordinates.x = event.clientX - 10 - offset.x;
            this.coordinates.y = event.clientY - 10 - offset.y;

        },
        addOrder: function (event) {
            this.getInfoVue();
            socket.emit("addOrder", {
                orderId: null,
                details: {
                    x: this.coordinates.x,
                    y: this.coordinates.y
                },
                orderItems: findBurgers(),

                customerInformation: {
                    name: getPersonalInfo()[0],
                    email: getPersonalInfo()[1],
                    payment: getPersonalInfo()[2],
                    gender: getPersonalInfo()[3]
                }
            });
        }
    }
});

