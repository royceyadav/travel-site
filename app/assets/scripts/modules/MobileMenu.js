import $ from 'jquery';

class MobileMenu {
  //old way of coding this...
  // constructor(){
  //   $(".site-header__menu-icon").click(function(){
  //     console.log("The top right icon was clicked.");
  //   });
  // }

  //new way to write this...

  constructor(){
    this.siteHeader = $(".site-header");
    this.menuIcon = $(".site-header__menu-icon");  // A.
    this.menuContent = $(".site-header__menu-content");
    this.events();
  }

  events(){
    this.menuIcon.click(this.toggleTheMenu.bind(this)); // B.
    // console.log(this);
  }

  toggleTheMenu(){
    // console.log("Hooray! The icon was clicked."); // C.
    // alert(this);
    this.menuContent.toggleClass("site-header__menu-content--is-visible"); // add/toggle new class to element
    this.siteHeader.toggleClass("site-header--is-expanded");
  }
}

export default MobileMenu;


/*
WHAT THIS IS DOING:
-------------------
A. Select elements from the DOM
B. Event handling
C. Defining functionality
*/
