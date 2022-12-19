export function autosize(){
   
  var el = this;
 
  setTimeout(function(){
    el.style.cssText = 'height:auto; padding:auto';
    el.style.cssText = 'height:' + el.scrollHeight + 'px';
  },0);
}

  