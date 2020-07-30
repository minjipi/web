var special_re = /[~!@#$%^&*()_+|<>?:{}]/ //특수문자
var re = /^[a-zA-Z0-9]{4,12}$/ // a~z,A~Z,0~9까지 사용가능하며 4~12자리 입력
// var element_layer = document.getElementById('layer');


var id;
var id_num_1
var id_num_2
var idok = 0; //id확인의 카운트를 세주는 변수
var pwok = 0; // password확인의 카운트를 세주는 변수
var mailok = 0; //mail 주소 확인의 카운트를 세주는 변수
var numok = 0; //주민등록번호 확인의 카운트를 세주는 변수


//공백제거
function noSpaceForm(obj) {
  var str_space = /\s/; // 공백 체크
  if (str_space.exec(obj.value)) { // 공백 체크
    alert("해당 항목에는 공백을 사용할 수 없습니다!\n공백이 제거됩니다.");
    obj.focus();
    obj.value = obj.value.replace(' ', ''); // 공백제거
    return false;
  }
}

//데이터 받아오기
function valiData() {
  id = document.getElementById("id").value;

  id_num_1 = document.getElementById("id_num_1").value;
  id_num_2 = document.getElementById("id_num_2").value;
}

function checkID() { //아이디 유효성 검사
  valiData();
  if (re.test(id) == true && !(special_re.test(id)) == true) { //re에 만족하고
    //찾는 문자열이, 들어있는지 아닌지 확인, 찾으려는 문자가 들어있으면, 결과는 "true"
    alert(id + " : 사용 가능한 아이디 입니다.");
    idok = 1; //idok 1로 변경
  } else {
    alert("ID: 4~12자의 영문 대소문자,숫자만 입력해주세요.");
  }
}

function checkRePw() {
  var pwValue = document.getElementById("pw").value;
  var repwValue = document.getElementById("repw").value;
  var passwordRule = /^[a-zA-Z0-9]{4,12}$/;

  if (pwValue.match(passwordRule) != null) {
    alert("사용 가능한 비밀번호 입니다.")
    pwok = 1;


    if (pwValue == repwValue) {
      //alert("비밀번호가 같습니다")
    } else {
      alert("비밀 번호가 다릅니다.")
      document.getElementById("pw").value = null;
      document.getElementById("repw").value = null
    }
  } else {
    alert("조건에 맞지 않습니다 다시 입력해주세요")
    document.getElementById("pw").value = null;
    document.getElementById("repw").value = null;
  }
}

function verifyEmail() {
  var emailValue = document.getElementById("mail").value;
  var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

  if (emailValue.match(regExp) != null) {
    alert("유효한 이메일 주소입니다.")
    mailok = 1;
  } else {
    alert("이메일이 유효하지 않습니다.")
    document.getElementById("mail").value = null;
  }
}


function checkNum() {
  var id_num1_value = document.getElementById("id_num_1").value;
  var id_num2_value = document.getElementById("id_num_2").value;
  var id_num1_rule = /^(?:[0-9]{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[1,2][0-9]|3[0,1]))/;
  var id_num2_rule = /[1-4][0-9]{6}$/;

  if (id_num1_value.match(id_num1_rule) != null && id_num2_value.match(id_num2_rule) != null) {
    alert("유효한 주민등록번호 입니다.")
    document.getElementById("years").value = id_num1_value[0] + id_num1_value[1];
    document.getElementById("month").value = id_num1_value[2] + id_num1_value[3];
    document.getElementById("day").value = id_num1_value[4] + id_num1_value[5];
    numok = 1;
  } else {
    alert("유효하지 않은 주민등록번호입니다.")
    document.getElementById("id_num_1").value = null;
    document.getElementById("id_num_2").value = null;
  }
}

function sample4_execDaumPostcode() {
  new daum.Postcode({
    oncomplete: function(data) {
      // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

      // 도로명 주소의 노출 규칙에 따라 주소를 조합한다.
      // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
      var fullRoadAddr = data.roadAddress; // 도로명 주소 변수
      var extraRoadAddr = ''; // 도로명 조합형 주소 변수

      // 법정동명이 있을 경우 추가한다. (법정리는 제외)
      // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
      if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
        extraRoadAddr += data.bname;
      }
      // 건물명이 있고, 공동주택일 경우 추가한다.
      if (data.buildingName !== '' && data.apartment === 'Y') {
        extraRoadAddr += (extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName);
      }
      // 도로명, 지번 조합형 주소가 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
      if (extraRoadAddr !== '') {
        extraRoadAddr = ' (' + extraRoadAddr + ')';
      }
      // 도로명, 지번 주소의 유무에 따라 해당 조합형 주소를 추가한다.
      if (fullRoadAddr !== '') {
        fullRoadAddr += extraRoadAddr;
      }

      // 우편번호와 주소 정보를 해당 필드에 넣는다.
      document.getElementById('sample4_postcode').value = data.zonecode; //5자리 새우편번호 사용
      document.getElementById('sample4_roadAddress').value = fullRoadAddr;
      document.getElementById('sample4_jibunAddress').value = data.jibunAddress;

      // 사용자가 '선택 안함'을 클릭한 경우, 예상 주소라는 표시를 해준다.
      if (data.autoRoadAddress) {
        //예상되는 도로명 주소에 조합형 주소를 추가한다.
        var expRoadAddr = data.autoRoadAddress + extraRoadAddr;
        document.getElementById('guide').innerHTML = '(예상 도로명 주소 : ' + expRoadAddr + ')';

      } else if (data.autoJibunAddress) {
        var expJibunAddr = data.autoJibunAddress;
        document.getElementById('guide').innerHTML = '(예상 지번 주소 : ' + expJibunAddr + ')';

      } else {
        document.getElementById('guide').innerHTML = '';
      }
    }
  }).open();
}


function checkAll() {
  if (idok == 1 && pwok == 1 && mailok == 1 && numok == 1) {
    alert("회원가입이 완료되었습니다!")
    window.location.href = "https://github.com/minjipi";
    return true;

  } else {
    if (idok != 1) {
      alert("ID확인을 진행해주세요.")
      return false;
    } else if (pwok != 1) {
      alert("Password 확인을 진행해주세요.")
      return false;
    } else if (mailok != 1) {
      alert("mail 주소 확인을 진행해주세요.")
      return false;
    } else if (numok != 1) {
      alert("주민등록번호 확인을 진행해주세요.")
      return false;
    }
  }
}
