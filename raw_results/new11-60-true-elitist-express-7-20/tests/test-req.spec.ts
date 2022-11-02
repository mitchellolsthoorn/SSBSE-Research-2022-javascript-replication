export {}
const req = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/request.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('req', () => {
	it('test for req', async () => {
		const _reqIop5pI5 = req
		const _returnValueYkiKNfe = await _reqIop5pI5.acceptsEncodings()
		const _returnValueKUEwvZ6 = 5.187839369140654;
		const _toLowerCasejc8D0As = () => { return _returnValueKUEwvZ6 };
		const _nameFrTzw15 = {
			"toLowerCase": _toLowerCasejc8D0As
	}
		const _returnValueK3D62a = await _reqIop5pI5.header(_nameFrTzw15)
		const _name6uf6of = "GMoxLJjOn71piL3aAcnypw374bSYwzythaRh7JtrmSL7JGiPDGF4E";
		const _defaultValuetVPWRkc = "IxxIeW4Ox8VvrYnlRdOy4f0etkrW1j7BLpxFBcMIu";
		const _returnValueEOkN1yv = await _reqIop5pI5.param(_name6uf6of, _defaultValuetVPWRkc)
	});

	it('test for req', async () => {
		const _reqXhqJYxw = req
		const _arrayValuewlMoQj = "bkq1sISfyA6iRwyCvxNLN4ySrIP1JU5Dp5048iCj0XjD4Kk44KTurfmfQYeyVEnQ5tG2jjpObjESvTr15U5qP8m9unL";
		const _arrayValuebQfXCoT = null;
		const _sizeDakXxH = [_arrayValuewlMoQj, _arrayValuebQfXCoT]
		const _returnValuejRnIUyw = 2.5907153372810594;
		const _optionsCe5DGQm = () => { return _returnValuejRnIUyw };
		const _returnValueF13zGNh = await _reqXhqJYxw.range(_sizeDakXxH, _optionsCe5DGQm)
		const _returnValuewGrWgef = await _reqXhqJYxw.acceptsCharsets()
		const _returnValueuEl0A3w = await _reqXhqJYxw.accepts()
		const _returnValueocbIsez = await _reqXhqJYxw.acceptsCharsets()
	});

	it('test for req', async () => {
		const _requP7w3uT = req
		const _nameMTwnG8 = "f8";
		const _defaultValuemHCrHSw = null;
		const _returnValuevTrOsSp = await _requP7w3uT.param(_nameMTwnG8, _defaultValuemHCrHSw)
		const _nameLk4TAx = 7.675350549968925;
		const _returnValuefTq4lYo = await _requP7w3uT.header(_nameLk4TAx)
	});

	it('test for req', async () => {
		const _reqCjyVPB6 = req
		const _returnValuemycQpC = await _reqCjyVPB6.acceptsCharsets()
		const _typesnMYBlEe = {
		
	}
		const _returnValuend2IOL0 = await _reqCjyVPB6.is(_typesnMYBlEe)
		const _namegl0ntMg = "2PhtUQ41ng8McLyY8CJheCryuESWoOIcAzTCbY4UETYDt83MiJ2plGlQzI31PdrCWE38etAgldgSL9pZMDp8WCHlU";
		const _defaultValueob0BsZ = undefined;
		const _returnValueLkAn8XT = await _reqCjyVPB6.param(_namegl0ntMg, _defaultValueob0BsZ)
	});

	it('test for req', async () => {
		const _reqFC0czRR = req
		const _returnValueMi9MlGy = await _reqFC0czRR.acceptsEncodings()
		const _typesqUk5XfZ = {
		
	}
		const _returnValueenXYuZO = await _reqFC0czRR.is(_typesqUk5XfZ)
		const _arrayValueROXcDEV = 4.473451879065307;
		const _typeseaBI0FK = [_arrayValueROXcDEV]
		const _returnValuefTWbjlN = await _reqFC0czRR.is(_typeseaBI0FK)
	});
})