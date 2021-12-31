function changeToggle(){
  const ToggleButton  = document.getElementById("toggle");
  const ButtonContent = ToggleButton.textContent;
  
  // Toogle To Dark CSS
  const el = document.body;
  el.classList.toggle('dark-mode');

  ButtonContent == "Switch To Dark" ?
    ToggleButton.textContent = "Switch To Light" : '';
  
  ButtonContent == "Switch To Light" ?
    ToggleButton.textContent = "Switch To Dark" : '';
}