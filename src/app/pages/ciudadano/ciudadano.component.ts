import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import getISOWeek from "date-fns/getISOWeek";

@Component({
  selector: 'app-ciudadano',
  templateUrl: './ciudadano.component.html',
  styleUrls: ['./ciudadano.component.scss']
})
export class CiudadanoComponent implements OnInit {


  listOfOptionCategory: string[] = [];
  listOfSelectedCategory = [];

  listOfOptionAuthor: string[] = [];
  listOfSelectedAuthor = [];

  listOfOptionIdioms: string[] = [];
  listOfSelectedIdioms = [];

  date = null;

  listNewCategory = [
    {
      img: 'https://images.unsplash.com/photo-1588392382834-a891154bca4d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1955&q=80 ',
      title: 'Naturaleza',
    },
    {
      img: 'https://images.unsplash.com/photo-1541872705-1f73c6400ec9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=802&q=80',
      title: 'Política',
    },
    {
      img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2004&q=80 ',
      title: 'Educación',
    },
    {
      img: 'https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80',
      title: 'Tecnología',
    },
    {
      img: 'https://images.unsplash.com/photo-1462121594302-c1ed6b9ab32d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=700&q=80',
      title: 'Población',
    },
    {
      img: 'https://images.unsplash.com/photo-1585840640428-817a1aa8c308?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80',
      title: 'Arte',
    },
    {
      img: 'https://cdn.pixabay.com/photo/2020/06/26/14/38/doctor-5342890_1280.jpg ',
      title: 'Medicina',
    },
    {
      img: 'https://cdn.pixabay.com/photo/2018/01/17/04/14/stock-exchange-3087396_1280.jpg',
      title: 'Economía',
    },
    {
      img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80',
      title: 'Administración',
    },
    {
      img: 'https://cdn.pixabay.com/photo/2016/08/01/20/13/girl-1561989_1280.jpg',
      title: 'Deportes',
    },
    {
      img: 'https://cdn.pixabay.com/photo/2016/05/17/20/56/locomotive-1399080_1280.jpg',
      title: 'Transporte',
    },
    {
      img: 'https://cdn.pixabay.com/photo/2017/09/04/16/58/passport-2714675_1280.jpg',
      title: 'Turismo',
    }
  ];

  listDownloads = [
    {
      img: 'https://cdn.pixabay.com/photo/2020/06/24/20/41/truebsee-5337646_1280.jpg',
      title: 'Lagos',
    },
    {
      img: 'https://cdn.pixabay.com/photo/2016/09/08/21/09/piano-1655558_1280.jpg',
      title: 'Música',
    },
    {
      img: 'https://cdn.pixabay.com/photo/2017/03/03/15/15/nursery-2114173_1280.jpg ',
      title: 'Infantil',
    },
    {
      img: 'https://images.unsplash.com/photo-1588392382834-a891154bca4d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1955&q=80 ',
      title: 'Naturaleza',
    },
    {
      img: 'https://images.unsplash.com/photo-1541872705-1f73c6400ec9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=802&q=80',
      title: 'Política',
    },
    {
      img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2004&q=80 ',
      title: 'Educación',
    },
    {
      img: 'https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80',
      title: 'Tecnología',
    },
    {
      img: 'https://cdn.pixabay.com/photo/2020/06/26/14/38/doctor-5342890_1280.jpg ',
      title: 'Medicina',
    },
    {
      img: 'https://images.unsplash.com/photo-1462121594302-c1ed6b9ab32d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=700&q=80',
      title: 'Población',
    },
    {
      img: 'https://cdn.pixabay.com/photo/2018/01/17/04/14/stock-exchange-3087396_1280.jpg',
      title: 'Economía',
    },
    {
      img: 'https://images.unsplash.com/photo-1441123285228-1448e608f3d5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80',
      title: 'Comercio',
    },
    {
      img: 'https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=624&q=80',
      title: 'Energía',
    },
    {
      img: 'https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80',
      title: 'Empleo',
    }
  ];

  flagLoading = false;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    const children: string[] = [];
    children.push('Naturaleza');
    children.push('Lagos');
    children.push('Política');
    children.push('Votación');
    children.push('Educación');
    children.push('Infantil');
    children.push('Primaria');
    children.push('Secundaria');
    children.push('Estudios universitarios');
    children.push('Universidad');
    children.push('Máster');
    children.push('Tecnología');
    children.push('Arte');
    children.push('Música');
    children.push('Danza');
    children.push('Población');
    children.push('Medicina');
    children.push('Virus');
    children.push('Economía');
    children.push('Administración ');
    children.push('Deportes');
    children.push('Transportes');
    children.push('Turismo');
    children.push('Comercio');
    children.push('Energía');
    children.push('Empleo');
    this.listOfOptionCategory = children;

    const childrenAuthor: string[] = [];
    childrenAuthor.push('Universidad Pablo de Olavide');
    childrenAuthor.push('Universitat Politècnica de València');
    childrenAuthor.push('Ayuntamiento de Madrid');
    childrenAuthor.push('Ayuntamiento de Castellón');
    childrenAuthor.push('Generalitat Valenciana');
    childrenAuthor.push('Agencia Tributaria');
    this.listOfOptionAuthor = childrenAuthor;

    const childrenIdioms: string[] = [];
    childrenIdioms.push('Español');
    childrenIdioms.push('Ingles');
    childrenIdioms.push('Catalán');
    childrenIdioms.push('Alemán');
    this.listOfOptionIdioms = childrenIdioms;
  }


  onChange(result: Date[]): void {
    console.log('onChange: ', result);
  }

  getWeek(result: Date[]): void {
    console.log('week: ', result.map(getISOWeek));
  }

  openView(): void {
    this.flagLoading = true;
    setTimeout(() => {
      this.router.navigate(['/list']);
    }, 1000);

  }
}
