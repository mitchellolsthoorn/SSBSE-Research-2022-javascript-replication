export {}
const req = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/request.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('req', () => {
	it('test for req', async () => {
		const _reqLPyT7Y7 = req
		const _typesTZiv0Tr = {
		
	}
		const _returnValuePjr3oic = await _reqLPyT7Y7.is(_typesTZiv0Tr)
		const _toLowerCasefNouBz = null;
		const _nameAVeK6Dw = {
			"toLowerCase": _toLowerCasefNouBz
	}
		const _returnValueYDUXjGA = await _reqLPyT7Y7.header(_nameAVeK6Dw)
		const _typesstiUC4l = {
		
	}
		const _returnValueuB4rCjh = await _reqLPyT7Y7.is(_typesstiUC4l)
		const _returnValueuApmpsv = await _reqLPyT7Y7.acceptsEncodings()
		const _returnValuesbk8sBU = await _reqLPyT7Y7.acceptsCharsets()
	});

	it('test for req', async () => {
		const _reqyoRGhV = req
		const _typesxVxUZVw = {
		
	}
		const _returnValuepIoXGX = await _reqyoRGhV.is(_typesxVxUZVw)
		const _nameNVtdjpi = "9hkeDkyYLTF6Tgd4kB14ccEE2L7guWu3sQyUSbUNWIQ5PHIuySkOoxWioGmKkAl8rKB9LT9R";
		const _defaultValueSAdBJ2 = true;
		const _returnValuefvKxv0u = await _reqyoRGhV.param(_nameNVtdjpi, _defaultValueSAdBJ2)
		const _sizekIJQygn = 3.1873940877547042;
		const _optionszF4WJ2a = -7.8303190159151095;
		const _returnValuehijeSlL = await _reqyoRGhV.range(_sizekIJQygn, _optionszF4WJ2a)
	});

	it('test for req', async () => {
		const _reqNNITNkm = req
		const _returnValuenyGyHHV = await _reqNNITNkm.accepts()
		const _returnValueHcDocGd = await _reqNNITNkm.acceptsCharsets()
		const _arrayValueyHJ3lYC = -6.177687352558994;
		const _arrayValuex2IiDUC = undefined;
		const _arrayValuemgiHdp3 = true;
		const _arrayValueTrJJWPY = null;
		const _arrayValueqfb3W0w = undefined;
		const _arrayValueaqUXLtI = [_arrayValuex2IiDUC, _arrayValuemgiHdp3, _arrayValueTrJJWPY, _arrayValueqfb3W0w]
		const _arrayValueehJV8mG = undefined;
		const _typesnvBtOT5 = [_arrayValueyHJ3lYC, _arrayValueaqUXLtI, _arrayValueehJV8mG]
		const _returnValueTgy2Y0g = await _reqNNITNkm.is(_typesnvBtOT5)
	});
})