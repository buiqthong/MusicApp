/**
 * Created by bqthong on 8/2/2016.
 */
(function(){
    'use strict';
    angular.module('mainApp')
        .config(['$routeProvider','MusicConstant',function($routeProvider,MusicConstant){
            $routeProvider
                .when('/songs',{
                    templateUrl: MusicConstant.music.templateUrl,
                    controller: 'SongsController',
                    controllerAs:'vm'
                })
                .when('/playlist',{
                    templateUrl: MusicConstant.music.templateUrl,
                    controller: 'PlaylistController',
                    controllerAs:'vm'
                })
                .otherwise({
                    redirectTo:'/songs'
                });
        }])
})();