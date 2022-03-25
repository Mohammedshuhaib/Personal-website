$(document).ready(function(){
    $("#formsubmit").validate({
        errorClass:"validate",
        rules:{
            name:{
                required:true,
                
            },
            email:{
                required:true,
                email:true
            },
            subject :{
                required:true,
                minlength:10
            },
            message :{
                required:true,
                minlength:50
            }
        },
        messages:{
            name:{
                required:"Please enter your name"
            },
            email:{
                required:"Please enter your email address",
                email:"Please enter a valid email address"
            },
            subject:{
                required:"Please enter why you connecting us",
                minlength:"Enter minimum 10 charector"
            },
            message:{
                required:"Please enter what you have to say",
                minlength:"Please enter minimum 50 charector"
            }

        }

    })
})