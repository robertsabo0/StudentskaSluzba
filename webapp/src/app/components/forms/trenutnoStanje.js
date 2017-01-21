/**
 * Copyright 2016 dryTools doo
 * Email: contact@drytools.co
 * 
 * This file is part of StudentskaSluzba.
 * 
 * StudentskaSluzba is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * StudentskaSluzba is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with StudentskaSluzba. If not, see <http://www.gnu.org/licenses/>.*
 **/
(function() {
    'use strict';

    angular
        .module('webapp')
        .directive('trenutnoStanje', function() {
            return {
                restrict: 'E',
                scope: {
                    id: '='
                },
                templateUrl: 'src/app/components/forms/trenutnoStanje.html',
                controller: 'TrenutnoStanjeController'
            };
        });

    angular
        .module('webapp')
        .controller('TrenutnoStanjeController', TrenutnoStanjeController);

    TrenutnoStanjeController.$inject = ['$scope', 'eventBus', 'studentApi'];

    function TrenutnoStanjeController($scope, eventBus, studentApi) {

        $scope.model = {};
        $scope.errorCode = null;
        $scope.submit = submit;
        $scope.onpredmetChangedEvent = eventBus.onEvent('predmetChangedEvent', onpredmetChangedEvent);

        if ($scope.id) load($scope.id);

        function load(id) {
            var request = {
                id: id
            };
            studentApi.trenutnoStanje(request).then(onSuccess, onError);

            function onSuccess(response) {
                $scope.model = response.data;
            }

            function onError(response) {
                if (response.status && response.statusText) {
                    $scope.errorCode = response.statusText;
                } else {
                    $scope.errorCode = 'Unknown error';
                }
            }

        }

        function onpredmetChangedEvent(event, payload) {
            load();
        }

    }

})();