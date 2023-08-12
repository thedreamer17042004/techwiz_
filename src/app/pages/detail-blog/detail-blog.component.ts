import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-detail-blog',
  templateUrl: './detail-blog.component.html',
  styleUrls: ['./detail-blog.component.css']
})
export class DetailBlogComponent implements OnInit {


  
  ngOnInit(): void {


    // owlcarowsel thay đổi btn slidering
    $(document).ready(function(){
   
      // parralax
      $('.parallax-window').parallax({imageSrc: 'http://lovesome.biz/tf-template/garden/img/page-title-bg.jpg'});

    })

 
  }
}
