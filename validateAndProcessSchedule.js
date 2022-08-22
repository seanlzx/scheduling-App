document.getElementById("tableDiv").addEventListener("change", onChangeFunc);

//array for requirements of each hour

function onChangeFunc(){
    console.log("change occured")
    calculateStats()
}

function validateSchedule(){
    //place col in array
    //validate col
    //if error put in scheduleErrorArray
    //display scheduleErrorArray in html
    let div = document.getElementById("detailingErrorDiv");
    div.innerHTML = "";
    hourDutyArray = runMF();
    sheetArray = []
    scheduleErrorString = "The following are missing:\n";
    for (let colI = startTime; colI != endTime; colI+=100) {
        if(colI==2400){
            colI=0;
        }
        let hourArrayValue = [];
        let hourArrayValueRequirements = hourDutyArray["needByRight"][colI];
        let needByRightFulfilled = true;
        let errorString = "";

        let hourArray = Array.from(document.getElementsByClassName(pad0(colI)));   
        hourArray.forEach(validateHour);
        function validateHour(cell){
            hourArrayValue.push(cell.value); 
        }

        hourArrayValueRequirements.forEach(checkContains)
        function checkContains(requirement){
            if(hourArrayValue.includes(requirement)){

            }else{
                needByRightFulfilled = false
                errorString += `${requirement}, `
            }
        }

        if(!needByRightFulfilled){
            let scheduleErrorTextNode = document.createTextNode(`${scheduleErrorString}${colI}: ${errorString}\n`)
            let p = document.createElement("P");
            p.appendChild(scheduleErrorTextNode)
  
            div.appendChild(p);
        }

        //sheetArray.push(cellValue)
    }
    // personnelClass = [[noOfSpec,"spec"],[noOfDayMen, "dayMen"],[noOfNightMen, "nightMen"]]
    // personnelClass.forEach(inputSheetLoop)
    // function inputSheetLoop(personnelClass){      
    // for(let i=1; i< personnelClass[0]+1;i++){
    //     let cellSelectElement = document.getElementById("r"+personnelClass[1]+i+"NameCol");
    //     let cellValue = cellSelectElement.options[cellSelectElement.selectedIndex].value;  
    //     sheetArray.push(cellValue)
    //         for (let colI = startTime; colI != endTime; colI+=100) {
    //             if(colI==2400){
    //                 colI=0;
    //             }
                
    //             let cellSelectElement = document.getElementById("r"+personnelClass[1]+i+"h"+pad0(colI));
    //             let cellValue = cellSelectElement.options[cellSelectElement.selectedIndex].value;
    //             sheetArray.push(cellValue)
    //         }
    //         cellSelectElement = document.getElementById("r"+personnelClass[1]+i+"h"+pad0(endTime));
    //         cellValue = cellSelectElement.options[cellSelectElement.selectedIndex].value;
    //     }
    // }
    // console.log(sheetArray);
}
function runMF(){
    let hourDutyArray = {needByRight:{}, goodToHave:{}, exclusive:{}};
    let duties = settingsObj.scheduleProcedureSettings.duties;
    for (let colI = startTime; colI != endTime; colI+=100) {
        if(colI==2400){
            colI=0;
        }
    
        //check needbyright, goodtohave, and exclusive
        let hourDutyArrayString = ["needByRight", "goodToHave", "exclusive"];
        hourDutyArrayString.forEach(lolidkfuckit)
        function lolidkfuckit(value){
            hourDutyArray[value][colI] = []
            duties.forEach(checkNeedByRight)
            function checkNeedByRight(duty){
                if(duty[value]&&duty.startTime<=colI&&colI<=duty.endTime){
                    hourDutyArray[value][colI].push(duty.name)
                }
            }
        } 
    }
    return hourDutyArray;
}

function calculateStats(){

}

function saveAsCsv(){
    let processCSVData = processCSV();
    let sheetFormatText = processCSVData[0];
    
    let currentDate = document.getElementById("currentDate");
    let csvFile = new File([sheetFormatText], currentDate.value+".csv", {type:"text/csv;charset=utf-8;"}); 
    saveAs(csvFile)

    //save into id json
    let idJson = {
        info: {noOfSpecInfo:noOfSpec, noOfDayMenInfo:noOfDayMen, noOfNightMenInfo:noOfNightMen, currentDateInfo: currentDate.value, startTimeInfo: startTime, endTimeInfo: endTime},
        array: processCSVData[1]
    }
    let blob = new Blob([JSON.stringify(idJson)], {type: "text/plain;charset=utf-8"});
    saveAs(blob, `${currentDate.value} JsonIDs`)
}

function processCSV(){
    let sheetFormatText = "";
    let DBDetailingAppArray = [];
    let personnelClass = [[noOfSpec,"spec"],[noOfDayMen, "dayMen"],[noOfNightMen, "nightMen"]]
    personnelClass.forEach(inputSheetLoop)
    function inputSheetLoop(personnelClass){        
        
        for(let i=1; i< personnelClass[0]+1;i++){
           let cellSelectElement = document.getElementById("r"+personnelClass[1]+i+"NameCol");
           let cellValue = cellSelectElement.options[cellSelectElement.selectedIndex].value;  
           sheetFormatText = sheetFormatText + cellValue;

            //for id array
           let detailingAppRow = [cellValue];
           for (let colI = startTime; colI != endTime; colI+=100) {
                if(colI==2400){
                    colI=0;
                }
                
                let cellSelectElement = document.getElementById("r"+personnelClass[1]+i+"h"+pad0(colI));
                let cell = cellSelectElement.options[cellSelectElement.selectedIndex];
                let cellValue = cell.value;
                sheetFormatText = sheetFormatText +","+ cellValue;

                //for id array
                detailingAppRow.push(cellValue)
            }
            cellSelectElement = document.getElementById("r"+personnelClass[1]+i+"h"+pad0(endTime));
            cellValue = cellSelectElement.options[cellSelectElement.selectedIndex].value;
            sheetFormatText = sheetFormatText+","+cellValue+";\n"
            detailingAppRow.push(cellValue)
            DBDetailingAppArray.push(detailingAppRow); 
        }
    }
    return [sheetFormatText, DBDetailingAppArray];
    ;
}