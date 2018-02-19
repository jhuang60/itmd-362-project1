(function($){
  $('#inputform').on('submit', function(e) {
    e.preventDefault();

//name validation
function namevalidation(name) {
  var result = false;
  if (name.length > 0) {
    result = true;
  }
  return result;
}

})(jQuery);
