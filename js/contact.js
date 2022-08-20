function contact() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var issue = document.getElementById("issue").value;
  var more = document.getElementById("more").value;
  if (!name || !email || !issue) {
    alert("please enter all fields");
  } else {
    fetch(
      "https://docs.google.com/forms/d/e/1FAIpQLSd_RkSOXsVsag4RT5VMVOlub_vUel6fMjzgbqNsb9uYD9pSdA/formResponse?usp=pp_url&entry.1699474177=" +
        name +
        "&entry.1403395971=" +
        email +
        "&entry.2030918084=" +
        issue +
        "&entry.1179485993=" +
        more
    );
    alert("Success, please wait for a response");
  }
}

function contact() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var issue = document.getElementById("issue").value;
  var more = document.getElementById("more").value;
  if (!name || !email || !issue) {
    alert("please enter all fields");
  } else {
    fetch(
      "https://docs.google.com/forms/d/e/1FAIpQLSd_RkSOXsVsag4RT5VMVOlub_vUel6fMjzgbqNsb9uYD9pSdA/formResponse?usp=pp_url&entry.1699474177=" +
        name +
        "&entry.1403395971=" +
        email +
        "&entry.2030918084=" +
        issue +
        "&entry.1179485993=" +
        more
    );
    alert("Success, please wait for a response");
  }
}