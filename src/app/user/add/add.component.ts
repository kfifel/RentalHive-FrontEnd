import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {UserService} from "../service/user.service";
import {IUser, User} from "../user.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  authorities: string[] = [];
  editForm = this.fb.group({
    id: [],
    lastName: [null, [Validators.required]],
    firstName: [null, [Validators.required]],
    email: [null, [Validators.required]],
    password: [null, [Validators.required]],
    authorities: [[], [Validators.required]],
    organizationName: [],
    location: [],
  });

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {

    this.userService.authorities()
      .subscribe(authorities => (this.authorities = authorities));
  }

  save() {
    if(this.editForm.invalid)
      alert("Invalid form");
    else
      this.userService.create(this.createFromForm()).subscribe({
          next: (res) => {
            console.log('User added successfully', res);
            this.router.navigate(['/user'])
          },
          error: (err: any) => console.log(err)
      });
  }

 createFromForm(): IUser{
    return {
      ...new User(),
      id: this.editForm.get(['id'])!.value,
      firstName: this.editForm.get(['firstName'])!.value,
      lastName: this.editForm.get(['lastName'])!.value,
      email: this.editForm.get(['email'])!.value,
      password: this.editForm.get(['password'])!.value,
      authorities: this.editForm.get(['authorities'])!.value,
      organizationName: this.editForm.get(['organizationName'])!.value,
      location: this.editForm.get(['location'])!.value
    };
  }
}