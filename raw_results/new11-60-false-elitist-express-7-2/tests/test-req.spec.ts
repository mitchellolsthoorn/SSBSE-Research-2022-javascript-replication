export {}
const req = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/request.js");

describe('req', () => {
	it('test for req', async () => {
		const _reqJgdf7Aj = req
		const _returnValuepqINKJQ = await _reqJgdf7Aj.acceptsLanguages()
		const _returnValueBRXpJYe = await _reqJgdf7Aj.acceptsCharsets()
		const _returnValueLh4XaM1 = await _reqJgdf7Aj.acceptsEncodings()
		const _namep7IaSyF = "nPMUsPVgtByLMNhu7FWXAF9xfiYqGPfIE12OPAh43bqizoENCcFLuPAGnBFAxEwIRbCB8Th8BEfQO7zsc";
		const _defaultValueVIXTjtP = false;
		const _returnValueXSBkcg7 = await _reqJgdf7Aj.param(_namep7IaSyF, _defaultValueVIXTjtP)
	});

	it('test for req', async () => {
		const _reqCOrh7aC = req
		const _returnValueht723Zy = await _reqCOrh7aC.acceptsCharsets()
		const _nameu2DcUsi = "z1gIPaAhTkj5V";
		const _defaultValueK6TUGPb = true;
		const _returnValuee3GdxaJ = await _reqCOrh7aC.param(_nameu2DcUsi, _defaultValueK6TUGPb)
		const _returnValueWIqJtxF = undefined;
		const _returnValueB4dXWvG = () => { return _returnValueWIqJtxF };
		const _sizej5ZOkUs = () => { return _returnValueB4dXWvG };
		const _optionsu6Kdct = true;
		const _returnValuexaSSUT = await _reqCOrh7aC.range(_sizej5ZOkUs, _optionsu6Kdct)
	});

	it('test for req', async () => {
		const _reqTMfBBTr = req
		const _returnValueHy7NrmA = await _reqTMfBBTr.acceptsLanguages()
		const _sizeqkM3Kfm = null;
		const _optionsBx4aiT2 = undefined;
		const _returnValueDUgBZMw = await _reqTMfBBTr.range(_sizeqkM3Kfm, _optionsBx4aiT2)
		const _typesqzslABL = {
		
	}
		const _returnValueDoKoOQK = await _reqTMfBBTr.is(_typesqzslABL)
	});

	it('test for req', async () => {
		const _reqb5Z6opS = req
		const _typesPanEm5k = {
		
	}
		const _returnValuehY7nqZ8 = await _reqb5Z6opS.is(_typesPanEm5k)
		const _arrayValueF28LOc = 4.907657243583181;
		const _arrayValueBg866mg = 7.35945120863294;
		const _returnValueBwceQAg = "2zjAy1yDKHU9zeIB2nbOQLzN22l";
		const _arrayValueMjkucBv = () => { return _returnValueBwceQAg };
		const _typesTCWM1J = [_arrayValueF28LOc, _arrayValueBg866mg, _arrayValueMjkucBv]
		const _returnValueNxQK5kQ = await _reqb5Z6opS.is(_typesTCWM1J)
		const _returnValuelEzJqJk = await _reqb5Z6opS.acceptsEncodings()
	});
})