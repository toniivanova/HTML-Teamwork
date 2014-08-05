$(document).ready(function () {
    var link = null;
    document.onkeydown = checkKey;
    function moveDirection(arrow) {
        var firstLinkPosition = $("#first-link").position();
        var secondLinkPosition = $("#second-link").position();
        var thirdLinkPosition = $("#third-link").position();
        var fourthLinkPosition = $("#fourth-link").position();

        var positionTop = document.getElementById("human").style.top;
        var topNumber = parseFloat(positionTop.substring(0, positionTop.length - 2));
        var positionLeft = document.getElementById("human").style.left;
        var leftNumber = parseFloat(positionLeft.substring(0, positionLeft.length - 2));
        switch (arrow) {
            case "left":
                if (leftNumber == (secondLinkPosition.left) || (leftNumber == fourthLinkPosition.left)) {
                    var movePosition;
                    if (topNumber == secondLinkPosition.top) {
                        movePosition = firstLinkPosition;
                        link = $("#first-link").attr("title");
                    } else if (topNumber == fourthLinkPosition.top) {
                        movePosition = thirdLinkPosition;
                        link = $("#third-link").attr("title");
                    } else {
                        break;
                    }
                    var leftPos = "=" + movePosition.left + "px";
                    var topPos = "=" + movePosition.top + "px";
                    $("#human").animate({ left: 400, top: 200 }, 300, 'easeInOutBounce').delay(200);
                    $("#human").animate({ left: movePosition.left, top: movePosition.top }, 300, 'easeInOutBounce');
                }
                break;
            case "right":
                if (leftNumber == (firstLinkPosition.left) || (leftNumber == thirdLinkPosition.left)) {
                    var movePosition;
                    if (topNumber == firstLinkPosition.top) {
                        movePosition = secondLinkPosition;
                        link = $("#second-link").attr("title");
                    } else if (topNumber == thirdLinkPosition.top) {
                        movePosition = fourthLinkPosition;
                        link = $("#fourth-link").attr("title");
                    } else {
                        break;
                    }
                    var leftPos = "=" + movePosition.left + "px";
                    var topPos = "=" + movePosition.top + "px";
                    $("#human").animate({ left: 400, top: 200 }, 300, 'easeInOutBounce').delay(200);
                    $("#human").animate({ left: movePosition.left, top: movePosition.top }, 300, 'easeInOutBounce');
                }
                break;
            case "up":
                if (topNumber == (thirdLinkPosition.top) || (topNumber == fourthLinkPosition.top)) {
                    var movePosition;
                    if (leftNumber == thirdLinkPosition.left) {
                        movePosition = firstLinkPosition;
                        link = $("#first-link").attr("title");
                    } else if (leftNumber == fourthLinkPosition.left) {
                        movePosition = secondLinkPosition;
                        link = $("#second-link").attr("title");
                    } else {
                        break;
                    }
                    var leftPos = "=" + movePosition.left + "px";
                    var topPos = "=" + movePosition.top + "px";
                    $("#human").animate({ left: 400, top: 200 }, 300, 'easeInOutBounce').delay(200);
                    $("#human").animate({ left: movePosition.left, top: movePosition.top }, 300, 'easeInOutBounce');
                }
                break;
            case "down":
                if (topNumber == (firstLinkPosition.top) || (topNumber == secondLinkPosition.top)) {
                    var movePosition;
                    if (leftNumber == firstLinkPosition.left) {
                        movePosition = thirdLinkPosition;
                        link = $("#third-link").attr("title");
                    } else if (leftNumber == secondLinkPosition.left) {
                        movePosition = fourthLinkPosition;
                        link = $("#fourth-link").attr("title");
                    } else {
                        break;
                    }
                    var leftPos = "=" + movePosition.left + "px";
                    var topPos = "=" + movePosition.top + "px";
                    $("#human").animate({ left: 400, top: 200 }, 300, 'easeInOutBounce').delay(200);
                    $("#human").animate({ left: movePosition.left, top: movePosition.top }, 300, 'easeInOutBounce');
                }
                break;
            default:
                break;
        }
    }
    function checkKey(e) {
        e = e || window.event;
        var positionTop = document.getElementById("human").style.top;
        var topNumber = parseFloat(positionTop.substring(0, positionTop.length - 2));
        var positionLeft = document.getElementById("human").style.left;
        var leftNumber = parseFloat(positionLeft.substring(0, positionLeft.length - 2));
        if (e.keyCode == '37') {
            // left arrow
            //alert("Left Arrow");
            //WORKING alert(String(document.getElementById("human").style.top));
            if (isNaN(leftNumber)) {
                $("#human").animate({ left: 400, top: 200 }, 300, 'easeInOutBounce').delay(200);
                $("#human").animate({ left: "600px", top: "30px" }, 300, 'easeInOutBounce');
                link = $("#second-link").attr("title");
            } else {
                moveDirection("left");
            }
            //alert(String(leftNumber));
        } else if (e.keyCode == '38') {
            // up arrow
            //alert("UP Arrow");
            if (isNaN(leftNumber)) {
                $("#human").animate({ left: 400, top: 200 }, 300, 'easeInOutBounce').delay(200);
                $("#human").animate({ left: "80px", top: "50px" }, 300, 'easeInOutBounce');
                link = $("#first-link").attr("title");
            } else {
                moveDirection("up");
            }
        }
        else if (e.keyCode == '39') {
            // right arrow
            //alert("Right Arrow");
            if (isNaN(leftNumber)) {
                $("#human").animate({ left: 400, top: 200 }, 300, 'easeInOutBounce').delay(200);
                $("#human").animate({ left: "620px", top: "300px" }, 300, 'easeInOutBounce');
                link = $("#fourth-link").attr("title");
            } else {
                moveDirection("right");
            }
        }
        else if (e.keyCode == '40') {
            // down arrow
            //alert("DOWN Arrow");
            if (isNaN(leftNumber)) {
                $("#human").animate({ left: 400, top: 200 }, 300, 'easeInOutBounce').delay(200);
                $("#human").animate({ left: "80px", top: "300px" }, 300, 'easeInOutBounce');
                link = $("#third-link").attr("title");
            } else {
                moveDirection("down");
            }
        }
    }
    $.fn.enterKey = function (fnc) {
        return this.each(function () {
            $(this).keypress(function (ev) {
                var keycode = (ev.keyCode ? ev.keyCode : ev.which);
                if (keycode == '13') {
                    fnc.call(this, ev);
                }
            })
        })
    }

    $("#fourth-link, #third-link, #second-link, #first-link").click(function () {
        var position = $(this).position();
        var leftPos = "=" + position.left + "px";
        var topPos = "=" + position.top + "px";
        $("#human").animate({ left: 400, top: 200 }, 300, 'easeInOutBounce').delay(200);
        $("#human").animate({ left: position.left, top: position.top }, 300, 'easeInOutBounce');

        link = $(this).attr("title");
    });

    $("body").enterKey(function () {
        if (link != null) {
            window.location = link;

        }
    });
});