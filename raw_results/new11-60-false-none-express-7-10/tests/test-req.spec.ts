export {}
const req = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/request.js");

describe('req', () => {
	it('test for req', async () => {
		const _reqyOerlV5 = req
		const _namelK6G3Hf = "bEhVVdqqxlCXFl7Hsk";
		const _defaultValuet0uDJ9Z = null;
		const _returnValuenPpwPW = await _reqyOerlV5.param(_namelK6G3Hf, _defaultValuet0uDJ9Z)
		const _returnValuevtRvu7U = await _reqyOerlV5.acceptsLanguages()
		const _arrayValueQKc53WT = -6.607029628594739;
		const _arrayValuesqHXWgU = "scEFJIwImjlgLvJmPCqGv";
		const _typesQjvrxFP = [_arrayValueQKc53WT, _arrayValuesqHXWgU]
		const _returnValueKYbBM7A = await _reqyOerlV5.is(_typesQjvrxFP)
	});

	it('test for req', async () => {
		const _reqRQJB15J = req
		const _returnValueBfxwRTQ = await _reqRQJB15J.acceptsCharsets()
		const _typesWXWAlLJ = true;
		const _returnValuefP6Tzvm = await _reqRQJB15J.is(_typesWXWAlLJ)
	});

	it('test for req', async () => {
		const _reqKLnGL7H = req
		const _typesR4p0hGh = null;
		const _returnValueJie8uuY = await _reqKLnGL7H.is(_typesR4p0hGh)
		const _sizeHvPoFoM = -2.1144837829508925;
		const _optionsnWlOuR = 3.818246424475017;
		const _returnValueLQcioh3 = await _reqKLnGL7H.range(_sizeHvPoFoM, _optionsnWlOuR)
		const _typeseB5akXF = true;
		const _returnValueWkRb8tp = await _reqKLnGL7H.is(_typeseB5akXF)
		const _returnValuesCKv731 = await _reqKLnGL7H.acceptsLanguages()
	});
})