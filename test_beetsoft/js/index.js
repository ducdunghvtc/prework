(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;
  let promotionalDay = "Aug 31, 2021 00:00:00",
      countDown = new Date(promotionalDay).getTime(),
      x = setInterval(function() {    
        let now = new Date().getTime(),
        promotionalDay = countDown - now;
          document.querySelector(".days").innerText = Math.floor(promotionalDay / (day)),
          document.querySelector(".hours").innerText = Math.floor((promotionalDay % (day)) / (hour)),
          document.querySelector(".minutes").innerText = Math.floor((promotionalDay % (hour)) / (minute)),
          document.querySelector(".seconds").innerText = Math.floor((promotionalDay % (minute)) / second);
        if (promotionalDay < 0) {
          // do something later when date is reached
          clearInterval(x);
        }
      }, 0)
  }());

// slider
$(".customer-experience__carousel").owlCarousel({
  loop: true,
  margin: 0,
  dots: false,
  nav:true,
  navText : ['<i class="fas fa-chevron-left" aria-hidden="true"></i>','<i class="fas fa-chevron-right" aria-hidden="true"></i>'],
  responsiveClass: true,
  responsive: {
      0: {
      items: 1,
      },
      600: {
      items: 1,
      },
      1000: {
      items: 3,
      },
},
});

(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()