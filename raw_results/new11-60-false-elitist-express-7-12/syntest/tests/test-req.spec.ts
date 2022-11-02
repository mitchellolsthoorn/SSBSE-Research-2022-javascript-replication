export {}
const req = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/request.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('req', () => {
	it('test for req', async () => {
		const _reqeLg1wK = req
		const _nameekS5KGG = "Rw";
		const _defaultValuenSJhFf8 = null;
		const _returnValuecg14YnV = await _reqeLg1wK.param(_nameekS5KGG, _defaultValuenSJhFf8)
		const _nameQkchJo = "eiP8CJawgbBWUl3xfWsGKGskfaiU1KrELkKxgxbVDmwyUDfgmWzJzUIaTCvun3B1bpKU7";
		const _returnValueVN6opC3 = undefined;
		const _defaultValueVwkVnmU = () => { return _returnValueVN6opC3 };
		const _returnValueCc3tssw = await _reqeLg1wK.param(_nameQkchJo, _defaultValueVwkVnmU)
		const _typeshmZgEI = {
		
	}
		const _returnValueFaD6Bcz = await _reqeLg1wK.is(_typeshmZgEI)
		const _returnValueDORFwcG = {
		
	}
		const _toLowerCaseiuNIFLD = () => { return _returnValueDORFwcG };
		const _nameNraHfkN = {
			"toLowerCase": _toLowerCaseiuNIFLD
	}
		const _returnValueLvbJpau = await _reqeLg1wK.header(_nameNraHfkN)
	});

	it('test for req', async () => {
		const _reqosw1tFE = req
		const _sizeIi0nwny = {
		
	}
		const _optionsG9OOC6L = 3.4636053968013503;
		const _returnValuezpWCDd5 = await _reqosw1tFE.range(_sizeIi0nwny, _optionsG9OOC6L)
		const _typeskLPhKuQ = {
		
	}
		const _returnValueestVko6 = await _reqosw1tFE.is(_typeskLPhKuQ)
		const _returnValueyKuEQA = await _reqosw1tFE.acceptsLanguages()
		const _returnValueGy8nxTO = await _reqosw1tFE.acceptsCharsets()
		const _returnValueTzSeleC = await _reqosw1tFE.acceptsCharsets()
	});

	it('test for req', async () => {
		const _reqlIQuAl = req
		const _arrayValueMSzE3XK = "20piBNLBaaMiqFOviVmFcRuy5cFHUr2cUmXBHoA";
		const _arrayValueEMwHtSD = false;
		const _returnValueDYw07pQ = "mCy";
		const _arrayValueYbsZ1o0 = () => { return _returnValueDYw07pQ };
		const _typesdZDOQSa = [_arrayValueMSzE3XK, _arrayValueEMwHtSD, _arrayValueYbsZ1o0]
		const _returnValuetKeuGWT = await _reqlIQuAl.is(_typesdZDOQSa)
		const _namePIVXvr8 = "HiSH81A1uL5IvrfLzJSAGxwkBQSITMzmc5I8PWQRXnd";
		const _defaultValueI2yncFg = -5.859116006351991;
		const _returnValuekeahw6Q = await _reqlIQuAl.param(_namePIVXvr8, _defaultValueI2yncFg)
	});
})