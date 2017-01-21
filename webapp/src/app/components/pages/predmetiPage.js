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
        .controller('PredmetiPageController', PredmetiPageController);

    PredmetiPageController.$inject = ['$scope', '$state', '$stateParams'];

    function PredmetiPageController($scope, $state, $stateParams) {
        $scope.userId = parseInt($stateParams.userId);
        $scope.onClickNepolozeni = onClickNepolozeni;
        $scope.onClickPolozeni = onClickPolozeni;
        $scope.onClickNeslusani = onClickNeslusani;

        function onClickNepolozeni() {
            $state.go('MainLayout.PredmetiPage.nepolozeniPage', {
                userId: $scope.userId
            });
        }

        function onClickPolozeni() {
            $state.go('MainLayout.PredmetiPage.polozeniPage', {
                userId: $scope.userId
            });
        }

        function onClickNeslusani() {
            $state.go('MainLayout.PredmetiPage.neslusaniPage', {
                userId: $scope.userId
            });
        }

    }
})();