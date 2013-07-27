var app = angular.module('app', [] );

function EmployeeController($scope) {
    $scope.department = 'Engineering';
    $scope.employee = {
        name: 'Joe the Manager',
        reports: [
        {name: 'John Smith'},
        {name: 'Mary Run'}
        ]
    };
}

var scope = ng.$rootScope.Scope();
scope.name = "hello";

