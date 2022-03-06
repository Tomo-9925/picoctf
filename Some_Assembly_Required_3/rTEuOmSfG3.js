const values = ['exports', '270328ewawLo', 'instantiate', '1OsuamQ', 'Incorrect!', 'length', 'copy_char', 'value', '1512517ESezaM', 'innerHTML', 'check_flag', 'result', '1383842SQRPPf', '924408cukzgO', 'getElementById', '418508cLDohp', 'input', 'Correct!', '573XsMMHp', 'arrayBuffer', '183RUQBDE', '38934oMACea'];
const getValue = function(index, _0x2ac888) {
    index = index - 0x11d;
    let value = values[index];
    return value;
};
(function(array, _0x252604) {
    const getValueFunction = getValue;
    while (!![]) {
        try {
            const result = -parseInt(getValueFunction(0x122)) + -parseInt(getValueFunction(0x12f)) + -parseInt(getValueFunction(0x126)) * -parseInt(getValueFunction(0x12b)) + -parseInt(getValueFunction(0x132)) + parseInt(getValueFunction(0x124)) + -parseInt(getValueFunction(0x121)) * -parseInt(getValueFunction(0x11f)) + parseInt(getValueFunction(0x130));
            if (result === _0x252604) break;
            else array['push'](array['shift']());
        } catch (_0x289152) {
            array['push'](array['shift']());
        }
    }
}(values, 0xed04c));
let exports;
(async () => {
    const getValueFunction = getValue;
    let fetchData = await fetch('./qCCYI0ajpD'),
        webAssembly = await WebAssembly[getValueFunction(0x125)](await fetchData[getValueFunction(0x120)]()),
        webAssemblyInstance = webAssembly['instance'];
    exports = webAssemblyInstance[getValueFunction(0x123)];
})();

function onButtonPress() {
    const getValueFunction = getValue;
    let input = document[getValueFunction(0x131)](getValueFunction(0x11d))[getValueFunction(0x12a)];
    for (let i = 0x0; i < input[getValueFunction(0x128)]; i++) {
        exports[getValueFunction(0x129)](input['charCodeAt'](i), i);
    }
    exports[getValueFunction(0x129)](0x0, input[getValueFunction(0x128)]), exports[getValueFunction(0x12d)]() == 0x1 ? document[getValueFunction(0x131)](getValueFunction(0x12e))[getValueFunction(0x12c)] = getValueFunction(0x11e) : document[getValueFunction(0x131)](getValueFunction(0x12e))['innerHTML'] = getValueFunction(0x127);
}
