import { Component,ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import {TareasServicios} from "../../servicios/tareas.servicios";
import {DetalleTareaPage} from "../detalle-tarea/detalle-tarea";
import {FirebaseDbProvider} from '../../providers/firebase-db/firebase-db';
<<<<<<< HEAD
import { AlertController } from 'ionic-angular';
=======
>>>>>>> c49e1239a869325b7797c796e0a20c9a1e6d01e8

@Component({
  selector: 'page-horario',
  templateUrl: 'Horario.html'
})
export class HorarioPage {
  tareas=[];
  listaTareas:any;
  aux:any;
  @ViewChild('myNav') nav: NavController
<<<<<<< HEAD
  constructor(public navCtrl: NavController,public tareasServicio:TareasServicios,public dbFirebase:FirebaseDbProvider,private alertCtrl: AlertController) {
=======
  constructor(public navCtrl: NavController,public tareasServicio:TareasServicios,public dbFirebase:FirebaseDbProvider) {
>>>>>>> c49e1239a869325b7797c796e0a20c9a1e6d01e8
    this.tareas=tareasServicio.getTareas();
  }
public irDetalleTarea(id){
  this.navCtrl.push(DetalleTareaPage,{id:id});
}
public crearTarea(){
  this.navCtrl.push(DetalleTareaPage,{id:0});
}
<<<<<<< HEAD
needHelp(){
 let alert = this.alertCtrl.create({
   title: '¿Necesitas ayuda?',
   subTitle: 'Ayuda en página Horario',
   message:'¡Vaya! Parece que tienes problemas. En esta página podrás ver las tareas asignadas a cada miembro mediante notificaciones. En estas notificaciones se observa la actividad a realizar, el día, la hora, y el miembro que va a realizarlas. Estas notificaciones pueden editarse pulsando sobre ellas, o bien, crearse mediante el botón Crear tarea. Si sigues teniendo dudas envianos tu pregunta a devoirs@gmail.com .',
   buttons: ['Dismiss']
 });
 alert.present();
}
=======
>>>>>>> c49e1239a869325b7797c796e0a20c9a1e6d01e8

ionViewDidEnter()
{
	this.dbFirebase.getTareas().subscribe(listaTareas=>{this.tareas=listaTareas;
	});
}
}
