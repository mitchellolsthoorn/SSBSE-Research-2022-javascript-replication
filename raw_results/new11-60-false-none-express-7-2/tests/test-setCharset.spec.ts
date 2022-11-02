export {}
const {setCharset} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('setCharset', () => {
	it('test for setCharset', async () => {
		const _arrayValueRdr6IBi = false;
		const _typeImGu2VK = [_arrayValueRdr6IBi]
		const _charsetGgtnMEU = undefined;
		const _returnValueWOPwMGi = await setCharset(_typeImGu2VK, _charsetGgtnMEU)
	});

	it('test for setCharset', async () => {
		const _typeATiFNBw = []
		const _returnValueKrwoF4r = undefined;
		const _charsetFMPO9d = () => { return _returnValueKrwoF4r };
		const _returnValueivB8JSG = await setCharset(_typeATiFNBw, _charsetFMPO9d)
	});
})