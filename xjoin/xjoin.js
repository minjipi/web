var special_re = /[~!@#$%^&*()_+|<>?:{}]/ //특수문자
var re = /^[a-zA-Z0-9]{4,12}$/ // a~z,A~Z,0~9까지 사용가능하며 4~12자리 입력
var element_layer = document.getElementById('layer');


var id;
var id_num_1
var id_num_2

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

//정규식 사용 아이디 유효성 검사
function checkID() {
  valiData();
  if (re.test(id) == true && !(special_re.test(id)) == true) { //re에 만족하고
    //찾는 문자열이, 들어있는지 아닌지 확인, 찾으려는 문자가 들어있으면, 결과는 "true"
    alert(id + " : 사용 가능한 아이디 입니다.");
  } else {
    alert("ID: 4~12자의 영문 대소문자,숫자만 입력해주세요.");
  }
}

//정규식 사용x 아이디 유효성 검사
function checkID1() {
  id = document.getElementById("id").value;

  if (id.length >= 4 && id.length <= 12) {
    alert("사용 가능한 ID 입니다.")
  } else {
    alert("사용 불가능한 ID 입니다.")
    document.getElementById("id").value = null;
  }
}

// 정규식 사용 패스워드 체크
function checkRePw() {
  var pwValue = document.getElementById("pw").value;
  var repwValue = document.getElementById("repw").value;
  var passwordRule = /^[a-zA-Z0-9]{4,12}$/;

  if (pwValue.match(passwordRule) != null) {
    alert("사용 가능한 비밀번호 입니다.")
    if (pwValue == repwValue) {
      alert("비밀번호가 같습니다")
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
// 정규식 사용x 패스워드 체크
function checkRePW1() {
  var pwValue = document.getElementById("pw").value;
  var repwValue = document.getElementById("repw").value;

  if (4 <= pwValue.length <= 12) {
    if (pwValue == repwValue) {
      alert("사용 가능한 비밀번호 입니다.")
    } else {
      alert("비밀 번호가 다릅니다.")
      document.getElementById("pw").value = null;
      document.getElementById("repw").value = null;
    }

  } else {
    alert("사용 불가능한 비밀번호 입니다.")
    document.getElementById("pw").value = null;
    document.getElementById("repw").value = null;
  }
}

// 정규식 사용 이메일 체크
function verifyEmail() {
  var emailValue = document.getElementById("mail").value;
  var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

  if (emailValue.match(regExp) != null) {
    alert("유효한 이메일 주소입니다.")
  } else {
    alert("이메일이 유효하지 않습니다.")
    document.getElementById("mail").value = null;
  }
}

//정규식 사용 x 이메일 체크
function verifyEmail1() {
  var emailValue = document.getElementById("mail").value;
  var findAt = emailValue.indexOf('@')
  var findDot = emailValue.indexOf('.')

  if (findAt > 0 && findDot > 0 && findAt < findDot) {
    alert("이메일 주소가 유효합니다.")
  } else {
    alert("이메일 주소가 유효하지 않습니다.")
    document.getElementById("mail").value = null;
  }
}

//정규식 사용 주민등록번호
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
  } else {
    alert("유효하지 않은 주민등록번호입니다.")
    document.getElementById("id_num_1").value = null;
    document.getElementById("id_num_2").value = null;
  }
}

//정규식 사용x 주민등록번호
function checkNum1() {
  var id_num1_value = document.getElementById("id_num_1").value;
  var id_num2_value = document.getElementById("id_num_2").value;
  var id_num1_two = praseInt(id_num1_value[2] + id_num1_value[3]);
  var id_num1_three = praseInt(id_num1_value[4] + id_num1_value[5]);
  var id_num2_one = parseInt(id_num2_value[0])

  if (id_num1_value.length == 6 && id_num2_value.length == 7) {
    if (id_num1_two <= 12 && id_num1_three <= 31 && id_num2_one <= 4) {
      alert("유효한 주민등록번호입니다.")
    } else {
      alert("주민등록번호가 유효하지 않습니다.")
    }
  }
}

function closeDaumPostcode() {
  // iframe을 넣은 element를 안보이게 한다.
  element_layer.style.display = 'none';
}

function sample6_execDaumPostcode() {
  new daum.Postcode({
    oncomplete: function(data) {
      // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

      // 각 주소의 노출 규칙에 따라 주소를 조합한다.
      // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
      var fullAddr = ''; // 최종 주소 변수
      var extraAddr = ''; // 조합형 주소 변수

      // 사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
      if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
        fullAddr = data.roadAddress;

      } else { // 사용자가 지번 주소를 선택했을 경우(J)
        fullAddr = data.jibunAddress;
      }

      // 사용자가 선택한 주소가 도로명 타입일때 조합한다.
      if (data.userSelectedType === 'R') {
        //법정동명이 있을 경우 추가한다.
        if (data.bname !== '') {
          extraAddr += data.bname;
        }
        // 건물명이 있을 경우 추가한다.
        if (data.buildingName !== '') {
          extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
        }
        // 조합형주소의 유무에 따라 양쪽에 괄호를 추가하여 최종 주소를 만든다.
        fullAddr += (extraAddr !== '' ? ' (' + extraAddr + ')' : '');
      }

      // 우편번호와 주소 정보를 해당 필드에 넣는다.
      document.getElementById('sample6_postcode').value = data.zonecode; //5자리 새우편번호 사용
      document.getElementById('sample6_address').value = fullAddr;

      // 커서를 상세주소 필드로 이동한다.
      document.getElementById('sample6_address2').focus();
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
