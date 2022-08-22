requirements = false;

optimally = false;

fairness = false;
mealFreedom = false;
preferences = false;

// this should be loaded from settingsJSONStr
let dutyArray = settingsObj["scheduleProcedureSettings"]["duties"];

let personnelList = settingsObj["personnelSettings"];
let personnelNameList = [];
personnelList.forEach(fillPersonnelNameList)
function fillPersonnelNameList(personnel){
    personnelNameList.push(personnel["name"]);
}

let tableDiv = document.getElementById("tableDiv");

//to be used in validateAndProcessSchedule
var startTime
var endTime
var noOfSpec;
var noOfDayMen;
var noOfNightMen;

//------Process-------
function createTableBtn(){
    table = document.getElementById("table");
    try{
        table.remove();
    }catch{
    }
    table = document.createElement("table");
    table.setAttribute("id","table");

    tableDiv.appendChild(table);


    try{
        // let startDate = document.getElementById("startDate").value;
        // let endDate = document.getElementById("endDate").value;
        startTime = parseInt(document.getElementById("startTime").value);
        endTime = parseInt(document.getElementById("endTime").value);
        noOfSpec = parseInt(document.getElementById("noOfSpec").value);
        noOfDayMen = parseInt(document.getElementById("noOfDayMen").value);
        noOfNightMen = parseInt(document.getElementById("noOfNightMen").value);
        runMF();
    } catch(err){
        table.innerHTML=err.message;
    }

    createRow("head");
    createRowHead("head", "Name/ Hours");
    for (let i = startTime; i != endTime; i+=100) {
        if(i==2400){
            i=0;
        }
        createRowHead("head", pad0(i));
    }
    createRowHead("head", pad0(endTime));
    noOfCol = table.rows[0].cells.length;

    createRowAndHeadWColSpan("spec", "Spec");
    for (let rowI = 1; rowI <= noOfSpec; rowI++){
        createRow("spec"+rowI);
        createRowHead("spec"+rowI,rowI+".");
        createNameDropDown("spec"+rowI);

        for (let colI = startTime; colI != endTime; colI+=100) {
            if(colI==2400){
                colI=0;
            }
            createCell("spec"+rowI, pad0(colI));
        }
        createCell("spec"+rowI, pad0(endTime));
    }

    createRowAndHeadWColSpan("dayMen", "Day Men");
    for (let rowI = 1; rowI <= noOfDayMen; rowI++){
        createRow("dayMen"+rowI);
        createRowHead("dayMen"+rowI,rowI+".");
        createNameDropDown("dayMen"+rowI);

        for (let colI = startTime; colI != endTime; colI+=100) {
            if(colI==2400){
                colI=0;
            }
            createCell("dayMen"+rowI, pad0(colI));
        }
        createCell("dayMen"+rowI, pad0(endTime));
    }

    createRowAndHeadWColSpan("nightMen", "Night Men");
    for (let rowI = 1; rowI <= noOfNightMen; rowI++){
        createRow("nightMen"+rowI);
        createRowHead("nightMen"+rowI,rowI+".");
        createNameDropDown("nightMen"+rowI);

        for (let colI = startTime; colI != endTime; colI+=100) {
            if(colI==2400){
                colI=0;
            }
            createCell("nightMen"+rowI, pad0(colI));
        }
        createCell("nightMen"+rowI, pad0(endTime));
    }
}

//--------------FUNCTIONS-------------

function createRow(rowId){
    let tr = document.createElement("TR");
    tr.setAttribute("id", "r"+rowId);
    table.appendChild(tr);
}

function createCell(rowId, cellClass){
    let td = document.createElement("TD");
    document.getElementById("r"+rowId).append(td);
    
    let dropDown = document.createElement("select");
    dropDown.setAttribute("id","r"+rowId+"h"+cellClass);
    dropDown.setAttribute("onchange","changeDropDown('r"+rowId+"h"+cellClass +"')");
    dropDown.setAttribute("class", cellClass);
    td.append(dropDown);

    //duties for the timing
    //add on change to remove itself once selected, and placed back once not selected
    dutyArray.forEach(createDuties);
    function createDuties(value, index, array){
        //if between timing 
        cellClassInt = parseInt(cellClass);
        if(cellClassInt>=value.startTime&&cellClassInt<=value.endTime){
            let duty = document.createElement("option");
            duty.setAttribute("value",value.name);
            duty.setAttribute("class",value.name+"class");
            duty.setAttribute("style","background-color:"+value.colorInHex+";");
            duty.setAttribute("title", value.name)
            duty.setAttribute("id", value.id)
            duty.innerHTML=value.name.slice(0,4); //slice string if more than 7
            dropDown.append(duty);
        }
    }
}

function changeDropDown(selectId){
    let select = document.getElementById(selectId);
    styleBG = select.options[select.selectedIndex].getAttribute("style");
    select.setAttribute("style", styleBG);
}

function createRowData(rowId, textStr){
    let td = document.createElement("TD");
    let text = document.createTextNode(textStr);
    td.appendChild(text);
    document.getElementById("r"+rowId).append(td);
}

function createRowHead(rowId, textStr){
    let th = document.createElement("TH");
    let text = document.createTextNode(textStr);
    if(textStr=="0500"||textStr=="0600"||textStr=="0700"||textStr=="1100"||textStr=="1200"||textStr=="1300"||textStr=="1700"||textStr=="1800"){
        th.setAttribute("style", "background-color:#c22;")
    }
    th.setAttribute("id", "rowHead" + rowId)
    th.appendChild(text);

    document.getElementById("r"+rowId).append(th);
}

function createNameDropDown(rowId){
    th = document.getElementById("rowHead"+rowId)

    th.setAttribute("class", "tableNameColumn")

    let dropDown = document.createElement("select");
    dropDown.setAttribute("id", "r" + rowId + "NameCol");
    th.appendChild(dropDown);

    let option = document.createElement("option");
    option.setAttribute("value", "");
    option.innerHTML = "";
    dropDown.append(option);

    personnelNameList.forEach(createOptions);
    function createOptions(value){
        let option = document.createElement("option");
        option.setAttribute("value", value);
        option.innerHTML = value;
        dropDown.append(option);
    }
}

function createNameDropDown(rowId){
    th = document.getElementById("rowHead"+rowId)

    th.setAttribute("class", "tableNameColumn")

    let dropDown = document.createElement("select");
    dropDown.setAttribute("id", "r" + rowId + "NameCol");
    th.appendChild(dropDown);

    let option = document.createElement("option");
    option.setAttribute("value", "");
    option.innerHTML = "";
    dropDown.append(option);

    personnelNameList.forEach(createOptions);
    function createOptions(value){
        let option = document.createElement("option");
        option.setAttribute("value", value);
        option.innerHTML = value;
        dropDown.append(option);
    }
}

function createRowAndHeadWColSpan(rowId, textStr){
    let tr = document.createElement("TR");
    tr.setAttribute("id", "r"+rowId);
    table.appendChild(tr);

    let th = document.createElement("TH");
    let text = document.createTextNode(textStr);
    th.appendChild(text);
    th.setAttribute("colspan",noOfCol);
    th.setAttribute("style","padding:1px;");
    document.getElementById("r"+rowId).append(th);

}

function randomizeNames(){

}

function pad0(num){
    while(num.toString().length<=3){
        num="0"+num;
    }
    return num;
}
