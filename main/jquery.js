/**
 * Created by hemanthrao on 9/18/16.
 */

$("#inner").validate();
function submitted () {
    alert("submitted");
}
$(document).ready(function(){
    $('.state').mouseover(function(){
        $(".contact").show();
    });
    $('.state').mouseout(function(){
        $(".contact").hide();
    });
});

$(document).ready(function() {
    $('.state1').mouseover(function () {
        $(".contact1").show();
    });
    $('.state1').mouseout(function () {
        $(".contact1").hide();
    });
});


$(document).ready(function() {
    $('.state2').mouseover(function () {
        $(".contact2").show();
    });
    $('.state2').mouseout(function () {
        $(".contact2").hide();
    });
});