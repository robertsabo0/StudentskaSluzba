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
        .config(function($translateProvider) {

            $translateProvider.translations('en', {
                ALERT_CLOSE: 'Close',
                CANCEL: 'Cancel',
                CHANGE_PASSWORD_FORM_NEW_PASSWORD: 'New password',
                CHANGE_PASSWORD_FORM_NEW_PASSWORD_IS_REQUIRED: 'New password is required',
                CHANGE_PASSWORD_FORM_NEW_PASSWORD_MAX: 'New password max',
                CHANGE_PASSWORD_FORM_NEW_PASSWORD_MIN: 'New password min',
                CHANGE_PASSWORD_FORM_NEW_PASSWORD_PATTERN: 'New password pattern',
                CHANGE_PASSWORD_FORM_OLD_PASSWORD: 'Old password',
                CHANGE_PASSWORD_FORM_OLD_PASSWORD_IS_REQUIRED: 'Old password is required',
                CHANGE_PASSWORD_FORM_OLD_PASSWORD_MAX: 'Old password max',
                CHANGE_PASSWORD_FORM_OLD_PASSWORD_MIN: 'Old password min',
                CHANGE_PASSWORD_FORM_OLD_PASSWORD_PATTERN: 'Old password pattern',
                CHANGE_PASSWORD_FORM_SUBMIT: 'Submit',
                DATA_SET_EMPTY_NO_DATA: 'No data',
                ERROR_MESSAGE: 'There was an error executing operation.',
                ERROR_TITLE: 'Error',
                MAIN_LAYOUT_FINANSIJE: 'Finansije',
                MAIN_LAYOUT_NASLOVNA: 'Naslovna',
                MAIN_LAYOUT_PREDMETI: 'Predmeti',
                NEPOLOZENI_DATUM_POLOZENO: 'Datum polozeno',
                NEPOLOZENI_ID: 'Id',
                NEPOLOZENI_OCENA: 'Ocena',
                NEPOLOZENI_PREDMET_ID: 'Predmet id',
                NEPOLOZENI_SEMESTAR_POSLEDNJE_SLUSANJA: 'Semestar poslednje slusanja',
                NEPOLOZENI_SEMESTAR_PRVOG_SLUSANJA: 'Semestar prvog slusanja',
                NEPOLOZENI_STUDENT_ID: 'Student id',
                NO: 'No',
                OK: 'Ok',
                PLEASE_SELECT: 'Please select',
                SIGN_IN_FORM_PASSWORD: 'Password',
                SIGN_IN_FORM_PASSWORD_IS_REQUIRED: 'Password is required',
                SIGN_IN_FORM_PASSWORD_MAX: 'Password max',
                SIGN_IN_FORM_PASSWORD_MIN: 'Password min',
                SIGN_IN_FORM_PASSWORD_PATTERN: 'Password pattern',
                SIGN_IN_FORM_SUBMIT: 'Submit',
                SIGN_IN_FORM_USERNAME: 'Username',
                SIGN_IN_FORM_USERNAME_IS_REQUIRED: 'Username is required',
                SIGN_IN_FORM_USERNAME_MAX: 'Username max',
                SIGN_IN_FORM_USERNAME_MIN: 'Username min',
                SIGN_IN_PAGE_SIGN_UP: 'Sign up',
                SIGN_UP_FORM_BUDZET: 'Budzet',
                SIGN_UP_FORM_IME: 'Ime',
                SIGN_UP_FORM_IME_IS_REQUIRED: 'Ime is required',
                SIGN_UP_FORM_IME_MAX: 'Ime max',
                SIGN_UP_FORM_INDEKS: 'Indeks',
                SIGN_UP_FORM_INDEKS_IS_REQUIRED: 'Indeks is required',
                SIGN_UP_FORM_INDEKS_MAX: 'Indeks max',
                SIGN_UP_FORM_OSVOJENI_BODOVI: 'Osvojeni bodovi',
                SIGN_UP_FORM_OSVOJENI_BODOVI_IS_REQUIRED: 'Osvojeni bodovi is required',
                SIGN_UP_FORM_OSVOJENI_BODOVI_MIN: 'Osvojeni bodovi min',
                SIGN_UP_FORM_PASSWORD: 'Password',
                SIGN_UP_FORM_PASSWORD_IS_REQUIRED: 'Password is required',
                SIGN_UP_FORM_PASSWORD_MAX: 'Password max',
                SIGN_UP_FORM_PASSWORD_MIN: 'Password min',
                SIGN_UP_FORM_PASSWORD_PATTERN: 'Password pattern',
                SIGN_UP_FORM_PREZIME: 'Prezime',
                SIGN_UP_FORM_PREZIME_IS_REQUIRED: 'Prezime is required',
                SIGN_UP_FORM_PREZIME_MAX: 'Prezime max',
                SIGN_UP_FORM_SUBMIT: 'Submit',
                SIGN_UP_FORM_TEKUCI_SEMESTAR: 'Tekuci semestar',
                SIGN_UP_FORM_TEKUCI_SEMESTAR_IS_REQUIRED: 'Tekuci semestar is required',
                SIGN_UP_FORM_TEKUCI_SEMESTAR_MIN: 'Tekuci semestar min',
                SIGN_UP_FORM_TRENUTNO_STANJE_RACUNA: 'Trenutno stanje racuna',
                SIGN_UP_FORM_TRENUTNO_STANJE_RACUNA_IS_REQUIRED: 'Trenutno stanje racuna is required',
                SIGN_UP_FORM_USERNAME: 'Username',
                SIGN_UP_FORM_USERNAME_IS_REQUIRED: 'Username is required',
                SIGN_UP_FORM_USERNAME_MAX: 'Username max',
                SIGN_UP_FORM_USERNAME_MIN: 'Username min',
                SIGN_UP_PAGE_SIGN_IN: 'Sign in',
                UPDATE_STUDENT_FORM_BUDZET: 'Budzet',
                UPDATE_STUDENT_FORM_IME: 'Ime',
                UPDATE_STUDENT_FORM_IME_IS_REQUIRED: 'Ime is required',
                UPDATE_STUDENT_FORM_IME_MAX: 'Ime max',
                UPDATE_STUDENT_FORM_INDEKS: 'Indeks',
                UPDATE_STUDENT_FORM_INDEKS_IS_REQUIRED: 'Indeks is required',
                UPDATE_STUDENT_FORM_INDEKS_MAX: 'Indeks max',
                UPDATE_STUDENT_FORM_OSVOJENI_BODOVI: 'Osvojeni bodovi',
                UPDATE_STUDENT_FORM_OSVOJENI_BODOVI_IS_REQUIRED: 'Osvojeni bodovi is required',
                UPDATE_STUDENT_FORM_OSVOJENI_BODOVI_MIN: 'Osvojeni bodovi min',
                UPDATE_STUDENT_FORM_PASSWORD_HASH: 'Password hash',
                UPDATE_STUDENT_FORM_PASSWORD_HASH_IS_REQUIRED: 'Password hash is required',
                UPDATE_STUDENT_FORM_PASSWORD_HASH_MAX: 'Password hash max',
                UPDATE_STUDENT_FORM_PASSWORD_HASH_MIN: 'Password hash min',
                UPDATE_STUDENT_FORM_PREZIME: 'Prezime',
                UPDATE_STUDENT_FORM_PREZIME_IS_REQUIRED: 'Prezime is required',
                UPDATE_STUDENT_FORM_PREZIME_MAX: 'Prezime max',
                UPDATE_STUDENT_FORM_ROLE: 'Role',
                UPDATE_STUDENT_FORM_ROLE_IS_REQUIRED: 'Role is required',
                UPDATE_STUDENT_FORM_SUBMIT: 'Submit',
                UPDATE_STUDENT_FORM_TEKUCI_SEMESTAR: 'Tekuci semestar',
                UPDATE_STUDENT_FORM_TEKUCI_SEMESTAR_IS_REQUIRED: 'Tekuci semestar is required',
                UPDATE_STUDENT_FORM_TEKUCI_SEMESTAR_MIN: 'Tekuci semestar min',
                UPDATE_STUDENT_FORM_TRENUTNO_STANJE_RACUNA: 'Trenutno stanje racuna',
                UPDATE_STUDENT_FORM_TRENUTNO_STANJE_RACUNA_IS_REQUIRED: 'Trenutno stanje racuna is required',
                UPDATE_STUDENT_FORM_USERNAME: 'Username',
                UPDATE_STUDENT_FORM_USERNAME_IS_REQUIRED: 'Username is required',
                UPDATE_STUDENT_FORM_USERNAME_MAX: 'Username max',
                UPDATE_STUDENT_FORM_USERNAME_MIN: 'Username min',
                YES: 'Yes'
            });

            $translateProvider.preferredLanguage('en');

            $translateProvider.useSanitizeValueStrategy('sanitizeParameters');
        });
})();