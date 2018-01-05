(function () {
    'use strict';

    angular
        .module('testInterviewTaskApp')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('api/register', {}, {});
    }
})();
