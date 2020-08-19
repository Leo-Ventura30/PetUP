flatpickr(".flatpickr", {
  minDate: new Date(),
  enableTime: true,
  dateFormat: "d/m/Y H:i",
  onChange: function (date) {
    fetch(`/dashboard/home/{{user.id}}/schedule?date=${date[0].getTime()}`);
  },
});

//slide content
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value
slider.oninput = function () {
  output.innerHTML = this.value;
};
