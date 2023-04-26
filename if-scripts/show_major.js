var studentName = "Tina"
var studentMajor = "MKT"

var majorName;
var advisingLocation;

if (studentMajor == "BIOL"){
    majorName = "Biology"
    advisingLocation = "Science Bldg, Room 310"
} else if (studentMajor == "CSCI"){
    majorName = "Computer Science";
    advisingLocation = "Sheppard Hall, Room 314";
} else if (studentMajor == "ENG"){
    majorName = "English";
    advisingLocation = "Kerr Hall, Room 201";
} else if (studentMajor == "HIST"){
    majorName = "History";
    advisingLocation = "Kerr Hall, Room 114";
} else if (studentMajor == "MKT"){
    majorName = "Marketing";
    advisingLocation = "Westly Hall, Room 310";
} else {
    majorName = "<unknown>";
    advisingLocation = " ";
}

console.log("Student:", studentName)
console.log("Major:", majorName)
console.log("Advising Location:", advisingLocation)

