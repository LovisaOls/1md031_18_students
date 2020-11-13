var socket = io();
var vm = new Vue({
    el: "#main",
    data: {
        MyBurgers: burgers,
        orders: {},
        coordinates: {x:0, y:0},

    },
    created: function () {
        socket.on('initialize', function (data) {
            this.orders = data.orders;
        }.bind(this));

        socket.on('currentQueue', function (data) {
            this.orders = data.orders;
        }.bind(this));
    },
    methods: {
        getInfoVue: function () {
            getInfo()
        },
        getNext: function () {
            var lastOrder = Object.keys(this.orders).reduce(function (last, next) {
                return Math.max(last, next);
            }, 0);
            return lastOrder + 1;
        },
        displayOrder: function(event){

        },
        addOrder: function (event) {
            var offset = {
                x: event.currentTarget.getBoundingClientRect().left,
                y: event.currentTarget.getBoundingClientRect().top
            };
            socket.emit("addOrder", {
                orderId: this.getNext(),
                details: {
                    x: event.clientX - 10 - offset.x,
                    y: event.clientY - 10 - offset.y
                },
                orderItems: ["Beans", "Curry"]
            });
        }
    }
});

