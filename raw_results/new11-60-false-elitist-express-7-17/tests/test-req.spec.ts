export {}
const req = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/request.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('req', () => {
	it('test for req', async () => {
		const _reqAolmqz = req
		const _returnValueDRyoguv = null;
		const _toLowerCaseA3qTmu = () => { return _returnValueDRyoguv };
		const _nameje9Zqde = {
			"toLowerCase": _toLowerCaseA3qTmu
	}
		const _returnValueYI5tydg = await _reqAolmqz.header(_nameje9Zqde)
		const _returnValuevtCdxkC = await _reqAolmqz.acceptsEncodings()
		const _returnValuel8LIhQ = await _reqAolmqz.accepts()
		const _nameCcvdMIA = "tjFArXqsCwdsTThZHCpPnkA2VVejq5jsmz3L0qFyQNVex4U9eySm2SI25K4vHJ";
		const _defaultValueuIdUbrU = false;
		const _returnValueiingNY5 = await _reqAolmqz.param(_nameCcvdMIA, _defaultValueuIdUbrU)
		const _nameaI5mZ8E = "bFSb3rQusBz7nEafl9MsTwWSvlxHgY2LXD4ggs";
		const _defaultValue8XAIBh = undefined;
		const _returnValueWikiXMZ = await _reqAolmqz.param(_nameaI5mZ8E, _defaultValue8XAIBh)
	});

	it('test for req', async () => {
		const _reqVYiEKcb = req
		const _nameuHAIf1 = "WmDdtnHC7aNd1kAFVjbxNedXiwnusnlm85kmSlnqB";
		const _defaultValueTNpJ4n8 = {
		
	}
		const _returnValueDpUovP3 = await _reqVYiEKcb.param(_nameuHAIf1, _defaultValueTNpJ4n8)
		const _sizenQZsBjr = null;
		const _returnValuez7DJzv9 = undefined;
		const _arrayValueCBm8GeE = () => { return _returnValuez7DJzv9 };
		const _arrayValuexmPnDF9 = -7.500686234182856;
		const _arrayValuelW6Hiw = undefined;
		const _arrayValueZlU0udh = "9Wt9hBX3lEhCY2j7ino7";
		const _arrayValuek0gvLsI = null;
		const _arrayValueiNEDhgg = null;
		const _arrayValuee2oYpZe = [_arrayValueZlU0udh, _arrayValuek0gvLsI, _arrayValueiNEDhgg]
		const _optionsNICb3MT = [_arrayValueCBm8GeE, _arrayValuexmPnDF9, _arrayValuelW6Hiw, _arrayValuee2oYpZe]
		const _returnValueJJiSTW8 = await _reqVYiEKcb.range(_sizenQZsBjr, _optionsNICb3MT)
		const _returnValuei50dJE3 = await _reqVYiEKcb.acceptsCharsets()
		const _returnValueVCjFrmJ = "dKw2Cl6TXTYA5pktWxBudY9RMHI9nP4KuBhXvx37MKU1a7CAQ4s8";
		const _toLowerCaseVLVJB13 = () => { return _returnValueVCjFrmJ };
		const _namegZ4vP1j = {
			"toLowerCase": _toLowerCaseVLVJB13
	}
		const _returnValueplVYht = await _reqVYiEKcb.header(_namegZ4vP1j)
	});

	it('test for req', async () => {
		const _reqR535sYn = req
		const _returnValuewftgMO4 = await _reqR535sYn.acceptsLanguages()
		const _returnValue0GEY52 = await _reqR535sYn.acceptsLanguages()
		const _returnValuefVzOyBg = await _reqR535sYn.acceptsEncodings()
		const _typesVHwLnDl = {
		
	}
		const _returnValuecNUMBEo = await _reqR535sYn.is(_typesVHwLnDl)
	});

	it('test for req', async () => {
		const _reqk5Jh1rK = req
		const _arrayValueus0Yytv = null;
		const _arrayValuetiYQbQf = true;
		const _arrayValuebRM6LpC = undefined;
		const _typesJsiocD = [_arrayValueus0Yytv, _arrayValuetiYQbQf, _arrayValuebRM6LpC]
		const _returnValueOAE25I3 = await _reqk5Jh1rK.is(_typesJsiocD)
		const _returnValuensdLye = await _reqk5Jh1rK.acceptsEncodings()
		const _returnValueUZimQs = await _reqk5Jh1rK.accepts()
	});
})