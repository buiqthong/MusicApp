/**
 * Created by bqthong on 8/9/2016.
 */
(function () {
    'use strict';
    angular.module('mod.pagination', [])
        .directive('paginationDirective',[function() {
        return {
            templateUrl: 'component/pagination/template/pagination.template.html',
            restrict: 'E',
            scope: {
                totalPages: '='
            },
            controller: ['$scope','PagerService', function ($scope,PagerService) {
                var vm = this;
                vm.totalPages = $scope.totalPages;
                vm.dummyItems = vm.totalPages;  // dummy array of items to be paged
                vm.pager = {};
                vm.setPage = setPage;

                initController();

                function initController() {
                    // init to page 1
                    vm.setPage(1);
                }

                function setPage(page) {
                    if (page < 1 || page > vm.pager.totalPages) {
                    }
                    // get pager object from PagerService
                    vm.pager = PagerService.GetPager(vm.dummyItems.length, page);

                    // get items of current page
                    vm.items = vm.dummyItems.slice(vm.pager.startIndex, vm.pager.endIndex + 1);
                    // console.log(vm.items);
                }
                
            }],
            controllerAs: 'vm'
        };
    }])
})();