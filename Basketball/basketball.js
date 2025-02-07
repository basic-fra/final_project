//function for reseting home fouls
function foulResetHome() {
  document.getElementById("dot1").style.backgroundColor = "black";
  document.getElementById("dot2").style.backgroundColor = "black";
  document.getElementById("dot3").style.backgroundColor = "black";
  document.getElementById("dot4").style.backgroundColor = "black";
  document.getElementById("dot5").style.backgroundColor = "black";
  foulNumber = 0;
  localStorage.setItem('homeFouls',0);
}

//function for reseting guest fouls
function foulResetGuest() {
  document.getElementById("circleAway1").style.backgroundColor = "black";
  document.getElementById("circleAway2").style.backgroundColor = "black";
  document.getElementById("circleAway3").style.backgroundColor = "black";
  document.getElementById("circleAway4").style.backgroundColor = "black";
  document.getElementById("circleAway5").style.backgroundColor = "black";
  foulNumberAway = 0;
  localStorage.setItem('awayFouls',0);
}

// removing space from input field
function removeHome(inputField) {
  inputField.value = inputField.value.replace(/\D/g, '');
  // let noSpaceHome = document.getElementById("idPlayer_2");
  // noSpaceHome.value = noSpaceHome.value.replace(/\s+/g, "");
}
function removeAway(inputField) {
  inputField.value = inputField.value.replace(/\D/g, '');
}

//make input first then create button
function handleAwayInputs() {
  const addAwayPlayer = document.getElementById("homeInputPlayer");
  const nameInput = document.getElementById("name_away");
  const idInput = document.getElementById('idPlayer_away');
  
  if (nameInput.value.trim() != "" && idInput.value.trim() != "" && addAwayPlayer) {
      editTableAway();
  } else {
    alert("Input player's name and jersey first.")
  }
}

//----------------------------AWAY TABLE-----------------
function editTableAway() {
  const nameAway = document.getElementById("name_away").value;
  const awayID = document.getElementById("idPlayer_away").value;
  const tableAway = document.getElementById("myTableAway");

  let poeni = 0;
  //const table = document.getElementById("myTable_2");
  //const p_id = document.getElementById('idPlayer_2').value;
  // locate the row to edit based on the id value
  let rowToEditAway = -1;
  for (let i = 1; i < tableAway.rows.length; i++) {
    if (tableAway.rows[i].cells[0].textContent === awayID) {
      rowToEditAway = i;
      break;
    }
  }

  if (rowToEditAway === -1) {
      let deleteOptionAway = document.createElement("button");
      // if the name value doesn't match any row, add a new row
      const newRowAway = tableAway.insertRow();
      const idCellAway = newRowAway.insertCell();
      const nameCellAway = newRowAway.insertCell();
      const ptsCellAway = newRowAway.insertCell();
      const threePtsMadeCellAway = newRowAway.insertCell();
      const threePtsCellAway = newRowAway.insertCell();
      const twoPtsMadeCellAway = newRowAway.insertCell();
      const twoPtsCellAway = newRowAway.insertCell();
      const freeThrowMadeCellAway = newRowAway.insertCell();
      const freeThrowCellAway = newRowAway.insertCell();
      const assistCellAway = newRowAway.insertCell();
      const reboundCellAway = newRowAway.insertCell();
      const stealCellAway = newRowAway.insertCell();
      const turnOverCellAway = newRowAway.insertCell();
      const foulCellAway = newRowAway.insertCell();
      const optionsCellAway = newRowAway.insertCell();
      idCellAway.textContent = awayID;
      nameCellAway.textContent = nameAway;
      ptsCellAway.textContent = poeni;
      threePtsMadeCellAway.textContent = 0;
      threePtsCellAway.textContent = 0;
      twoPtsMadeCellAway.textContent = 0;
      twoPtsCellAway.textContent = 0;
      freeThrowMadeCellAway.textContent = 0;
      freeThrowCellAway.textContent = 0;
      assistCellAway.textContent = 0;
      reboundCellAway.textContent = 0;
      stealCellAway.textContent = 0;
      turnOverCellAway.textContent = 0;
      foulCellAway.textContent = 0;
      deleteOptionAway.innerText = "delete";
      optionsCellAway.appendChild(deleteOptionAway);

      //creating buttons for stats
      let awayButton = document.createElement("button");
      awayButton.innerText =document.getElementById('idPlayer_away').value+"A";
      let displayPbAway = document.getElementById("displayAwayButtons");
      awayButton.addEventListener("click",function(){
        IDawayInput(awayButton);
      })
      displayPbAway.appendChild(awayButton);
      function IDawayInput(awayButton){
        document.getElementById("find_id").value = awayButton.innerText;
      }

      //delete button option
       deleteOptionAway.addEventListener("click",function(){
          deleteRow(this);
          alert("Player has been deleted.");
       });
      function deleteRow(x) {
              let tblAway = x.parentNode.parentNode.parentNode;
              let rowAway = x.parentNode.parentNode.rowIndex
              tblAway.deleteRow(rowAway)
              let guestAplayers = document.getElementById("displayAwayButtons");
              if(x.parentNode.parentNode.cells[0].textContent+"A" === awayButton.innerText){
                guestAplayers.removeChild(awayButton);
              }
            }
            
      //onclick add player input field become empty
      document.getElementById("name_away").value = ' ';
      document.getElementById('idPlayer_away').value = ' ';
    } else {
    // if the id value matches a row, display alert
    alert("WARNING: jersey number must be different");
    }
}

// function createButton() {
//   let playerButton = document.createElement("button");
//   playerButton.innerText = document.getElementById('idPlayer_2').value;
//   let displayPB = document.getElementById("displayPlayerButton");
//   playerButton.addEventListener("click",function(){
//     IDinput(playerButton);
//   });
//   displayPB.appendChild(playerButton);
  
//   }
// function IDinput(playerButton){
//     document.getElementById("find_id").value = playerButton.innerText;
//   } 


// function createButtonAway() {
//   let awayButton = document.createElement("button");
//   awayButton.innerText = document.getElementById('idPlayer_away').value;
//   let displayPbAway = document.getElementById("displayAwayButtons");
//   awayButton.addEventListener("click",function(){
//     IDawayInput(awayButton);
//   })
//   displayPbAway.appendChild(awayButton);
// }

// function IDawayInput(awayButton){
//   document.getElementById("find_id").value = awayButton.innerText;
// }

//remove space
// const inputName = document.getElementById("name_2");
//   inputName.addEventListener("blur", () => {
//     const value = inputName.value.trim();

//     if (value.charAt(0) === " ") {
//       inputName.value = value.substring(1);
//     }
//   });

//   const inputID = document.getElementById("idPlayer_2");
//   inputID.addEventListener("blur", () => {
//     const value = inputID.value.trim();

//     if (value.charAt(0) === " ") {
//       inputID.value = value.substring(1);
//     }
//   });
//remove space

//SAVING HOME PLAYERS TO LOCAL STORAGE:
// Get a reference to the table element
// const homeTable = document.getElementById("myTable_2");
// Create an array to hold the data
// const dataHomePlayers = [];
// Iterate through the rows of the table
// for (let i = 0; i < homeTable.rows.length; i++) {
  // Get a reference to the current row
  // const rowPlayer = homeTable.rows[i];
  // Create an object to hold the data from the row
  // const rowDataHome = {
  //   jersey: rowPlayer.cells[0].textContent,
  //   name: rowPlayer.cells[1].textContent,
  //   points: parseInt(rowPlayer.cells[2].textContent),
  //   three_points_made: parseInt(rowPlayer.cells[3].textContent),
  //   three_points: parseInt(rowPlayer.cells[4].textContent),
  //   two_points_made: parseInt(rowPlayer.cells[5].textContent),
  //   two_points: parseInt(rowPlayer.cells[6].textContent),
  //   freeThrow_made: parseInt(rowPlayer.cells[7].textContent),
  //   freeThrow: parseInt(rowPlayer.cells[8].textContent),
  //   asisst: parseInt(rowPlayer.cells[9].textContent),
  //   rebound: parseInt(rowPlayer.cells[10].textContent),
  //   steal: parseInt(rowPlayer.cells[11].textContent),
  //   turnOver: parseInt(rowPlayer.cells[12].textContent),
  //   personalFoul: parseInt(rowPlayer.cells[13].textContent),
  // };
  // Add the object to the data array
//   dataHomePlayers.push(rowDataHome);
// }
// Convert the data array to a JSON string
// const jsonString = JSON.stringify(dataHomePlayers);
// Save the JSON string to local storage
// localStorage.setItem('table-players-home', jsonString);
//SAVING HOME PLAYERS TO LOCAL STORAGE

//make input first then create button
function handleHomeInputs() {
  const addHomePlayer = document.getElementById("homeInputPlayer");
  const nameInput = document.getElementById("name_2");
  const idInput = document.getElementById('idPlayer_2');
  
  if (nameInput.value.trim() != "" && idInput.value.trim() != "" && addHomePlayer) {
    editTableHome();
  } else {
    alert("Input player's name and jersey first.")
  }
}



// const pts = 0;//document.getElementById("pts").value;
// const threePtMade = 0;
// const threePt = 0;
// const twoPtMade = 0;
// const twoPt = 0;
// const ftMade = 0;
// const ft = 0;
// const assist = 0;
// const rebound = 0;
// const steal = 0;
// const turnOver = 0;
// const foul = 0;

/*---------------------display table players----------------------------------------------*/
function editTableHome() {
  
  // retrieve the input field values
  const name = document.getElementById("name_2").value;
  const p_id = document.getElementById('idPlayer_2').value;
  // retrieve the table element
  const table = document.getElementById("myTable_2");
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
    const ptsCell = newRow.insertCell();
    const threePtsMadeCell = newRow.insertCell();
    const threePtsCell = newRow.insertCell();
    const twoPtsMadeCell = newRow.insertCell();
    const twoPtsCell = newRow.insertCell();
    const freeThrowMadeCell = newRow.insertCell();
    const freeThrowCell = newRow.insertCell();
    const assistCell = newRow.insertCell();
    const reboundCell = newRow.insertCell();
    const stealCell = newRow.insertCell();
    const turnOverCell = newRow.insertCell();
    const foulCell = newRow.insertCell();
    const optionsCell = newRow.insertCell();
    idCell.textContent = p_id;
    nameCell.textContent = name;
    ptsCell.textContent = 0;
    threePtsMadeCell.textContent = 0;
    threePtsCell.textContent = 0;
    twoPtsMadeCell.textContent = 0;
    twoPtsCell.textContent = 0;
    freeThrowMadeCell.textContent = 0;
    freeThrowCell.textContent = 0;
    assistCell.textContent = 0;
    reboundCell.textContent = 0;
    stealCell.textContent = 0;
    turnOverCell.textContent = 0;
    foulCell.textContent = 0;
    deleteOption.innerText = "delete";
    optionsCell.appendChild(deleteOption);
    
    
    //creating buttons for stats
    let playerButton = document.createElement("button");
    playerButton.innerText = document.getElementById('idPlayer_2').value +"H";
    let displayPB = document.getElementById("displayPlayerButton");
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
      let homeBplayers = document.getElementById("displayPlayerButton");
      if(el.parentNode.parentNode.cells[0].textContent+"H" === playerButton.innerText){
          homeBplayers.removeChild(playerButton);
      }}
       
    //clear input fields
    document.getElementById("name_2").value = ' ';
    document.getElementById('idPlayer_2').value = ' ';
  } else {
    // if the id value matches a row, display alert
    alert("WARNING: jersey number must be different");
  }
}

//const text = document.getElementById("sport-display");
const saveToLocalStorage = () => {
  let newData = document.getElementById("stateDisplay").textContent;

  if(localStorage.getItem('data') == null){
    localStorage.setItem('data','[]');
  }
  let oldData = JSON.parse(localStorage.getItem('data'));
  oldData.push(newData);

  localStorage.setItem('data',JSON.stringify(oldData));
}

// save time for decreasing
const saveMS = () => {
  localStorage.setItem('min&sec',countDownTime);
  localStorage.setItem('time','[]');
  localStorage.setItem('time',JSON.stringify(findTimeString()));
  localStorage.setItem('attack clock',document.getElementById('attack-clock').innerHTML)
}

//save results
 const saveResults = () => {
   localStorage.setItem('period',1);
   localStorage.setItem('homeResult',document.getElementById("home-btn").textContent);
   localStorage.setItem('awayResult',document.getElementById("guest-btn").textContent);

   let gamePeriod = document.getElementById("period").textContent;
   localStorage.setItem('period',JSON.stringify(gamePeriod));

   localStorage.setItem('homeResult',JSON.stringify(document.getElementById("home-btn").textContent));
   localStorage.setItem('awayResult',JSON.stringify(document.getElementById("guest-btn").textContent));
 }

 //save fouls
 const saveFouls = () => {
    //home
    const table = document.getElementById("myTable_2");
    let foulNumberHome = 0;
    for(let i=1;i<table.rows.length;i++){
      foulNumberHome = parseInt(table.rows[i].cells[13].textContent) + foulNumberHome ;
    }
    localStorage.setItem('homeFouls',JSON.stringify(foulNumberHome));

    //away
    const tableAw = document.getElementById("myTableAway");
    let foulNumberAway = 0;
    for(let i=1;i<tableAw.rows.length;i++){
      foulNumberAway = parseInt(tableAw.rows[i].cells[13].textContent) + foulNumberAway ;
    }
    localStorage.setItem('awayFouls',JSON.stringify(foulNumberAway));
 } 
 //save attack clock
 const saveAttack = () => {
  const attack = parseInt(document.getElementById('attack-clock').textContent);
  localStorage.setItem('attack clock',attack);
 }

window.onbeforeunload = function() {
  saveMS(countDownTime);
  //saveFouls();
  saveAttack();
}

function Hidden(){
  if (confirm("Are you sure?") == true) {
     saveTablePlayers() ;
     deleteLastColumn() ; 
     saveHomeButtons();
     hideAddPlayer()
     const buttonSavePlayers = document.getElementById('savePlayers');
     buttonSavePlayers.style.visibility="hidden";
    //  localStorage.setItem("home out", '[]');
    //  localStorage.setItem("away out", '[]');
  } else {

  }
}

function hideAddPlayer(){
  //HOME
  const addHome = document.querySelector('#homeInputPlayer');
  addHome.style.display="none";
  //AWAY
  const addAway = document.querySelector('#awayInputPlayer');
  addAway.style.display="none";
}

function retrieveData(){

  if(localStorage.getItem('data') != null){
    const saveData = JSON.parse(localStorage.getItem('data'));
    for(let i=0; i < saveData.length;i++){
      document.getElementById("stateDisplay").textContent=saveData[i];
    }
  } else {}

  if(localStorage.getItem('attack clock') != null){
  const saveAttackClock = JSON.parse(localStorage.getItem('attack clock'))
  document.getElementById("attack-clock").textContent=saveAttackClock;
  }

  if(localStorage.getItem('period') != null){
    const savePeriod = JSON.parse(localStorage.getItem('period'));
    document.getElementById("period").textContent=savePeriod;
  }

  if(localStorage.getItem('homeResult') != null){
    const saveHomeResult = JSON.parse(localStorage.getItem('homeResult'));
    document.getElementById("home-btn").textContent=saveHomeResult;
  } else {}

  if(localStorage.getItem('awayResult') != null){
    const saveAwayResult = JSON.parse(localStorage.getItem('awayResult'));
    document.getElementById("guest-btn").textContent=saveAwayResult;
  }

  const saveTime = JSON.parse(localStorage.getItem('time'));
  for(let j=1; j < saveTime.length;j++){
    document.getElementsByClassName('count-digit')[0].textContent=saveTime[0];
    document.getElementsByClassName('count-digit')[1].textContent=saveTime[1];
    document.getElementsByClassName('count-digit')[2].textContent=saveTime[2];
    document.getElementsByClassName('count-digit')[3].textContent=saveTime[3];
  }

  const saveMinSec = JSON.parse(localStorage.getItem('min&sec'));
  countDownTime = saveMinSec;

  const saveHomeFouls = JSON.parse(localStorage.getItem('homeFouls'));
  if(saveHomeFouls >= 5){
    document.getElementById("dot1").style.backgroundColor = "red";
    document.getElementById("dot2").style.backgroundColor = "red";
    document.getElementById("dot3").style.backgroundColor = "red";
    document.getElementById("dot4").style.backgroundColor = "red";
    document.getElementById("dot5").style.backgroundColor = "red";
  } else if(saveHomeFouls > 0 && saveHomeFouls < 5){
    for(let i=1;i<saveHomeFouls+1;i++){
      document.getElementById("dot"+i).style.backgroundColor = "red";
    }
  } 
  foulNumber = saveHomeFouls+1;

  const saveAwayFouls = JSON.parse(localStorage.getItem('awayFouls'));
  if(saveAwayFouls >= 5){
    document.getElementById("circleAway1").style.backgroundColor = "red";
    document.getElementById("circleAway2").style.backgroundColor = "red";
    document.getElementById("circleAway3").style.backgroundColor = "red";
    document.getElementById("circleAway4").style.backgroundColor = "red";
    document.getElementById("circleAway5").style.backgroundColor = "red";
  } else if(saveAwayFouls > 0 && saveAwayFouls < 5){
    for(let i=1;i<saveAwayFouls+1;i++){
      document.getElementById("circleAway"+i).style.backgroundColor = "red";
    }
  } 
  foulNumberAway = saveAwayFouls+1;

  const saveButtons = JSON.parse(localStorage.getItem('homeButtons'));
  for(let j=0; j < saveButtons.length;j++){
      let homePb = document.createElement("button");
      let displayPb = document.getElementById("displayPlayerButton");
      homePb.innerText = saveButtons[j];
      displayPb.appendChild(homePb);

      homePb.addEventListener("click",function(){
        document.getElementById("find_id").value = homePb.innerText;
      })
  }

  //-------get table players---------
  const tableData = localStorage.getItem('homePlayers');
  // Convert the JSON string to an object
  const tableObject = JSON.parse(tableData);
  // Get a reference to the table element
  let row = document.getElementById("myRow");
  row.deleteCell(14);
  const table = document.getElementById('myTable_2');

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
      const data13 = document.createElement('td');
      const data14 = document.createElement('td');

      data1.innerText = tableObject[i].Jersey;
      data2.innerText = tableObject[i].Name;
      data3.innerText = tableObject[i].Pts;
      data4.innerText = tableObject[i].PM3;
      data5.innerText = tableObject[i].P3
      data6.innerText = tableObject[i].PM2
      data7.innerText = tableObject[i].P2
      data8.innerText = tableObject[i].FTM;
      data9.innerText = tableObject[i].FT;
      data10.innerText = tableObject[i].AS;
      data11.innerText = tableObject[i].RB;
      data12.innerText = tableObject[i].ST;
      data13.innerText = tableObject[i].TO;
      data14.innerText = tableObject[i].PF;

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
      row.appendChild(data13);
      row.appendChild(data14);
  }

  //retrieve away buttons
  const saveAwButtons = JSON.parse(localStorage.getItem('awayButtons'));
  for(let j=0; j < saveAwButtons.length; j++){
    let awayPb = document.createElement("button");
    let displayAb = document.getElementById("displayAwayButtons");
    awayPb.innerText = saveAwButtons[j];
    displayAb.appendChild(awayPb);

    awayPb.addEventListener("click",function(){
      document.getElementById("find_id").value = awayPb.innerText;
    })
  }

  //-----get away table players-----
  const awayData = localStorage.getItem('awayPlayers');
  // Convert the JSON string to an object
  const awayObject = JSON.parse(awayData);
  // Get a reference to the table element
  let awayRow = document.getElementById('myRowAway');
  awayRow.deleteCell(14);
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
      const data13 = document.createElement('td');
      const data14 = document.createElement('td');

      data1.innerText = awayObject[i].Jersey;
      data2.innerText = awayObject[i].Name;
      data3.innerText = awayObject[i].Pts;
      data4.innerText = awayObject[i].PM3;
      data5.innerText = awayObject[i].P3
      data6.innerText = awayObject[i].PM2
      data7.innerText = awayObject[i].P2
      data8.innerText = awayObject[i].FTM;
      data9.innerText = awayObject[i].FT;
      data10.innerText = awayObject[i].AS;
      data11.innerText = awayObject[i].RB;
      data12.innerText = awayObject[i].ST;
      data13.innerText = awayObject[i].TO;
      data14.innerText = awayObject[i].PF;

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
      row.appendChild(data13);
      row.appendChild(data14);
  }

  //disable home players with 5 fouls
  let rowEdit = -1;
  for (let i = 1; i < table.rows.length; i++) {
    const FoulCell = table.rows[i].cells[13];
    rowEdit = i;
    if(FoulCell.textContent == '5'){
      const playerID = table.rows[rowEdit].cells[0].textContent;
      let div = document.getElementById("displayPlayerButton");
        let buttons = div.getElementsByTagName("button");
        for (let i = 0; i < buttons.length; i++) {
          if (buttons[i].textContent === playerID + "H") {
            buttons[i].disabled = true;
          } 
        }
    }
  }

  //disable away players with 5 fouls
  let editRow = -1;
  for (let i = 1; i < tableAw.rows.length; i++) {
    const awayFoul = tableAw.rows[i].cells[13];
    editRow = i;
    if(awayFoul.textContent == '5'){
      const IDplayer = tableAw.rows[editRow].cells[0].textContent;
      let divA = document.getElementById("displayAwayButtons");
      let buttonsA = divA.getElementsByTagName("button");
      for (let i = 0; i < buttonsA.length; i++) {
        if (buttonsA[i].textContent === IDplayer + "A") {
            buttonsA[i].disabled = true;
        } 
      }
    }
  }
}

function deleteData(){
  if (confirm("Are you sure?") == true) {
  localStorage.clear();
  } else {

  }
}

function deleteLastColumn(){
  let table = document.getElementById('myTable_2');
  let tableAw = document.getElementById('myTableAway');
  let columnIndex = 14;
  //home
  for (let i = 0; i < table.rows.length; i++) {
    table.rows[i].deleteCell(columnIndex);
  }
  //away
  for (let i = 0; i < tableAw.rows.length; i++) {
    tableAw.rows[i].deleteCell(columnIndex);
  }
}

function saveTablePlayers(){
  let table = document.getElementById("myTable_2");
  let tableAw = document.getElementById("myTableAway");
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
}

function saveHomeButtons(){
  //home
  let table = document.getElementById("myTable_2");
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
}

//remove retrieve data button
const buttonForData = document.getElementById('backData');
buttonForData.addEventListener('click', handleClick);
function handleClick() {
    buttonForData.style.visibility="hidden";
}

//----link--> https://www.revisitclass.com/css/how-to-export-download-the-html-table-to-excel-using-javascript/#Example_Download_the_HTML_table_in_Excel_csv_format
// function exportToExcel(tableID,filename=''){
//   let downloadLink;
//   let dataType = 'application/vnd.ms-excel';
//   let tableSelect = document.getElementById(tableID);
//   let tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');

//   //specify file name
//   filename = filename?filename+'.xls':'excel_data.xls';
//   //create download link element
//   downloadLink = document.createElement("a");
//   document.body.appendChild(downloadLink);
//   if(navigator.msSaveOrOpenBlob){
//     let blob = new Blob(['ufeff',tableHTML],{
//       type: dataType
//     });
//   } else {
//     //create a link to the file
//     downloadLink.href = 'data:' + dataType + ', ' + tableHTML;
//     //setting the file name
//     downloadLink.download = filename;
//     //triggering the function
//     downloadLink.click();
//   }
// }

// function exportExcelAway(tableID,filename=''){
//   let downloadLink;
//   let dataType = 'application/vnd.ms-excel';
//   let tableSelect = document.getElementById(tableID);
//   let tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');

//   //specify file name
//   filename = filename?filename+'.xls':'excel_data.xls';
//   //create download link element
//   downloadLink = document.createElement("a");
//   document.body.appendChild(downloadLink);
//   if(navigator.msSaveOrOpenBlob){
//     let blob = new Blob(['ufeff',tableHTML],{
//       type: dataType
//     });
//   } else {
//     //create a link to the file
//     downloadLink.href = 'data:' + dataType + ', ' + tableHTML;
//     //setting the file name
//     downloadLink.download = filename;
//     //triggering the function
//     downloadLink.click();
//   }
// }

document.getElementById("exportBtn").addEventListener("click", function() {
  // Get table data
  // let table1Data = document.getElementById("myTableHome").outerHTML;
  // let table2Data = document.getElementById("myTableAway").outerHTML;
  // let table3Data = document.getElementById("goalkeeperHome").outerHTML;
  // let table4Data = document.getElementById("goalkeeperAway").outerHTML;

  // Create a new workbook
  var workbook = XLSX.utils.book_new();

  // Convert HTML tables to worksheet objects
  let table1Worksheet = XLSX.utils.table_to_sheet(document.getElementById("myTable_2"));
  let table2Worksheet = XLSX.utils.table_to_sheet(document.getElementById("myTableAway"));

  // Add worksheets to the workbook
  XLSX.utils.book_append_sheet(workbook, table1Worksheet, "Home");
  XLSX.utils.book_append_sheet(workbook, table2Worksheet, "Away");

  // Export the workbook as an XLSX file
  XLSX.writeFile(workbook, "basketball_stats.xlsx");
});

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
    console.log(myArrayOf);
});

//----------------
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

let button_3pts = document.getElementById("3pts_2");
// Add a click event listener to the button
button_3pts.addEventListener("click", function() {
  restartClock_A();
  // retrieve the input field values
  const id_p = document.getElementById('find_id').value;
  // retrieve the table element
  const table = document.getElementById("myTable_2");
  const tableAw = document.getElementById("myTableAway");

  // locate the row to edit based on the name value
  let rowToEdit = -1;
  for (let i = 1; i < table.rows.length; i++) {
    if (table.rows[i].cells[0].textContent+"H" === id_p) {
      rowToEdit = i;
      const ptsCell_2 = table.rows[rowToEdit].cells[2];
      const threePtsMadeCell_2 = table.rows[rowToEdit].cells[3];
      const threePtsCell_2 = table.rows[rowToEdit].cells[4];
      ptsCell_2.textContent = parseInt(ptsCell_2.textContent)+3;
      threePtsMadeCell_2.textContent = parseInt(threePtsMadeCell_2.textContent)+1;
      threePtsCell_2.textContent = parseInt(threePtsCell_2.textContent)+1;
      document.getElementById("home-btn").textContent = parseInt(document.getElementById("home-btn").textContent) + 3;
      saveResults(document.getElementById("home-btn").textContent);
      saveTablePlayers();
  
      // Update the text content of the div and display action in time 
      divDisplay.textContent =  Action() + " " + table.rows[i].cells[1].textContent + " scored 3 points." ;
      document.getElementById("find_id").value = ' ';
      saveToLocalStorage(divDisplay);  
    }
  }
  //----AWAY----
  for (let i = 1; i < tableAw.rows.length; i++) {
    if (tableAw.rows[i].cells[0].textContent+"A" === id_p) {
      rowToEdit = i;
      const ptsCell_Away = tableAw.rows[rowToEdit].cells[2];
      const threePtsMadeCell_Away = tableAw.rows[rowToEdit].cells[3];
      const threePtsCell_Away = tableAw.rows[rowToEdit].cells[4];
      ptsCell_Away.textContent = parseInt(ptsCell_Away.textContent)+3;
      threePtsMadeCell_Away.textContent = parseInt(threePtsMadeCell_Away.textContent)+1;
      threePtsCell_Away.textContent = parseInt(threePtsCell_Away.textContent)+1;
      document.getElementById("guest-btn").textContent = parseInt(document.getElementById("guest-btn").textContent) +3;
      saveResults(document.getElementById("guest-btn").textContent);
      saveTablePlayers();

      // Update the text content of the div and display action in time 
      divDisplay.textContent =  Action() + " " + tableAw.rows[i].cells[1].textContent + " scored 3 points." ;
      document.getElementById("find_id").value = ' ';
      saveToLocalStorage(divDisplay); 
    }
  }
});

function shootThree(){
  // retrieve the input field values
  const id_p = document.getElementById('find_id').value;
  // retrieve the table element
  const table = document.getElementById("myTable_2");
  const tableAw = document.getElementById("myTableAway");

  // locate the row to edit based on the name value
  let rowToEdit = -1;
  for (let i = 1; i < table.rows.length; i++) {
    if (table.rows[i].cells[0].textContent+"H" === id_p) {
      rowToEdit = i;
      const threePtsCell_2 = table.rows[rowToEdit].cells[4];
      threePtsCell_2.textContent = parseInt(threePtsCell_2.textContent)+1;
      // Update the text content of the div and display action in time 
      divDisplay.textContent =  Action() + " " + table.rows[i].cells[1].textContent + " 3 points shot missed." ;
      saveTablePlayers();
      saveToLocalStorage(divDisplay); 
    }
  }
  //----AWAY---
  for (let i = 1; i < tableAw.rows.length; i++) {
    if (tableAw.rows[i].cells[0].textContent+"A" === id_p) {
      rowToEdit = i;
      const threePtsCell_Away = tableAw.rows[rowToEdit].cells[4];
      threePtsCell_Away.textContent = parseInt(threePtsCell_Away.textContent)+1;

      // Update the text content of the div and display action in time 
      divDisplay.textContent =  Action() + " " + tableAw.rows[i].cells[1].textContent + " 3 points shot missed." ;
      document.getElementById("find_id").value = ' ';
      saveTablePlayers();
      saveToLocalStorage(divDisplay); 
    }
  }
}

function addTwo_2(){
  restartClock_A();
  // retrieve the input field values
  const id_p = document.getElementById('find_id').value;
  // retrieve the table element
  const table = document.getElementById("myTable_2");
  const tableAw = document.getElementById("myTableAway");

  // locate the row to edit based on the name value
  let rowToEdit = -1;
  for (let i = 1; i < table.rows.length; i++) {
    if (table.rows[i].cells[0].textContent+"H" === id_p) {
      rowToEdit = i;
      const ptsCell_2 = table.rows[rowToEdit].cells[2];
      const twoPtsMadeCell_2 = table.rows[rowToEdit].cells[5];
      const twoPtsCell_2 = table.rows[rowToEdit].cells[6];
      ptsCell_2.textContent = parseInt(ptsCell_2.textContent)+2;
      twoPtsMadeCell_2.textContent = parseInt(twoPtsMadeCell_2.textContent)+1;
      twoPtsCell_2.textContent = parseInt(twoPtsCell_2.textContent)+1;
      document.getElementById("home-btn").textContent = parseInt(document.getElementById("home-btn").textContent) + 2;
      saveResults(document.getElementById("home-btn").textContent);
      saveTablePlayers();

      //display action in time  
      divDisplay.textContent = Action() + " " + table.rows[i].cells[1].textContent + " scored 2 points." ;
      saveToLocalStorage(divDisplay);     
    }
  }
  //----AWAY---
  for (let i = 1; i < tableAw.rows.length; i++) {
    if (tableAw.rows[i].cells[0].textContent+"A" === id_p) {
      rowToEdit = i;
      const ptsCell_Away = tableAw.rows[rowToEdit].cells[2];
      const twoPtsMadeCell_Away = tableAw.rows[rowToEdit].cells[5];
      const twoPtsCell_Away = tableAw.rows[rowToEdit].cells[6];
      ptsCell_Away.textContent = parseInt(ptsCell_Away.textContent)+2;
      twoPtsMadeCell_Away.textContent = parseInt(twoPtsMadeCell_Away.textContent)+1;
      twoPtsCell_Away.textContent = parseInt(twoPtsCell_Away.textContent)+1;
      document.getElementById("guest-btn").textContent = parseInt(document.getElementById("guest-btn").textContent) +2;
      saveResults(document.getElementById("guest-btn").textContent);
      saveTablePlayers();

      // Update the text content of the div and display action in time 
      divDisplay.textContent =  Action() + " " + tableAw.rows[i].cells[1].textContent + " scored 2 points." ;
      document.getElementById("find_id").value = ' ';
      saveToLocalStorage(divDisplay); 
    }
  }
}

function shootTwo(){
  // retrieve the input field values
  const id_p = document.getElementById('find_id').value;
  // retrieve the table element
  const table = document.getElementById("myTable_2");
  const tableAw = document.getElementById("myTableAway");

  // locate the row to edit based on the name value
  let rowToEdit = -1;
  for (let i = 1; i < table.rows.length; i++) {
    if (table.rows[i].cells[0].textContent+"H" === id_p) {
      rowToEdit = i;
      const twoPtsCell_2 = table.rows[rowToEdit].cells[6];
      twoPtsCell_2.textContent = parseInt(twoPtsCell_2.textContent)+1;

      // Update the text content of the div and display action in time 
      divDisplay.textContent =  Action() + " " + table.rows[i].cells[1].textContent + " 2 points shot missed." ;
      document.getElementById("find_id").value = ' ';
      saveTablePlayers();
      saveToLocalStorage(divDisplay); 
    }
  }
  //----AWAY---
  for (let i = 1; i < tableAw.rows.length; i++) {
    if (tableAw.rows[i].cells[0].textContent+"A" === id_p) {
      rowToEdit = i;
      const twoPtsCell_Away = tableAw.rows[rowToEdit].cells[6];
      twoPtsCell_Away.textContent = parseInt(twoPtsCell_Away.textContent)+1;

      // Update the text content of the div and display action in time 
      divDisplay.textContent =  Action() + " " + tableAw.rows[i].cells[1].textContent + " 2 points shot missed." ;
      document.getElementById("find_id").value = ' ';
      saveTablePlayers();
      saveToLocalStorage(divDisplay); 
    }
  }
}

function FTmade() {
  const id_p = document.getElementById('find_id').value;
  const table = document.getElementById("myTable_2");
  const tableAw = document.getElementById("myTableAway");

  let rowToEdit = -1;
  for (let i = 1; i < table.rows.length; i++) {
    if (table.rows[i].cells[0].textContent+"H" === id_p) {
      rowToEdit = i;
      const FTMCell_2 = table.rows[rowToEdit].cells[7];
      const ptsCell_2 = table.rows[rowToEdit].cells[2];
      FTMCell_2.textContent = parseInt(FTMCell_2.textContent)+1;
      ptsCell_2.textContent = parseInt(ptsCell_2.textContent)+1;
      document.getElementById("home-btn").textContent = parseInt(document.getElementById("home-btn").textContent) + 1;
      saveResults(document.getElementById("home-btn").textContent);
      saveTablePlayers();
  
      //display action in time  
      divDisplay.textContent = Action() + " " + table.rows[i].cells[1].textContent + " scored 1 free throw." ;
      document.getElementById("find_id").value = ' ';
      saveToLocalStorage(divDisplay);     
    }
  }
  //----AWAY---
  for (let i = 1; i < tableAw.rows.length; i++) {
    if (tableAw.rows[i].cells[0].textContent+"A" === id_p) {
      rowToEdit = i;
      const FTMCell_Away = tableAw.rows[rowToEdit].cells[7];
      const ptsCell_Away = tableAw.rows[rowToEdit].cells[2];
      FTMCell_Away.textContent = parseInt(FTMCell_Away.textContent)+1;
      ptsCell_Away.textContent = parseInt(ptsCell_Away.textContent)+1;
      document.getElementById("guest-btn").textContent = parseInt(document.getElementById("guest-btn").textContent) +1;
      saveResults(document.getElementById("guest-btn").textContent);
      saveTablePlayers();
  
      // Update the text content of the div and display action in time 
      divDisplay.textContent =  Action() + " " + tableAw.rows[i].cells[1].textContent + " scored 1 free throw." ;
      document.getElementById("find_id").value = ' ';
      saveToLocalStorage(divDisplay); 
    }
  }
}

function addFT() {
  const id_p = document.getElementById('find_id').value;
  const table = document.getElementById("myTable_2");
  const tableAw = document.getElementById("myTableAway");

  let rowToEdit = -1;
  for (let i = 1; i < table.rows.length; i++) {
    if (table.rows[i].cells[0].textContent+"H" === id_p) {
      rowToEdit = i;
      const FTCell_2 = table.rows[rowToEdit].cells[8];
      FTCell_2.textContent = parseInt(FTCell_2.textContent)+1;
    
      //display action in time  
      divDisplay.textContent = Action() + " " + table.rows[i].cells[1].textContent + " is on free throw line." ;
      document.getElementById("find_id").value = ' ';
      saveTablePlayers();
      saveToLocalStorage(divDisplay);     
    }
  }
  //----AWAY---
  for (let i = 1; i < tableAw.rows.length; i++) {
    if (tableAw.rows[i].cells[0].textContent+"A" === id_p) {
      rowToEdit = i;
      const FTCell_Away = tableAw.rows[rowToEdit].cells[8];
      FTCell_Away.textContent = parseInt(FTCell_Away.textContent)+1;

      // Update the text content of the div and display action in time 
      divDisplay.textContent =  Action() + " " + tableAw.rows[i].cells[1].textContent + " is on free throw line." ;
      document.getElementById("find_id").value = ' ';
      saveTablePlayers();
      saveToLocalStorage(divDisplay); 
    }
  }
}

let foulNumber = 0;
function foulCounter() {
  foulNumber++;
  let circle = document.getElementById('dot'+foulNumber);
  circle.style.backgroundColor = 'red';
  if(foulNumber == '5'){
    alert('bonus');
  }
  localStorage.setItem('homeFouls',JSON.stringify(foulNumber));
}

function detectFoulHome() {
  const id_p = document.getElementById('find_id').value;
  const table = document.getElementById("myTable_2");

  let rowToEdit = -1;
  for (let i = 1; i < table.rows.length; i++) {
    if (table.rows[i].cells[0].textContent+"H" === id_p) {
      rowToEdit = i;
      const FoulCell_2 = table.rows[rowToEdit].cells[13];
      FoulCell_2.textContent = parseInt(FoulCell_2.textContent)+1;
    
      if(FoulCell_2.textContent == '5'){
        alert('Player out');
        let div = document.getElementById("displayPlayerButton");
        let buttons = div.getElementsByTagName("button");
        for (let i = 0; i < buttons.length; i++) {
          if (buttons[i].textContent === id_p) {
            buttons[i].disabled = true;
          } 
        }
      }
      document.getElementById("find_id").value = ' ';
      //display action in time  
      divDisplay.textContent = Action() + " " + table.rows[i].cells[1].textContent + " made foul." ;
      saveTablePlayers();
      saveToLocalStorage(divDisplay); 
      foulCounter();
    }
  }
}

let foulNumberAway = 0;
function foulCounterAway() {
  foulNumberAway++;
  let circle = document.getElementById('circleAway'+foulNumberAway);
  circle.style.backgroundColor = 'red';
  if(foulNumberAway == '5'){
    alert('bonus');
  }
  localStorage.setItem('awayFouls',JSON.stringify(foulNumberAway));
}

function detectFoulAway() {
  const id_p = document.getElementById('find_id').value;
  const tableAw = document.getElementById("myTableAway");

  let rowToEdit = -1;
  for (let i = 1; i < tableAw.rows.length; i++) {
    if (tableAw.rows[i].cells[0].textContent+"A" === id_p) {
      rowToEdit = i;
      const FoulCell_away = tableAw.rows[rowToEdit].cells[13];
      FoulCell_away.textContent = parseInt(FoulCell_away.textContent)+1;
      
      if(FoulCell_away.textContent == '5'){
        alert('Player out');
        let div = document.getElementById("displayAwayButtons");
        let buttons = div.getElementsByTagName("button");
        for (let i = 0; i < buttons.length; i++) {
          if (buttons[i].textContent === id_p) {
            buttons[i].disabled = true;
          } 
        }
      }
      document.getElementById("find_id").value = ' ';

      //display action in time  
      divDisplay.textContent = Action() + " " + tableAw.rows[i].cells[1].textContent + " made foul." ;
      saveTablePlayers();
      saveToLocalStorage(divDisplay); 
      foulCounterAway();
    }
  }
}

function Asisst(){
  const id_p = document.getElementById('find_id').value;
  // retrieve the table element
  const table = document.getElementById("myTable_2");
  const tableAw = document.getElementById("myTableAway");

  // locate the row to edit based on the name value
  let rowToEdit = -1;
  for (let i = 1; i < table.rows.length; i++) {
    if (table.rows[i].cells[0].textContent+"H" === id_p) {
      rowToEdit = i;
      const asisstCell_2 = table.rows[rowToEdit].cells[9];
      asisstCell_2.textContent = parseInt(asisstCell_2.textContent)+1;
      
      // Update the text content of the div and display action in time 
      divDisplay.textContent =  Action() + " " + table.rows[i].cells[1].textContent + " made asisst." ;
      document.getElementById("find_id").value = ' ';
      saveTablePlayers();
      saveToLocalStorage(divDisplay);  
    }
  }
  //----AWAY---
  for (let i = 1; i < tableAw.rows.length; i++) {
    if (tableAw.rows[i].cells[0].textContent+"A" === id_p) {
      rowToEdit = i;
      const asisstCell_Away = tableAw.rows[rowToEdit].cells[9];
      asisstCell_Away.textContent = parseInt(asisstCell_Away.textContent)+1;

      // Update the text content of the div and display action in time 
      divDisplay.textContent =  Action() + " " + tableAw.rows[i].cells[1].textContent + " made asisst." ;
      document.getElementById("find_id").value = ' ';
      saveTablePlayers();
      saveToLocalStorage(divDisplay);  
    }
  } 
}

function Rebound(){
  const id_p = document.getElementById('find_id').value;
  // retrieve the table element
  const table = document.getElementById("myTable_2");
  const tableAw = document.getElementById("myTableAway");

  // locate the row to edit based on the name value
  let rowToEdit = -1;
  for (let i = 1; i < table.rows.length; i++) {
    if (table.rows[i].cells[0].textContent+"H" === id_p) {
      rowToEdit = i;
      const reboundCell_2 = table.rows[rowToEdit].cells[10];
      reboundCell_2.textContent = parseInt(reboundCell_2.textContent)+1;

      // Update the text content of the div and display action in time 
      divDisplay.textContent =  Action() + " " + table.rows[i].cells[1].textContent + " made rebound." ;
      document.getElementById("find_id").value = ' ';
      saveTablePlayers();
      saveToLocalStorage(divDisplay);  
    }
  }
  //----AWAY---
  for (let i = 1; i < tableAw.rows.length; i++) {
    if (tableAw.rows[i].cells[0].textContent+"A" === id_p) {
      rowToEdit = i;
      const reboundCell_Away = tableAw.rows[rowToEdit].cells[10];
      reboundCell_Away.textContent = parseInt(reboundCell_Away.textContent)+1;

      divDisplay.textContent =  Action() + " " + tableAw.rows[i].cells[1].textContent + " made rebound." ;
      document.getElementById("find_id").value = ' ';
      saveTablePlayers();
      saveToLocalStorage(divDisplay); 
    }
  } 
}

function Steal(){
  const id_p = document.getElementById('find_id').value;
  // retrieve the table element
  const table = document.getElementById("myTable_2");
  const tableAw = document.getElementById("myTableAway");

  // locate the row to edit based on the name value
  let rowToEdit = -1;
  for (let i = 1; i < table.rows.length; i++) {
    if (table.rows[i].cells[0].textContent+"H" === id_p) {
      rowToEdit = i;
      const stealCell_2 = table.rows[rowToEdit].cells[11];
      stealCell_2.textContent = parseInt(stealCell_2.textContent)+1;

      // Update the text content of the div and display action in time 
      divDisplay.textContent =  Action() + " " + table.rows[i].cells[1].textContent + " stole the ball." ;
      document.getElementById("find_id").value = ' ';
      saveTablePlayers();
      saveToLocalStorage(divDisplay);  
    }
  }
  //----AWAY---
  for (let i = 1; i < tableAw.rows.length; i++) {
    if (tableAw.rows[i].cells[0].textContent+"A" === id_p) {
      rowToEdit = i;
      const stealCell_Away = tableAw.rows[rowToEdit].cells[11];
      stealCell_Away.textContent = parseInt(stealCell_Away.textContent)+1;

      // Update the text content of the div and display action in time 
      divDisplay.textContent =  Action() + " " + tableAw.rows[i].cells[1].textContent + " stole the ball." ;
      document.getElementById("find_id").value = ' ';
      saveTablePlayers();
      saveToLocalStorage(divDisplay); 
    }
  } 
}

function TurnOver(){
  const id_p = document.getElementById('find_id').value;
  // retrieve the table element
  const table = document.getElementById("myTable_2");
  const tableAw = document.getElementById("myTableAway");

  // locate the row to edit based on the name value
  let rowToEdit = -1;
  for (let i = 1; i < table.rows.length; i++) {
    if (table.rows[i].cells[0].textContent+"H" === id_p) {
      rowToEdit = i;
      const turnOverCell_2 = table.rows[rowToEdit].cells[12];
      turnOverCell_2.textContent = parseInt(turnOverCell_2.textContent)+1;

      // Update the text content of the div and display action in time 
      divDisplay.textContent =  Action() + " " + table.rows[i].cells[1].textContent + " lost the ball." ;
      document.getElementById("find_id").value = ' ';
      saveTablePlayers();
      saveToLocalStorage(divDisplay);  
    }
  }
  //----AWAY---
  for (let i = 1; i < tableAw.rows.length; i++) {
    if (tableAw.rows[i].cells[0].textContent+"A" === id_p) {
      rowToEdit = i;
      const turnOverCell_Away = tableAw.rows[rowToEdit].cells[12];
      turnOverCell_Away.textContent = parseInt(turnOverCell_Away.textContent)+1;

      // Update the text content of the div and display action in time 
      divDisplay.textContent =  Action() + " " + tableAw.rows[i].cells[1].textContent + " lost the ball." ;
      document.getElementById("find_id").value = ' ';
      saveTablePlayers();
      saveToLocalStorage(divDisplay);
    }
  } 
}


/* ------display quarter--------- */

// Select Every Count Container
const countContainer = document.querySelectorAll(".count-digit");

// Default inital value of timer
const defaultValue = 10 * 60;

// variable to the time
let countDownTime = defaultValue;

// variable to store time interval
let timerID;

// Variable to track whether timer is running or not
let isStopped = true;

//variable to store period
const periodGame = document.getElementById("period");

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
      saveResults();
    }
    alert('End of quarter!');
    divDisplay.textContent = 'End of quarter.'
    saveToLocalStorage(divDisplay);
    stopTimer();
    stopClock_A();
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

let attackClock = 24; // set initial shot clock value
let attackClockDisplay = document.getElementById("attack-clock");
let attackClockInterval;

function countdown_b() {
  if (attackClock > 0) {
    attackClock--; // decrease shot clock value
    attackClockDisplay.innerHTML = attackClock; // update shot clock display
  } 
  else{
    attackClock=25; // stop clock when it reaches zero
    countdown_b();
  }
  saveAttack();
}

function startClock_A() {
  
  if(localStorage.getItem('attack clock') == null){
      attackClockInterval = setInterval(countdown_b, 1000); // start countdown timer
  } else {
    attackClock = localStorage.getItem('attack clock');
    attackClockInterval = setInterval(countdown_b, 1000);
  }
}

function stopClock_A() {
  clearInterval(attackClockInterval); // stop countdown timer
}

function restartClock_A() {
  attackClock = 24; // reset shot clock value
  attackClockDisplay.innerHTML = attackClock; // update shot clock display
}
function restartClock_14() {
  attackClock = 14; // reset shot clock value
  attackClockDisplay.innerHTML = attackClock;
}
function secondPlus() {
  if(attackClock >= 0 && attackClock < 24){
    attackClock += 1;
    attackClockDisplay.innerHTML = attackClock;
  }
}
function secondMinus() {
  if(attackClock > 0 && attackClock <= 24){
    attackClock -= 1;
    attackClockDisplay.innerHTML = attackClock;
  }
}
// Function to handle the start button click
function startButtonClicked() {
  // Disable the start button
  document.getElementById('start-button').disabled = true;
  
  // Enable the pause button
  document.getElementById('stop-button').disabled = false;
}

// Function to handle the pause button click
function pauseButtonClicked() {
  // Disable the pause button
  document.getElementById('stop-button').disabled = true;
  
  // Enable the start button
  document.getElementById('start-button').disabled = false;
}

// Get the button element
const button = document.getElementById('stop-button');

// Add event listener to the keydown event
document.addEventListener('keydown', function(event) {
  // Check if the key code is for the spacebar (key code 32)
  if (event.key === 'Enter') {
    // Trigger the button click event
    button.click();
  }
});




