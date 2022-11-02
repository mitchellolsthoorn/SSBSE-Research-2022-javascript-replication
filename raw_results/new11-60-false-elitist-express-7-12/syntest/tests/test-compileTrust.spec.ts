export {}
const {compileTrust} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('compileTrust', () => {
	it('test for compileTrust', async () => {
		const _returnValueFetdRgZ = []
		const _arrayValueTfsEtJx = () => { return _returnValueFetdRgZ };
		const _arrayValuexaDDsWR = "Ugkm6DvD5MqSLpeGK3k9v5dr6V8YBbh7kBY1tbq4vFwoWlhmJK9uEWPhedmDANhcW0wb";
		const _arrayValuef8Y9gvk = "LKqyxTslgSILNyAc2SO6QE6Z8uhybemXzOasL0nVWu8KtM";
		const _valH4383g = [_arrayValueTfsEtJx, _arrayValuexaDDsWR, _arrayValuef8Y9gvk]
		const _returnValue4bcDnu = await compileTrust(_valH4383g)
	});

	it('test for compileTrust', async () => {
		const _valniwyeGZ = 7.560839800538293;
		const _returnValuec1B7KoX = await compileTrust(_valniwyeGZ)
	});

	it('test for compileTrust', async () => {
		const _valXxed7Wx = true;
		const _returnValuemibbouM = await compileTrust(_valXxed7Wx)
	});

	it('test for compileTrust', async () => {
		const _arrayValuekGs6Vt = true;
		const _returnValuexdwHpeo = [_arrayValuekGs6Vt]
		const _valkG07YQo = () => { return _returnValuexdwHpeo };
		const _returnValueabsMC6i = await compileTrust(_valkG07YQo)
	});

	it('test for compileTrust', async () => {
		const _valF7SBoDS = "GyaVz8cAF4xVEvs313kk0DwNBaSajrik25TU8AbtT3wPDamKZyM2UsQNJHFW5iqla";
		const _returnValuevFCnXxR = await compileTrust(_valF7SBoDS)
	});
})