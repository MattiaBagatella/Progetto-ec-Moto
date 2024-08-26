import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MotoService {

  moto =[
    {img:'../../assets/immaginiMoto/HondaCr.jpg',nome:'Honda Cr 85',km:'10.000',ore:'50',cc:'85',prezzo:'2.000'},
    {img:'../../assets/immaginiMoto/Fantic125.jpg',nome:'Fantic 125',km:'33.000',ore:'70',cc:'125',prezzo:'2.300'},
    {img:'../../assets/immaginiMoto/Honda250.jpg',nome:'Honda Cr 250',km:'20.500',ore:'45',cc:'250',prezzo:'3.700'},
    {img:'../../assets/immaginiMoto/HondaCRF250.jpg',nome:'Honda Crf 250',km:'7.000',ore:'20',cc:'250',prezzo:'4.000'},
    {img:'../../assets/immaginiMoto/KTM250.jpg',nome:'Ktm 250',km:'3.000',ore:'10',cc:'250',prezzo:'5.400'},
    {img:'../../assets/immaginiMoto/YamahaR1.jpg',nome:'Yamaha R1',km:'10.000',ore:'60',cc:'1000',prezzo:'12.000'},
    {img:'../../assets/immaginiMoto/yamahayz125.jpg',nome:'Yamaha Yz 125',km:'23.000',ore:'30',cc:'125',prezzo:'3.000'},
  ]

  constructor() { }
}
