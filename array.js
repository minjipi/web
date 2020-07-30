
  var objArray = new Array();

  function inNumber() {
    if (event.keyCode < 48 || event.keyCode > 57) {
      event.returnValue = false;
    }
  }

  function printArray() {
    var objResult = document.getElementById("result");
    var objItem = document.getElementById("item");
    objResult.innerText = objArray.join(" ");

    objItem.value = "";
    objItem.focus();
  }

  function Push() {
    var objItem = document.getElementById("item");
    objArray.push(objItem.value);

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
