export {}
const View = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/view.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('View', () => {
	it('test for View', async () => {
		const _nameReECUhZ = 7.407970497720893;
		const _optionsKklY0pU = -2.71578194402451;
		const _ViewhKSsDzD = new View(_nameReECUhZ, _optionsKklY0pU)
		const _namet9zY7fn = -7.763797952735171;
		const _returnValuefYCAiHx = await _ViewhKSsDzD.lookup(_namet9zY7fn)
		const _arrayValueS5h1OAz = false;
		const _arrayValuelJQVq3M = true;
		const _arrayValueBLAQU79 = -8.271205582933016;
		const _dirpbMBExR = [_arrayValueS5h1OAz, _arrayValuelJQVq3M, _arrayValueBLAQU79]
		const _filePdbQ6Kh = false;
		const _returnValuesd0DLgr = await _ViewhKSsDzD.resolve(_dirpbMBExR, _filePdbQ6Kh)
		const _arrayValuecYmfF4I = true;
		const _arrayValueOm66AE = undefined;
		const _optionsFEZBHlt = [_arrayValuecYmfF4I, _arrayValueOm66AE]
		const _callbackl8nOXcl = 2.29126583154377;
		const _returnValueHHxdUUg = await _ViewhKSsDzD.render(_optionsFEZBHlt, _callbackl8nOXcl)
		const _optionsP3MlQi9 = null;
		const _callbackFYIzq8T = {
		
	}
		const _returnValueb0C7GEa = await _ViewhKSsDzD.render(_optionsP3MlQi9, _callbackFYIzq8T)
	});

	it('test for View', async () => {
		const _nameZBebsi4 = "qTX85lMhjaHUmMC6Kukd0FreEaK2S69MyVWUWzVgUJjuCo5oe4NkhTFnAWjVhGtueaxukHVhePgstcMzdmA";
		const _optionsD7JNwNs = true;
		const _ViewCBQ4IZR = new View(_nameZBebsi4, _optionsD7JNwNs)
		const _namezCZNL6c = {
		
	}
		const _returnValueqvLnwgI = await _ViewCBQ4IZR.lookup(_namezCZNL6c)
		const _nameMplJSZn = -5.2346888229212;
		const _returnValuewUVFb2e = await _ViewCBQ4IZR.lookup(_nameMplJSZn)
	});
})