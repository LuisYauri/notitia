import {Component, OnInit} from '@angular/core';
import getISOWeek from 'date-fns/getISOWeek';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  flagLoading = false;

  listOfOptionCategory: string[] = [];
  listOfSelectedCategory = [];

  listOfOptionAuthor: string[] = [];
  listOfSelectedAuthor = [];

  listOfOptionIdioms: string[] = [];
  listOfSelectedIdioms = [];

  date = null;

  listData = [
    {
      title: 'Estudiantes de nuevo ingreso en Máster oficial',
      date: '21 Nov 2020',
      university: 'Universidad Pablo de Olavide',
      text1: 'Información detallada sobre los alumnos matriculados de nuevo ingreso en los títulos oficiales de Máster Universitario desde el curso académico 2006/2007.',
      text2: 'Incluye la siguiente información: curso, titulación, edad del alumno/a, sexo, país de nacionalidad, residencia familiar (país, comunidad autónoma, provincia y población) e indicación de si pertenece a familia numerosa o no.',
      btn: [
        {
          title: 'json',
          url: 'https://pokeapi.co/api/v2/pokemon/ditto',
          img: 'https://api.iconify.design/bx-bxs-file-json.svg'
        },
        {
          title: 'csv',
          url: '',
          img: 'https://api.iconify.design/fa-solid:file-csv.svg'
        },
        {
          title: 'xlsx',
          url: '',
          img: 'https://api.iconify.design/ant-design:file-excel-filled.svg'
        }
      ],
      flag: false
    },
    {
      title: 'Estudio de movilidad durante el período julio-diciembre 2020. Movilidad cotidiana, período junio-octubre.',
      date: '15, Nov. 2020',
      university: 'Instituto Nacional de Estadística',
      text1: 'Fichero con datos bisemanales de movilidad entre áreas, desde el 24 de junio al 30 de diciembre de 2020. Éste es un estudio sobre la movilidad cotidiana.',
      text2: 'Este año ha sido un estudio muy interesante puesto que ha sido un año diferente a causa del COVID-19, por el cual durante este año tan peculiar los datos han sido muy diferentes e interesantes para analizar y crear estadisticas sobre como afecta una situación inesperada a la movilidad de la gente.',
      btn: [
        {
          title: 'json',
          url: 'https://pokeapi.co/api/v2/pokemon/ditto',
          img: 'https://api.iconify.design/bx-bxs-file-json.svg'
        },
        {
          title: 'csv',
          url: '',
          img: 'https://api.iconify.design/fa-solid:file-csv.svg'
        },
        {
          title: 'xlsx',
          url: '',
          img: 'https://api.iconify.design/ant-design:file-excel-filled.svg'
        }
      ],
      flag: false
    },
    {
      title: 'SONDEO SOBRE LA JUVENTUD ESPAÑOLA 2003 (SEGUNDA OLEADA)',
      date: '21, Nov. 2020',
      university: 'Universidad Pablo de Olavide ',
      text1: 'Tenencia y uso de teléfono móvil. Frecuencia con que lo usa para conversar con amigos y familiares, enviar o recibir mensajes, conectarse a internet, hacer gestiones, jugar y otros servicios (buzón, etc.). Fórmula de pago del teléfono móvil. Gasto medio mensual y persona que paga habitualmente la factura. Uso de internet. Lugares desde los que se conecta. Si se conecta en un domicilio particular: tipo de conexión.',
      text2: '',
      btn: [
        {
          title: 'json',
          url: 'https://pokeapi.co/api/v2/pokemon/ditto',
          img: 'https://api.iconify.design/bx-bxs-file-json.svg'
        },
        {
          title: 'csv',
          url: '',
          img: 'https://api.iconify.design/fa-solid:file-csv.svg'
        },
        {
          title: 'xlsx',
          url: '',
          img: 'https://api.iconify.design/ant-design:file-excel-filled.svg'
        }
      ],
      flag: false
    }
  ];

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

  back(): void {
    this.router.navigate(['/inicio']);
  }

  changeBtn(item: any): void {
    item.flag = !item.flag;
  }

  openSubMenu(url: string): void {
    window.open(url);
  }

  openViewData(): void {
    this.router.navigate(['/list/view']);
  }
}
