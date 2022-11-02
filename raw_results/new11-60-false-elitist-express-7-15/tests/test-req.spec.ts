export {}
const req = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/request.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('req', () => {
	it('test for req', async () => {
		const _reqQHf7AEE = req
		const _nameiKKBwAZ = "VUljKPFoB8lqTpjnVZXBAysuue4WBqcnG9zS55oYECpDfXwQHj8We2mwQI8FplhPQP";
		const _arrayValueQEAfcsT = null;
		const _arrayValuehtpHWMT = true;
		const _returnValueQf8lpdB = [_arrayValueQEAfcsT, _arrayValuehtpHWMT]
		const _defaultValueD0vfrPE = () => { return _returnValueQf8lpdB };
		const _returnValue8J4Ycb = await _reqQHf7AEE.param(_nameiKKBwAZ, _defaultValueD0vfrPE)
		const _returnValueYiN0w4 = true;
		const _toLowerCaseFbJFcxk = () => { return _returnValueYiN0w4 };
		const _namem9Pje65 = {
			"toLowerCase": _toLowerCaseFbJFcxk
	}
		const _returnValueDaot6Cb = await _reqQHf7AEE.header(_namem9Pje65)
		const _returnValuesNlDLSC = await _reqQHf7AEE.acceptsCharsets()
		const _returnValueIsQECe = await _reqQHf7AEE.accepts()
	});

	it('test for req', async () => {
		const _reqCbHXKPQ = req
		const _returnValuetkqdOx9 = await _reqCbHXKPQ.acceptsEncodings()
		const _returnValueQSDHu69 = await _reqCbHXKPQ.acceptsEncodings()
		const _sizeNt9z3bE = false;
		const _optionsPX9GJJ3 = {
		
	}
		const _returnValueIVZBkTC = await _reqCbHXKPQ.range(_sizeNt9z3bE, _optionsPX9GJJ3)
		const _sizeKdD47cr = "avgOl8wLTVLuTZeXnN96Z3Ad17IHHmmCUaNqHCGPHeZCsO17XwVuZvrb2RaLdZO16Ow7FVGKSLhpTjkdOB1Gs5x";
		const _optionscDwKxwi = undefined;
		const _returnValueKbGY0fj = await _reqCbHXKPQ.range(_sizeKdD47cr, _optionscDwKxwi)
	});

	it('test for req', async () => {
		const _reqI0CEAAm = req
		const _typesEVZGB2J = {
		
	}
		const _returnValueKW0o8C = await _reqI0CEAAm.is(_typesEVZGB2J)
	});

	it('test for req', async () => {
		const _reqMuFI3Jd = req
		const _arrayValueczIyCDe = {
		
	}
		const _arrayValueshvE1On = undefined;
		const _typesvCWA0e3 = [_arrayValueczIyCDe, _arrayValueshvE1On]
		const _returnValueb0Rfmbi = await _reqMuFI3Jd.is(_typesvCWA0e3)
		const _nameXWwJpRB = "oIN7N9V9lQk3qjdujSKMBC3VDb7BAgkBphkBBOPa5Cit81";
		const _defaultValueoCJPKj = "TKFeiN1dRmnRJC6F";
		const _returnValueWvYiQGt = await _reqMuFI3Jd.param(_nameXWwJpRB, _defaultValueoCJPKj)
		const _returnValuemtEaBiZ = await _reqMuFI3Jd.accepts()
	});
})