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
package com.StudentskaSluzba.backend.web.rest.dto;

import java.io.Serializable;

import javax.validation.constraints.*;


public class NepolozeniPredmetiResponse implements Serializable {

    private static final long serialVersionUID = 1L;

    @NotNull
    private Long predmetId;

    public Long getPredmetId() {
        return predmetId;
    }

    public void setPredmetId(Long predmetId) {
        this.predmetId = predmetId;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        final NepolozeniPredmetiResponse other = (NepolozeniPredmetiResponse) obj;
        if ((predmetId == null && other.predmetId != null) || !predmetId.equals(other.predmetId))
            return false;
        return true;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((predmetId == null) ? 0 : predmetId.hashCode());
        return result;
    }

    @Override
    public String toString() {
        return "NepolozeniPredmetiResponse[" + "predmetId=" + predmetId + "]";
    }

}
