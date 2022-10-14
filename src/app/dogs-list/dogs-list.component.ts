import { Component, OnInit } from '@angular/core';
import { DogsService } from '../dogs.service';
import { Dog } from '../dog';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs-list.component.html',
  styleUrls: ['./dogs-list.component.css'],
})
export class DogsListComponent implements OnInit {
  dogs!: Observable<Dog[]>;
  dog!: Dog;

  constructor(private dogsService: DogsService) {}
  stringifiedData: any;

  ngOnInit(): void {
    this.dogs = this.dogsService.getDogs();
  }

  get selectedDog() {
    return this.dog;
  }

  set selectedDog(value) {
    this.dog = value;
    this.dogsService.setDog(this.dog);
  }
}
