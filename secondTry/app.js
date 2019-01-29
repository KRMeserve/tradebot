angular.module('alfred', []).controller('AlfredController', function() {

    const tradeApp = this;

    tradeApp.clickTest = ()=>{
        console.log('clicked!');
    }
    console.log('angular is working!');
})
