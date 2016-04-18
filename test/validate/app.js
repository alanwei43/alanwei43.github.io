
angular.module("DemoApp", [])
    .controller("BodyCtrl", function () {
        this.persons= [];
        this.person = {};
        this.add= function () {
            this.persons.push( JSON.parse(JSON.stringify(this.person)));
            this.person = {};
        }
        this.submit = function(){
            console.log(this.persons);
        };
    });