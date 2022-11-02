export {}
const {setCharset} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('setCharset', () => {
	it('test for setCharset', async () => {
		const _returnValuedQUeFgr = 7.736165941357296;
		const _typeHZkanY = () => { return _returnValuedQUeFgr };
		const _arrayValuejG25Fnz = true;
		const _arrayValueWwAxLFy = null;
		const _arrayValuec7T5mUS = true;
		const _charsetA90eVeM = [_arrayValuejG25Fnz, _arrayValueWwAxLFy, _arrayValuec7T5mUS]
		const _returnValueEh7GQ0o = await setCharset(_typeHZkanY, _charsetA90eVeM)
	});

	it('test for setCharset', async () => {
		const _arrayValuelUtR54E = null;
		const _typekh6hFOk = [_arrayValuelUtR54E]
		const _charsetv8DiB17 = undefined;
		const _returnValueCR1UuOo = await setCharset(_typekh6hFOk, _charsetv8DiB17)
	});
})