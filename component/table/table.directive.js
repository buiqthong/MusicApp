/**
 * Created by bqthong on 8/2/2016.
 */
(function () {
    'use strict';
    angular.module('mod.table',[])
        .directive('tableDirective', function () {
            return {
                restrict: 'AE',
                scope: {
                    data: '=',
                    columns: '='
                },
                templateUrl: 'component/table/template/table.template.html',
                controller: ['$scope',function ($scope) {
                    $scope.selectedItems = [];
                    function unCheckAll() {
                        for(var j = 0; j< $scope.data.length; j++){
                            $scope.data[j].selected = false;
                        }
                        $scope.selectedItems.splice(0,$scope.data.length);
                    }
                    // Check all check boz
                    $scope.checkAllCheckbox = false;
                    $scope.checkAll = function () {
                        if($scope.checkAllCheckbox){
                            for(var i = 0; i< $scope.data.length; i++){
                                $scope.data[i].selected = true;
                                $scope.selectedItems.push($scope.data[i])
                            }
                        }
                        else {
                            unCheckAll();
                        }
                    };

                    // Click item
                    $scope.clickItem = function (item) {
                        if(item.selected === true){
                            $scope.selectedItems.push(item);
                        }
                        else {
                            if($scope.selectedItems.length > 0){
                                for(var j = 0; j < $scope.selectedItems.length; j++){
                                    $scope.selectedItems.splice($scope.selectedItems[j],1);
                                }
                            }

                        }
                        console.log($scope.selectedItems);
                    };

                    // Sort
                    $scope.sortReverse = false;
                    $scope.sortType = function (valueSort) {
                        if ($scope.valueSort === valueSort) {
                            $scope.sortReverse = !$scope.sortReverse;
                        } else {
                            $scope.sortReverse = false;
                        }
                        $scope.valueSort = valueSort;
                    };
                    // Get value of row in column
                    $scope.getRowsOfColumns = function (item, column) {
                        var arrayColumn = column.split(' ');
                        var row = item;
                        for (var i = 0; i < arrayColumn.length; i++) {
                            row = row[arrayColumn[i]];
                        }
                        return row;
                    };

                    $scope.$watch('', function (newVal) {
                        if(newVal){
                            console.log();
                        }
                    })
                    
                }]
            }
        })
})();