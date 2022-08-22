function loadTable(){
    //current Issue, javascript does not allow reading of filepaths, will print c:\\fakepath\\120321json.txt
    // jsonFile = document.getElementById("jsonFile").value
    // console.log(jsonFile)
    tableJsonText = document.getElementById("jsonText").value;
    //change html current date, timeStartEnd, noOfSpecDayNight
    tableJson = JSON.parse(tableJsonText);

    document.getElementById("currentDate").value =  tableJson.info.currentDateInfo;
    document.getElementById("startTime").value = tableJson.info.startTimeInfo;
    document.getElementById("endTime").value = tableJson.info.endTimeInfo;
    document.getElementById("noOfSpec").value = tableJson.info.noOfSpecInfo;         
    document.getElementById("noOfDayMen").value = tableJson.info.noOfDayMenInfo;
    document.getElementById("noOfNightMen").value = tableJson.info.noOfNightMenInfo;

    createTableBtn();

    //load into dropdown
    let personnelClass = [[noOfSpec,"spec"],[noOfDayMen, "dayMen"],[noOfNightMen, "nightMen"]]

    //fukcing throwaway ;)
    let rowNum = 0;
    personnelClass.forEach(inputSheetLoop)
    function inputSheetLoop(personnelClass){        
        for(let i=1; i< personnelClass[0]+1;i++){
            document.getElementById("r"+personnelClass[1]+i+"NameCol").value=tableJson.array[rowNum][0]
            rowNum++
           //fukcing throwaway ;)
            let rowCol = 1;
            for (let colI = startTime; colI != endTime && colI < 3000; colI+=100) {
                if(colI==2400){
                    colI=0;
                }
                
                //document.getElementById("r"+personnelClass[1]+i+"h"+pad0(colI)).value = tableJson.array[rowNum][rowCol];

                let val = tableJson.array[rowNum][rowCol];
                let select = document.getElementById("r"+personnelClass[1]+i+"h"+pad0(colI));
                let os = select.options;
                for(let o, i=0; o=os[i]; i++){
                    if(o.value == val){
                        select.selectedIndex = i;
                        break
                    }
                }

                // let options = document.getElementById("r"+personnelClass[1]+i+"h"+pad0(colI)).options;
                // let selectArray = [];
                

                // for (let i=0; i < options.length; i++)
                // {
                //     selectArray.push(options[i].value);
                // }

                // //let selectArray = document.getElementById("r"+personnelClass[1]+i+"h"+pad0(colI)).options
                // console.log(JSON.stringify(selectArray))
                // //rowCol +1 because skip name cell
                // for(let i = 0; i <= selectArray.length; i++){
                //     console.log("hold"+selectArray.options[i].value)
                //     console.log(tableJson.array[rowNum][rowCol+1])
                //     console.log(selectArray.options[i].id == tableJson.array[rowNum][rowCol+1])
                //     if (selectArray.options[i].id == tableJson.array[rowNum][rowCol+1]){
                //         document.getElementById("r"+personnelClass[1]+i+"h"+pad0(colI)).selectedIndex = i;
                //     }
                // }
                rowCol++
            }
            // let options = document.getElementById("r"+personnelClass[1]+i+"h"+pad0(endTime)).options;
            // let selectArray = [];
            

            // for (let i=0; i < options.length; i++)
            // {
            //     selectArray.push(options[i].value);
            // }
                
            // //rowCol +1 because skip name cell
            // for(let i = 0; i <= selectArray; i++){
            //     if (selectArray.options[i].id == tableJson.array[rowNum][rowCol+1]){
            //         document.getElementById("r"+personnelClass[1]+i+"h"+pad0(endTime)).selectedIndex = i;
            //     }
            // }

            let val = tableJson.array[rowNum][rowCol];
            let select = document.getElementById("r"+personnelClass[1]+i+"h"+pad0(endTime));
            let os = select.options;
            for(let o, i=0; o=os[i]; i++){
                if(o.value == val){
                    select.selectedIndex = i;
                    break
                }
            }

            //document.getElementById("r"+personnelClass[1]+i+"h"+pad0(endTime)).value = tableJson.array[rowNum][rowCol];
        }
        
       
        //continue with men
    }
}