(function() {

    "use strict";

    var myApp = angular
        .module("internTask", []);

    myApp.factory('ImagesData', function() {
        var images = {};
        images.data = [{
            url: "images/1.jpg",
            name: "1.jpg",
            time: "3 minutes"
        }, {
            url: "images/2.jpg",
            name: "2.jpg",
            time: "1 hours"
        }, {
            url: "images/3.jpg",
            name: "3.jpg",
            time: "30 minutes"
        }, {
            url: "images/4.jpg",
            name: "4.jpg",
            time: "3 hours"
        }, {
            url: "images/5.jpg",
            name: "5.jpg",
            time: "30 seconds"
        }, {
            url: "images/6.jpg",
            name: "6.jpg",
            time: "8 hours"
        }, {
            url: "images/7.jpg",
            name: "7.jpg",
            time: "7 minutes"
        }, {
            url: "images/8.jpg",
            name: "8.jpg",
            time: "4 hours"
        }, {
            url: "images/9.jpg",
            name: "9.jpg",
            time: "1 minutes"
        }, {
            url: "images/10.jpg",
            name: "10.jpg",
            time: "18 minutes"
        }, {
            url: "images/11.jpg",
            name: "11.jpg",
            time: "3 hours"
        }, {
            url: "images/12.jpg",
            name: "12.jpg",
            time: "3 minutes"
        }];
        return images;
    })


    myApp.controller('homeCtrl', function($scope, ImagesData) {

        console.log("Images Data", ImagesData.data);
        $scope.data = ImagesData.data;
    });


})();
