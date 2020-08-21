$(function() {
            $(function() {
            $(".carousel").carousel( { interval: 2000 } );
            $("#carouselButton").click(function(){
                if ($("#carouselButton").children("i").hasClass("fa-pause")) {//Looks for children of the carousel that has the class of fapause
                    $(".carousel").carousel("pause");//Pauses carousel
                    $("#carouselButton").children("i").removeClass("fa-pause");//Removes Pause Class
                    $("#carouselButton").children("i").addClass("fa-play");//Adds Play class
                } else {
                    $(".carousel").carousel("cycle");//Else cycles through carousel
                    $("#carouselButton").children("i").removeClass("fa-play");//Removes Play class
                    $("#carouselButton").children("i").addClass("fa-pause");//Adds Pause Class
                }
            });
        });// Carousel code

        $("#reserveButton").click(function(){
            $('#reserveModal').modal('toggle')
        });//toggles the visibility of the reserve modal

        $("#loginButton").click(function(){
            $('#loginModal').modal('toggle')
        });//toggles the visibility of the login
            });