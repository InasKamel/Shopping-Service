(function () {
    'use strict';

    angular
        .module('dashboard')
        .controller('TemplateController', TemplateController);

    TemplateController.$inject = ['TemplateService'];
    function TemplateController(TemplateService) {
        var vm = this;
        vm.sayHello = sayHello;
        vm.testService = testService;
        
        testService();
        
        function sayHello() {
            return 'Hello, World!';
        }

        function testService() {
            TemplateService.callBackend({
                data: 'data'
            })
            .then(function(res) {
                console.log(res.data);
            })
            .catch(function(err) {
                console.log(err.data);
            });
        }
    }
})();