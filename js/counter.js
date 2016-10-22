function counter(i) {
  var pre_count = Number($('#count_value').val());
  var count = pre_count + Number(i);
  if (count < 0) {
    count = 0;
  }
  $('#count_value').val(count);
  $('#count_value_text').text(count);
}
