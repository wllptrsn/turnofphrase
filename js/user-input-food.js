
let score =0;
var userInput=[$('#text-1'),$('#text-2'),$('#text-3'),$('#text-4'),$('#text-5'),$('#text-6'),$('#text-7'),$('#text-8'),$('#text-9'),$('#text-10'),$('#text-11'),$('#text-12'),$('#text-13'),$('#text-14'),];
var answer=[]
function start(){
    $("#text-1").focus();//Sets Focus on First text field automatically
    $('input').val (function () {
        return this.value.toUpperCase();
      })
    $('input').on('keyup', function() {
        if ($(":focus").val()) {
            $(this).removeClass('current-text');
            $(this).next().addClass('current-text');
            $(":focus").next().trigger('focus');
        }
    });//Moves text forward when clicked
    $('#text-4').on('keyup', function(){
        if($(":focus").val()){
            $("#text-5").addClass('current-text');
            $("#text-5").focus();
        }
    });//Moves from one word to the next
    $('#text-7').on('keyup', function(){
        if($(":focus").val()){
            $("#text-8").addClass('current-text');
            $("#text-8").focus();
        }
    });//Moves from one word to the next
    $('#text-14').on('keyup', function(){
        if($(":focus").val()){
            $("#done-button").addClass('current-text');
            $("#done-button").focus();
        }
    });//Moves from one word to the next
    $( ".text-block" ).focus(function() {
        $('#done-button').removeClass('current-text');
        $('#clear-button').removeClass('current-text');
      });

}
function clear(){
    $('.text-block').val('');
    $("#text-1").focus();
    $('.text-block').removeClass('current-text');
    $('#text-1').addClass('current-text');
    answer.length=0;
}
function finish(){
    //console.log($('#text-2').val());
    for(let i=0;i<userInput.length;i++){
        answer.push(userInput[i].val());
       
}
var answer2=answer.toString();
var answer3=answer2.toUpperCase();
console.log(answer3);
if(answer3 == 'F,O,O,D,F,O,R,T,H,O,U,G,H,T'){
    alert('You are correct, Sir!! Hoh Hoh Hoh');
    score = score +1700;
    console.log(score);
}
else{
    alert('You are a dissapointment!');
    clear();
    score = score-700;
    console.log(score);
}
}

$('#clear-button').click(function(){
    clear();
});
$('#done-button').click(function(){
    finish();
});
start();