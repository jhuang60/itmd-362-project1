(function($){
  $('#inputform').on('submit', function(e) {
    e.preventDefault();

    if(!namevalidation($('#name').val())) {
      $('#erasename').remove();
      $('#namelistitem').append('<li id="erasename">Please enter your name</li>');
    } else {
      $('#erasename').remove();
    }
    if (!phonevalidation($('#phone').val())) {
      $('#erasephone').remove();
      $('#phonelistitem').append('<li id="erasephone">Please check the phone number you entered</li>');
    } else {
      $('#erasephone').remove();
    }
    if(!emailvalidation($('#email').val())) {
      $('#eraseemail').remove();
      $('#emaillistitem').append('<li id="eraseemail">Please check your email</li>');
    } else{
      $('#eraseemail').remove();
    }
    if(!dayvalidation($('#day').val())) {
      $('#eraseday').remove();
      $('#daylistitem').append('<li id="eraseday">Please enter a date</li>');
    } else {
      $('#eraseday').remove();
    }
    if(!levelvalidation($('#level').val())) {
      $('#eraselevel').remove();
      $('#levellistitem').append('<li id="eraselevel">Please select a level</li>');
    } else {
      $('#eraselevel').remove();
    }
    if(!timevalidation($('#time').val())) {
      $('#erasetime').remove();
      $('#timelistitem').append('<li id="erasetime">Please select a time</li>');
    } else {
      $('#erasetime').remove();
    }
    if(!locationvalidation($('#location').val())) {
      $('#eraselocation').remove();
      $('#locationlistitem').append('<li id="eraselocation">Please select a location</li>');
    } else {
      $('#eraselocation').remove();
    }

    if(locationvalidation($('#location').val()) && timevalidation($('#time').val()) && levelvalidation($('#level').val()) && dayvalidation($('#day').val()) && namevalidation($('#name').val()) && phonevalidation($('#phone').val()) && emailvalidation($('#email').val()) && locationvalidation($('#location').val())){
      console.log($('#name').val(), $('#phone').val(), $('#email').val(), $('#day').val(),
        $('#level').val(), $('#time').val(), $('#location').val());
      $('#erasesucess').remove();
      $('#submitlistitem').append('<li id="erasesucess">Form was successfully submitted! </li>');
    }

  });
  // name validation
  function namevalidation(name) {
    var result = false;
    if (name.length > 0) {
      result = true;
    }
    return result;
  }
  // phone validation
  function phonevalidation(phone) {
    var result = false;
    if (phone.match(/^[0-9]{10}$/)){
      result = true;
    }
    return result;
  }
  // email validation
  function emailvalidation(email) {
    var result = false;

    if (email.length > 0) {
      if(email.match(/.+@.+/)){
        result = true;
      }
    }
    return result;
  }
  // date validation
  function dayvalidation(day) {
    var result = false;
    if (!day){
      result = false;
    } else {
      result = true;
    }

    return result;
  }
  // level validation
  function levelvalidation(level) {
    var result = false;
    if (level !== "") {
      result = true;
    }
    return result;
  }
  // time validation
  function timevalidation(time) {
    var result = false;
    if (time !== "") {
      result = true;
    }
    return result;
  }

  // location validation
  function locationvalidation(location) {
    var result = false;
    if (location !==  "") {
      result = true;
    }
    return result;
  }
})(jQuery);
