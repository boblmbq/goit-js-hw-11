import iScroll from "infinite-scroll";
import { refs } from "./refs.js"

const infScroll = new iScroll(refs.galleryEl, {
  path: '?page=@{{#}}',
  append: "div",
  history:false
}); 
