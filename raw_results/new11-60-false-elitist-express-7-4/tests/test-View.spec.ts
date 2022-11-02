export {}
const View = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/view.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('View', () => {
	it('test for View', async () => {
		const _nameN06sgFi = -0.587459414975223;
		const _optionsT1EqvHL = {
		
	}
		const _ViewbbuPlXW = new View(_nameN06sgFi, _optionsT1EqvHL)
		const _arrayValueVsAKX5 = null;
		const _returnValueJZlNQRq = [_arrayValueVsAKX5]
		const _dirhjuAhI = () => { return _returnValueJZlNQRq };
		const _fileOWRr09x = undefined;
		const _returnValueNfrzSJa = await _ViewbbuPlXW.resolve(_dirhjuAhI, _fileOWRr09x)
		const _dirXyv4Zl = undefined;
		const _fileHVq0y7 = undefined;
		const _returnValueyhkaU15 = await _ViewbbuPlXW.resolve(_dirXyv4Zl, _fileHVq0y7)
		const _nameIroVhqM = null;
		const _returnValueszJLtuy = await _ViewbbuPlXW.lookup(_nameIroVhqM)
	});

	it('test for View', async () => {
		const _namecPjebKI = "oNMg67zgxsQzpkplU9bqg0I3";
		const _optionsxBaOunb = undefined;
		const _ViewI0Xfs0Q = new View(_namecPjebKI, _optionsxBaOunb)
		const _optionskKRKb9 = true;
		const _callbackfX4Z9uz = undefined;
		const _returnValueS2Y7U9Y = await _ViewI0Xfs0Q.render(_optionskKRKb9, _callbackfX4Z9uz)
		const _arrayValueP5ctvwN = "rOsyRKJLaNPbNEVf2MgXDxCnMDB86oehCBcS8ZPCCCdambXWL2iPwgNb6tdXt";
		const _arrayValuezP4blbi = false;
		const _arrayValuevoEy1Ne = [_arrayValueP5ctvwN, _arrayValuezP4blbi]
		const _arrayValuekhz1bLX = false;
		const _arrayValueP19Vn2 = true;
		const _arrayValueLEImCpy = undefined;
		const _optionswzz2FaM = [_arrayValuevoEy1Ne, _arrayValuekhz1bLX, _arrayValueP19Vn2, _arrayValueLEImCpy]
		const _callbackIWlwgMh = null;
		const _returnValue8coLHD = await _ViewI0Xfs0Q.render(_optionswzz2FaM, _callbackIWlwgMh)
	});
})