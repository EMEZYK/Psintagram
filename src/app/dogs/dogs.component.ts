import { Component, OnInit } from '@angular/core';
import { DogsService } from '../dogs.service';
import { Dog } from '../dog';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css'],
})
export class DogsComponent implements OnInit {
  dogs!: Observable<Dog[]>;
  dog!: Dog;

  constructor(private dogsService: DogsService) {}
  stringifiedData: any;

  ngOnInit(): void {
    console.log('on init');
    this.dogs = this.dogsService.getDogs();
  }

  get selectedDog() {
    return this.dog;
  }

  set selectedDog(value) {
    this.dog = value;
    this.dogsService.setDog(this.dog);
  }

  // setSelectedDog(dog: Dog) {
  //   console.log('set Dog', dog);
  //   this.dog = dog;
  //   this.dogsService.setDog(dog);
  // }
}
