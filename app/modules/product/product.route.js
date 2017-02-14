(function () {
    'use strict';

    angular
        .module('dashboard')
        .config(routes);

    routes.$inject = ['$stateProvider'];
    function routes($stateProvider) {
        $stateProvider
            .state('dashboard.product', {
                url: '/product',
                templateUrl: 'modules/product/product.html',
                controller: 'ProductController as ctrl',
                data: {
                    portected: true
                }
            });
    }
})();