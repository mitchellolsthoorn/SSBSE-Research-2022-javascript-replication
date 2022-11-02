export {}
const req = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/request.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('req', () => {
	it('test for req', async () => {
		const _req2Di9tV = req
		const _returnValueWwS979Y = await _req2Di9tV.accepts()
		const _returnValueZBLniY = await _req2Di9tV.accepts()
		const _sizeoVitpMx = undefined;
		const _optionsNwJ9z1H = undefined;
		const _returnValueAQfYaiL = await _req2Di9tV.range(_sizeoVitpMx, _optionsNwJ9z1H)
	});

	it('test for req', async () => {
		const _req3ORUgh = req
		const _returnValueHDjNmyv = await _req3ORUgh.acceptsEncodings()
		const _typesXTV366t = "8pWPsXYra1PVz4mDmVTfL8VgVegMUCBqNdSaKkjEMfDu1i8COI4zlHQTOOlCfQ3VKk13hDaWGG8pduooHd";
		const _returnValuebD4jFoQ = await _req3ORUgh.is(_typesXTV366t)
		const _namec6qABoz = null;
		const _returnValueSg54P6 = await _req3ORUgh.header(_namec6qABoz)
		const _returnValueUSHquJj = await _req3ORUgh.accepts()
	});

	it('test for req', async () => {
		const _reqD1hD7ez = req
		const _returnValueQfA34T4 = await _reqD1hD7ez.acceptsCharsets()
		const _returnValuee98Ezab = await _reqD1hD7ez.acceptsCharsets()
		const _returnValuel8nB95w = null;
		const _nameSBCefp3 = () => { return _returnValuel8nB95w };
		const _defaultValueCH4yd9b = null;
		const _returnValueGlQh9Bw = await _reqD1hD7ez.param(_nameSBCefp3, _defaultValueCH4yd9b)
	});

	it('test for req', async () => {
		const _reqHV6tloR = req
		const _sizeNUt9rxm = []
		const _optionsq2sw253 = undefined;
		const _returnValueyVGpiv6 = await _reqHV6tloR.range(_sizeNUt9rxm, _optionsq2sw253)
		const _arrayValue2KTWxv = false;
		const _typespKCk16s = [_arrayValue2KTWxv]
		const _returnValuessd6mBV = await _reqHV6tloR.is(_typespKCk16s)
	});
})