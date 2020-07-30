var objArray = new Array();

function inNumber() {
  if (event.keyCode < 48 || event.keyCode > 57) {
    event.returnValue = false;
  }
}

function printArray() {
  //1. var objResult = document.getElementById("result");
  // var objResult = $('#result')[0]

                 //2. objResult.innerText = objArray.join(" ");

  $('#result').text(objArray.join(' '))

  // var objItem = document.getElementById("item");
  //  objItem.value = "";
  $('#item').val("")


  $('#item').focus()

  // objItem.focus();
}

function deactivate() {
  // 누르면 text 가 막힘
  if ($('#item').prop("disabled")) {
    $('#item').prop("disabled", false)
  } else {
    $('#item').prop("disabled", true)
  }



}

function Push() {
  // var objItem = document.getElementById("item");
  // objArray.push(objItem.value);
  objArray.push($('#item').val())
  printArray();

}

function do_Shft() {
  var objValue = objArray.shift();
  printArray();
  alert("꺼내온 값은 " + objValue + " 입니다.");
}


function do_p() {
  var objValue = objArray.pop();
  printArray();
  alert("꺼내온 값은 " + objValue + " 입니다.");
}

function do_re() {
  objArray = objArray.reverse();
  printArray();
}

function do_sort() {
  objArray = objArray.sort();
  printArray();
}

// array에 대한 함수들은 제이쿼리에서 X.
// 어떤 element 들에 대한 변경이나... 그에 대한 것만 변경.
