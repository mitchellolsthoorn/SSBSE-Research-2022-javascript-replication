export {}
const req = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/request.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('req', () => {
	it('test for req', async () => {
		const _reqVD7x1ap = req
		const _arrayValueagFBsx2 = false;
		const _arrayValueADzzhIo = false;
		const _returnValueiruE6A6 = [_arrayValueagFBsx2, _arrayValueADzzhIo]
		const _toLowerCaseK8KzS3T = () => { return _returnValueiruE6A6 };
		const _nameSLuuG5L = {
			"toLowerCase": _toLowerCaseK8KzS3T
	}
		const _returnValueAuDkNuS = await _reqVD7x1ap.header(_nameSLuuG5L)
		const _namermTKHOh = "NVXUgm7Oad6k7DiB9wMiKFOJRial1wO3ycwiFpNzkhmb0wv71RtUWwloThBoan7r2yeRRBFSik";
		const _defaultValueNgcI2RB = undefined;
		const _returnValueeBu2dk7 = await _reqVD7x1ap.param(_namermTKHOh, _defaultValueNgcI2RB)
		const _returnValuetRv4oGg = await _reqVD7x1ap.accepts()
		const _returnValuem0cSMuS = await _reqVD7x1ap.accepts()
	});

	it('test for req', async () => {
		const _reqEHZVBcz = req
		const _nameZkEHTI = "c8fZOkjGXVakezHSb4EAzsFSTuT26ZSKAiwKQvSkgh7z1";
		const _arrayValuePnyTZIM = 8.546239193927864;
		const _arrayValueCUvEZD6 = false;
		const _arrayValue2aop5y = undefined;
		const _arrayValuenodj0Su = 4.345270269650266;
		const _defaultValuet1VdW5Z = [_arrayValuePnyTZIM, _arrayValueCUvEZD6, _arrayValue2aop5y, _arrayValuenodj0Su]
		const _returnValueaYixuLV = await _reqEHZVBcz.param(_nameZkEHTI, _defaultValuet1VdW5Z)
		const _returnValueD2AjdX3 = await _reqEHZVBcz.acceptsCharsets()
		const _returnValuepnZ2Clj = await _reqEHZVBcz.accepts()
	});

	it('test for req', async () => {
		const _reqCaHyroH = req
		const _returnValueN826uJM = await _reqCaHyroH.acceptsLanguages()
		const _nameOuWj67X = "RRE0Df3asa0LYM81ajKHqckidEJzwKUjpt9Lmse2i9UBd0hAnUgJcph1tIdKlpjU8qcgm7ba3My8Lyu2NYMdVcz5H8";
		const _defaultValueoKjzgt1 = 2.6277731818412597;
		const _returnValueY4wk0Hi = await _reqCaHyroH.param(_nameOuWj67X, _defaultValueoKjzgt1)
		const _typesvvYliza = {
		
	}
		const _returnValueCRj8Va4 = await _reqCaHyroH.is(_typesvvYliza)
		const _returnValuemebLetn = await _reqCaHyroH.acceptsEncodings()
	});

	it('test for req', async () => {
		const _reqdpTZehS = req
		const _returnValuex7onQS = await _reqdpTZehS.acceptsEncodings()
		const _returnValueKZjamEd = await _reqdpTZehS.acceptsEncodings()
		const _returnValueKuoMEKE = await _reqdpTZehS.acceptsCharsets()
		const _sizeMLADpGQ = undefined;
		const _optionsjeoUzn = "pVJNjSnuVDkPDkOAIKmIkl1Z6yS5k6iHSGj78nZTEKDIv5B";
		const _returnValueicBldw9 = await _reqdpTZehS.range(_sizeMLADpGQ, _optionsjeoUzn)
		const _sizejxrLC7L = -8.276176642476543;
		const _arrayValuelhsweeh = "W8dtmybeNcnvbuV6J4ux9BEopixazYTeu2";
		const _returnValueFppMPwZ = -3.8307088231214212;
		const _arrayValuesUiSohO = () => { return _returnValueFppMPwZ };
		const _optionsxsrnkeP = [_arrayValuelhsweeh, _arrayValuesUiSohO]
		const _returnValuemwUaHlo = await _reqdpTZehS.range(_sizejxrLC7L, _optionsxsrnkeP)
	});

	it('test for req', async () => {
		const _reqV4uPR3 = req
		const _arrayValueiEKRaKl = true;
		const _arrayValueaEKeJr = "F1MNJPsSlUdsj1Myz4jx";
		const _typesY8lMzGL = [_arrayValueiEKRaKl, _arrayValueaEKeJr]
		const _returnValueUPKWuvS = await _reqV4uPR3.is(_typesY8lMzGL)
		const _namet3Bp8M = "O6usxfnOibjwUB31XRIhucofgO0ToBb6ap9xBGO7zDR";
		const _defaultValueQ3EFhXf = -0.560309648261839;
		const _returnValueqkcrGRE = await _reqV4uPR3.param(_namet3Bp8M, _defaultValueQ3EFhXf)
		const _returnValueNOIbIpg = await _reqV4uPR3.acceptsCharsets()
	});
})