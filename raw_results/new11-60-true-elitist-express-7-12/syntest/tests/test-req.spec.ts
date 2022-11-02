export {}
const req = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/request.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('req', () => {
	it('test for req', async () => {
		const _reqJbjYZi = req
		const _returnValueLYhuQjM = await _reqJbjYZi.acceptsLanguages()
		const _nameaJwjngr = "svwMhtrGhtLVgQgYGwy97WOJTlReai6STcmlpRsE3NaNIn6TFTE8xAyB4NlGbQaIjpp9nNB6bIUfM9IL4arRqUNgJDyOfD2";
		const _defaultValuefyo310n = true;
		const _returnValueKH9DLm0 = await _reqJbjYZi.param(_nameaJwjngr, _defaultValuefyo310n)
	});

	it('test for req', async () => {
		const _reqnvqKSC = req
		const _returnValueuZLZVtT = await _reqnvqKSC.acceptsCharsets()
		const _returnValuejf3lStF = await _reqnvqKSC.acceptsEncodings()
		const _returnValueJHfnt8F = 5.367754585422855;
		const _returnValueICEHAiL = () => { return _returnValueJHfnt8F };
		const _returnValuef2H86XC = () => { return _returnValueICEHAiL };
		const _toLowerCaseB2Fyisz = () => { return _returnValuef2H86XC };
		const _nameCy2wz21 = {
			"toLowerCase": _toLowerCaseB2Fyisz
	}
		const _returnValueNGY2kRM = await _reqnvqKSC.header(_nameCy2wz21)
	});

	it('test for req', async () => {
		const _reqXdnZWzv = req
		const _nameYOYsU0I = "483";
		const _defaultValueSrpfjM = "PahADtUSmWdtJ8cGD4";
		const _returnValueSzLLvxH = await _reqXdnZWzv.param(_nameYOYsU0I, _defaultValueSrpfjM)
		const _returnValueTDwWdoE = await _reqXdnZWzv.acceptsLanguages()
		const _arrayValuedl4PKCd = 0.9997862060549991;
		const _arrayValueEB27DHv = 6.374925271074048;
		const _sizefo5cwvF = [_arrayValuedl4PKCd, _arrayValueEB27DHv]
		const _optionsyizAT4U = {
		
	}
		const _returnValueFjWsJRg = await _reqXdnZWzv.range(_sizefo5cwvF, _optionsyizAT4U)
	});

	it('test for req', async () => {
		const _reqwZYAPnc = req
		const _sizeRyVR26s = undefined;
		const _optionsDLUGo4s = -4.171972270239138;
		const _returnValuevYKHO5Y = await _reqwZYAPnc.range(_sizeRyVR26s, _optionsDLUGo4s)
		const _sizeAZHPGBf = []
		const _optionsJMvyWqz = null;
		const _returnValueoWFtNoa = await _reqwZYAPnc.range(_sizeAZHPGBf, _optionsJMvyWqz)
		const _returnValueroB6sv4 = await _reqwZYAPnc.accepts()
		const _typesNWSlsMc = 1.5543376747394007;
		const _returnValuemkLkjO8 = await _reqwZYAPnc.is(_typesNWSlsMc)
	});

	it('test for req', async () => {
		const _req0hE9KP = req
		const _returnValueU4VeJWJ = await _req0hE9KP.accepts()
		const _returnValuemQIFi8K = await _req0hE9KP.acceptsLanguages()
		const _arrayValuedYYsumt = undefined;
		const _typesRgT7HEt = [_arrayValuedYYsumt]
		const _returnValuecPKZPkW = await _req0hE9KP.is(_typesRgT7HEt)
		const _returnValuexUp3ryF = await _req0hE9KP.accepts()
	});
})