(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();


         $(".menu-trigger span").on("click", function(){
	        $(".off-canvas-menu").addClass("active");
	        $(".our-web-shadow").addClass("active");
	      });
	      $(".menu-close, .our-web-shadow").on("click", function(){
	        $(".off-canvas-menu").removeClass("active");
	        $(".our-web-shadow").removeClass("active");
	      });
        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	