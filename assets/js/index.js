/*
	Dimension by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

    $("#mailSubmit").on("click", function (e){
        var name = $("#mailName").val();
        var mail = $("#mailEmail").val();
        var message = $("#mailMessage").val();

        window.location.href = "mailto:" + "andreasdelis30@gmail.com" + "?subject=" + encodeURIComponent("[WEBSITE] " + name + "(" + mail +")") + "&body=" + encodeURIComponent(message)
    })

})(jQuery);