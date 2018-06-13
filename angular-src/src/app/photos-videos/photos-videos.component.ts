import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
/*import { Http } from '@angular/http';*/
import { DatabaseService } from './database.service';
import { Database } from './database.model';
import { CarouselService } from './carousel.service';

@Component({
  selector: 'app-photos-videos',
  templateUrl: './photos-videos.component.html',
  styleUrls: ['./photos-videos.component.css']
})
export class PhotosVideosComponent implements OnInit {

  public pictures: Database[];

  constructor(private dbService: DatabaseService, private carouselService: CarouselService) {
  	this.pictures = this.dbService.getPictures();
    this.carouselService.interval = 1000;
   }

  ngOnInit() {
  	/*this.http.get("../../assets/photos_gym/2.jpg").subscribe(res => {
    //Here you get your binary as an arraybuffer, do what you want with it.
    let data = res.arrayBuffer();
    console.log(data);  
	});*/

  }
  
}