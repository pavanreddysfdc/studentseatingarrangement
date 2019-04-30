let student1Array = [{
    Roll_No:'13121A1059',
    Name : 'pavan',
    Dept : 'EIE'
    },
    {
        Roll_No:'13121A1060',
        Name : 'saipriya',
        Dept : 'EIE'
    },
    {
        Roll_No:'13121A1061',
        Name : 'sandeep',
        Dept : 'EIE'
    },
    {
        Roll_No:'13121A1062',
        Name : 'jyothi',
        Dept : 'EIE'
    },
    {
        Roll_No:'13121A1063',
        Name : 'harshitha',
        Dept : 'EIE'
    },
    {
        Roll_No:'13121A1064',
        Name : 'mahesh',
        Dept : 'EIE'
    }];
let student2Array = [{
    Roll_No:'13121C1059',
    Name : 'pavan',
    Dept : 'EEE'
},
    {
        Roll_No:'13121C1060',
        Name : 'saipriya',
        Dept : 'EEE'
    },
    {
        Roll_No:'13121C1061',
        Name : 'sandeep',
        Dept : 'EEE'
    },
    {
        Roll_No:'13121C1062',
        Name : 'jyothi',
        Dept : 'EEE'
    },
    {
        Roll_No:'13121C1063',
        Name : 'harshitha',
        Dept : 'EEE'
    },
    {
        Roll_No:'13121C1064',
        Name : 'mahesh',
        Dept : 'EEE'
    }];

let roomNo = document.querySelector('#roomNo');
let desks = document.querySelector('#desks');
let sub1 = document.querySelector('#sub1');
let sub2 = document.querySelector('#sub2');
let sem1 = document.querySelector('#sem1');
let sem2 = document.querySelector('#sem2');
let dept1 = document.querySelector('#dept1');
let dept2 = document.querySelector('#dept2');
let invigilator = document.querySelector('#invigilatorName');
let InvigDept = document.querySelector('#invigilatorDept');
let seatingBtn = document.querySelector('#processSeating');
let st1Start = document.querySelector('#st1Start');
let st1End = document.querySelector('#st1End');
let st2Start = document.querySelector('#st2Start');
let st2End = document.querySelector('#st2End');

//getting id's of the table details
let sub1Name = document.querySelector('#sub1NameOut');
let sem1Out = document.querySelector('#sem1Out');
let sem2Out = document.querySelector('#sem2Out');

let sub2Name = document.querySelector('#sub2NameOut');
let dept1Name = document.querySelector('#dept1NameOut');
let dept2Name = document.querySelector('#dept2NameOut');
let invigilatorName = document.querySelector('#InvigNameOut');
let invigilatorDept = document.querySelector('#InvigDeptOut');
let roomNumber = document.querySelector('#roomNumberOut');
let tableseating1 = document.querySelector('#table_seating1');
let tableseating2 = document.querySelector('#table_seating2');
let outputcontent = document.querySelector('#output-section');
let formContent = document.querySelector('.formContent');
seatingBtn.addEventListener('click',arrangeSeats);

//getting output fiends
function arrangeSeats() {
    let deskCount=parseInt(desks.value);
    let st1StartVal = parseInt(st1Start.value);
    let st2StartVal = parseInt(st2Start.value);
    let st1EndVal = parseInt(st1End.value);
    let st2EndVal = parseInt(st2End.value);
    let row1=`<tr><td></td></tr>`;
    let row2='';

    if((deskCount >= (st1EndVal-st1StartVal)) && roomNo.value!=='' && sub1.value!==''
    && sub2.value!=='' && dept2.value!=='' && dept1.value!=='' && desks.value!=='' && sem1.value!==''
        && sem2.value!=='' && invigilator.value!=='' && InvigDept.value!=='' && st1Start.value!==''
        &&st1End.value!==''&&st2Start.value!=='' && st2End.value!=='' && (sub1.value !== sub2.value)){
        outputcontent.classList.remove("d-none");
        formContent.classList.add("d-none");
        sub1Name.textContent = sub1.value;
        sub2Name.textContent = sub2.value;
        dept1Name.textContent = dept1.value;
        dept2Name.textContent = dept2.value;
        sem1Out.textContent = sem1.value;
        sem2Out.textContent=sem2.value;
        invigilatorName.textContent = invigilator.value;
        invigilatorDept.textContent = InvigDept.value;
        roomNumber.textContent =roomNo.value;
        for(let st1 = st1StartVal; st1<=st1EndVal;st1++){
            if(st1<student1Array.length){
           row1+=`<tr><td>${student1Array[st1].Roll_No}</td></tr>`;
            tableseating1.innerHTML=row1;
        }
        }
        for(let st2 = st2StartVal; st2<=st2EndVal;st2++){
            if(st2<student1Array.length){
                row2+=`<tr><td>${student2Array[st2].Roll_No}</td></tr>`;
                tableseating2.innerHTML=row2;
            }
        }

    }
    //window.open().location.href='../source/generatedPage.html';

    //iterating the students based on table count
}

///generating pdf and Reset Buttons
let formReset = document.querySelector('#Reset');
let backBtn = document.querySelector('#backBtn');


//reset functionality
function reset(){
    roomNo.textContent='';
     desks.textContent='';
     sub1.textContent='';
     sub2.textContent='';

     invigilator.textContent='';
     InvigDept.textContent='';
     st1Start.textContent='';
     st1End.textContent='';
     st2Start.textContent='';
     st2End.textContent='';
}
backBtn.addEventListener('click',backHome);
formReset.addEventListener('click',reset);
//back to homepage
function backHome(){
    outputcontent.classList.add("d-none");
    formContent.classList.remove("d-none");
}



//Print the output
let printbtn = document.querySelector('#print');
printbtn.addEventListener('click',printOutput);
function printOutput(){

    window.print();
  
}


