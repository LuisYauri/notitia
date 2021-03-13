import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-block',
  templateUrl: './footer-block.component.html',
  styleUrls: ['./footer-block.component.scss']
})
export class FooterBlockComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  listSocial = [
    {
      link: '',
      img: 'assets/img/Vector.svg'
    },
    {
      link: '',
      img: 'assets/img/Vector-1.svg'
    },
    {
      link: '',
      img: 'assets/img/Vector-2.svg'
    }
  ];

}
