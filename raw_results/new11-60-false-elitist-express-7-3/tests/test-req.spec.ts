export {}
const req = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/request.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('req', () => {
	it('test for req', async () => {
		const _reqTNr0lG = req
		const _returnValueopZCxtz = await _reqTNr0lG.acceptsEncodings()
		const _returnValuezCfKAA6 = await _reqTNr0lG.acceptsEncodings()
		const _arrayValueZXJNIzt = "dAfhzWx2xAi6rvAQRDapkvDwvKdCBirwHIDg08PLBSE1J1BJIAWKz4QK7zT5tNmr9U7aYyjE";
		const _arrayValueKVWACMy = undefined;
		const _returnValueasYSl6g = [_arrayValueZXJNIzt, _arrayValueKVWACMy]
		const _toLowerCaseko4dtRy = () => { return _returnValueasYSl6g };
		const _nameREChcl = {
			"toLowerCase": _toLowerCaseko4dtRy
	}
		const _returnValueUQfVqx5 = await _reqTNr0lG.header(_nameREChcl)
	});

	it('test for req', async () => {
		const _reqyfGKFDE = req
		const _sizef83ZCZy = true;
		const _optionsamkDsKh = null;
		const _returnValueEIYKCw2 = await _reqyfGKFDE.range(_sizef83ZCZy, _optionsamkDsKh)
		const _nameETSvmtq = "dlULMNkaevmhhyyhBGKJVQOTuMiinhRStkdb9RVXbs";
		const _defaultValueNozBjUv = -5.745491939229299;
		const _returnValuecbMtDsT = await _reqyfGKFDE.param(_nameETSvmtq, _defaultValueNozBjUv)
	});

	it('test for req', async () => {
		const _reqBhLhjz7 = req
		const _returnValuesJwrGr = await _reqBhLhjz7.accepts()
		const _typesDMR8obU = {
		
	}
		const _returnValueBEzINa = await _reqBhLhjz7.is(_typesDMR8obU)
		const _nameChHnnQ = "IBbz4DiPJiiRyBOz5xuTNOCi6i";
		const _defaultValuexxxpiIb = -3.1413202340565096;
		const _returnValuerKzKYvj = await _reqBhLhjz7.param(_nameChHnnQ, _defaultValuexxxpiIb)
		const _returnValue51KVsA = await _reqBhLhjz7.acceptsCharsets()
	});

	it('test for req', async () => {
		const _reqzydJI2X = req
		const _typesMTu6UVx = []
		const _returnValueMcdADfi = await _reqzydJI2X.is(_typesMTu6UVx)
		const _returnValue4sNP7F = await _reqzydJI2X.acceptsCharsets()
		const _returnValueOLFJCjp = await _reqzydJI2X.acceptsEncodings()
		const _returnValueg562dr4 = undefined;
		const _toLowerCasezQZwpIH = () => { return _returnValueg562dr4 };
		const _nameZTf1nt3 = {
			"toLowerCase": _toLowerCasezQZwpIH
	}
		const _returnValueLDVHJlz = await _reqzydJI2X.header(_nameZTf1nt3)
	});
})