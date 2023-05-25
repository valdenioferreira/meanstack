import { Component } from '@angular/core';
import { Packed } from './packed.model';

@Component({
  selector: 'app-packed-list',
  templateUrl: './packed-list.component.html',
  styleUrls: ['./packed-list.component.css']
})
export class PackedListComponent {

  packeds: Packed[] = [
    new Packed('Rubacão','Arroz,cebola,feijão','https://www.estadao.com.br/resizer/le9PD9kmGtNDFs1P7Pi72cBuJNQ=/720x503/filters:format(jpg):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/estadao/VLPN5GIEXVNWBD4FBY33ZHTMYY.jpg')
  ];

  constructor() {

  }

  ngOnInit(): void {

  }

}
