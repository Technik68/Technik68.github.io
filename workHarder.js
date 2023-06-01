function min(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  }
  
  function max(a, b) {
    if (a > b) {
      return a;
    } else {
      return b;
    }
  }
  
  function rav(a, b) {
    if (a == b) {
      return;
    }
  }
  
  function calculate() {
    var number1 = parseFloat(document.getElementById("number1").value);
    var number2 = parseFloat(document.getElementById("number2").value);
  
    var maximum = max(number1, number2);
    var minimum = min(number1, number2);
    var equality = number1 === number2 ? "Числа равны" : "Числа не равны";
  
    document.getElementById("maximum").textContent = "Максимум: " + maximum;
    document.getElementById("minimum").textContent = "Минимум: " + minimum;
    document.getElementById("equality").textContent = equality;
  }
  
  function nameReturn() {
    var name = document.getElementById("name").value;
    var admin = name;
    document.getElementById("admin").textContent = "Админ: " + admin;
  }
  
  function age() {
    var age = document.getElementById("age").value;
    var question = confirm("Ваш возраст действительно " + age + "?");
    if (question == true) {
      document.getElementById("ageOutput").textContent = "Возраст: " + age;
    } else {
      alert("Введите возраст заново");
      age = null;
    }
    if (age < 0) {
      alert("Возраст не может быть отрицательным");
      age = null;
  
      document.getElementById("ageOutput").textContent =
        "Введите ваш возраст заново";
    }
  }
  
  function disableCheckbox() {
    var checkBoxed = document.querySelectorAll('input[type="checkbox"]');
  
    for (var i = 0; i < checkBoxed.length; i++) {
      checkBoxed[i].disabled = true;
    }
  }
  
  function enableCheckbox() {
    var checkBoxed = document.querySelectorAll('input[type="checkbox"]');
  
    for (var i = 0; i < checkBoxed.length; i++) {
      checkBoxed[i].disabled = false;
    }
  }
  
  function isEmpty(str) {
    if (str.trim() == "") return true;
  
    return false;
  }
  
  function enable_disable_all() {
    var nameAdmin = document.getElementById("name").value;
    var ageAdmin = document.getElementById("age").value;
  
    var polMas = document.getElementById("maskulinum");
    var polFem = document.getElementById("feminine");
  
    var vosmutCheck = document.getElementById("vosmut");
    var vosmutLableCheck = document.getElementById("label_for_vosmut");
    if (ageAdmin > 0 && isEmpty(nameAdmin) == false) {
      if (polMas.checked|| polFem.checked) {
        vosmutCheck.style.visibility = "visible";
        vosmutCheck.disabled = "false";
        vosmutLableCheck.style.visibility = "visible";
        vosmutCheck.disabled = false;
      }
    }
  }
  
  function final_checkbox() {
    var vosmutCheck = document.getElementById("vosmut");
    var vosmutLableCheck = document.getElementById("label_for_vosmut");
    if (vosmutCheck.checked) {
      document.getElementById("name").disabled = true;
      document.getElementById("age").disabled = true;
  
      document.getElementById("maskulinum").disabled = true;
      document.getElementById("feminine").disabled = true;
  
      disableCheckbox();
      vosmutCheck.disabled = false;
    } else {
      document.getElementById("name").disabled = false;
      document.getElementById("age").disabled = false;
  
      document.getElementById("maskulinum").disabled = false;
      document.getElementById("feminine").disabled = false;
  
      enableCheckbox();
      vosmutCheck.disabled = true;
      vosmutCheck.style.visibility = "hidden";
      vosmutLableCheck.style.visibility = "hidden";
    }
  }
  
  function check() {
    var resultMath = document.getElementById("math");
    var resultProg = document.getElementById("prog");
    var resultEducation = document.getElementById("education");
    var resultEnglish = document.getElementById("english");
    var resultDesign = document.getElementById("design");
    var skills = [
      resultMath,
      resultProg,
      resultDesign,
      resultEnglish,
      resultEducation,
    ];
    var skillsKol = 0;
  
    for (var i = 0; i < 5; i++) {
      if (skills[i].checked) {
        skillsKol++;
      }
    }
    if (resultEducation.checked && skillsKol > 2) {
      alert("Вы классный!");
    } else {
      alert("Вероятно, Вы не пройдёте");
    }
    if (skillsKol > 0) {
      enable_disable_all();
    }
  }
  