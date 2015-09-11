var findReplace = function(input, find, replace) {
  var re = new RegExp(find, 'g');
  var input = input.replace(re, replace);
  return input;
};



$(document).ready(function() {
  $('form#find_replace').submit(function(event) {
    var input = $('input#sentence').val();
    var find = $('input#find').val();
    var replace = $('input#replace').val();
    var result = findReplace(input, find, replace);

    $('.new-sentence').text(result);
    $('#result').show();
    event.preventDefault();
  });
});
