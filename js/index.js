document.addEventListener('DOMContentLoaded', function() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navbarTogglerIcon = document.querySelector('.navbar-toggler-icon');
  
    navbarToggler.addEventListener('click', function() {
      navbarCollapse.classList.toggle('show');
      navbarTogglerIcon.classList.toggle('open');
      console.log("Navbar toggler clicked.");
    });
  });
  
  $(document).ready(function(){
    $(".skills button").click(function(){
      $(".skills button").removeClass("active");
  
      $(this).addClass("active");
  
      var skillText = $(this).text();
      var description = "";
  
      switch(skillText) {
        case "developer.":
          description = "Recognizes and nurtures the potential in others, serving as a supportive mentor.";
          break;
        case "adaptability.":
          description = "Flexibly embraces change, thriving in a dynamic environment.";
          break;
        case "arranger.":
          description = "Efficiently orchestrates tasks and resources, adept at coordination.";
          break;
        case "includer.":
          description = "Ensures everyone feels welcome and valued, fostering inclusivity.";
          break;
        case "relator.":
          description = "Forms deep, meaningful connections, prioritizing genuine relationships.";
          break;
      }
  
      // Display the description in the 'info-row' div
      $("#info-row").html(description).show();
    });
  });