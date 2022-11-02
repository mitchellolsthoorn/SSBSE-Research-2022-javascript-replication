export {}
const req = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/request.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('req', () => {
	it('test for req', async () => {
		const _reqAQS1UEB = req
		const _returnValueMM3GMA = await _reqAQS1UEB.acceptsEncodings()
		const _nameMY5lz9b = true;
		const _defaultValueLynwlip = true;
		const _returnValuefSmkL6r = await _reqAQS1UEB.param(_nameMY5lz9b, _defaultValueLynwlip)
	});

	it('test for req', async () => {
		const _reqaVWbfMn = req
		const _returnValueGkjFTtw = await _reqaVWbfMn.acceptsEncodings()
		const _typesNZX7by = false;
		const _returnValueClfH1W = await _reqaVWbfMn.is(_typesNZX7by)
		const _namew4vE7VI = null;
		const _defaultValueQ0r7Av7 = -6.595918951883881;
		const _returnValueubQuJ1 = await _reqaVWbfMn.param(_namew4vE7VI, _defaultValueQ0r7Av7)
	});

	it('test for req', async () => {
		const _reqek0I40A = req
		const _sizew2NLfNs = null;
		const _optionsE1dHwhc = -6.0551053944861515;
		const _returnValueruj84L1 = await _reqek0I40A.range(_sizew2NLfNs, _optionsE1dHwhc)
		const _nameqJ3rLbs = true;
		const _returnValuecIVy7ii = await _reqek0I40A.header(_nameqJ3rLbs)
		const _returnValueZHyn4Q = await _reqek0I40A.acceptsCharsets()
		const _arrayValueXrrhufl = undefined;
		const _arrayValueOWLgWo = true;
		const _nameKrPbrX6 = [_arrayValueXrrhufl, _arrayValueOWLgWo]
		const _defaultValueA5ATyg9 = null;
		const _returnValuehIkj6fS = await _reqek0I40A.param(_nameKrPbrX6, _defaultValueA5ATyg9)
	});

	it('test for req', async () => {
		const _reqhQTVLjB = req
		const _returnValueMaPVGlf = await _reqhQTVLjB.acceptsLanguages()
		const _size28PeF8 = -7.661421232097423;
		const _optionso16yalo = undefined;
		const _returnValueAe883LG = await _reqhQTVLjB.range(_size28PeF8, _optionso16yalo)
		const _arrayValue6qPveP = undefined;
		const _arrayValueto7tOV = null;
		const _arrayValuefXM7TVO = false;
		const _typesOxLRPI = [_arrayValue6qPveP, _arrayValueto7tOV, _arrayValuefXM7TVO]
		const _returnValuewZJBASP = await _reqhQTVLjB.is(_typesOxLRPI)
		const _returnValueVs2YX6 = await _reqhQTVLjB.acceptsCharsets()
	});
})