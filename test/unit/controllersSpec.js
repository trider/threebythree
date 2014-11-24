//'use strict';

/* jasmine specs for controllers go here */

describe('tbtApp controllers', function (){
    
    describe('RideListCtrl', function (){
        
        
        var scope, ctrl, $httpBackend; 
        
        beforeEach(module('tbtApp'));  
        beforeEach(inject(function (_$httpBackend_, $rootScope, $controller)
        {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('data/routes_test.json').respond({ type: 'Offroad' });

            scope = $rootScope.$new();
            ctrl = $controller('RideListCtrl', { $scope: scope.type });
                 
        }));

        

    });

    it('should fetch map detail', function() {
        //    //expect(scope.type).toBeUndefined();
        //    //$httpBackend.flush();

        //    //expect(scope).toBe({ });
        });  

    

     
});    


  
