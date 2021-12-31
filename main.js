function changeToggle(){
  const ToggleButton  = document.getElementById("toggle");
  const ButtonContent = ToggleButton.textContent;

  ButtonContent == "Switch To Dark" ?
    ToggleButton.textContent = "Switch To Light" : '';
  
  ButtonContent == "Switch To Light" ?
    ToggleButton.textContent = "Switch To Dark" : '';
}
