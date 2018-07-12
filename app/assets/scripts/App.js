import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';

var mobileMenu = new MobileMenu();
// var revealOnScroll = new RevealOnScroll();
  //need 2 classes for different waypoints with different offsets
new RevealOnScroll($(".feature-item"), "86%");
new RevealOnScroll($(".testimonial"), "61%");
var stickyHeader = new StickyHeader();
var modal = new Modal();
