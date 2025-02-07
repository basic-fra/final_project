// Select Every Count Container
const countContainer = document.querySelectorAll(".count-digit");

// Default inital value of timer
const defaultValue = 8 * 60;

// variable to the time
let countDownTime = defaultValue;

// variable to store time interval
let timerID;

// Variable to track whether timer is running or not
let isStopped = true;

//variable to store period
const periodGame = document.getElementById("cycle");

// Function calculate time string
const findTimeString = () => {
  let minutes = String(Math.trunc(countDownTime / 60));
  let seconds = String(countDownTime % 60);
  if (minutes.length === 1) {
    minutes = "0" + minutes;
  }
  if (seconds.length === 1) {
    seconds = "0" + seconds;
  }
  return minutes + seconds;
};

// Function to start Countdown
const startTimer = () => {
  if (isStopped) {
   isStopped = false;
   timerID = setInterval(runCountDown, 1000);
  }
  saveMS(countDownTime);
};

// Function to stop Countdown
const stopTimer = () => {
  isStopped = true;
  if (timerID) {
    clearInterval(timerID);
  }
};

// Function to reset Countdown
const resetTimer = () => {
  stopTimer();
  countDownTime = defaultValue;
  renderTime();
};

// Function to display countdown on screen
const renderTime = () => {
  const time = findTimeString();
  countContainer.forEach((count, index) => {
    count.innerHTML = time.charAt(index);
  });
};

// function to execute timer
const runCountDown = () => {
    // decrement time
    countDownTime -= 1;
    //Display updated time
    renderTime();
    saveMS(countDownTime);

    // timeout on zero
    if (countDownTime === 0) {
    if(periodGame.textContent < 4){
      periodGame.textContent = parseInt(periodGame.textContent)+1;
      saveMS();
    }
    alert('End of quarter!');
    //divDisplay.textContent = 'End of quarter.'
    //saveToLocalStorage(divDisplay);
    stopTimer();
    stopClock_A();
    pauseButtonClicked();
    restartClock_A();
    countDownTime = defaultValue;
  }
};

const decreaseSecond = () => {
    // decrement time
    countDownTime -= 1;
    //Display updated time
    renderTime();
}
  
const increaseSecond = () => {
    // decement time
    countDownTime += 1;
    //Display updated time
    renderTime();
}

let attackClock = 30; // set initial shot clock value
let attackClockDisplay = document.getElementById("attack-clock");
let attackClockInterval;

function countdown() {
  if (attackClock > 0) {
    attackClock--; // decrease shot clock value
    attackClockDisplay.innerHTML = attackClock; // update shot clock display
  } 
  else{
    attackClock=31; // stop clock when it reaches zero
    countdown();
  }
  saveMS(countDownTime);
  //saveAttack();
}

function startClock_A() {
   attackClockInterval = setInterval(countdown, 1000);
   if(localStorage.getItem('attack clock') == null){
       attackClockInterval = setInterval(countdown, 1000); // start countdown timer
   } else {
     attackClock = localStorage.getItem('attack clock');
     //attackClockInterval = setInterval(countdown, 1000);
   }
}

function stopClock_A() {
  clearInterval(attackClockInterval); // stop countdown timer
}

function restartClock_A() {
  attackClock = 30; // reset shot clock value
  attackClockDisplay.innerHTML = attackClock; // update shot clock display
}

function restartClock_A20() {
  attackClock = 20; // reset shot clock value
  attackClockDisplay.innerHTML = attackClock; // update shot clock display
}

function secondPlus() {
    if(attackClock >= 0 && attackClock < 30){
      attackClock += 1;
      attackClockDisplay.innerHTML = attackClock;
    }
}

function secondMinus() {
    if(attackClock > 0 && attackClock <= 30){
      attackClock -= 1;
      attackClockDisplay.innerHTML = attackClock;
    }
}

// save time 
const saveMS = () => {
    localStorage.setItem('min&sec',countDownTime);
    localStorage.setItem('time','[]');
    localStorage.setItem('time',JSON.stringify(findTimeString()));
    localStorage.setItem('period',1);
    let gamePeriod = document.getElementById("cycle").textContent;
    localStorage.setItem('period',JSON.stringify(gamePeriod));
    localStorage.setItem('attack clock',document.getElementById('attack-clock').innerHTML);
    localStorage.setItem('homeResult',document.getElementById("homeResult").textContent);
    localStorage.setItem('awayResult',document.getElementById("awayResult").textContent);
}

//save conditions
const saveToLocalStorage = () => {
  let newData = document.getElementById("stateDisplay").textContent;

  if(localStorage.getItem('data') == null){
    localStorage.setItem('data','[]');
  }
  let oldData = JSON.parse(localStorage.getItem('data'));
  oldData.push(newData);

  localStorage.setItem('data',JSON.stringify(oldData));
}

// Function to handle the start button click
function startButtonClicked() {
    // Disable the start button
    document.getElementById('start').disabled = true;
    
    // Enable the pause button
    document.getElementById('stop').disabled = false;
}
  
// Function to handle the pause button click
function pauseButtonClicked() {
    // Disable the pause button
    document.getElementById('stop').disabled = true;
    
    // Enable the start button
    document.getElementById('start').disabled = false;
}

// removing space from input fields
function removeHomeSpaces() {
  let noSpaceHome = document.getElementById("idPlayerHome");
  noSpaceHome.value = noSpaceHome.value.replace(/\s+/g, "");

  let noSpaceGk = document.getElementById("idGkHome");
  noSpaceGk.value = noSpaceGk.value.replace(/\s+/g, "");
}
function removeGuestSpaces() {
  let noSpaceGuest = document.getElementById("idPlayerAway");
  noSpaceGuest.value = noSpaceGuest.value.replace(/\s+/g, "");
}

//make input first then create button
function handleHomeInputs() {
  const addHomePlayer = document.getElementById("homeInputPlayer");
  const nameInput = document.getElementById("nameHome");
  const idInput = document.getElementById('idPlayerHome');
  
  if (nameInput.value.trim() != "" && idInput.value.trim() != "" && addHomePlayer) {
    editTableHome();
  } else {
    alert("Input player's name and number first.")
  }
}

//creating home table
function editTableHome() {
  
  // retrieve the input field values
  const name = document.getElementById("nameHome").value;
  const p_id = document.getElementById('idPlayerHome').value;
  // retrieve the table element
  const table = document.getElementById("myTableHome");
  // locate the row to edit based on the id value
  let rowToEdit = -1;
   for (let i = 1; i < table.rows.length; i++) {
     if (table.rows[i].cells[0].textContent === p_id ) {
       rowToEdit = i;
       break;
     }
   }
  if (rowToEdit === -1) {
    let deleteOption = document.createElement("button");
    const newRow = table.insertRow();
    const idCell = newRow.insertCell();
    const nameCell = newRow.insertCell();
    const goalCell = newRow.insertCell();
    const sfgCell = newRow.insertCell();
    const swpmCell = newRow.insertCell();
    const sfcCell = newRow.insertCell();
    const sfiveCell = newRow.insertCell();
    const foulCell = newRow.insertCell();
    const turnOverCell = newRow.insertCell();
    const blockCell = newRow.insertCell();
    const swCell = newRow.insertCell();
    const slCell = newRow.insertCell();
    const optionsCell = newRow.insertCell();
    idCell.textContent = p_id;
    nameCell.textContent = name;
    goalCell.textContent = 0;
    sfgCell.textContent = 0;
    swpmCell.textContent = 0;
    sfcCell.textContent = 0;
    sfiveCell.textContent = 0;
    foulCell.textContent = 0;
    turnOverCell.textContent = 0;
    blockCell.textContent = 0;
    swCell.textContent = 0;
    slCell.textContent = 0;
    deleteOption.innerText = "delete";
    optionsCell.appendChild(deleteOption);
    
    
    //creating buttons for stats
    let playerButton = document.createElement("button");
    playerButton.innerText = document.getElementById('idPlayerHome').value +"H";
    let displayPB = document.getElementById("displayHomeButton");
    playerButton.addEventListener("click",function(){
      IDinput(playerButton);
    });
    displayPB.appendChild(playerButton);
    function IDinput(playerButton){
      document.getElementById("find_id").value = playerButton.innerText;
    }

    //delete button option
     deleteOption.addEventListener("click",function(){
        deleteRow(this);
        alert("Player has been deleted.");
       })
    function deleteRow(el) {
      let tbl = el.parentNode.parentNode.parentNode;
      let row = el.parentNode.parentNode.rowIndex;
      tbl.deleteRow(row);
      let homeBplayers = document.getElementById("displayHomeButton");
      if(el.parentNode.parentNode.cells[0].textContent+"H" === playerButton.innerText){
          homeBplayers.removeChild(playerButton);
      }}
       
    //clear input fields
    document.getElementById("nameHome").value = ' ';
    document.getElementById('idPlayerHome').value = ' ';
  } else {
    // if the id value matches a row, display alert
    alert("WARNING: player number must be different");
  }
}

//make input first then create button
function handleAwayInputs() {
  const addAwayPlayer = document.getElementById("awayInputPlayer");
  const nameInput = document.getElementById("nameAway");
  const idInput = document.getElementById('idPlayerAway');
  
  if (nameInput.value.trim() != "" && idInput.value.trim() != "" && addAwayPlayer) {
      editTableAway();
  } else {
    alert("Input player's name and number first.")
  }
}

//creating away table
function editTableAway() {
  
  // retrieve the input field values
  const name = document.getElementById("nameAway").value;
  const p_id = document.getElementById('idPlayerAway').value;
  // retrieve the table element
  const awTable = document.getElementById("myTableAway");
  // locate the row to edit based on the id value
  let rowToEdit = -1;
   for (let i = 1; i < awTable.rows.length; i++) {
     if (awTable.rows[i].cells[0].textContent === p_id ) {
       rowToEdit = i;
       break;
     }
   }
  if (rowToEdit === -1) {
    let deleteOption = document.createElement("button");
    const newRow = awTable.insertRow();
    const idCell = newRow.insertCell();
    const nameCell = newRow.insertCell();
    const goalCell = newRow.insertCell();
    const sfgCell = newRow.insertCell();
    const swpmCell = newRow.insertCell();
    const sfcCell = newRow.insertCell();
    const sfiveCell = newRow.insertCell();
    const foulCell = newRow.insertCell();
    const turnOverCell = newRow.insertCell();
    const blockCell = newRow.insertCell();
    const swCell = newRow.insertCell();
    const slCell = newRow.insertCell();
    const optionsCell = newRow.insertCell();
    idCell.textContent = p_id;
    nameCell.textContent = name;
    goalCell.textContent = 0;
    sfgCell.textContent = 0;
    swpmCell.textContent = 0;
    sfcCell.textContent = 0;
    sfiveCell.textContent = 0;
    foulCell.textContent = 0;
    turnOverCell.textContent = 0;
    blockCell.textContent = 0;
    swCell.textContent = 0;
    slCell.textContent = 0;
    deleteOption.innerText = "delete";
    optionsCell.appendChild(deleteOption);
    
    
    //creating buttons for stats
    let playerButton = document.createElement("button");
    playerButton.innerText = document.getElementById('idPlayerAway').value +"A";
    let displayPB = document.getElementById("displayAwayButton");
    playerButton.addEventListener("click",function(){
      IDinput(playerButton);
    });
    displayPB.appendChild(playerButton);
    function IDinput(playerButton){
      document.getElementById("find_id").value = playerButton.innerText;
    }

    //delete button option
     deleteOption.addEventListener("click",function(){
        deleteRow(this);
        alert("Player has been deleted.");
       })
    function deleteRow(el) {
      let tbl = el.parentNode.parentNode.parentNode;
      let row = el.parentNode.parentNode.rowIndex;
      tbl.deleteRow(row);
      let homeBplayers = document.getElementById("displayAwayButton");
      if(el.parentNode.parentNode.cells[0].textContent+"A" === playerButton.innerText){
          homeBplayers.removeChild(playerButton);
      }}
       
    //clear input fields
    document.getElementById("nameAway").value = ' ';
    document.getElementById('idPlayerAway').value = ' ';
  } else {
    // if the id value matches a row, display alert
    alert("WARNING: player number must be different");
  }
}

//make input first then create button
function homeGkInputs() {
  const addHomeGk = document.getElementById("homeInputGk");
  const nameInput = document.getElementById("gkHome");
  const idInput = document.getElementById('idGkHome');
  
  if (nameInput.value.trim() != "" && idInput.value.trim() != "" && addHomeGk) {
    homeGoalkeeper();
  } else {
    alert("Input player's name and number first.");
  }
}

function homeGoalkeeper() {
  // retrieve the input field values
  const name = document.getElementById("gkHome").value;
  const p_id = document.getElementById('idGkHome').value;
  // retrieve the table element
  const ghTable = document.getElementById("goalkeeperHome");
  // locate the row to edit based on the id value
  let rowToEdit = -1;
   for (let i = 1; i < ghTable.rows.length; i++) {
     if (ghTable.rows[i].cells[0].textContent === p_id ) {
       rowToEdit = i;
       break;
     }
   }
  if (rowToEdit === -1) {
    let deleteOption = document.createElement("button");
    const newRow = ghTable.insertRow();
    const idCell = newRow.insertCell();
    const nameCell = newRow.insertCell();
    const defCell = newRow.insertCell();
    const dfgCell = newRow.insertCell();
    const dwpmCell = newRow.insertCell();
    const dfcCell = newRow.insertCell();
    const dfiveCell = newRow.insertCell();
    const optionsCell = newRow.insertCell();
    idCell.textContent = p_id;
    nameCell.textContent = name;
    defCell.textContent = 0;
    dfgCell.textContent = 0;
    dwpmCell.textContent = 0;
    dfcCell.textContent = 0;
    dfiveCell.textContent = 0;
    deleteOption.innerText = "delete";
    optionsCell.appendChild(deleteOption);
    
    //creating buttons for stats
    let playerButton = document.createElement("button");
    playerButton.innerText = document.getElementById('idGkHome').value +"GH";//POPRAVI
    let displayPB = document.getElementById("homeGoalkeeper"); //POPRAVI
    playerButton.addEventListener("click",function(){
      IDinput(playerButton);
    });
    displayPB.appendChild(playerButton);
    function IDinput(playerButton){
      document.getElementById("find_id").value = playerButton.innerText;
    }

    //delete button option
     deleteOption.addEventListener("click",function(){
        deleteRow(this);
        alert("Player has been deleted.");
       })
    function deleteRow(el) {
      let tbl = el.parentNode.parentNode.parentNode;
      let row = el.parentNode.parentNode.rowIndex;
      tbl.deleteRow(row);
      let homeBplayers = document.getElementById("homeGoalkeeper");//POPRAVI
      if(el.parentNode.parentNode.cells[0].textContent+"GH" === playerButton.innerText){
          homeBplayers.removeChild(playerButton);
      }}
       
    //clear input fields
    document.getElementById("gkHome").value = ' ';
    document.getElementById('idGkHome').value = ' ';
  } else {
    // if the id value matches a row, display alert
    alert("WARNING: player number must be different");
  }
}

//make input first then create button
function awayGkInputs() {
  const addAwayGk = document.getElementById("awayInputGk");
  const nameInput = document.getElementById("gkAway");
  const idInput = document.getElementById('idGkAway');
  
  if (nameInput.value.trim() != "" && idInput.value.trim() != "" && addAwayGk) {
    awayGoalkeeper();
  } else {
    alert("Input player's name and number first.");
  }
}

function awayGoalkeeper() {
  // retrieve the input field values
  const name = document.getElementById("gkAway").value;
  const p_id = document.getElementById('idGkAway').value;
  // retrieve the table element
  const gaTable = document.getElementById("goalkeeperAway");
  // locate the row to edit based on the id value
  let rowToEdit = -1;
   for (let i = 1; i < gaTable.rows.length; i++) {
     if (gaTable.rows[i].cells[0].textContent === p_id ) {
       rowToEdit = i;
       break;
     }
   }
  if (rowToEdit === -1) {
    let deleteOption = document.createElement("button");
    const newRow = gaTable.insertRow();
    const idCell = newRow.insertCell();
    const nameCell = newRow.insertCell();
    const defCell = newRow.insertCell();
    const dfgCell = newRow.insertCell();
    const dwpmCell = newRow.insertCell();
    const dfcCell = newRow.insertCell();
    const dfiveCell = newRow.insertCell();
    const optionsCell = newRow.insertCell();
    idCell.textContent = p_id;
    nameCell.textContent = name;
    defCell.textContent = 0;
    dfgCell.textContent = 0;
    dwpmCell.textContent = 0;
    dfcCell.textContent = 0;
    dfiveCell.textContent = 0;
    deleteOption.innerText = "delete";
    optionsCell.appendChild(deleteOption);
    
    //creating buttons for stats
    let playerButton = document.createElement("button");
    playerButton.innerText = document.getElementById('idGkAway').value +"GA";//POPRAVI
    let displayPB = document.getElementById("awayGoalkeeper"); //POPRAVI
    playerButton.addEventListener("click",function(){
      IDinput(playerButton);
    });
    displayPB.appendChild(playerButton);
    function IDinput(playerButton){
      document.getElementById("find_id").value = playerButton.innerText;
    }

    //delete button option
     deleteOption.addEventListener("click",function(){
        deleteRow(this);
        alert("Player has been deleted.");
       })
    function deleteRow(el) {
      let tbl = el.parentNode.parentNode.parentNode;
      let row = el.parentNode.parentNode.rowIndex;
      tbl.deleteRow(row);
      let homeBplayers = document.getElementById("awayGoalkeeper");//POPRAVI
      if(el.parentNode.parentNode.cells[0].textContent+"GA" === playerButton.innerText){
          homeBplayers.removeChild(playerButton);
      }}
       
    //clear input fields
    document.getElementById("gkAway").value = ' ';
    document.getElementById('idGkAway').value = ' ';
  } else {
    // if the id value matches a row, display alert
    alert("WARNING: player number must be different");
  }
}

// Get the div element
let divDisplay = document.getElementById("stateDisplay");

// Initialize the array
let myArrayOf = [];
// Add an event listener to the div to detect changes
divDisplay.addEventListener('DOMSubtreeModified', () => {
    // Get the updated content of the div
    const divContent = divDisplay.innerHTML;

    // Split the content into an array
    const divContentArray = divContent.split(/[.]/);//

    // Update the array
    myArrayOf = divContentArray;

    // Get the container element
    const stanja = document.querySelector('#stanja');
    // Get the list element
    const lista = document.querySelector('#lista');

    // Loop through the array and create a new element for each item
    // Create a new element
    const newItemOf = document.createElement('span');
    const addBr = document.createElement("br");

    // Set the text content of the element to the current array item
    newItemOf.textContent = myArrayOf; //[i] ;

    // Append the new element to the container
    stanja.appendChild(newItemOf);
    newItemOf.appendChild(addBr);
});

//get time
function Action() {
  let minutess = String(Math.trunc(countDownTime / 60));
  let secondss = String(countDownTime % 60);
  if (minutess.length === 1) {
    minutess = "0" + minutess;
  }
  if (secondss.length === 1) {
    secondss = "0" + secondss;
  }
  return minutess + ":" + secondss;
}

// saving table data
function saveTablePlayers(){
  let table = document.getElementById("myTableHome");
  let tableAw = document.getElementById("myTableAway");
  let header = [];
  let rows = [];

  let headerAw = [];
  let rowsAw = [];
  
  //home
  for(let i = 0; i < table.rows[0].cells.length; i++) { //length-1
    header.push(table.rows[0].cells[i].innerHTML);
  }
  for (let i = 1; i < table.rows.length; i++) {
    let row = {};
  for (let j = 0; j < table.rows[i].cells.length; j++) { //length-1
      row[header[j]] = table.rows[i].cells[j].innerHTML;
  }
    rows.push(row);
  }
  const homePlayers = JSON.stringify(rows);
  localStorage.setItem('homePlayers',homePlayers);
  

  //away
  for(let i = 0; i < tableAw.rows[0].cells.length; i++) {
    headerAw.push(tableAw.rows[0].cells[i].innerHTML);
  }
  for (let i = 1; i < tableAw.rows.length; i++) {
    let rowAw = {};
  for (let j = 0; j < tableAw.rows[i].cells.length; j++) {
      rowAw[header[j]] = tableAw.rows[i].cells[j].innerHTML;
  }
    rowsAw.push(rowAw);
  }
  const awayPlayers = JSON.stringify(rowsAw);
  localStorage.setItem('awayPlayers',awayPlayers);

}

function saveGoalkeepers() {
  //goalkeeper home 
  let GHtable = document.getElementById("goalkeeperHome");
  let GHheader = [];
  let GHrows = [];

  for(let i = 0; i < GHtable.rows[0].cells.length; i++) {
    GHheader.push(GHtable.rows[0].cells[i].innerHTML);
  }
  for (let i = 1; i < GHtable.rows.length; i++) {
    let rowGH = {};
  for (let j = 0; j < GHtable.rows[i].cells.length; j++) {
      rowGH[GHheader[j]] = GHtable.rows[i].cells[j].innerHTML;
  }
    GHrows.push(rowGH);
  }
  const homeGK = JSON.stringify(GHrows);
  localStorage.setItem('home goalkeeper',homeGK);

  //goalkeeper away
  let GAtable = document.getElementById("goalkeeperAway");
  let GAheader = [];
  let GArows = [];

  for(let i = 0; i < GAtable.rows[0].cells.length; i++) {
    GAheader.push(GAtable.rows[0].cells[i].innerHTML);
  }
  for (let i = 1; i < GAtable.rows.length; i++) {
    let rowGA = {};
  for (let j = 0; j < GAtable.rows[i].cells.length; j++) {
      rowGA[GAheader[j]] = GAtable.rows[i].cells[j].innerHTML;
  }
    GArows.push(rowGA);
  }
  const awayGK = JSON.stringify(GArows);
  localStorage.setItem('away goalkeeper',awayGK);
}

function saveButtons(){
  //home
  let table = document.getElementById("myTableHome");
  let buttonArray = [];
  for(let i = 1; i < table.rows.length; i++) {
    buttonArray.push(table.rows[i].cells[0].textContent+"H");
    localStorage.setItem("homeButtons",JSON.stringify(buttonArray));
  }
  //away
  let tableAw = document.getElementById("myTableAway");
  let buttonArrayAw = [];
  for(let i = 1; i < tableAw.rows.length; i++) {
  buttonArrayAw.push(tableAw.rows[i].cells[0].textContent+"A");
  localStorage.setItem("awayButtons",JSON.stringify(buttonArrayAw));
  }
  // home goalkeeper
  let ghTable = document.getElementById("goalkeeperHome");
  let buttonArrayGH = [];
  for(let i = 1; i < ghTable.rows.length; i++) {
    buttonArrayGH.push(ghTable.rows[i].cells[0].textContent+"GH");
    localStorage.setItem("goalk home B",JSON.stringify(buttonArrayGH));
  }
  // away goalkeeper
  let gaTable = document.getElementById("goalkeeperAway");
  let buttonArrayGA = [];
  for(let i = 1; i < gaTable.rows.length; i++) {
    buttonArrayGA.push(gaTable.rows[i].cells[0].textContent+"GA");
    localStorage.setItem("goalk away B",JSON.stringify(buttonArrayGA));
  }
}

function deleteLastColumn(){
  let table = document.getElementById('myTableHome');
  let tableAw = document.getElementById('myTableAway');
  let ghTable = document.getElementById('goalkeeperHome');
  let gaTable = document.getElementById('goalkeeperAway');
  let columnIndex = 12;
  let indexColumn = 7;
  //home
  for (let i = 0; i < table.rows.length; i++) {
    table.rows[i].deleteCell(columnIndex);
  }
  //away
  for (let i = 0; i < tableAw.rows.length; i++) {
    tableAw.rows[i].deleteCell(columnIndex);
  }
  //goalkeeper home
  for (let i = 0; i < ghTable.rows.length; i++) {
    ghTable.rows[i].deleteCell(indexColumn);
  }
  //goalkeeper away
  for (let i = 0; i < gaTable.rows.length; i++) {
    gaTable.rows[i].deleteCell(indexColumn);
  }
}

function hideAddPlayer(){
  //HOME
  const addHome = document.querySelector('#homeInputPlayer');
  addHome.style.display="none";
  // home goalkeeper
  const addGH = document.querySelector('#homeInputGk');
  addGH.style.display="none";
  //AWAY
  const addAway = document.querySelector('#awayInputPlayer');
  addAway.style.display="none";
  // away goalkeeper
  const addGA = document.querySelector('#awayInputGk');
  addGA.style.display="none";
}

function Hidden(){
  if (confirm("Are you sure?") == true) {
     saveTablePlayers() ;
     saveGoalkeepers();
     deleteLastColumn() ; 
     saveButtons();
     hideAddPlayer()
     const buttonSavePlayers = document.getElementById('savePlayers');
     buttonSavePlayers.style.visibility="hidden";
  } else {

  }
}

//button functions
function Goal(){
  // retrieve the input field values
  const id_p = document.getElementById('find_id').value;
  // retrieve the table element
  const table = document.getElementById("myTableHome");
  const tableAw = document.getElementById("myTableAway");

  // locate the row to edit based on the name value
  let rowToEdit = -1;
  for (let i = 1; i < table.rows.length; i++) {
    if (table.rows[i].cells[0].textContent+"H" === id_p) {
      rowToEdit = i;
      const goalCell = table.rows[rowToEdit].cells[2];
      goalCell.textContent = parseInt(goalCell.textContent)+1;
      document.getElementById("homeResult").textContent = parseInt(document.getElementById("homeResult").textContent) + 1;
      saveMS();
      saveTablePlayers();
      //display action in time  
      divDisplay.textContent = Action() + " " + table.rows[i].cells[1].textContent + " Goal!" ;
      saveToLocalStorage(divDisplay);  
      document.getElementById("find_id").value = ' ';   
    }
  }
  //----AWAY---
  for (let i = 1; i < tableAw.rows.length; i++) {
    if (tableAw.rows[i].cells[0].textContent+"A" === id_p) {
      rowToEdit = i;
      const goalCell_Away = tableAw.rows[rowToEdit].cells[2];
      goalCell_Away.textContent = parseInt(goalCell_Away.textContent)+1;
      document.getElementById("awayResult").textContent = parseInt(document.getElementById("awayResult").textContent) +1
      ;
      saveMS();
      saveTablePlayers();
      // Update the text content of the div and display action in time 
      divDisplay.textContent = Action() + " " + tableAw.rows[i].cells[1].textContent + " Goal!" ;
      saveToLocalStorage(divDisplay);
      document.getElementById("find_id").value = ' '; 
    }
  }
}

function ShootFG() {
  // retrieve the input field values
  const id_p = document.getElementById('find_id').value;
  // retrieve the table element
  const table = document.getElementById("myTableHome");
  const tableAw = document.getElementById("myTableAway");

  // locate the row to edit based on the name value
  let rowToEdit = -1;
  for (let i = 1; i < table.rows.length; i++) {
    if (table.rows[i].cells[0].textContent+"H" === id_p) {
      rowToEdit = i;
      const shootfgCell = table.rows[rowToEdit].cells[3];
      shootfgCell.textContent = parseInt(shootfgCell.textContent)+1;
      saveMS();
      saveTablePlayers();
      //display action in time  
      divDisplay.textContent = Action() + " " + table.rows[i].cells[1].textContent + " shoots from game." ;
      saveToLocalStorage(divDisplay);  
      document.getElementById("find_id").value = ' ';   
    }
  }
  //----AWAY---
  for (let i = 1; i < tableAw.rows.length; i++) {
    if (tableAw.rows[i].cells[0].textContent+"A" === id_p) {
      rowToEdit = i;
      const shootfgCell_Away = tableAw.rows[rowToEdit].cells[3];
      shootfgCell_Away.textContent = parseInt(shootfgCell_Away.textContent)+1;
      saveMS();
      saveTablePlayers();
      // Update the text content of the div and display action in time 
      divDisplay.textContent =  Action() + " " + tableAw.rows[i].cells[1].textContent + " shoots from game." ;
      saveToLocalStorage(divDisplay);
      document.getElementById("find_id").value = ' '; 
    }
  }
}

function ShootW1() {
  // retrieve the input field values
  const id_p = document.getElementById('find_id').value;
  // retrieve the table element
  const table = document.getElementById("myTableHome");
  const tableAw = document.getElementById("myTableAway");

  // locate the row to edit based on the name value
  let rowToEdit = -1;
  for (let i = 1; i < table.rows.length; i++) {
    if (table.rows[i].cells[0].textContent+"H" === id_p) {
      rowToEdit = i;
      const shootw1Cell = table.rows[rowToEdit].cells[4];
      shootw1Cell.textContent = parseInt(shootw1Cell.textContent)+1;
      saveMS();
      saveTablePlayers();
      //display action in time  
      divDisplay.textContent = Action() + " " + table.rows[i].cells[1].textContent + " shoots with player more." ;
      saveToLocalStorage(divDisplay);  
      document.getElementById("find_id").value = ' ';   
    }
  }
  //----AWAY---
  for (let i = 1; i < tableAw.rows.length; i++) {
    if (tableAw.rows[i].cells[0].textContent+"A" === id_p) {
      rowToEdit = i;
      const shootw1Cell_Away = tableAw.rows[rowToEdit].cells[4];
      shootw1Cell_Away.textContent = parseInt(shootw1Cell_Away.textContent)+1;
      saveMS();
      saveTablePlayers();
      // Update the text content of the div and display action in time 
      divDisplay.textContent = Action() + " " + tableAw.rows[i].cells[1].textContent + " shoots with player more." ;
      saveToLocalStorage(divDisplay);
      document.getElementById("find_id").value = ' '; 
    }
  }
}

function ShootFC() {
  // retrieve the input field values
  const id_p = document.getElementById('find_id').value;
  // retrieve the table element
  const table = document.getElementById("myTableHome");
  const tableAw = document.getElementById("myTableAway");

  // locate the row to edit based on the name value
  let rowToEdit = -1;
  for (let i = 1; i < table.rows.length; i++) {
    if (table.rows[i].cells[0].textContent+"H" === id_p) {
      rowToEdit = i;
      const shootfcCell = table.rows[rowToEdit].cells[5];
      shootfcCell.textContent = parseInt(shootfcCell.textContent)+1;
      saveMS();
      saveTablePlayers();
      //display action in time  
      divDisplay.textContent = Action() + " " + table.rows[i].cells[1].textContent + " takes a shot on the counterattack." ;
      saveToLocalStorage(divDisplay);  
      document.getElementById("find_id").value = ' ';   
    }
  }
  //----AWAY---
  for (let i = 1; i < tableAw.rows.length; i++) {
    if (tableAw.rows[i].cells[0].textContent+"A" === id_p) {
      rowToEdit = i;
      const shootfcCell_Away = tableAw.rows[rowToEdit].cells[5];
      shootfcCell_Away.textContent = parseInt(shootfcCell_Away.textContent)+1;
      saveMS();
      saveTablePlayers();
      // Update the text content of the div and display action in time 
      divDisplay.textContent = Action() + " " + tableAw.rows[i].cells[1].textContent + " takes a shot on the counterattack." ;
      saveToLocalStorage(divDisplay);
      document.getElementById("find_id").value = ' '; 
    }
  }
}

function Shoot5() {
  // retrieve the input field values
  const id_p = document.getElementById('find_id').value;
  // retrieve the table element
  const table = document.getElementById("myTableHome");
  const tableAw = document.getElementById("myTableAway");

  // locate the row to edit based on the name value
  let rowToEdit = -1;
  for (let i = 1; i < table.rows.length; i++) {
    if (table.rows[i].cells[0].textContent+"H" === id_p) {
      rowToEdit = i;
      const shoot5Cell = table.rows[rowToEdit].cells[6];
      shoot5Cell.textContent = parseInt(shoot5Cell.textContent)+1;
      saveMS();
      saveTablePlayers();
      //display action in time  
      divDisplay.textContent = Action() + " " + table.rows[i].cells[1].textContent + " shoots from 5 meters." ;
      saveToLocalStorage(divDisplay);  
      document.getElementById("find_id").value = ' ';   
    }
  }
  //----AWAY---
  for (let i = 1; i < tableAw.rows.length; i++) {
    if (tableAw.rows[i].cells[0].textContent+"A" === id_p) {
      rowToEdit = i;
      const shoot5Cell_Away = tableAw.rows[rowToEdit].cells[6];
      shoot5Cell_Away.textContent = parseInt(shoot5Cell_Away.textContent)+1;
      saveMS();
      saveTablePlayers();
      // Update the text content of the div and display action in time 
      divDisplay.textContent = Action() + " " + tableAw.rows[i].cells[1].textContent + " shoots from 5 meters." ;
      saveToLocalStorage(divDisplay);
      document.getElementById("find_id").value = ' '; 
    }
  }
}

function Foul() {
  // retrieve the input field values
  const id_p = document.getElementById('find_id').value;
  // retrieve the table element
  const table = document.getElementById("myTableHome");
  const tableAw = document.getElementById("myTableAway");

  // locate the row to edit based on the name value
  let rowToEdit = -1;
  for (let i = 1; i < table.rows.length; i++) {
    if (table.rows[i].cells[0].textContent+"H" === id_p) {
      rowToEdit = i;
      const foulCell = table.rows[rowToEdit].cells[7];
      foulCell.textContent = parseInt(foulCell.textContent)+1;
      if(foulCell.textContent === '3'){
        alert('Player out');
        let div = document.getElementById("displayHomeButton");
        let buttons = div.getElementsByTagName("button");
        for (let i = 0; i < buttons.length; i++) {
          if (buttons[i].textContent === id_p) {
            buttons[i].disabled = true;
          } 
        }
      }
      saveMS();
      saveTablePlayers();
      //display action in time  
      divDisplay.textContent = Action() + " " + table.rows[i].cells[1].textContent + " made foul." ;
      saveToLocalStorage(divDisplay);  
      document.getElementById("find_id").value = ' ';   
    }
  }
  //----AWAY---
  for (let i = 1; i < tableAw.rows.length; i++) {
    if (tableAw.rows[i].cells[0].textContent+"A" === id_p) {
      rowToEdit = i;
      const foulCell_Away = tableAw.rows[rowToEdit].cells[7];
      foulCell_Away.textContent = parseInt(foulCell_Away.textContent)+1;
      if(foulCell_Away.textContent == '3'){
        alert('Player out');
        let div = document.getElementById("displayAwayButton");
        let buttons = div.getElementsByTagName("button");
        for (let i = 0; i < buttons.length; i++) {
          if (buttons[i].textContent === id_p) {
            buttons[i].disabled = true;
          } 
        }
      }
      saveMS();
      saveTablePlayers();
      // Update the text content of the div and display action in time 
      divDisplay.textContent = Action() + " " + tableAw.rows[i].cells[1].textContent + " made foul." ;
      saveToLocalStorage(divDisplay);
      document.getElementById("find_id").value = ' '; 
    }
  }
}

function Turnover() {
  // retrieve the input field values
  const id_p = document.getElementById('find_id').value;
  // retrieve the table element
  const table = document.getElementById("myTableHome");
  const tableAw = document.getElementById("myTableAway");

  // locate the row to edit based on the name value
  let rowToEdit = -1;
  for (let i = 1; i < table.rows.length; i++) {
    if (table.rows[i].cells[0].textContent+"H" === id_p) {
      rowToEdit = i;
      const toCell = table.rows[rowToEdit].cells[8];
      toCell.textContent = parseInt(toCell.textContent)+1;
      saveMS();
      saveTablePlayers();
      //display action in time  
      divDisplay.textContent = Action() + " " + table.rows[i].cells[1].textContent + " lost the ball." ;
      saveToLocalStorage(divDisplay);  
      document.getElementById("find_id").value = ' ';   
    }
  }
  //----AWAY---
  for (let i = 1; i < tableAw.rows.length; i++) {
    if (tableAw.rows[i].cells[0].textContent+"A" === id_p) {
      rowToEdit = i;
      const toCell_Away = tableAw.rows[rowToEdit].cells[8];
      toCell_Away.textContent = parseInt(toCell_Away.textContent)+1;
      saveMS();
      saveTablePlayers();
      // Update the text content of the div and display action in time 
      divDisplay.textContent = Action() + " " + tableAw.rows[i].cells[1].textContent + " lost the ball." ;
      saveToLocalStorage(divDisplay);
      document.getElementById("find_id").value = ' '; 
    }
  }
}

function Block() {
  // retrieve the input field values
  const id_p = document.getElementById('find_id').value;
  // retrieve the table element
  const table = document.getElementById("myTableHome");
  const tableAw = document.getElementById("myTableAway");

  // locate the row to edit based on the name value
  let rowToEdit = -1;
  for (let i = 1; i < table.rows.length; i++) {
    if (table.rows[i].cells[0].textContent+"H" === id_p) {
      rowToEdit = i;
      const blockCell = table.rows[rowToEdit].cells[9];
      blockCell.textContent = parseInt(blockCell.textContent)+1;
      saveMS();
      saveTablePlayers();
      //display action in time  
      divDisplay.textContent = Action() + " " + table.rows[i].cells[1].textContent + " blocked the shot." ;
      saveToLocalStorage(divDisplay);  
      document.getElementById("find_id").value = ' ';   
    }
  }
  //----AWAY---
  for (let i = 1; i < tableAw.rows.length; i++) {
    if (tableAw.rows[i].cells[0].textContent+"A" === id_p) {
      rowToEdit = i;
      const blockCell_Away = tableAw.rows[rowToEdit].cells[9];
      blockCell_Away.textContent = parseInt(blockCell_Away.textContent)+1;
      saveMS();
      saveTablePlayers();
      // Update the text content of the div and display action in time 
      divDisplay.textContent = Action() + " " + tableAw.rows[i].cells[1].textContent + " blocked the shot." ;
      saveToLocalStorage(divDisplay);
      document.getElementById("find_id").value = ' '; 
    }
  }
}

function SW() {
  // retrieve the input field values
  const id_p = document.getElementById('find_id').value;
  // retrieve the table element
  const table = document.getElementById("myTableHome");
  const tableAw = document.getElementById("myTableAway");

  // locate the row to edit based on the name value
  let rowToEdit = -1;
  for (let i = 1; i < table.rows.length; i++) {
    if (table.rows[i].cells[0].textContent+"H" === id_p) {
      rowToEdit = i;
      const swCell = table.rows[rowToEdit].cells[10];
      swCell.textContent = parseInt(swCell.textContent)+1;
      saveMS();
      saveTablePlayers();
      //display action in time  
      divDisplay.textContent = Action() + " " + table.rows[i].cells[1].textContent + " swimming win." ;
      saveToLocalStorage(divDisplay);  
      document.getElementById("find_id").value = ' ';   
    }
  }
  //----AWAY---
  for (let i = 1; i < tableAw.rows.length; i++) {
    if (tableAw.rows[i].cells[0].textContent+"A" === id_p) {
      rowToEdit = i;
      const swCell_Away = tableAw.rows[rowToEdit].cells[10];
      swCell_Away.textContent = parseInt(swCell_Away.textContent)+1;
      saveMS();
      saveTablePlayers();
      // Update the text content of the div and display action in time 
      divDisplay.textContent = Action() + " " + tableAw.rows[i].cells[1].textContent + " swimming win." ;
      saveToLocalStorage(divDisplay);
      document.getElementById("find_id").value = ' '; 
    }
  }
}

function SL() {
  // retrieve the input field values
  const id_p = document.getElementById('find_id').value;
  // retrieve the table element
  const table = document.getElementById("myTableHome");
  const tableAw = document.getElementById("myTableAway");

  // locate the row to edit based on the name value
  let rowToEdit = -1;
  for (let i = 1; i < table.rows.length; i++) {
    if (table.rows[i].cells[0].textContent+"H" === id_p) {
      rowToEdit = i;
      const slCell = table.rows[rowToEdit].cells[11];
      slCell.textContent = parseInt(slCell.textContent)+1;
      saveMS();
      saveTablePlayers();
      //display action in time  
      divDisplay.textContent = Action() + " " + table.rows[i].cells[1].textContent + " swimming lose." ;
      saveToLocalStorage(divDisplay);  
      document.getElementById("find_id").value = ' ';   
    }
  }
  //----AWAY---
  for (let i = 1; i < tableAw.rows.length; i++) {
    if (tableAw.rows[i].cells[0].textContent+"A" === id_p) {
      rowToEdit = i;
      const slCell_Away = tableAw.rows[rowToEdit].cells[11];
      slCell_Away.textContent = parseInt(slCell_Away.textContent)+1;
      saveMS();
      saveTablePlayers();
      // Update the text content of the div and display action in time 
      divDisplay.textContent = Action() + " " + tableAw.rows[i].cells[1].textContent + " swimming lose." ;
      saveToLocalStorage(divDisplay);
      document.getElementById("find_id").value = ' '; 
    }
  }
}

//goalkeeper functions
function Def() {
  // retrieve the input field values
  const id_p = document.getElementById('find_id').value;
  // retrieve the table element
  const table = document.getElementById("goalkeeperHome");
  const tableAw = document.getElementById("goalkeeperAway");

  // locate the row to edit based on the name value
  let rowToEdit = -1;
  for (let i = 1; i < table.rows.length; i++) {
    if (table.rows[i].cells[0].textContent+"GH" === id_p) {
      rowToEdit = i;
      const defCell = table.rows[rowToEdit].cells[2];
      defCell.textContent = parseInt(defCell.textContent)+1;
      saveMS();
      saveGoalkeepers();
      //display action in time  
      //divDisplay.textContent = Action() + " " + table.rows[i].cells[1].textContent + " scored 2 points." ;
      //saveToLocalStorage(divDisplay);  
      document.getElementById("find_id").value = ' ';   
    }
  }
  //----AWAY---
  for (let i = 1; i < tableAw.rows.length; i++) {
    if (tableAw.rows[i].cells[0].textContent+"GA" === id_p) {
      rowToEdit = i;
      const defCell_Away = tableAw.rows[rowToEdit].cells[2];
      defCell_Away.textContent = parseInt(defCell_Away.textContent)+1;
      saveMS();
      saveGoalkeepers();
      // Update the text content of the div and display action in time 
      // divDisplay.textContent =  Action() + " " + tableAw.rows[i].cells[1].textContent + " scored 2 points." ;
      // saveToLocalStorage(divDisplay);
      document.getElementById("find_id").value = ' '; 
    }
  }
}

function DFG() {
  // retrieve the input field values
  const id_p = document.getElementById('find_id').value;
  // retrieve the table element
  const table = document.getElementById("goalkeeperHome");
  const tableAw = document.getElementById("goalkeeperAway");

  // locate the row to edit based on the name value
  let rowToEdit = -1;
  for (let i = 1; i < table.rows.length; i++) {
    if (table.rows[i].cells[0].textContent+"GH" === id_p) {
      rowToEdit = i;
      const dfgCell = table.rows[rowToEdit].cells[3];
      dfgCell.textContent = parseInt(dfgCell.textContent)+1;
      const defCell = table.rows[rowToEdit].cells[2];
      defCell.textContent = parseInt(defCell.textContent)+1; 
      saveMS();
      saveGoalkeepers();
      //display action in time  
      divDisplay.textContent = Action() + " " + table.rows[i].cells[1].textContent + " defense from game." ;
      saveToLocalStorage(divDisplay);  
      document.getElementById("find_id").value = ' ';   
    }
  }
  //----AWAY---
  for (let i = 1; i < tableAw.rows.length; i++) {
    if (tableAw.rows[i].cells[0].textContent+"GA" === id_p) {
      rowToEdit = i;
      const dfgCell_Away = tableAw.rows[rowToEdit].cells[3];
      dfgCell_Away.textContent = parseInt(dfgCell_Away.textContent)+1;
      const defCell_Away = tableAw.rows[rowToEdit].cells[2];
      defCell_Away.textContent = parseInt(defCell_Away.textContent)+1;
      saveMS();
      saveGoalkeepers();
      // Update the text content of the div and display action in time 
      divDisplay.textContent = Action() + " " + tableAw.rows[i].cells[1].textContent + " defense from game." ;
      saveToLocalStorage(divDisplay);
      document.getElementById("find_id").value = ' '; 
    }
  }
}

function DWPM() {
  // retrieve the input field values
  const id_p = document.getElementById('find_id').value;
  // retrieve the table element
  const table = document.getElementById("goalkeeperHome");
  const tableAw = document.getElementById("goalkeeperAway");

  // locate the row to edit based on the name value
  let rowToEdit = -1;
  for (let i = 1; i < table.rows.length; i++) {
    if (table.rows[i].cells[0].textContent+"GH" === id_p) {
      rowToEdit = i;
      const dwpmCell = table.rows[rowToEdit].cells[4];
      dwpmCell.textContent = parseInt(dwpmCell.textContent)+1;
      const defCell = table.rows[rowToEdit].cells[2];
      defCell.textContent = parseInt(defCell.textContent)+1;
      saveMS();
      saveGoalkeepers();
      //display action in time  
      divDisplay.textContent = Action() + " " + table.rows[i].cells[1].textContent + " defenese with player more." ;
      saveToLocalStorage(divDisplay);  
      document.getElementById("find_id").value = ' ';   
    }
  }
  //----AWAY---
  for (let i = 1; i < tableAw.rows.length; i++) {
    if (tableAw.rows[i].cells[0].textContent+"GA" === id_p) {
      rowToEdit = i;
      const dwpmCell_Away = tableAw.rows[rowToEdit].cells[4];
      dwpmCell_Away.textContent = parseInt(dwpmCell_Away.textContent)+1;
      const defCell_Away = tableAw.rows[rowToEdit].cells[2];
      defCell_Away.textContent = parseInt(defCell_Away.textContent)+1;
      saveMS();
      saveGoalkeepers();
      // Update the text content of the div and display action in time 
      divDisplay.textContent = Action() + " " + tableAw.rows[i].cells[1].textContent + " defense with player more." ;
      saveToLocalStorage(divDisplay);
      document.getElementById("find_id").value = ' '; 
    }
  }
}

function DFC() {
  // retrieve the input field values
  const id_p = document.getElementById('find_id').value;
  // retrieve the table element
  const table = document.getElementById("goalkeeperHome");
  const tableAw = document.getElementById("goalkeeperAway");

  // locate the row to edit based on the name value
  let rowToEdit = -1;
  for (let i = 1; i < table.rows.length; i++) {
    if (table.rows[i].cells[0].textContent+"GH" === id_p) {
      rowToEdit = i;
      const dfcCell = table.rows[rowToEdit].cells[5];
      dfcCell.textContent = parseInt(dfcCell.textContent)+1;
      const defCell = table.rows[rowToEdit].cells[2];
      defCell.textContent = parseInt(defCell.textContent)+1;
      saveMS();
      saveGoalkeepers();
      //display action in time  
      divDisplay.textContent = Action() + " " + table.rows[i].cells[1].textContent + " defense from counterattack." ;
      saveToLocalStorage(divDisplay);  
      document.getElementById("find_id").value = ' ';   
    }
  }
  //----AWAY---
  for (let i = 1; i < tableAw.rows.length; i++) {
    if (tableAw.rows[i].cells[0].textContent+"GA" === id_p) {
      rowToEdit = i;
      const dfcCell_Away = tableAw.rows[rowToEdit].cells[5];
      dfcCell_Away.textContent = parseInt(dfcCell_Away.textContent)+1;
      const defCell_Away = tableAw.rows[rowToEdit].cells[2];
      defCell_Away.textContent = parseInt(defCell_Away.textContent)+1;
      saveMS();
      saveGoalkeepers();
      // Update the text content of the div and display action in time 
      divDisplay.textContent = Action() + " " + tableAw.rows[i].cells[1].textContent + " defense from counterattack." ;
      saveToLocalStorage(divDisplay);
      document.getElementById("find_id").value = ' '; 
    }
  }
}

function D5() {
  // retrieve the input field values
  const id_p = document.getElementById('find_id').value;
  // retrieve the table element
  const table = document.getElementById("goalkeeperHome");
  const tableAw = document.getElementById("goalkeeperAway");

  // locate the row to edit based on the name value
  let rowToEdit = -1;
  for (let i = 1; i < table.rows.length; i++) {
    if (table.rows[i].cells[0].textContent+"GH" === id_p) {
      rowToEdit = i;
      const d5Cell = table.rows[rowToEdit].cells[6];
      d5Cell.textContent = parseInt(d5Cell.textContent)+1;
      const defCell = table.rows[rowToEdit].cells[2];
      defCell.textContent = parseInt(defCell.textContent)+1;
      saveMS();
      saveGoalkeepers();
      //display action in time  
      divDisplay.textContent = Action() + " " + table.rows[i].cells[1].textContent + " 5 meter defense." ;
      saveToLocalStorage(divDisplay);  
      document.getElementById("find_id").value = ' ';   
    }
  }
  //----AWAY---
  for (let i = 1; i < tableAw.rows.length; i++) {
    if (tableAw.rows[i].cells[0].textContent+"GA" === id_p) {
      rowToEdit = i;
      const d5Cell_Away = tableAw.rows[rowToEdit].cells[6];
      d5Cell_Away.textContent = parseInt(d5Cell_Away.textContent)+1;
      const defCell_Away = tableAw.rows[rowToEdit].cells[2];
      defCell_Away.textContent = parseInt(defCell_Away.textContent)+1;
      saveMS();
      saveGoalkeepers();
      // Update the text content of the div and display action in time 
      divDisplay.textContent = Action() + " " + tableAw.rows[i].cells[1].textContent + " 5 meter defense." ;
      saveToLocalStorage(divDisplay);
      document.getElementById("find_id").value = ' '; 
    }
  }
}

//data controls
function retrieveData() {

  if(localStorage.getItem('data') != null){
    const saveData = JSON.parse(localStorage.getItem('data'));
    for(let i=0; i < saveData.length;i++){
      document.getElementById("stateDisplay").textContent=saveData[i];
    }
  } else {}

  if(localStorage.getItem('time') != null){
    const getTime = JSON.parse(localStorage.getItem('time'));
    for(let j=1; j < getTime.length;j++){
      // document.getElementsByClassName('count-digit')[0].textContent=saveTime[0];
      document.getElementsByClassName('count-digit')[1].textContent=getTime[1];
      document.getElementsByClassName('count-digit')[2].textContent=getTime[2];
      document.getElementsByClassName('count-digit')[3].textContent=getTime[3];
    }
  }

  if(localStorage.getItem('min&sec') != null){
    const getMinSec = JSON.parse(localStorage.getItem('min&sec'));
    countDownTime = getMinSec;
  }

  if(localStorage.getItem('period') != null){
    const getPeriod = JSON.parse(localStorage.getItem('period'));
    document.getElementById("cycle").textContent=getPeriod;
  }

  if(localStorage.getItem('attack clock') != null){
    const getAttackClock = JSON.parse(localStorage.getItem('attack clock'))
    document.getElementById("attack-clock").textContent=getAttackClock;
  }

  if(localStorage.getItem('homeResult') != null){
    const saveHomeResult = JSON.parse(localStorage.getItem('homeResult'));
    document.getElementById("homeResult").textContent=saveHomeResult;
  } else {}

  if(localStorage.getItem('awayResult') != null){
    const saveAwayResult = JSON.parse(localStorage.getItem('awayResult'));
    document.getElementById("awayResult").textContent=saveAwayResult;
  }

  //retrieve home buttons
  if(localStorage.getItem('homeButtons') != null){
    const saveButtons = JSON.parse(localStorage.getItem('homeButtons'));
    for(let j=0; j < saveButtons.length;j++){
        let homePb = document.createElement("button");
        let displayPb = document.getElementById("displayHomeButton");
        homePb.innerText = saveButtons[j];
        displayPb.appendChild(homePb);

        homePb.addEventListener("click",function(){
          document.getElementById("find_id").value = homePb.innerText;
        })
    }
  }
  
  //retrieve home goalkeeper buttons
  if(localStorage.getItem('goalk home B') != null){
    const saveButtons = JSON.parse(localStorage.getItem('goalk home B'));
    for(let j=0; j < saveButtons.length;j++){
        let homePb = document.createElement("button");
        let displayPb = document.getElementById("homeGoalkeeper");
        homePb.innerText = saveButtons[j];
        displayPb.appendChild(homePb);
        homePb.addEventListener("click",function(){
          document.getElementById("find_id").value = homePb.innerText;
        })
    }
  }

  //---retrieve home players
  if(localStorage.getItem('homePlayers') != null){
    hideAddPlayer();
    //-------get table players---------
    const tableData = localStorage.getItem('homePlayers');
    // Convert the JSON string to an object
    const tableObject = JSON.parse(tableData);
    // Get a reference to the table element
    let row = document.getElementById("myRow");
    row.deleteCell(12);
    const table = document.getElementById('myTableHome');

    // Loop through the object and extract the data
    for (let i = 0; i < tableObject.length; i++) {
        const row = document.createElement('tr');
        const data1 = document.createElement('td');
        const data2 = document.createElement('td');
        const data3 = document.createElement('td');
        const data4 = document.createElement('td');
        const data5 = document.createElement('td');
        const data6 = document.createElement('td');
        const data7 = document.createElement('td');
        const data8 = document.createElement('td');
        const data9 = document.createElement('td');
        const data10 = document.createElement('td');
        const data11 = document.createElement('td');
        const data12 = document.createElement('td');

        data1.innerText = tableObject[i].Number;
        data2.innerText = tableObject[i].Name;
        data3.innerText = tableObject[i].Goal;
        data4.innerText = tableObject[i].SFG;
        data5.innerText = tableObject[i].SWPM;
        data6.innerText = tableObject[i].SFC;
        data7.innerText = tableObject[i].S5
        data8.innerText = tableObject[i].PF;
        data9.innerText = tableObject[i].TO;
        data10.innerText = tableObject[i].BL;
        data11.innerText = tableObject[i].SW;
        data12.innerText = tableObject[i].SL;

        table.appendChild(row);
        row.appendChild(data1);
        row.appendChild(data2);
        row.appendChild(data3);
        row.appendChild(data4);
        row.appendChild(data5);
        row.appendChild(data6);
        row.appendChild(data7);
        row.appendChild(data8);
        row.appendChild(data9);
        row.appendChild(data10);
        row.appendChild(data11);
        row.appendChild(data12);
    }
  }

  //retrieve away buttons
  if(localStorage.getItem('awayButtons') != null){
    const saveAwButtons = JSON.parse(localStorage.getItem('awayButtons'));
    for(let j=0; j < saveAwButtons.length; j++){
      let awayPb = document.createElement("button");
      let displayAb = document.getElementById("displayAwayButton");
      awayPb.innerText = saveAwButtons[j];
      displayAb.appendChild(awayPb);

      awayPb.addEventListener("click",function(){
        document.getElementById("find_id").value = awayPb.innerText;
      })
    }
  }

  //retrieve away goalkeeper buttons
  if(localStorage.getItem('goalk away B') != null){
    const saveAwButtons = JSON.parse(localStorage.getItem('goalk away B'));
    for(let j=0; j < saveAwButtons.length;j++){
        let awayPb = document.createElement("button");
        let displayAwPb = document.getElementById("awayGoalkeeper");
        awayPb.innerText = saveAwButtons[j];
        displayAwPb.appendChild(awayPb);
        awayPb.addEventListener("click",function(){
          document.getElementById("find_id").value = awayPb.innerText;
        })
    }
  }

  // retrieve away players
  if(localStorage.getItem('awayPlayers') != null){
    //-----get away table players-----
    const awayData = localStorage.getItem('awayPlayers');
    // Convert the JSON string to an object
    const awayObject = JSON.parse(awayData);
    // Get a reference to the table element
    let awayRow = document.getElementById('myRowAway');
    awayRow.deleteCell(12);
    const tableAw = document.getElementById('myTableAway');

    // Loop through the object and extract the data
    for (let i = 0; i < awayObject.length; i++) {
        const row = document.createElement('tr');
        const data1 = document.createElement('td');
        const data2 = document.createElement('td');
        const data3 = document.createElement('td');
        const data4 = document.createElement('td');
        const data5 = document.createElement('td');
        const data6 = document.createElement('td');
        const data7 = document.createElement('td');
        const data8 = document.createElement('td');
        const data9 = document.createElement('td');
        const data10 = document.createElement('td');
        const data11 = document.createElement('td');
        const data12 = document.createElement('td');

        data1.innerText = awayObject[i].Number;
        data2.innerText = awayObject[i].Name;
        data3.innerText = awayObject[i].Goal;
        data4.innerText = awayObject[i].SFG;
        data5.innerText = awayObject[i].SWPM;
        data6.innerText = awayObject[i].SFC;
        data7.innerText = awayObject[i].S5
        data8.innerText = awayObject[i].PF;
        data9.innerText = awayObject[i].TO;
        data10.innerText = awayObject[i].BL;
        data11.innerText = awayObject[i].SW;
        data12.innerText = awayObject[i].SL;

        tableAw.appendChild(row);
        row.appendChild(data1);
        row.appendChild(data2);
        row.appendChild(data3);
        row.appendChild(data4);
        row.appendChild(data5);
        row.appendChild(data6);
        row.appendChild(data7);
        row.appendChild(data8);
        row.appendChild(data9);
        row.appendChild(data10);
        row.appendChild(data11);
        row.appendChild(data12);
    }
  }

  //---retrieve home goalkeeper players
  if(localStorage.getItem('home goalkeeper') != null){
    //-------get table players---------
    const tableHG = localStorage.getItem('home goalkeeper');
    // Convert the JSON string to an object
    const tableObject = JSON.parse(tableHG);
    // Get a reference to the table element
    let row = document.getElementById("rowGH");
    row.deleteCell(7);
    const hgTable = document.getElementById('goalkeeperHome');
    // Loop through the object and extract the data
    for (let i = 0; i < tableObject.length; i++) {
        const row = document.createElement('tr');
        const data1 = document.createElement('td');
        const data2 = document.createElement('td');
        const data3 = document.createElement('td');
        const data4 = document.createElement('td');
        const data5 = document.createElement('td');
        const data6 = document.createElement('td');
        const data7 = document.createElement('td');
        data1.innerText = tableObject[i].Number;
        data2.innerText = tableObject[i].Name;
        data3.innerText = tableObject[i].Def;
        data4.innerText = tableObject[i].DFG;
        data5.innerText = tableObject[i].DWPM;
        data6.innerText = tableObject[i].DFC;
        data7.innerText = tableObject[i].D5;
        hgTable.appendChild(row);
        row.appendChild(data1);
        row.appendChild(data2);
        row.appendChild(data3);
        row.appendChild(data4);
        row.appendChild(data5);
        row.appendChild(data6);
        row.appendChild(data7);
    }
  }

  //---retrieve away goalkeeper players 
  if(localStorage.getItem('away goalkeeper') != null){
    //-------get table players---------
    const tableData = localStorage.getItem('away goalkeeper');
    // Convert the JSON string to an object
    const tableObject = JSON.parse(tableData);
    // Get a reference to the table element
    let rowAway = document.getElementById("rowGA");
    rowAway.deleteCell(7);
    const table = document.getElementById('goalkeeperAway');

    // Loop through the object and extract the data
    for (let i = 0; i < tableObject.length; i++) {
        const row = document.createElement('tr');
        const data1 = document.createElement('td');
        const data2 = document.createElement('td');
        const data3 = document.createElement('td');
        const data4 = document.createElement('td');
        const data5 = document.createElement('td');
        const data6 = document.createElement('td');
        const data7 = document.createElement('td');
        data1.innerText = tableObject[i].Number;
        data2.innerText = tableObject[i].Name;
        data3.innerText = tableObject[i].Def;
        data4.innerText = tableObject[i].DFG;
        data5.innerText = tableObject[i].DWPM;
        data6.innerText = tableObject[i].DFC;
        data7.innerText = tableObject[i].D5
        table.appendChild(row);
        row.appendChild(data1);
        row.appendChild(data2);
        row.appendChild(data3);
        row.appendChild(data4);
        row.appendChild(data5);
        row.appendChild(data6);
        row.appendChild(data7);
    }
  }

  //disable home players with 3 fouls
  const table = document.getElementById('myTableHome');
  let rowEdit = -1;
  for (let i = 1; i < table.rows.length; i++) {
    const FoulCell = table.rows[i].cells[7];
    rowEdit = i;
    if(FoulCell.textContent == '3'){
      const playerID = table.rows[rowEdit].cells[0].textContent;
      let div = document.getElementById("displayHomeButton");
        let buttons = div.getElementsByTagName("button");
        for (let i = 0; i < buttons.length; i++) {
          if (buttons[i].textContent === playerID + "H") {
            buttons[i].disabled = true;
          } 
        }
    }
  }

  //disable away players with 3 fouls
  const tableAw = document.getElementById('myTableAway');
  let editRow = -1;
  for (let i = 1; i < tableAw.rows.length; i++) {
    const awayFoul = tableAw.rows[i].cells[7];
    editRow = i;
    if(awayFoul.textContent == '3'){
      const IDplayer = tableAw.rows[editRow].cells[0].textContent;
      let divA = document.getElementById("displayAwayButton");
      let buttonsA = divA.getElementsByTagName("button");
      for (let i = 0; i < buttonsA.length; i++) {
        if (buttonsA[i].textContent === IDplayer + "A") {
            buttonsA[i].disabled = true;
        } 
      }
    }
  }
}

function deleteData() {
  if (confirm("Are you sure?") == true) {
    localStorage.clear();
    } else {
  
    }
}

// ---------TOOLTIP ON HOVER-----
// let cell3 = document.getElementById('cell3');
// // Add event listeners
// cell3.addEventListener('mouseover', function() {
//   showTooltip(cell3, 'This is cell 1');
// });
// cell3.addEventListener('mouseout', function() {
//   hideTooltip(cell3);
// });
// // Function to show the tooltip
// function showTooltip(element, text) {
//   var tooltip = document.createElement('div');
//   tooltip.className = 'tooltip';
//   tooltip.textContent = text;
//   element.appendChild(tooltip);
// }
// // Function to hide the tooltip
// function hideTooltip(element) {
//   var tooltip = element.querySelector('.tooltip');
//   if (tooltip) {
//     element.removeChild(tooltip);
//   }
// }
// ------------TOOLTIP ON HOVER---------
document.getElementById("exportBtn").addEventListener("click", function() {
  // Get table data
  // let table1Data = document.getElementById("myTableHome").outerHTML;
  // let table2Data = document.getElementById("myTableAway").outerHTML;
  // let table3Data = document.getElementById("goalkeeperHome").outerHTML;
  // let table4Data = document.getElementById("goalkeeperAway").outerHTML;

  // Create a new workbook
  var workbook = XLSX.utils.book_new();

  // Convert HTML tables to worksheet objects
  let table1Worksheet = XLSX.utils.table_to_sheet(document.getElementById("myTableHome"));
  let table2Worksheet = XLSX.utils.table_to_sheet(document.getElementById("myTableAway"));
  let table3Worksheet = XLSX.utils.table_to_sheet(document.getElementById("goalkeeperHome"));
  let table4Worksheet = XLSX.utils.table_to_sheet(document.getElementById("goalkeeperAway"));

  // Add worksheets to the workbook
  XLSX.utils.book_append_sheet(workbook, table1Worksheet, "Home");
  XLSX.utils.book_append_sheet(workbook, table2Worksheet, "Away");
  XLSX.utils.book_append_sheet(workbook, table3Worksheet, "Home gk");
  XLSX.utils.book_append_sheet(workbook, table4Worksheet, "Away gk");

  // Export the workbook as an XLSX file
  XLSX.writeFile(workbook, "waterpolo_stats.xlsx");
});

