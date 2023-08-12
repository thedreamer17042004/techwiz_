import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {

  ngOnInit(): void {


    // owlcarowsel thay đổi btn slidering
    $(document).ready(function(){
   
      // parralax
      $('.parallax-window').parallax({imageSrc: 'http://lovesome.biz/tf-template/garden/img/page-title-bg.jpg'});

    })

 
  }

}
