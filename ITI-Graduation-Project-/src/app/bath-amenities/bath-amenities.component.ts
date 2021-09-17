import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';


@Component({
  selector: 'app-bath-amenities',
  templateUrl: './bath-amenities.component.html',
  styleUrls: ['./bath-amenities.component.css']
})
export class BathAmenitiesComponent implements OnInit {
  count:number = 1;
  bathProducts:any = [] ;
  bathProductsPageTwo:any = [];
  bathProductsPageThree:any = [];
  constructor(private route: ActivatedRoute,private http:HttpClient) {}


  bathproduct!:{
    count:number;
  }
  
  ngOnInit(): void {
    var mybutton = document.getElementsByClassName("page-link");
    function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
    /*start q*/
    $(document).ready(function(){
      $(".page-link").click(function(){
        $(this).css({
          'background':'#12233F','color':'#fff'
        }).parent().siblings().children().css({
          'background':'#fff','color':'#12233F'
        })
      });
      $(".page-item:first-of-type button").click(function(){
        topFunction();
        $(".first").addClass("d-block").removeClass("d-none");
        $('.second,.third').addClass("d-none").removeClass("d-block");
      });
      $(".page-item:nth-of-type(2) button").click(function(){
        topFunction();
        $(".second").addClass("d-block").removeClass("d-none");
        $('.first,.third').addClass("d-none").removeClass("d-block");
      });
      $(".page-item:nth-of-type(3) button").click(function(){
        topFunction();
        $(".third").addClass("d-block").removeClass("d-none");
        $('.first,.second').addClass("d-none").removeClass("d-block");
      });
      
      $(".card .fa-search").click(function(){
        $( this).next().css({
          'opacity':'1',
          'visibility':'visible'
        });
      });

      $('.content').click(function(){
        $( this).css({
          'opacity':'0',
          'visibility':'hidden'
        });
      });
      $(".card .fa-times").click(function(){
        $( this).parent().parent().parent().css({
          'opacity':'0',
          'visibility':'hidden'
        });
      });

    });


    /*end q*/
    this.http.get('../../assets/api/products/bath.json').subscribe( (x) => {
      // console.log(x)
      this.bathProducts = x ;
    });

    this.http.get('../../assets/api/products/bathpagetwo.json').subscribe((y) =>{
      this.bathProductsPageTwo = y ;
    });

    this.http.get('../../assets/api/products/bathpagethree.json').subscribe((z) =>{
      this.bathProductsPageThree = z ;
    });
    
   
    this.bathproduct = {
      count: this.route.snapshot.params['productCount'],
    };

    
    
 
  }
  
  decrement(){
    // for(let i=0;i<this.bathProducts.length;i++)
    //   console.log(this.bathProducts[2]);

    console.log(this.bathProducts[2]);

    this.bathproduct.count++ ;
  }

  

  

  
}









/*
    {
        "productID": ,
        "productName": ,
        "productCount": 1,
        "productImg": "../../assets/bath/.jpg"
    },


*/