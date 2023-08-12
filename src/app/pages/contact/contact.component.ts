import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
  ngOnInit(): void {


    // owlcarowsel thay đổi btn slidering
    $(document).ready(function(){
   
      // parralax
      $('.parallax-window').parallax({imageSrc: 'http://lovesome.biz/tf-template/garden/img/page-title-bg.jpg'});

    })

 
  }
}
