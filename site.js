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
//phone validation
  function phonevalidation(phone) {
    var result = false;
      if (phone.match(/^[0-9]{10}$/)){
        result = true;
      }
    return result;
  }

})(jQuery);
