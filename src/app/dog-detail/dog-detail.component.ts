import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Dog, DogImage } from '../dog';
import { DogsService } from '../dogs.service';

@Component({
  selector: 'app-dog-detail',
  templateUrl: './dog-detail.component.html',
  styleUrls: ['./dog-detail.component.css'],
})
export class DogDetailComponent implements OnInit {
  stringifiedData: any;
  dog!: Dog;
  dogImageSrc!: string;

  constructor(private dogsService: DogsService) {}

  ngOnInit(): void {
    this.dogsService.dog.subscribe((dog) => {
      console.log('dog', dog);
      if (dog) {
        this.dog = dog;
        this.dogsService
          .getImage(dog.breed)
          .subscribe((dogImage) => (this.dogImageSrc = dogImage.message));
      }
    });
  }
}
