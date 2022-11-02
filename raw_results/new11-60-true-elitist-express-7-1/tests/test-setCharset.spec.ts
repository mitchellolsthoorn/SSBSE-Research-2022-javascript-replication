export {}
const {setCharset} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('setCharset', () => {
	it('test for setCharset', async () => {
		const _arrayValueDJuwMLY = "1uWzDuCQrlsiniFKgKzlM1vi78TJaIf73jzAY4AgcuqrAiOMaxCZEz47V8FUurP6Ud3dD8srJUtsT4KzKC46xsnuDG8o";
		const _arrayValuecYNsaiy = false;
		const _arrayValueFMOdFyb = -4.576955960573804;
		const _typeKrD1JiC = [_arrayValueDJuwMLY, _arrayValuecYNsaiy, _arrayValueFMOdFyb]
		const _arrayValueS3WgQXa = "vM1OPUQv5yHoQ4hcSxPOPUjS84NYUQC34yLpjbKeY5wR8QAaGWPFvlQFSYpyCvKXGe3Ddzd5d6ahOlMzP4YOy";
		const _arrayValuekuVJqG = 7.237510429124349;
		const _arrayValueXsZr3OS = -8.178903981093343;
		const _charsetvoXQ31o = [_arrayValueS3WgQXa, _arrayValuekuVJqG, _arrayValueXsZr3OS]
		const _returnValueJ2HreOG = await setCharset(_typeKrD1JiC, _charsetvoXQ31o)
	});

	it('test for setCharset', async () => {
		const _typeyB2gDn = undefined;
		const _charsetjD6Uma = "Vsj";
		const _returnValuePMAJBLS = await setCharset(_typeyB2gDn, _charsetjD6Uma)
	});
})