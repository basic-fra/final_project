// Get the HTML elements
const timer = document.getElementById('matchTime');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');
// const increaseBtn = document.getElementById('increase');
// const decreaseBtn = document.getElementById('decrease');

// Set the initial values



let seconds = 0;
let minutes = 0;
let intervalId;

// Function to update the timer
function updateTimer() {
  const clock = localStorage.getItem('time');
  minutes = parseInt(clock[0]+clock[1]);
  seconds= parseInt(clock[3]+clock[4]);

  seconds++;

  if (seconds == 60) {
    seconds = 0;
    minutes++;
  }

  timer.textContent = `${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  //timer.textContent = parseInt(minutes)+":"+seconds;
  saveTime();
}

// Start the timer
startBtn.addEventListener('click', () => {
  intervalId = setInterval(updateTimer, 1000);
  // Disable the start button
  document.getElementById('start').disabled = true;  
  // Enable the pause button
  document.getElementById('stop').disabled = false;
});

// Stop the timer
stopBtn.addEventListener('click', () => {
  clearInterval(intervalId);
  // Disable the pause button
  document.getElementById('stop').disabled = true;    
  // Enable the start button
  document.getElementById('start').disabled = false;
});

// Reset the timer
resetBtn.addEventListener('click', () => {
  clearInterval(intervalId);
  //localStorage.removeItem("time");
  timer.textContent = '00:00';
  localStorage.setItem("time", timer.textContent);
  //const clock = localStorage.getItem('time');
  
  // seconds = 0;
  // minutes = 0;
  
});

// removing space from input field
function removeHome(inputField) {
  inputField.value = inputField.value.replace(/\D/g, '');
}

//-----creating HOME table----
function homeInputs() {
  const addHomePlayer = document.getElementById("homeInputPlayer");
  const nameInput = document.getElementById("nameHome");
  const idInput = document.getElementById('idPlayerHome');
  
  //if (nameInput.value.length>>1 && idInput.value.length >> 0 && addHomePlayer) {
  if (nameInput.value.trim() != "" && idInput.value.trim() != "" && addHomePlayer) {
    editTableHome();
  } else {
    alert("Input player's name and jersey first.")
  }
}

//insert rows for home players
function editTableHome() {
  
  // retrieve the input field values
  const name = document.getElementById("nameHome").value;
  const p_id = document.getElementById('idPlayerHome').value;

  // retrieve the table element
  const table = document.getElementById("homeTable");
  const awTable = document.getElementById("myTableAway");
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
    const corrPassCell = newRow.insertCell();
    const wrPassCell = newRow.insertCell();
    const asisstCell = newRow.insertCell();
    const foulCell = newRow.insertCell();
    const yellowCell = newRow.insertCell();
    const redCell = newRow.insertCell();
    const optionsCell = newRow.insertCell();
    
    idCell.textContent = p_id;
    nameCell.textContent = name;
    goalCell.textContent = 0;
    corrPassCell.textContent = 0;
    wrPassCell.textContent = 0;
    asisstCell.textContent = 0;
    foulCell.textContent = 0;
    yellowCell.textContent = 0;
    redCell.textContent = 0;
    
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
    alert("WARNING: jersey number must be different");
  }
}

// removing space from input field
function removeAway() {
  function removeAway(inputField) {
    inputField.value = inputField.value.replace(/\D/g, '');
  }
}

//-----creating AWAY table----
function awayInputs() {
  const addAwayPlayer = document.getElementById("awayInputPlayer");
  const nameInput = document.getElementById("nameAway");
  const idInput = document.getElementById('idPlayerAway');
  
  if (nameInput.value.trim() != "" && idInput.value.trim() != "" && addAwayPlayer) {
    editTableAway();
  } else {
    alert("Input player's name and jersey first.")
  }
}

//insert rows for away players
function editTableAway() {
  
  // retrieve the input field values
  const name = document.getElementById("nameAway").value;
  const p_id = document.getElementById('idPlayerAway').value;

  // retrieve the table element
  const awTable = document.getElementById("awayTable");
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
    const corrPassCell = newRow.insertCell();
    const wrPassCell = newRow.insertCell();
    const asisstCell = newRow.insertCell();
    const foulCell = newRow.insertCell();
    const yellowCell = newRow.insertCell();
    const redCell = newRow.insertCell();
    const optionsCell = newRow.insertCell();
    
    idCell.textContent = p_id;
    nameCell.textContent = name;
    goalCell.textContent = 0;
    corrPassCell.textContent = 0;
    wrPassCell.textContent = 0;
    asisstCell.textContent = 0;
    foulCell.textContent = 0;
    yellowCell.textContent = 0;
    redCell.textContent = 0;
    
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
    alert("WARNING: jersey number must be different");
  }
}

//make input first then create rows and buttons
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

//insert rows for home goalkeepers
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
    const dfcCell = newRow.insertCell();
    const delevenCell = newRow.insertCell();
    const optionsCell = newRow.insertCell();
    idCell.textContent = p_id;
    nameCell.textContent = name;
    defCell.textContent = 0;
    dfgCell.textContent = 0;
    dfcCell.textContent = 0;
    delevenCell.textContent = 0;
    deleteOption.innerText = "delete";
    optionsCell.appendChild(deleteOption);
    
    //creating buttons for stats
    let playerButton = document.createElement("button");
    playerButton.innerText = document.getElementById('idGkHome').value +"GH";
    let displayPB = document.getElementById("homeGoalkeeper"); 
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
      let homeBplayers = document.getElementById("homeGoalkeeper");
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

//make input first then create rows and buttons
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

//insert rows for away goalkeepers
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
    const dfcCell = newRow.insertCell();
    const delevenCell = newRow.insertCell();
    const optionsCell = newRow.insertCell();
    idCell.textContent = p_id;
    nameCell.textContent = name;
    defCell.textContent = 0;
    dfgCell.textContent = 0;
    dfcCell.textContent = 0;
    delevenCell.textContent = 0;
    deleteOption.innerText = "delete";
    optionsCell.appendChild(deleteOption);
    
    //creating buttons for stats
    let playerButton = document.createElement("button");
    playerButton.innerText = document.getElementById('idGkAway').value +"GA";
    let displayPB = document.getElementById("awayGoalkeeper");
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
//on refresh clear data in local storage
//  window.onbeforeunload = function() {
//    localStorage.clear();
//  }
function Delete() {
  if (confirm("Are you sure?") == true) {
    localStorage.clear();
    } else {
  
    }
}

//save players and hide button
function Hide(){
  if (confirm("Are you sure?") == true) {
    saveButtons();
    deleteLastColumn() ; 
    savePlayers();
    saveGoalkeepers()
    saveResults();
    hideAddPlayer();
    saveCorner();
    const buttonSavePlayers = document.getElementById('saveTablePlayers');
    buttonSavePlayers.style.visibility="hidden";
  } else {

  }
}

function saveCorner(){
  localStorage.setItem('home corners',document.getElementById("homeNcorner").textContent);
  localStorage.setItem('away corners',document.getElementById("awayNcorner").textContent);
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

function savePlayers(){
  let table = document.getElementById("homeTable");
  let tableAw = document.getElementById("awayTable");
  let header = [];
  let rows = [];

  let headerAw = [];
  let rowsAw = [];
  
  //home
  for(let i = 0; i < table.rows[0].cells.length; i++) {
    header.push(table.rows[0].cells[i].innerHTML);
  }
  for (let i = 1; i < table.rows.length; i++) {
    let row = {};
  for (let j = 0; j < table.rows[i].cells.length; j++) {
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
  saveTime();
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

function deleteLastColumn(){
  let table = document.getElementById('homeTable');
  let tableAw = document.getElementById('awayTable');
  let ghTable = document.getElementById('goalkeeperHome');
  let gaTable = document.getElementById('goalkeeperAway');
  let columnIndex = 9;
  let indexColumn = 6;
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

function saveButtons(){
  //home
  let table = document.getElementById("homeTable");
  let buttonArray = [];
  for(let i = 1; i < table.rows.length; i++) {
    buttonArray.push(table.rows[i].cells[0].textContent+"H");
    localStorage.setItem("homeButtons",JSON.stringify(buttonArray));
  }
  //away
  let tableAw = document.getElementById("awayTable");
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

function saveTime(){
  localStorage.setItem('time',document.getElementById("matchTime").textContent);
}
//save results
const saveResults = () => {
  localStorage.setItem('homeResult',document.getElementById("home-result").textContent);
  localStorage.setItem('awayResult',document.getElementById("away-result").textContent);

  //localStorage.setItem('homeResult',JSON.stringify(document.getElementById("home-result").textContent));
  //localStorage.setItem('awayResult',JSON.stringify(document.getElementById("away-result").textContent));
}

function Action(){
  const timer = document.getElementById('matchTime');
  return timer.textContent;
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

const saveTolocalStorage = () => {
  let newData = document.getElementById("stateDisplay").textContent;

  if(localStorage.getItem('data') == null){
    localStorage.setItem('data','[]');
  }
  let oldData = JSON.parse(localStorage.getItem('data'));
  oldData.push(newData);

  localStorage.setItem('data',JSON.stringify(oldData));
  // localStorage.setItem('textinput',text.textContent)
}

// PLAYERS
function Goal() {
  // const card = document.createElement('div');
  // card.classList.add('yellow-card');
  
  // retrieve the input field values
  const id_p = document.getElementById('find_id').value;
  // retrieve the table element
  const table = document.getElementById("homeTable");
  const tableAw = document.getElementById("awayTable");
  // locate the row to edit based on the name value
  // HOME
  let rowToEdit = -1;
  for (let i = 1; i < table.rows.length; i++) {
    if (table.rows[i].cells[0].textContent+"H" === id_p) {
      rowToEdit = i;
      const goalCellHome = table.rows[rowToEdit].cells[2];
      goalCellHome.textContent = parseInt(goalCellHome.textContent)+1;
      document.getElementById("home-result").textContent = parseInt(document.getElementById("home-result").textContent) + 1;
      saveResults(document.getElementById("home-result").textContent);
      savePlayers();
      const home = JSON.parse(localStorage.getItem('homeResult'))
      const away = JSON.parse(localStorage.getItem('awayResult'))
      // Update the text content of the div and display action in time 
      divDisplay.textContent =  Action() + " - " + table.rows[i].cells[1].textContent +" "+ home +":"+ away;
      document.getElementById("find_id").value = ' ';
      saveTolocalStorage(divDisplay);  
    }
  }
  //----AWAY----
  for (let i = 1; i < tableAw.rows.length; i++) {
    if (tableAw.rows[i].cells[0].textContent+"A" === id_p) {
      rowToEdit = i;
      const goalCellAway = tableAw.rows[rowToEdit].cells[2];
      goalCellAway.textContent = parseInt(goalCellAway.textContent)+1;
      document.getElementById("away-result").textContent = parseInt(document.getElementById("away-result").textContent) + 1;
      saveResults(document.getElementById("away-result").textContent);
      savePlayers();
      const home = JSON.parse(localStorage.getItem('homeResult'))
      const away = JSON.parse(localStorage.getItem('awayResult'))
      // Update the text content of the div and display action in time 
      divDisplay.textContent =  Action() + " - " + tableAw.rows[i].cells[1].textContent +" "+ home +":"+ away;
      document.getElementById("find_id").value = ' ';
      saveTolocalStorage(divDisplay); 
    }
  }
}

function correctPass() {
  // retrieve the input field values
  const id_p = document.getElementById('find_id').value;
  // retrieve the table element
  const table = document.getElementById("homeTable");
  const tableAw = document.getElementById("awayTable");
  // locate the row to edit based on the name value
  // HOME
  let rowToEdit = -1;
  for (let i = 1; i < table.rows.length; i++) {
    if (table.rows[i].cells[0].textContent+"H" === id_p) {
      rowToEdit = i;
      const corrPassHome = table.rows[rowToEdit].cells[3];
      corrPassHome.textContent = parseInt(corrPassHome.textContent)+1;
      //document.getElementById("home-result").textContent = parseInt(document.getElementById("home-result").textContent) + 1;
      //saveResults(document.getElementById("home-result").textContent);
      savePlayers();
  
      // Update the text content of the div and display action in time 
      //divDisplay.textContent =  Action() + " " + table.rows[i].cells[1].textContent + " Goal!" ;
      document.getElementById("find_id").value = ' ';
      //saveTolocalStorage(divDisplay);  
    }
  }
  //----AWAY----
  for (let i = 1; i < tableAw.rows.length; i++) {
    if (tableAw.rows[i].cells[0].textContent+"A" === id_p) {
      rowToEdit = i;
      const corrPassAway = tableAw.rows[rowToEdit].cells[3];
      corrPassAway.textContent = parseInt(corrPassAway.textContent)+1;
      //document.getElementById("away-result").textContent = parseInt(document.getElementById("away-result").textContent) + 1;
      //saveResults(document.getElementById("away-result").textContent);
      savePlayers();

      // Update the text content of the div and display action in time 
      //divDisplay.textContent =  Action() + " " + tableAw.rows[i].cells[1].textContent + " Goal!" ;
      document.getElementById("find_id").value = ' ';
      //saveTolocalStorage(divDisplay); 
    }
  }
}

function wrongPass() {
  // retrieve the input field values
  const id_p = document.getElementById('find_id').value;
  // retrieve the table element
  const table = document.getElementById("homeTable");
  const tableAw = document.getElementById("awayTable");
  // locate the row to edit based on the name value
  // HOME
  let rowToEdit = -1;
  for (let i = 1; i < table.rows.length; i++) {
    if (table.rows[i].cells[0].textContent+"H" === id_p) {
      rowToEdit = i;
      const wrongPassHome = table.rows[rowToEdit].cells[4];
      wrongPassHome.textContent = parseInt(wrongPassHome.textContent)+1;
      //document.getElementById("home-result").textContent = parseInt(document.getElementById("home-result").textContent) + 1;
      //saveResults(document.getElementById("home-result").textContent);
      savePlayers();
  
      // Update the text content of the div and display action in time 
      //divDisplay.textContent =  Action() + " " + table.rows[i].cells[1].textContent + " Goal!" ;
      document.getElementById("find_id").value = ' ';
      //saveTolocalStorage(divDisplay);  
    }
  }
  //----AWAY----
  for (let i = 1; i < tableAw.rows.length; i++) {
    if (tableAw.rows[i].cells[0].textContent+"A" === id_p) {
      rowToEdit = i;
      const wrongPassAway = tableAw.rows[rowToEdit].cells[4];
      wrongPassAway.textContent = parseInt(wrongPassAway.textContent)+1;
      //document.getElementById("away-result").textContent = parseInt(document.getElementById("away-result").textContent) + 1;
      //saveResults(document.getElementById("away-result").textContent);
      savePlayers();

      // Update the text content of the div and display action in time 
      //divDisplay.textContent =  Action() + " " + tableAw.rows[i].cells[1].textContent + " Goal!" ;
      document.getElementById("find_id").value = ' ';
      //saveTolocalStorage(divDisplay); 
    }
  }
}

function Asisst() {
  // retrieve the input field values
  const id_p = document.getElementById('find_id').value;
  // retrieve the table element
  const table = document.getElementById("homeTable");
  const tableAw = document.getElementById("awayTable");
  // locate the row to edit based on the name value
  // HOME
  let rowToEdit = -1;
  for (let i = 1; i < table.rows.length; i++) {
    if (table.rows[i].cells[0].textContent+"H" === id_p) {
      rowToEdit = i;
      const asisstCellHome = table.rows[rowToEdit].cells[5];
      asisstCellHome.textContent = parseInt(asisstCellHome.textContent)+1;
      savePlayers();
  
      // Update the text content of the div and display action in time 
      //divDisplay.textContent =  Action() + " " + table.rows[i].cells[1].textContent + " made asisst." ;
      document.getElementById("find_id").value = ' ';
      //saveTolocalStorage(divDisplay);  
    }
  }
  //----AWAY----
  for (let i = 1; i < tableAw.rows.length; i++) {
    if (tableAw.rows[i].cells[0].textContent+"A" === id_p) {
      rowToEdit = i;
      const asisstCellAway = tableAw.rows[rowToEdit].cells[5];
      asisstCellAway.textContent = parseInt(asisstCellAway.textContent)+1;
      savePlayers();

      // Update the text content of the div and display action in time 
      //divDisplay.textContent =  Action() + " " + tableAw.rows[i].cells[1].textContent + " made asisst." ;
      document.getElementById("find_id").value = ' ';
      //saveTolocalStorage(divDisplay); 
    }
  }
}

function Foul() {
  // retrieve the input field values
  const id_p = document.getElementById('find_id').value;
  // retrieve the table element
  const table = document.getElementById("homeTable");
  const tableAw = document.getElementById("awayTable");
  // locate the row to edit based on the name value
  // HOME
  let rowToEdit = -1;
  for (let i = 1; i < table.rows.length; i++) {
    if (table.rows[i].cells[0].textContent+"H" === id_p) {
      rowToEdit = i;
      const foulCellHome = table.rows[rowToEdit].cells[6];
      foulCellHome.textContent = parseInt(foulCellHome.textContent)+1;
      savePlayers();
  
      // Update the text content of the div and display action in time 
      //divDisplay.textContent =  Action() + " " + table.rows[i].cells[1].textContent + " made foul." ;
      document.getElementById("find_id").value = ' ';
      //saveTolocalStorage(divDisplay);  
    }
  }
  //----AWAY----
  for (let i = 1; i < tableAw.rows.length; i++) {
    if (tableAw.rows[i].cells[0].textContent+"A" === id_p) {
      rowToEdit = i;
      const foulCellAway = tableAw.rows[rowToEdit].cells[6];
      foulCellAway.textContent = parseInt(foulCellAway.textContent)+1;
      savePlayers();

      // Update the text content of the div and display action in time 
      //divDisplay.textContent =  Action() + " " + tableAw.rows[i].cells[1].textContent + " made foul." ;
      document.getElementById("find_id").value = ' ';
      //saveTolocalStorage(divDisplay); 
    }
  }
}

function yellowCard() {
  // retrieve the input field values
  const id_p = document.getElementById('find_id').value;
  // retrieve the table element
  const table = document.getElementById("homeTable");
  const tableAw = document.getElementById("awayTable");
  // locate the row to edit based on the name value
  // HOME
  let rowToEdit = -1;
  for (let i = 1; i < table.rows.length; i++) {
    if (table.rows[i].cells[0].textContent+"H" === id_p) {
      rowToEdit = i;
      const yellowCellHome = table.rows[rowToEdit].cells[7];
      yellowCellHome.textContent = parseInt(yellowCellHome.textContent)+1;
      //savePlayers();
      // Update the text content of the div and display action in time 
      divDisplay.textContent =  Action() + " - " + table.rows[i].cells[1].textContent + " yellow card." ;
      document.getElementById("find_id").value = ' ';
      saveTolocalStorage(divDisplay); 

      if(yellowCellHome.textContent == '2'){
        alert('Player out');
        let div = document.getElementById("displayHomeButton");
        let buttons = div.getElementsByTagName("button");
        for (let i = 0; i < buttons.length; i++) {
          if (buttons[i].textContent === id_p) {
            buttons[i].disabled = true;
          } 
        }
        const redCellHome = table.rows[rowToEdit].cells[8];
        redCellHome.textContent = parseInt(redCellHome.textContent)+1;
        divDisplay.textContent =  Action() + " - " + table.rows[i].cells[1].textContent + " second yellow card." ;
        document.getElementById("find_id").value = ' ';
        saveTolocalStorage(divDisplay);  
      }
      savePlayers();     
    }
  }
  //----AWAY----
  for (let i = 1; i < tableAw.rows.length; i++) {
    if (tableAw.rows[i].cells[0].textContent+"A" === id_p) {
      rowToEdit = i;
      const yellowCellAway = tableAw.rows[rowToEdit].cells[7];
      yellowCellAway.textContent = parseInt(yellowCellAway.textContent)+1;
      
      
      // Update the text content of the div and display action in time 
      divDisplay.textContent =  Action() + " - " + tableAw.rows[i].cells[1].textContent + " yellow card." ;
      document.getElementById("find_id").value = ' ';
      saveTolocalStorage(divDisplay); 

      if(yellowCellAway.textContent == '2'){
        alert('Player out');
        let div = document.getElementById("displayAwayButton");
        let buttons = div.getElementsByTagName("button");
        for (let i = 0; i < buttons.length; i++) {
          if (buttons[i].textContent === id_p) {
            buttons[i].disabled = true;
          } 
        }
        const redCellAway = tableAw.rows[rowToEdit].cells[8];
        redCellAway.textContent = parseInt(redCellAway.textContent)+1;
        divDisplay.textContent =  Action() + " - " + tableAw.rows[i].cells[1].textContent + " second yellow card." ;
        document.getElementById("find_id").value = ' ';
        saveTolocalStorage(divDisplay); 
      }
      savePlayers();
    }
  }
}

function redCard() {
  // retrieve the input field values
  const id_p = document.getElementById('find_id').value;
  // retrieve the table element
  const table = document.getElementById("homeTable");
  const tableAw = document.getElementById("awayTable");
  // locate the row to edit based on the name value
  // HOME
  let rowToEdit = -1;
  for (let i = 1; i < table.rows.length; i++) {
    if (table.rows[i].cells[0].textContent+"H" === id_p) {
      rowToEdit = i;
      const redCellHome = table.rows[rowToEdit].cells[8];
      redCellHome.textContent = parseInt(redCellHome.textContent)+1;
      alert('Player out');
      let div = document.getElementById("displayHomeButton");
        let buttons = div.getElementsByTagName("button");
        for (let i = 0; i < buttons.length; i++) {
          if (buttons[i].textContent === id_p) {
            buttons[i].disabled = true;
          } 
        }
      savePlayers();
  
      // Update the text content of the div and display action in time 
      divDisplay.textContent =  Action() + " - " + table.rows[i].cells[1].textContent + " red card !" ;
      document.getElementById("find_id").value = ' ';
      saveTolocalStorage(divDisplay);  
    }
  }
  //----AWAY----
  for (let i = 1; i < tableAw.rows.length; i++) {
    if (tableAw.rows[i].cells[0].textContent+"A" === id_p) {
      rowToEdit = i;
      const redCellAway = tableAw.rows[rowToEdit].cells[8];
      redCellAway.textContent = parseInt(redCellAway.textContent)+1;
      alert('Player out');
      let div = document.getElementById("displayAwayButton");
        let buttons = div.getElementsByTagName("button");
        for (let i = 0; i < buttons.length; i++) {
          if (buttons[i].textContent === id_p) {
            buttons[i].disabled = true;
          } 
        }
      savePlayers();

      // Update the text content of the div and display action in time 
      divDisplay.textContent =  Action() + " - " + tableAw.rows[i].cells[1].textContent + " red card !" ;
      document.getElementById("find_id").value = ' ';
      saveTolocalStorage(divDisplay); 
    }
  }
}

function Corner() {
  // retrieve the input field values
  const id_p = document.getElementById('find_id').value;
  // retrieve the table element
  const table = document.getElementById("homeTable");
  const tableAw = document.getElementById("awayTable");
  // locate the row to edit based on the name value
  // HOME
  for (let i = 1; i < table.rows.length; i++) {
    if (table.rows[i].cells[0].textContent+"H" === id_p) {
      document.getElementById('homeNcorner').textContent = parseInt(document.getElementById('homeNcorner').textContent)+1;
    }
  }

  //----AWAY----
  for (let i = 1; i < tableAw.rows.length; i++) {
    if (tableAw.rows[i].cells[0].textContent+"A" === id_p) {
      document.getElementById('awayNcorner').textContent = parseInt(document.getElementById('awayNcorner').textContent)+1;
    }
  }
  saveCorner();
}

//GOALKEEPERS
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
      // saveMS();
      saveGoalkeepers();  
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
      // saveMS();
      saveGoalkeepers();
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
      const dfcCell = table.rows[rowToEdit].cells[4];
      dfcCell.textContent = parseInt(dfcCell.textContent)+1;
      const defCell = table.rows[rowToEdit].cells[2];
      defCell.textContent = parseInt(defCell.textContent)+1;
      // saveMS();
      saveGoalkeepers(); 
      document.getElementById("find_id").value = ' ';   
    }
  }
  //----AWAY---
  for (let i = 1; i < tableAw.rows.length; i++) {
    if (tableAw.rows[i].cells[0].textContent+"GA" === id_p) {
      rowToEdit = i;
      const dfcCell_Away = tableAw.rows[rowToEdit].cells[4];
      dfcCell_Away.textContent = parseInt(dfcCell_Away.textContent)+1;
      const defCell_Away = tableAw.rows[rowToEdit].cells[2];
      defCell_Away.textContent = parseInt(defCell_Away.textContent)+1;
      // saveMS();
      saveGoalkeepers();
      document.getElementById("find_id").value = ' '; 
    }
  }
}

function D11() {
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
      const d5Cell = table.rows[rowToEdit].cells[5];
      d5Cell.textContent = parseInt(d5Cell.textContent)+1;
      const defCell = table.rows[rowToEdit].cells[2];
      defCell.textContent = parseInt(defCell.textContent)+1;
      // saveMS();
      saveGoalkeepers(); 
      document.getElementById("find_id").value = ' ';   
    }
  }
  //----AWAY---
  for (let i = 1; i < tableAw.rows.length; i++) {
    if (tableAw.rows[i].cells[0].textContent+"GA" === id_p) {
      rowToEdit = i;
      const d5Cell_Away = tableAw.rows[rowToEdit].cells[5];
      d5Cell_Away.textContent = parseInt(d5Cell_Away.textContent)+1;
      const defCell_Away = tableAw.rows[rowToEdit].cells[2];
      defCell_Away.textContent = parseInt(defCell_Away.textContent)+1;
      // saveMS();
      saveGoalkeepers();
      document.getElementById("find_id").value = ' '; 
    }
  }
}

function retrieveData() {
  hideAddPlayer()

  const saveTime = localStorage.getItem('time');
  document.getElementById("matchTime").textContent=saveTime;
  minutes = saveTime[0];//+saveTime[1];
  seconds = saveTime[3]+saveTime[4];
  let x = "data";
  if(localStorage.hasOwnProperty(x)){
    const saveData = JSON.parse(localStorage.getItem('data'));
    for(let i=0; i < saveData.length;i++){
      document.getElementById("stateDisplay").textContent=saveData[i];
    }
  }

  const saveHomeResult = JSON.parse(localStorage.getItem('homeResult'));
  document.getElementById("home-result").textContent=saveHomeResult;

  const saveAwayResult = JSON.parse(localStorage.getItem('awayResult'));
  document.getElementById("away-result").textContent=saveAwayResult;

  if(localStorage.getItem('home corners') != null){
    const saveHomeCorner = JSON.parse(localStorage.getItem('home corners'));
    document.getElementById("homeNcorner").textContent=saveHomeCorner;
  } else {}

  if(localStorage.getItem('away corners') != null){
    const saveAwayCorner = JSON.parse(localStorage.getItem('away corners'));
    document.getElementById("awayNcorner").textContent=saveAwayCorner;
  } else {}

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
  }}

  //---retrieve home players
  if(localStorage.getItem('homePlayers') != null){
  const tableData = localStorage.getItem('homePlayers');
  // Convert the JSON string to an object
  const tableObject = JSON.parse(tableData);
  // Get a reference to the table element
  let row = document.getElementById("homeRow");
  row.deleteCell(9);
  const table = document.getElementById('homeTable');

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

      data1.innerText = tableObject[i].Jersey;
      data2.innerText = tableObject[i].Name;
      data3.innerText = tableObject[i].Goal;
      data4.innerText = tableObject[i].Cpass;
      data5.innerText = tableObject[i].Wpass;
      data6.innerText = tableObject[i].Asisst;
      data7.innerText = tableObject[i].Foul;
      data8.innerText = tableObject[i].Yellow;
      data9.innerText = tableObject[i].Red;

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
  }}

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
    }}
  
  // retrieve away players
  if(localStorage.getItem('awayPlayers') != null){
    //-------get table players---------
    const awayData = localStorage.getItem('awayPlayers');
    // Convert the JSON string to an object
    const awayObject = JSON.parse(awayData);
    // Get a reference to the table element
    let awayRow = document.getElementById("awayRow");
    awayRow.deleteCell(9);
    const tableAw = document.getElementById('awayTable');
  
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
  
        data1.innerText = awayObject[i].Jersey;
        data2.innerText = awayObject[i].Name;
        data3.innerText = awayObject[i].Goal;
        data4.innerText = awayObject[i].Cpass;
        data5.innerText = awayObject[i].Wpass;
        data6.innerText = awayObject[i].Asisst;
        data7.innerText = awayObject[i].Foul;
        data8.innerText = awayObject[i].Yellow;
        data9.innerText = awayObject[i].Red;
  
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
  }}

  //disable home players with 2 yc or 1 rc
  const table = document.getElementById('homeTable');
  let rowEdit = -1;
  for (let i = 1; i < table.rows.length; i++) {
    const ycardCell = table.rows[i].cells[7];
    const rcardCell = table.rows[i].cells[8];
    rowEdit = i;
    if((ycardCell.textContent == '2' && rcardCell.textContent == '1') || rcardCell.textContent == '1'){
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

  //disable away players with 2 yc or 1 rc
  const tableAw = document.getElementById('awayTable');
  let editRow = -1;
  for (let i = 1; i < tableAw.rows.length; i++) {
    const cardYCell = tableAw.rows[i].cells[7];
    const cardRCell = tableAw.rows[i].cells[8];
    editRow = i;
    if((cardYCell.textContent == '2' && cardRCell.textContent == '1') || cardRCell.textContent == '1'){
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

  //---retrieve home goalkeeper players
  if(localStorage.getItem('home goalkeeper') != null){
    //-------get table players---------
    const tableHG = localStorage.getItem('home goalkeeper');
    // Convert the JSON string to an object
    const tableObject = JSON.parse(tableHG);
    // Get a reference to the table element
    let row = document.getElementById("rowGH");
    row.deleteCell(6);
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
        data1.innerText = tableObject[i].Number;
        data2.innerText = tableObject[i].Name;
        data3.innerText = tableObject[i].Def;
        data4.innerText = tableObject[i].DFG;
        data5.innerText = tableObject[i].DFC;
        data6.innerText = tableObject[i].D11;
        hgTable.appendChild(row);
        row.appendChild(data1);
        row.appendChild(data2);
        row.appendChild(data3);
        row.appendChild(data4);
        row.appendChild(data5);
        row.appendChild(data6);
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
    rowAway.deleteCell(6);
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
        data1.innerText = tableObject[i].Number;
        data2.innerText = tableObject[i].Name;
        data3.innerText = tableObject[i].Def;
        data4.innerText = tableObject[i].DFG;
        data5.innerText = tableObject[i].DFC;
        data6.innerText = tableObject[i].D11;
        table.appendChild(row);
        row.appendChild(data1);
        row.appendChild(data2);
        row.appendChild(data3);
        row.appendChild(data4);
        row.appendChild(data5);
        row.appendChild(data6);
    }
  }
}

//remove retrieve data button
const buttonForData = document.getElementById('backData');
buttonForData.addEventListener('click', handleClick);
function handleClick() {
    buttonForData.style.visibility="hidden";
}

document.getElementById("exportBtn").addEventListener("click", function() {
  // Create a new workbook
  var workbook = XLSX.utils.book_new();

  // Convert HTML tables to worksheet objects
  let table1Worksheet = XLSX.utils.table_to_sheet(document.getElementById("homeTable"));
  let table2Worksheet = XLSX.utils.table_to_sheet(document.getElementById("awayTable"));
  let table3Worksheet = XLSX.utils.table_to_sheet(document.getElementById("goalkeeperHome"));
  let table4Worksheet = XLSX.utils.table_to_sheet(document.getElementById("goalkeeperAway"));

  // Add worksheets to the workbook
  XLSX.utils.book_append_sheet(workbook, table1Worksheet, "Home");
  XLSX.utils.book_append_sheet(workbook, table2Worksheet, "Away");
  XLSX.utils.book_append_sheet(workbook, table3Worksheet, "Home gk");
  XLSX.utils.book_append_sheet(workbook, table4Worksheet, "Away gk");

  // Export the workbook as an XLSX file
  XLSX.writeFile(workbook, "football_stats.xlsx");
});
//export excel

