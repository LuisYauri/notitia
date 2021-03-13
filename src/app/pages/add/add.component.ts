import {Component, OnInit} from '@angular/core';
import {NzUploadChangeParam, NzUploadFile} from 'ng-zorro-antd/upload';
import {NzMessageService} from 'ng-zorro-antd/message';
import {Router} from '@angular/router';
import {Observable, Observer} from 'rxjs';
import {HttpRequest, HttpResponse} from '@angular/common/http';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  title = '';
  description = '';

  listOfOptionCategory: string[] = [];
  listOfSelectedCategory = [];


  listOfOptionIdioms: string[] = [];
  listOfSelectedIdioms = [];

  flagLoading = false;

  uploading = false;
  fileList: NzUploadFile[] = [];

  constructor(private msg: NzMessageService, private router: Router) {
  }

  beforeUpload = (file: NzUploadFile): boolean => {
    this.fileList = this.fileList.concat(file);
    return false;
  }

  handleUpload(): void {
    const formData = new FormData();
    // tslint:disable-next-line:no-any
    this.fileList.forEach((file: any) => {
      formData.append('files[]', file);
    });
    this.uploading = true;
    // You can use any AJAX library you like
    const req = new HttpRequest('POST', 'https://www.mocky.io/v2/5cc8019d300000980a055e76', formData, {
      // reportProgress: true
    });
    // @ts-ignore
    this.http
      .request(req)
      .pipe(filter(e => e instanceof HttpResponse))
      .subscribe(
        () => {
          this.uploading = false;
          this.fileList = [];
          this.msg.success('upload successfully.');
        },
        () => {
          this.uploading = false;
          this.msg.error('upload failed.');
        }
      );
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

    const childrenIdioms: string[] = [];
    childrenIdioms.push('Español');
    childrenIdioms.push('Ingles');
    childrenIdioms.push('Catalán');
    childrenIdioms.push('Alemán');
    this.listOfOptionIdioms = childrenIdioms;
  }

  upload(): void {
    this.flagLoading = true;
    setTimeout(() => {
      this.msg.success('Conjunto de datos subidos correctamente', {
        nzDuration: 3000
      });
      this.router.navigate(['/admin']);
    }, 1000);
  }
}
