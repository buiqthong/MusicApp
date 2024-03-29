/**
 * Created by bqthong on 8/2/2016.
 */
(function(){
    'use strict';
    angular.module('component',[
        'mod.table',
        'mod.pagination'
    ]);

    angular.module('mainApp',[
        'component',
        'ngRoute',
        'jm.i18next'

    ])
    .config(function($i18nextProvider){
        $i18nextProvider.options = {
            lng: 'en',
            useCookie: false,
            useLocalStorage: false,
            fallbackLng: 'en',
            resGetPath: 'language/__lng__/__ns__.json',
            defaultLoadingValue: ''
        };
    });
})();