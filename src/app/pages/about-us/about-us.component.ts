import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit{
  ngOnInit(): void {


    // owlcarowsel thay đổi btn slidering
    $(document).ready(function(){
   
      // parralax
      $('.parallax-window').parallax({imageSrc: 'http://lovesome.biz/tf-template/garden/img/page-title-bg.jpg'});

    })

 
  }
}
