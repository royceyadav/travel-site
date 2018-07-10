import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
  constructor(els, offset){
    // this.itemsToReveal = $(".feature-item, .testimonial");
    this.itemsToReveal = els;
    this.offsetPercentage = offset;
    this.hideInitially();
    this.createWaypoints();
  }

  hideInitially(){
    this.itemsToReveal.addClass("reveal-item");
  }

  createWaypoints(){
    var that = this;
    this.itemsToReveal.each(function(){
      var currentItem = this;
      // alert("Testing");
      new Waypoint({
        element: currentItem,
        handler: function(){
          $(currentItem).addClass("reveal-item--is-visible");
        },
        offset: that.offsetPercentage
      });
    });
  }

}

export default RevealOnScroll;
