import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
  constructor(){
    this.itemsToReveal = $(".feature-item");
    this.hideInitially();
    this.createWaypoints();
  }

  hideInitially(){
    this.itemsToReveal.addClass("reveal-item");
  }

  createWaypoints(){
    this.itemsToReveal.each(function(){
      var currentItem = this;
      // alert("Testing");
      new Waypoint({
        element: currentItem,
        handler: function(){
          $(currentItem).addClass("reveal-item--is-visible");
        },
        offset: "86%"
      });
    });
  }

}

export default RevealOnScroll;
