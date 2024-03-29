/**
 * Created by bqthong on 8/15/2016.
 */
(function () {
    'use strict';
    angular.module('mainApp')
        .constant('MusicConstant', {
            vm: 'vm',
            music: {
                templateUrl: 'app/main.html'
            },
            song: {
                templateUrl: {
                    action: 'app/songs/template/song.action.html',
                    directive: 'app/songs/template/song.directive.html',
                    view: 'app/songs/template/song.view.html'
                }
            },
            playlist: {
                templateUrl: {
                    action: 'app/playlist/template/playlist.action.html',
                    directive: 'app/playlist/template/playlist.directive.html',
                    view: 'app/playlist/template/playlist.view.html'
                }
            }
        });
})();