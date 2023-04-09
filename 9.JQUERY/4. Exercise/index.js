// На HTML-сторінці є 6 чекбоксів. Напишіть скріпт, який після того, як користувач позначив будь-які 3 чекбокси, всі чекбокси робить неактивними.
// $(document).ready(function() {
//   let checkbox = $('input[type="checkbox"]');
//   let checked = 0;
  
  
//   checkbox.click(function() {
//     if ($(this).is(':checked')) {
//       console.log($('#checkBox1').prop('checked'));
//       checked += 1;
//       if (checked >= 3) {
//         checkbox.attr('disabled', true);
//       }
//     }
//   });
// });

$(document).ready(function() {
  let checkbox = $('input[type="checkbox"]');
  let checked = 0;
  
  checkbox.click(function() {
    if ($(this).is(':checked')) {
      checked += 1;
      console.log(checked);
      if (checked >= 3) {
        checkbox.attr('disabled', true);
      }
    } else {
      checked -= 1;
    }
  });
});

