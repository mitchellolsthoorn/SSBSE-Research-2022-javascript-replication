export {}
const {setCharset} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('setCharset', () => {
	it('test for setCharset', async () => {
		const _typeYhfSHN0 = {
		
	}
		const _arrayValue8LPJGl = 2.19468757834629;
		const _arrayValuekaIISyy = -2.60952966431934;
		const _arrayValuey1VyNnS = true;
		const _arrayValueEMXq8Ye = "pQPOyzBr3ej8yEb5k";
		const _arrayValueOQX9Kvo = "Kd7JT6xA425MaM";
		const _arrayValueSe087lN = null;
		const _arrayValueVo9P1bX = undefined;
		const _arrayValuekX4wZBo = [_arrayValueOQX9Kvo, _arrayValueSe087lN, _arrayValueVo9P1bX]
		const _returnValuebYewz4d = [_arrayValuekaIISyy, _arrayValuey1VyNnS, _arrayValueEMXq8Ye, _arrayValuekX4wZBo]
		const _arrayValueuK2lFUT = () => { return _returnValuebYewz4d };
		const _returnValueuGps4iC = [_arrayValue8LPJGl, _arrayValueuK2lFUT]
		const _charsetw715qgx = () => { return _returnValueuGps4iC };
		const _returnValuetgoDNRq = await setCharset(_typeYhfSHN0, _charsetw715qgx)
	});

	it('test for setCharset', async () => {
		const _typejAbkfTO = undefined;
		const _charsetJKreSbA = undefined;
		const _returnValueDfjb5La = await setCharset(_typejAbkfTO, _charsetJKreSbA)
	});
})