export {}
const req = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/request.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('req', () => {
	it('test for req', async () => {
		const _reqfLhMdtW = req
		const _returnValue7c84Zt = await _reqfLhMdtW.acceptsCharsets()
		const _returnValueLeXphdN = await _reqfLhMdtW.acceptsLanguages()
		const _typesNVfi2Af = 3.444585334951773;
		const _returnValueV42IFMo = await _reqfLhMdtW.is(_typesNVfi2Af)
		const _arrayValuexJ4TMhq = false;
		const _arrayValuejbOSHND = -7.259236633217194;
		const _arrayValuekkRCdmZ = {
		
	}
		const _nameLdTTTE = [_arrayValuexJ4TMhq, _arrayValuejbOSHND, _arrayValuekkRCdmZ]
		const _arrayValuewcej0KB = -8.188240495577212;
		const _defaultValuegmd0Ch = [_arrayValuewcej0KB]
		const _returnValueYgt23Kp = await _reqfLhMdtW.param(_nameLdTTTE, _defaultValuegmd0Ch)
		const _typesNA10WPS = false;
		const _returnValueYrzsjVL = await _reqfLhMdtW.is(_typesNA10WPS)
	});

	it('test for req', async () => {
		const _reqRaW3UE7 = req
		const _arrayValueJ5pHx8s = -8.341967462654925;
		const _arrayValuecxh5iw3 = null;
		const _sizeaSNBlbN = [_arrayValueJ5pHx8s, _arrayValuecxh5iw3]
		const _optionshZaqjzj = true;
		const _returnValueObyo4Rc = await _reqRaW3UE7.range(_sizeaSNBlbN, _optionshZaqjzj)
		const _nameAX1gBTU = -9.358190375547478;
		const _defaultValueoncphhO = "RFgHZyEW2sNJpZtiFSENYppWVxfdscN3PoQjj9WM5Xdbeax35CHcFbuHVIGhCEmF2RnC06c4";
		const _returnValueGbWuosZ = await _reqRaW3UE7.param(_nameAX1gBTU, _defaultValueoncphhO)
		const _arrayValueWWj6JYK = "UTVZjrQ2nIuFxPIsOIJNC2HnnQoZDNOgvJBdD";
		const _nameVz2Np3K = [_arrayValueWWj6JYK]
		const _returnValueSbWYJFc = await _reqRaW3UE7.header(_nameVz2Np3K)
		const _returnValueFPwX15P = await _reqRaW3UE7.acceptsCharsets()
		const _returnValuehpWrG2 = await _reqRaW3UE7.acceptsEncodings()
	});

	it('test for req', async () => {
		const _reqR2dXyXv = req
		const _typesVds7qGy = []
		const _returnValuefgthg4B = await _reqR2dXyXv.is(_typesVds7qGy)
		const _returnValuekhNf8XM = await _reqR2dXyXv.acceptsEncodings()
		const _nameAygSVms = -4.1271080190628044;
		const _returnValuemvGvXbZ = await _reqR2dXyXv.header(_nameAygSVms)
		const _namexq9YnWR = "jIQlSIFhp5xTLn2jXtwvKjEtTDeJ23PFNgjsr4Zd77kpk";
		const _defaultValueyayxXRF = "whQea9FcWEC6iaD7O9F4eYXCfIQfx3kVdNOOJaDJbwdYBw1zkGJKQVlPkG7XpN";
		const _returnValue44Klj6 = await _reqR2dXyXv.param(_namexq9YnWR, _defaultValueyayxXRF)
		const _returnValuerfrv89Y = await _reqR2dXyXv.acceptsLanguages()
	});
})