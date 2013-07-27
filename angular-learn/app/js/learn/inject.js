var app = angular.module( 'app', [] );

//A provider is an object with a $get() method. The injector calls the $get method to create a new instance of a service.
var MyFunc = function() {

    this.name = "default name";

    this.$get = function() {
        this.name = "new name"
        return "Hello from MyFunc.$get(). this.name = " + this.name;
    };

    return "Hello from MyFunc(). this.name = " + this.name;
};

// returns the actual function
app.service( 'myService', MyFunc );

// returns the function's return value
app.factory( 'myFactory', MyFunc );

// returns the output of the function's $get function
app.provider( 'myProv', MyFunc );

function MyCtrl( $scope, myService, myFactory, myProv ) {
    $scope.serviceOutput = "myService = " + myService;
    $scope.factoryOutput = "myFactory = " + myFactory;
    $scope.providerOutput = "myProvider = " + myProv;
}

console.log(angular.injector());