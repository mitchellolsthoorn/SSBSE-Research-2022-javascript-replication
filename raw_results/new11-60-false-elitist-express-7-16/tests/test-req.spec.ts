export {}
const req = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/request.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('req', () => {
	it('test for req', async () => {
		const _reqXhaFYJD = req
		const _nameAYS7mSF = "bqPEJ5ue1qTcVrmv1JCvrCdDrS7YQ13hQwFfy63mufiqTjQ66c29WsE1WFOHBQAd4u6ADFoxNQ";
		const _defaultValuepAmABjp = undefined;
		const _returnValuenZsp5DZ = await _reqXhaFYJD.param(_nameAYS7mSF, _defaultValuepAmABjp)
		const _returnValueFt3tWcz = await _reqXhaFYJD.acceptsCharsets()
		const _returnValueKws33Z = await _reqXhaFYJD.accepts()
		const _returnValueLxN9rMC = await _reqXhaFYJD.acceptsCharsets()
	});

	it('test for req', async () => {
		const _reqpEnd0wj = req
		const _returnValuezCwL8T = false;
		const _toLowerCaseHrQXuKQ = () => { return _returnValuezCwL8T };
		const _nameYPhPtOW = {
			"toLowerCase": _toLowerCaseHrQXuKQ
	}
		const _returnValuePtmQ6Aj = await _reqpEnd0wj.header(_nameYPhPtOW)
		const _returnValueTW4Ekb8 = await _reqpEnd0wj.acceptsEncodings()
	});

	it('test for req', async () => {
		const _reqH6iX42k = req
		const _sizeKDdMdJ = {
		
	}
		const _optionshY1mfv = null;
		const _returnValuelyP2FkD = await _reqH6iX42k.range(_sizeKDdMdJ, _optionshY1mfv)
		const _returnValuetyNuz7 = await _reqH6iX42k.acceptsCharsets()
	});

	it('test for req', async () => {
		const _reqDpAjWA = req
		const _returnValueqpVA8V6 = await _reqDpAjWA.accepts()
		const _typesbuPCJrb = {
		
	}
		const _returnValueI0LmbH3 = await _reqDpAjWA.is(_typesbuPCJrb)
	});

	it('test for req', async () => {
		const _reqoJqxvRc = req
		const _typesyhh482q = []
		const _returnValuePFwvdL0 = await _reqoJqxvRc.is(_typesyhh482q)
		const _returnValueBuAfjd0 = await _reqoJqxvRc.accepts()
	});
})