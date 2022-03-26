$(document).ready(function () {
    $("#gform").validate({
        errorClass: "validate",
        rules: {
            name: {
                required: true,

            },
            email: {
                required: true,
                email: true
            },
            subject: {
                required: true,
                minlength: 10
            },
            message: {
                required: true,
                minlength: 50
            }
        },
        messages: {
            name: {
                required: "Please enter your name"
            },
            email: {
                required: "Please enter your email address",
                email: "Please enter a valid email address"
            },
            subject: {
                required: "Please enter why you connecting us",
                minlength: "Enter minimum 10 charector"
            },
            message: {
                required: "Please enter what you have to say",
                minlength: "Please enter minimum 50 charector"
            }

        }
   
    })
    $("#gform").submit((e) => {
        e.preventDefault()
        $.ajax({
          url: "https://script.google.com/macros/s/AKfycbwBjkwmqXrubSdCO9lbfx7ifnL59gxzbrypnB2aQ0zOZ0j6sAsIZVS0wrPSKgnnJZ6Z/exec",
          data: $("#gform").serialize(),
          method: "post",
          success: function (response) {
            alert("Form submitted successfully")
            window.location.reload()
            //window.location.href="https://google.com"
          },
          error: function (err) {
            alert("something error")
  
          }
        })
      })

})
