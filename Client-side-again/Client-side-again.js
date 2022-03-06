var WordList = [
  "37115}",
  "_again_3",
  "this",
  "Password\x20Verified",
  "Incorrect\x20password",
  "getElementById",
  "value",
  "substring",
  "picoCTF{",
  "not_this",
];
(function (stringArray, index) {
  var swapFunction = function (i) {
    while (--i) {
      stringArray["push"](stringArray["shift"]());
    }
  };
  swapFunction(++index);
})(WordList, 0x1b3);

/*
WordList = [
    "getElementById",
    "value",
    "substring",
    "picoCTF{",
    "not_this",
    "37115}",
    "_again_3",
    "this",
    "Password Verified",
    "Incorrect password"
]
*/

var _0x4b5b = function (index, _0x4b81bb) {
  return WordList[index];
};

function verify() {
  checkpass = document[_0x4b5b("0x0")]("pass")[_0x4b5b("0x1")];
  split = 0x4;
  if (checkpass[_0x4b5b("0x2")](0x0, split * 0x2) == _0x4b5b("0x3")) {
    if (checkpass[_0x4b5b("0x2")](0x7, 0x9) == "{n") {
      if (
        checkpass[_0x4b5b("0x2")](split * 0x2, split * 0x2 * 0x2) ==
        _0x4b5b("0x4")
      ) {
        if (checkpass[_0x4b5b("0x2")](0x3, 0x6) == "oCT") {
          if (
            checkpass[_0x4b5b("0x2")](split * 0x3 * 0x2, split * 0x4 * 0x2) ==
            _0x4b5b("0x5")
          ) {
            if (checkpass["substring"](0x6, 0xb) == "F{not") {
              if (
                checkpass[_0x4b5b("0x2")](
                  split * 0x2 * 0x2,
                  split * 0x3 * 0x2
                ) == _0x4b5b("0x6")
              ) {
                if (checkpass[_0x4b5b("0x2")](0xc, 0x10) == _0x4b5b("0x7")) {
                  alert(_0x4b5b("0x8"));
                }
              }
            }
          }
        }
      }
    }
  } else {
    alert(_0x4b5b("0x9"));
  }
}

/*
function verify() {
  checkpass = document["getElementById"]("pass")[value];
  split = 0x4;
  if (checkpass["substring"](0x0, split * 0x2) == "picoCTF{") {
    if (checkpass["substring"](0x7, 0x9) == "{n") {
      if (
        checkpass["substring"](split * 0x2, split * 0x2 * 0x2) ==
        "not_this"
      ) {
        if (checkpass["substring"](0x3, 0x6) == "oCT") {
          if (
            checkpass["substring"](split * 0x3 * 0x2, split * 0x4 * 0x2) ==
            "37115}"
          ) {
            if (checkpass["substring"](0x6, 0xb) == "F{not") {
              if (
                checkpass["substring"](
                  split * 0x2 * 0x2,
                  split * 0x3 * 0x2
                ) == "_again_3"
              ) {
                if (checkpass["substring"](0xc, 0x10) == "this") {
                  alert("Password Verified");
                }
              }
            }
          }
        }
      }
    }
  } else {
    alert("Incorrect password");
  }
}
*/
