(function($) {
    "use strict";

    // Spinner
    var spinner = function() {
        setTimeout(function() {
            if ($("#spinner").length > 0) {
                $("#spinner").removeClass("show");
            }
        }, 1);
    };
    spinner();

    // Initiate the wowjs
    new WOW().init();

    // Navbar on scrolling
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $(".navbar").fadeIn("slow").css("display", "flex");
        } else {
            $(".navbar").fadeOut("slow").css("display", "none");
        }
    });

    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on("click", function(event) {
        if (this.hash !== "") {
            event.preventDefault();

            $("html, body").animate({
                    scrollTop: $(this.hash).offset().top - 45,
                },
                1500,
                "easeInOutExpo"
            );

            if ($(this).parents(".navbar-nav").length) {
                $(".navbar-nav .active").removeClass("active");
                $(this).closest("a").addClass("active");
            }
        }
    });

    // Back to top button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $(".back-to-top").fadeIn("slow");
        } else {
            $(".back-to-top").fadeOut("slow");
        }
    });
    $(".back-to-top").click(function() {
        $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
        return false;
    });

    // Typed Initiate
    if ($(".typed-text-output").length == 1) {
        var typed_strings = $(".typed-text").text();
        var typed = new Typed(".typed-text-output", {
            strings: typed_strings.split(", "),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true,
        });
    }

    // Modal Video
    //   var $videoSrc;
    //   $(".btn-play").click(function () {
    //     $videoSrc = $(this).data("src");
    //   });
    //   console.log($videoSrc);
    //   $("#videoModal").on("shown.bs.modal", function (e) {
    //     $("#video").attr(
    //       "src",
    //       $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0"
    //     );
    //   });
    //   $("#videoModal").on("hide.bs.modal", function (e) {
    //     $("#video").attr("src", $videoSrc);
    //   });

    //   // Facts counter
    //   $('[data-toggle="counter-up"]').counterUp({
    //     delay: 10,
    //     time: 2000,
    //   });

    var $videoSrc = "";

    $(".btn-play").click(function() {
        $videoSrc = $(this).data("src");
    });

    $("#videoModal").on("shown.bs.modal", function(e) {
        if ($videoSrc) {
            $("#video").attr(
                "src",
                $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0"
            );
        }
    });

    $("#videoModal").on("hide.bs.modal", function(e) {
        if ($videoSrc) {
            $("#video").attr("src", $videoSrc);
        }
    });

    // Skills
    $(".skill").waypoint(
        function() {
            $(".progress .progress-bar").each(function() {
                $(this).css("width", $(this).attr("aria-valuenow") + "%");
            });
        }, { offset: "80%" }
    );

    // Portfolio isotope and filter
    var portfolioIsotope = $(".portfolio-container").isotope({
        itemSelector: ".portfolio-item",
        layoutMode: "fitRows",
    });
    $("#portfolio-flters li").on("click", function() {
        $("#portfolio-flters li").removeClass("active");
        $(this).addClass("active");

        portfolioIsotope.isotope({ filter: $(this).data("filter") });
    });

    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
    });
})(jQuery);

// Zoro
// if (!false) {
//     var __ry_imported = true;
//     (function() {
//         var installed = false;
//         var embedurl = "https://tenor.com/embed/";
//         var canonical = document.querySelector("link[rel='canonical']");

//         function ready() {
//             if (!false) {
//                 installed = true;
//                 var elts = document.querySelectorAll(
//                     ".tenor-embed:not([data-processed]), .tenor-gif-embed:not([data-processed])"
//                 );
//                 for (var i = 0; i < elts.length; ++i) {
//                     e = elts[i];
//                     e.setAttribute("data-processed", true);
//                     var embedSubPath = e.getAttribute("data-postid");
//                     if (!embedSubPath) {
//                         embedSubPath = e.getAttribute("data-type");
//                     }
//                     if (!embedSubPath) {
//                         embedSubPath = e.getAttribute("data-insights-term");
//                         if (embedSubPath) {
//                             embedSubPath = "insights/" + embedSubPath.replace(/\s+/g, "-");
//                             embedSubPath += "?range=" + e.getAttribute("data-range");
//                             embedSubPath += "&timestamp=" + e.getAttribute("data-timestamp");
//                         }
//                     }

//                     var iframe = document.createElement("iframe");
//                     iframe.setAttribute("frameborder", "0");
//                     iframe.setAttribute("allowtransparency", "true");
//                     iframe.setAttribute("allowfullscreen", "true");
//                     iframe.setAttribute("scrolling", "no");
//                     var root;
//                     if (e.hasAttribute("data-height")) {
//                         iframe.setAttribute("width", e.getAttribute("data-width"));
//                         iframe.setAttribute("height", e.getAttribute("data-height"));
//                         root = iframe;
//                     } else {
//                         var framewrapper = document.createElement("div");
//                         var aspect = e.getAttribute("data-aspect-ratio") || 1.33;
//                         e.setAttribute(
//                             "style",
//                             "width:" +
//                             e.getAttribute("data-width") +
//                             ";" +
//                             "position:relative;"
//                         );
//                         framewrapper.setAttribute(
//                             "style",
//                             "padding-top:" + (1 / aspect) * 100 + "%;"
//                         );
//                         iframe.setAttribute(
//                             "style",
//                             "position:absolute;top:0;left:0;width:100%;height:100%;"
//                         );
//                         framewrapper.appendChild(iframe);
//                         root = framewrapper;
//                     }
//                     var url = embedurl + embedSubPath;
//                     var sharemethod = e.getAttribute("data-share-method") || "tenor";
//                     if (sharemethod == "host") {
//                         var hosturl;
//                         if (canonical) hosturl = canonical.href;
//                         else hosturl = document.location.href;
//                         url += "?canonicalurl=" + hosturl;
//                     }
//                     iframe.setAttribute("src", url);
//                     e.innerHTML = "";
//                     e.appendChild(root);
//                 }
//             }
//         }

//         function readystatechange() {
//             if (document.readyState == "complete") ready();
//         }

//         if (
//             document.readyState == "complete" ||
//             (!document.attachEvent && document.readyState == "interactive")
//         ) {
//             setTimeout(ready, 1);
//         } else {
//             if (document.addEventListener) {
//                 document.addEventListener("DOMContentLoaded", ready, false);
//                 window.addEventListener("load", ready, false);
//             } else {
//                 document.attachEvent("onreadystatechange", readystatechange);
//                 window.attachEvent("onload", ready);
//             }
//         }
//     })();
// }