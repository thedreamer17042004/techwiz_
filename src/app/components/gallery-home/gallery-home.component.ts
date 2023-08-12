import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-gallery-home',
  templateUrl: './gallery-home.component.html',
  styleUrls: ['./gallery-home.component.css']
})
export class GalleryHomeComponent implements OnInit{
  ngOnInit(): void {

    $('.produc-two').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      dots:false,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:4
          }
      }
    });


    // owlcarowsel thay đổi btn slidering
    $(document).ready(function(){
      $('.owl-carousel').owlCarousel({
         
       });
       $( ".owl-prev").html('<i class="fa-solid fa-angle-left"></i>');
       $( ".owl-next").html('<i class="fa-solid fa-angle-right"></i>');
      }); 
      
      // parralax
      $('.parallax-window').parallax({imageSrc: 'http://lovesome.biz/tf-template/garden/img/project-bg.jpg'});



 
  }

}
