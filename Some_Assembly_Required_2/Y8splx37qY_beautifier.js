// const values = ['copy_char', 'value', '207aLjBod', '1301420SaUSqf', '233ZRpipt', '2224QffgXU', 'check_flag', '408533hsoVYx', 'instance', '278338GVFUrH', 'Correct!', '549933ZVjkwI', 'innerHTML', 'charCodeAt', './aD8SvhyVkb', 'result', '977AzKzwq', 'Incorrect!', 'exports', 'length', 'getElementById', '1jIrMBu', 'input', '615361geljRK'];
// const getValue = function (idx, _0x4d6e6c) {
//   idx = idx - 0xc3;
//   let value = values[idx];
//   return value;
// };
(function (arg1, arg2) {
  while (!![]) {
    try {
      const result = -parseInt("233ZRpipt") * -parseInt("2224QffgXU") + -parseInt("278338GVFUrH") + parseInt("549933ZVjkwI") + parseInt("615361geljRK") + -parseInt("207aLjBod") * parseInt("977AzKzwq") + parseInt("408533hsoVYx") + -parseInt("1jIrMBu") * parseInt("1301420SaUSqf");  // 310022
      if (result === arg2) break;
      else arg1['push'](arg1['shift']());
    } catch (_0x4f8a) {
      arg1['push'](arg1['shift']());
    }
  }
}(values, 0x4bb06));
let exports;
(async () => {
  let fetchResult = await fetch("./aD8SvhyVkb"),
    wasm = await WebAssembly['instance'](await fetchResult['arrayBuffer']()),
    wasmInstance = wasm["instance"];
  exports = wasmInstance["exports"];
})();

function onButtonPress() {
  let input = document.getElementById("input").value;
  for (let i = 0; i < input['length']; i++) {
    exports["copy_char"](input["charCodeAt"](i), i);
  }
  exports['copy_char'](0x0, input["length"]), exports["check_flag"]() == 0x1 ? document['getElementById']("result")["innerHTML"] = "Correct" : document["getElementById"]("result")['innerHTML'] = "Incorrect!";
}
