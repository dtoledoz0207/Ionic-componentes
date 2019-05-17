import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {

  //Para poder tomar elementos del HTML y trabajarlo en clase de angular
  @ViewChild(IonInfiniteScroll) InfiniteScroll: IonInfiniteScroll;

  data: any[] = Array(20);

  //Se usa cuando se necesita obtener algun elemento de html

  constructor() { }

  ngOnInit() {
  }

  loadData ( event) {
    console.log('Cargando siguiente...');

    //Simular carga asincrona
    setTimeout(() => {

      if ( this.data.length > 50) {
        event.target.complete();
        this.InfiniteScroll.disabled = true;
        return;
      }

      const nuevoArr = Array(20);
      this.data.push(...nuevoArr);
      event.target.complete();
    }, 1000 );
}}
