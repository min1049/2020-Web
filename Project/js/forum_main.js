var username = "윤영민";
var count = 2;
var look = 0;

var boardlist = new Array();

function changeWrite(){
    var board = document.getElementById("board");
    var writeform = document.getElementById("writeform");

    board.style.display="none";
    writeform.style.display="block";
}

function openScript(count,btn){
  tmp = count
  board.style.display = "none";
  backbtn.style.display = "block";
  boardlist[tmp].style.display = "block";
  btn.style.display="block";
  
}

function backBoard(count){
  tmp = count;
  board.style.display = "block";
  writeform.style.display = "none";
  boardlist[tmp].style.display = "none";
  backbtn.style.display = "none";
  this.style.display="none";
}


function registerWrite(){
    var q_title = document.getElementById("q_title");
    var q_type = document.getElementById('q_type');
    var q_description = document.getElementById('q_description');
    
    var board = document.getElementById("board");
    var writeform = document.getElementById("writeform");

    qna_tbody = document.getElementById('qna_list');
    
    board.style.display="block";
    writeform.style.display="none";

    if(!q_description.value||!q_title.value){
        alert("내용이 없습니다")
    }

    else{
        makeScript(count);
        add_row(backbtn);
        count++;
        backbtn.style.display = "none";
        /* form  초기화 */
        q_title.value = '';
        q_description.value = '';
        q_type.value ='';
    }
    
}

function add_row(btn) {
    this.btn = btn;
    qna_tbody = document.getElementById('qna_list');
    row = qna_tbody.insertRow(0); // 상단에 추가
    //row = qna_tbody.insertRow( qna_tbody.rows.length ); // 하단에 추가
    cell1 = row.insertCell(0);
    cell2 = row.insertCell(1);
    cell3 = row.insertCell(2);
    cell4 = row.insertCell(3);
    cell5 = row.insertCell(4);
    cell6 = row.insertCell(5);

    cell1.innerHTML = count;
    cell2.innerHTML = q_type.value;
    //cell3.innerHTML = q_title.value;
    cell4.innerHTML = username;
    cell5.innerHTML = new Date().toUTCString();
    cell6.innerHTML = look;

    var newa = document.createElement("a");
    newa.setAttribute("onclick","openScript(cell1.innerHTML,btn)");
    cell3.appendChild(newa);
    newa.innerHTML = q_title.value;
}



  function makeScript(count){
    divcount = count;
    maindiv = document.createElement("div");
    maindiv.getAttribute("class","main");

    newform = document.createElement("form");
    newform.getAttribute("id","scription")

    introdiv = document.createElement("div");
    introdiv.getAttribute("class", "introduction");

    namep = document.createElement("p");
    namep.getAttribute("id","name");
    namep.innerHTML = "No."+ count +" "+ username;

    timep = document.createElement("p");
    timep.getAttribute("id","time");
    timep.innerHTML = "시간";

    titlep = document.createElement("p");
    titlep.getAttribute("id","title");
    titlep.innerHTML=q_title.value;

    writingp = document.createElement("p");
    writingp.getAttribute("id","writing");
    writingp.innerHTML=q_description.value;

    backbtn = document.createElement("button");
    backbtn.innerHTML = "목록"
    backbtn.setAttribute("onclick","backBoard(divcount)")
    backbtn.setAttribute("id", "backbtn");

    
    maindiv.appendChild(newform);
    

    newform.appendChild(introdiv);
    newform.appendChild(titlep);
    newform.appendChild(writingp);

    introdiv.appendChild(namep);
    introdiv.appendChild(timep);

    backbtn.style.float ="right";
    backbtn.style.float ="bottom";

    maindiv.style.borderTop= "3px solid cornflowerblue";
    maindiv.style.borderBottom = "3px solid gray";
    maindiv.style.width = "700px";
    maindiv.style.height = "600px";

    introdiv.style.float="right";
    introdiv.style.maring-"100px";

    namep.style.fontSize ="15px";
    namep.style.marginTop="0px";
    namep.style.marginBottom = "0px";
    namep.style.fontWeight = "bold";

    timep.style.fontSize ="5px";
    timep.style.marginTop="3px";

    titlep.style.fontSize ="24px";
    titlep.style.marginTop="0px";
    titlep.style.marginBottom = "0px";
    titlep.style.fontWeight = "bold";

    writingp.style.fontSize ="16px";
    writingp.style.marginTop ="10px"

    parent = document.getElementById("content");

    parent.appendChild(maindiv);

    if(count==2){
        parent.appendChild(backbtn);
    }
    
    maindiv.style.display = "none";

    boardlist[divcount] = maindiv;

    return backbtn;
}
