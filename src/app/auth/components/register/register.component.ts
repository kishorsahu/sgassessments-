import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthauthenticationService } from '../../services/authauthentication.service';
import { Router } from "@angular/router";


@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder, private service: AuthauthenticationService, private router: Router) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            gender: [],
            department: [],
            dob: []
        });

        this.registerForm.controls['gender'].setValue('male', {onlySelf: true});
        this.registerForm.controls['department'].setValue('departA', {onlySelf: true});
    }
    
    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        this.service.registration(this.registerForm.value);
        this.router.navigate(['/']);
    }

    backeTouserList() {
        this.router.navigate(['/']);
    }
}
