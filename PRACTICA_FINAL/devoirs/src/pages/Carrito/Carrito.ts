import { Component } from '@angular/core';
import {CompraFinalPage} from "../compra-final/compra-final";
import {NavController, NavParams} from 'ionic-angular';
import {FirebaseDbProvider} from '../../providers/firebase-db/firebase-db';
import {Compra} from "../../models/carrito.model";
<<<<<<< HEAD
import { AlertController } from 'ionic-angular';

=======
>>>>>>> c49e1239a869325b7797c796e0a20c9a1e6d01e8
@Component({
  selector: 'page-carrito',
  templateUrl: 'Carrito.html'
})

export class CarritoPage {
  items:any[];
  elem: any;
  item: {id:null, compra:null}
  listaCompras:any;
  clientId:any;
<<<<<<< HEAD
  constructor(public navCtrl: NavController,public params: NavParams,public dbFirebase:FirebaseDbProvider,private alertCtrl: AlertController){
=======
  constructor(public navCtrl: NavController,public params: NavParams,public dbFirebase:FirebaseDbProvider){
>>>>>>> c49e1239a869325b7797c796e0a20c9a1e6d01e8
	this.clientId = this.params.get('id');
  }

  newitem(elem){
    this.items.push(elem);
	var identificador = ""+Date.now();
    let datoscompra:Compra=new Compra();
	datoscompra.id=identificador;
	datoscompra.compra=elem.value;
<<<<<<< HEAD
	this.dbFirebase.guardaCompra(datoscompra);

}

  allItems(){
	this.navCtrl.push(CompraFinalPage,{id:this.clientId});
}

borrarCompra(item){
	let index = this.items.indexOf(item);
	this.items.splice(index,1);
	this.dbFirebase.delCompra(item.id);
}
needHelp(){
 let alert = this.alertCtrl.create({
   title: '¿Necesitas ayuda?',
   subTitle: 'Ayuda en página Carrito',
   message:'¡Vaya! Parece que tienes problemas. En esta pagina podrás añadir o eliminar elementos, a lo que denominamos la lista de la compra. Una vez realizada podrás clicar en compra realizada introduciendo el gasto generado por dicha compra. Una vez pulsado el boton de compra realizada la lista pasará a estar en blanco de nuevo. Si sigues teniendo dudas envianos tu pregunta a devoirs@gmail.com .',
   buttons: ['Dismiss']
 });
 alert.present();
}
=======
	this.dbFirebase.guardaCompra(datoscompra);  
    
}

  allItems(){
	this.navCtrl.push(CompraFinalPage,{id:this.clientId});
}

borrarCompra(item){
	let index = this.items.indexOf(item);
	this.items.splice(index,1);
	this.dbFirebase.delCompra(item.id); 
}

>>>>>>> c49e1239a869325b7797c796e0a20c9a1e6d01e8
ionViewDidEnter()
{
	this.dbFirebase.getCompras().subscribe(listaCompras=>{this.items=listaCompras;
	});
}
}
