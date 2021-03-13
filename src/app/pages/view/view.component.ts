import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  infoView = {
    title: 'Estudiantes de nuevo ingreso en Máster oficial 2019/2020',
    date: '21, Nov. 2020',
    update: '27, Nov. 2020',
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
    flag: false,
    tags: [
      'Educación',
      'Estudios universitarios',
      'Máster',
    ],
    infoAuthor: [
      'Estudiantes de nuevo ingreso en Grados universitarios 2019/2020',
      'Estudio de movilidad durante el período julio-diciembre 2020. Movilidad cotidiana.'
    ],
    infoCategory: [
      'El Sistema Universitario Español (SUE) lo conformaron en el curso 2018-2019 un total de 83 universidades con actividad, 50 públicas y 33 privadas.',
      'En el curso 2018-2019 se matricularon un total de 139.708 alumnos extranjeros en el SUE, lo que supuso el 8,8% del total de los matriculados, el 26,2% de los estudiantes de Doctorado y el 5,4% de los estudiantes de Grado.',
      'Se consideran estudiantes internacionales entrantes a aquellos que tienen su residencia habitual fuera de España y, o bien están matriculados de forma ordinaria en una universidad presencial, o bien forman parte de algún programa de movilidad con destino alguna universidad del SUE.'
    ]
  };

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  changeBtn(item: any): void {
    item.flag = !item.flag;
  }

  openSubMenu(url: string): void {
    window.open(url);
  }

  back(): void {
    this.router.navigate(['/list']);
  }

}
