import { Injectable } from '@angular/core';
import { Database } from './database.model';

@Injectable()
export class DatabaseService {

private pictures: Database[] = [
	new Database(1, '../../assets/photos_gym/2.jpg'),
	new Database(21, '../../assets/photos_gym/29.jpg'),
	new Database(2, '../../assets/photos_gym/3.jpg'),
	new Database(3, '../../assets/photos_gym/4.jpg'),
	new Database(6, '../../assets/photos_gym/7.jpg'),
	new Database(7, '../../assets/photos_gym/8.jpg'),
	new Database(8, '../../assets/photos_gym/9.jpg'),
	new Database(9, '../../assets/photos_gym/10.jpg'),
	new Database(11, '../../assets/photos_gym/12.jpg'),
	new Database(12, '../../assets/photos_gym/essai.jpg'),
	new Database(13, '../../assets/photos_gym/14.jpg'),
	new Database(14, '../../assets/photos_gym/15.jpg'),
	new Database(17, '../../assets/photos_gym/16.jpg'),
	new Database(18, '../../assets/photos_gym/17.jpg'),
	new Database(20, '../../assets/photos_gym/19.jpg'),
	new Database(21, '../../assets/photos_gym/25.jpg'),
];

  constructor() { }

  getPictures() {
  	return this.pictures.slice();
  }

  getPic(haaa: number) {
  	return this.pictures[haaa];
  }

}
