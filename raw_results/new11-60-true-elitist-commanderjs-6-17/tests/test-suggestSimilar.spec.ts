export {}
const {suggestSimilar} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/suggestSimilar.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('suggestSimilar', () => {
	it('test for suggestSimilar', async () => {
		const _startsWithMNjsCgS = undefined;
		const _returnValuep0xQ10O = "E1UV1BkPUsf5WnFg3YnUTRVnMEkHGpmSYsL7qBijma6aOXDAwbKy";
		const _sliceIMmCk94 = () => { return _returnValuep0xQ10O };
		const _lengthKbOK42F = 9.610449656783715;
		const _wordGnXteX0 = {
			"startsWith": _startsWithMNjsCgS,
		"slice": _sliceIMmCk94,
		"length": _lengthKbOK42F
	}
		const _lengthh8dLaPD = 0.8497429145799629;
		const _returnValuewC82A6E = true;
		const _mapfCX127q = () => { return _returnValuewC82A6E };
		const _returnValuei5fMYFL = "VwOb6";
		const _forEachJBDrF44 = () => { return _returnValuei5fMYFL };
		const _candidatesIoQNmgT = {
			"length": _lengthh8dLaPD,
		"map": _mapfCX127q,
		"forEach": _forEachJBDrF44
	}
		const _returnValuezdZv07 = await suggestSimilar(_wordGnXteX0, _candidatesIoQNmgT)
	});

	it('test for suggestSimilar', async () => {
		const _startsWithwlvL8e4 = null;
		const _returnValuelyCcZN1 = []
		const _slicegWD9BUu = () => { return _returnValuelyCcZN1 };
		const _lengthxBnFz0p = -4.827699745163874;
		const _word70glMA = {
			"startsWith": _startsWithwlvL8e4,
		"slice": _slicegWD9BUu,
		"length": _lengthxBnFz0p
	}
		const _candidatesVgdw4It = undefined;
		const _returnValueFetUeRh = await suggestSimilar(_word70glMA, _candidatesVgdw4It)
	});

	it('test for suggestSimilar', async () => {
		const _returnValuefbYktvD = true;
		const _startsWitho5h519h = () => { return _returnValuefbYktvD };
		const _returnValueQ3pdiD = "k6e8a7VZgvmFqKFshEOJW";
		const _sliceLNz7wUI = () => { return _returnValueQ3pdiD };
		const _lengthb5szVZP = -0.23670535733271336;
		const _wordLbIPYjF = {
			"startsWith": _startsWitho5h519h,
		"slice": _sliceLNz7wUI,
		"length": _lengthb5szVZP
	}
		const _candidatesl0dVbqz = "dvyquLdOvPHV9cVtd2qtCKXH9wWrQQxEoVWOpRcHbQ8vtPJxYkBeomilafyafG12lgMHrGkpJDT3znX6yNyyU";
		const _returnValueJwJisK1 = await suggestSimilar(_wordLbIPYjF, _candidatesl0dVbqz)
	});

	it('test for suggestSimilar', async () => {
		const _wordIFFAGCY = "YzjLdMyL4r27ipQ77XXYV4AJlkP3DlH634TV";
		const _arrayValueqLN6hUh = "WtdTrC";
		const _candidateswMYjti8 = [_arrayValueqLN6hUh]
		const _returnValuePaiJ5n6 = await suggestSimilar(_wordIFFAGCY, _candidateswMYjti8)
	});

	it('test for suggestSimilar', async () => {
		const _wordT8csojU = "SRqL1HjHLQRUbHc7uXsKYc3P10k5qAuVFXZbApAYyPGV9FCu4Qp76nbs2nbfB6dauvakMR";
		const _returnValueuopBfO = {
		
	}
		const _returnValueVhSMwe = () => { return _returnValueuopBfO };
		const _arrayValueKLtAFnk = () => { return _returnValueVhSMwe };
		const _arrayValuet8zYcY0 = {
		
	}
		const _arrayValueZPId0Sa = 8.719147531639177;
		const _arrayValuesvD4rKJ = -7.623350280727639;
		const _arrayValueUtSO9DO = null;
		const _candidatesCjFiTto = [_arrayValueKLtAFnk, _arrayValuet8zYcY0, _arrayValueZPId0Sa, _arrayValuesvD4rKJ, _arrayValueUtSO9DO]
		const _returnValueQWFpfoP = await suggestSimilar(_wordT8csojU, _candidatesCjFiTto)
	});

	it('test for suggestSimilar', async () => {
		const _wordGyU9LDH = "hOhLboOFPAHcYALcax8zLMPLx2TA8EdG3SQa";
		const _arrayValueSRhyvd2 = "3coWHqhOVo5MfWSpl1YLjX8mchFpiRrPT9nr";
		const _candidates0pd0s5 = [_arrayValueSRhyvd2]
		const _returnValuegdImPPD = await suggestSimilar(_wordGyU9LDH, _candidates0pd0s5)
	});
})