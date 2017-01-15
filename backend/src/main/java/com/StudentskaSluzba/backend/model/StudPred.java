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
package com.StudentskaSluzba.backend.model;

import java.io.Serializable;

import java.time.*;

import java.util.Optional;

import javax.persistence.*;
import javax.validation.constraints.*;


@Entity
@Table(name = "StudPred")
public class StudPred implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "studentId")
    private Student student;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "predmetId")
    private Predmet predmet;

    @Max(10)
    @Column(name = "ocena")
    private Integer ocena;

    @Column(name = "datumPolozeno")
    private ZonedDateTime datumPolozeno;

    @NotNull
    @Min(1)
    @Column(name = "semestarPrvogSlusanja")
    private Integer semestarPrvogSlusanja;

    @NotNull
    @Min(1)
    @Column(name = "semestarPoslednjeSlusanja")
    private Integer semestarPoslednjeSlusanja;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Student getStudent() {
        return student;
    }

    public void setStudent(Student student) {
        this.student = student;
    }

    public Predmet getPredmet() {
        return predmet;
    }

    public void setPredmet(Predmet predmet) {
        this.predmet = predmet;
    }

    public Optional<Integer> getOcena() {
        return Optional.ofNullable(ocena);
    }

    public void setOcena(Optional<Integer> ocena) {
        this.ocena = ocena.orElse(null);
    }

    public Optional<ZonedDateTime> getDatumPolozeno() {
        return Optional.ofNullable(datumPolozeno);
    }

    public void setDatumPolozeno(Optional<ZonedDateTime> datumPolozeno) {
        this.datumPolozeno = datumPolozeno.orElse(null);
    }

    public Integer getSemestarPrvogSlusanja() {
        return semestarPrvogSlusanja;
    }

    public void setSemestarPrvogSlusanja(Integer semestarPrvogSlusanja) {
        this.semestarPrvogSlusanja = semestarPrvogSlusanja;
    }

    public Integer getSemestarPoslednjeSlusanja() {
        return semestarPoslednjeSlusanja;
    }

    public void setSemestarPoslednjeSlusanja(Integer semestarPoslednjeSlusanja) {
        this.semestarPoslednjeSlusanja = semestarPoslednjeSlusanja;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        final StudPred other = (StudPred) obj;
        if ((id == null && other.id != null) || !id.equals(other.id))
            return false;
        if ((student == null && other.student != null) || !student.equals(other.student))
            return false;
        if ((predmet == null && other.predmet != null) || !predmet.equals(other.predmet))
            return false;
        if ((ocena == null && other.ocena != null) || !ocena.equals(other.ocena))
            return false;
        if ((datumPolozeno == null && other.datumPolozeno != null) || !datumPolozeno.equals(other.datumPolozeno))
            return false;
        if ((semestarPrvogSlusanja == null && other.semestarPrvogSlusanja != null) || !semestarPrvogSlusanja.equals(other.semestarPrvogSlusanja))
            return false;
        if ((semestarPoslednjeSlusanja == null && other.semestarPoslednjeSlusanja != null) || !semestarPoslednjeSlusanja.equals(other.semestarPoslednjeSlusanja))
            return false;
        return true;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((id == null) ? 0 : id.hashCode());
        result = prime * result + ((student == null) ? 0 : student.hashCode());
        result = prime * result + ((predmet == null) ? 0 : predmet.hashCode());
        result = prime * result + ((ocena == null) ? 0 : ocena.hashCode());
        result = prime * result + ((datumPolozeno == null) ? 0 : datumPolozeno.hashCode());
        result = prime * result + ((semestarPrvogSlusanja == null) ? 0 : semestarPrvogSlusanja.hashCode());
        result = prime * result + ((semestarPoslednjeSlusanja == null) ? 0 : semestarPoslednjeSlusanja.hashCode());
        return result;
    }

    @Override
    public String toString() {
        return "StudPred[" + "id=" + id + ", student=" + student + ", predmet=" + predmet + ", ocena=" + ocena + ", datumPolozeno=" + datumPolozeno + ", semestarPrvogSlusanja=" + semestarPrvogSlusanja
                + ", semestarPoslednjeSlusanja=" + semestarPoslednjeSlusanja + "]";
    }

}
