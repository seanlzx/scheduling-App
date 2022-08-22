
//cheap hack; create JSON string, can just load 
let settingsJSONStr = `
{
    "defaultSettings":{
        "startTime": 700, "endTime": 600, "noOfSpec":3, "noOfDaymen":7, "noOfNightMen":3
    },
    "personnelSettings":[
        {"id":"1", "name":"Bugs", "class":"spec", "drawArms":"n"},
        {"id":"2", "name":"Forrest", "class":"spec", "drawArms":"n"},
        {"id":"3", "name":"Leroy", "class":"spec", "drawArms":"n"},
        {"id":"4", "name":"Ash", "class":"armskote", "drawArms":"n"},
        {"id":"5", "name":"Preston", "class":"day", "drawArms":"y"},
        {"id":"6", "name":"Ace", "class":"day", "drawArms":"y"},
        {"id":"7", "name":"Rogers", "class":"night", "drawArms":"n"},
        {"id":"8", "name":"Boghart", "class":"night", "drawArms":"n"},
        {"id":"9", "name":"Orson", "class":"day", "drawArms":"y"},
        {"id":"10", "name":"Jude", "class":"day", "drawArms":"n"},
        {"id":"11", "name":"Charles", "class":"day", "drawArms":"y"},
        {"id":"12", "name":"Connor", "class":"day", "drawArms":"y"},
        {"id":"13", "name":"Highlander", "class":"night", "drawArms":"n"}
    ],
    "scheduleProcedureSettings":{
        "duties": [
            {"id":0, "name": "", "startTime":0, "endTime":2300, "colorInHex":"#222", "needByRight": false, "goodToHave": false, "lunchAble": true, "countedTowardsTotalHrs":false, "exclusive":false},
            {"id":1, "name": "Stoves", "startTime":0, "endTime":2300, "colorInHex":"#555", "needByRight": true, "goodToHave": true, "lunchAble": false, "countedTowardsTotalHrs":true, "exclusive":true},
            {"id":2, "name": "Fries", "startTime":700, "endTime":1900, "colorInHex":"#333", "needByRight": true, "goodToHave": true, "lunchAble": true, "countedTowardsTotalHrs":true, "exclusive":true},
            {"id":3, "name": "Cashier", "startTime":0, "endTime":2300, "colorInHex":"#008", "needByRight": true, "goodToHave": true, "lunchAble": false, "countedTowardsTotalHrs":true, "exclusive":true},
            {"id":4, "name": "Manager", "startTime":0, "endTime":2300, "colorInHex":"#000", "needByRight": true, "goodToHave": true, "lunchAble": false, "countedTowardsTotalHrs":true, "exclusive":true},
            {"id":5, "name": "Desert", "startTime":500, "endTime":2300, "colorInHex":"#da2", "needByRight": true, "goodToHave": true, "lunchAble": false, "countedTowardsTotalHrs":true, "exclusive":true},
            {"id":6, "name": "Coffee", "startTime":700, "endTime":1600, "colorInHex":"#f66", "needByRight": true, "goodToHave": true, "lunchAble": false, "countedTowardsTotalHrs":true, "exclusive":true},
            {"id":7, "name": "Server", "startTime":900, "endTime":1100, "colorInHex":"#38761d", "needByRight": true, "goodToHave": true, "lunchAble": false, "countedTowardsTotalHrs":true, "exclusive":true},
            {"id":8, "name": "Greeter", "startTime":900, "endTime":1100, "colorInHex":"#38761d", "needByRight": true, "goodToHave": true, "lunchAble": false, "countedTowardsTotalHrs":false, "exclusive":true},
            {"id":9, "name": "Heavy Laser", "startTime":900, "endTime":1100, "colorInHex":"#251", "needByRight": true, "goodToHave": true, "lunchAble": false, "countedTowardsTotalHrs":false, "exclusive":true},
            {"id":10, "name": "Beam", "startTime":900, "endTime":1800, "colorInHex":"#222", "needByRight": false, "goodToHave": true, "lunchAble": false, "countedTowardsTotalHrs":false, "exclusive":false},
            {"id":11, "name": "Missles", "startTime":600, "endTime":600, "colorInHex":"#bf9000", "needByRight": true, "goodToHave": true, "lunchAble": false, "countedTowardsTotalHrs":true, "exclusive":true},
            {"id":12, "name": "Commander", "startTime":600, "endTime":600, "colorInHex":"#bf9000", "needByRight": true, "goodToHave": true, "lunchAble": false, "countedTowardsTotalHrs":true, "exclusive":true},
            {"id":13, "name": "Anti Pers Blasters", "startTime":1800, "endTime":1800, "colorInHex":"#b50", "needByRight": true, "goodToHave": true, "lunchAble": false, "countedTowardsTotalHrs":true, "exclusive":true},
            {"id":14, "name": "ATST", "startTime":1800, "endTime":1800, "colorInHex":"#b50", "needByRight": true, "goodToHave": true, "lunchAble": false, "countedTowardsTotalHrs":true, "exclusive":true},
            {"id":15, "name": "ATAT", "startTime":2100, "endTime":2100, "colorInHex":"#b45f06", "needByRight": true, "goodToHave": true, "lunchAble": false, "countedTowardsTotalHrs":true, "exclusive":true},
            {"id":16, "name": "TIE", "startTime":2100, "endTime":2100, "colorInHex":"#b45f06", "needByRight": true, "goodToHave": true, "lunchAble": false, "countedTowardsTotalHrs":false, "exclusive":true},
            {"id":17, "name": "AG ", "startTime":2100, "endTime":2100, "colorInHex":"#b40", "needByRight": true, "goodToHave": true, "lunchAble": false, "countedTowardsTotalHrs":false, "exclusive":true}
        ]
    }
}
`;
//if unexpected number error: note numbers in above string must not bew padded with 0s