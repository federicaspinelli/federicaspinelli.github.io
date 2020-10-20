$(function(){
  $( ".side" ).hover(
    function() {
      $(".container").addClass("open")  ;
    }, function() {
      $(".container").removeClass("open")  ;
    }
  );
})
(function() {


}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIiXX0=
//# sourceURL=coffeescript

function actionToggle() {
  const action = document.querySelector('.action');
  action.classList.toggle('active')
}