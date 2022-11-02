export {}
import result from "../../.syntest/instrumented/benchmark/top10npm/lodash/result.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('result', () => {
	it('test for result', async () => {
		const _objectNtWMvb8 = undefined;
		const _lengthGIjCXck = -5.272393392491176;
		const _pathaNOMnEL = {
			"length": _lengthGIjCXck
	}
		const _defaultValueQ9RDUZ9 = {
		
	}
		const _returnValuelZFMpF8 = await result(_objectNtWMvb8, _pathaNOMnEL, _defaultValueQ9RDUZ9)
	});

	it('test for result', async () => {
		const _objectYgonqQ2 = -6.684000411652725;
		const _returnValueKoICWsh = "SR6I9f3DGvJYq9bTxa2gjZPKOaIsgKTMoONCaAIPK4oTouapbzlLE7V1aKsAMGGadn0JAxJIpIoMKHJB1Xd2oI";
		const _pathG32UuWZ = () => { return _returnValueKoICWsh };
		const _defaultValueUBU7xBa = {
		
	}
		const _returnValueOpxNz3Z = await result(_objectYgonqQ2, _pathG32UuWZ, _defaultValueUBU7xBa)
	});

	it('test for result', async () => {
		const _returnValuekugNGyX = 6.193198447564747;
		const _objectLC3WCft = () => { return _returnValuekugNGyX };
		const _pathkxEIpoy = []
		const _defaultValueVmI90oZ = undefined;
		const _returnValueZELdsYH = await result(_objectLC3WCft, _pathkxEIpoy, _defaultValueVmI90oZ)
	});

	it('test for result', async () => {
		const _objectPrlCk2y = {
		
	}
		const _returnValue34UHF1 = true;
		const _pathvjFoVYm = () => { return _returnValue34UHF1 };
		const _arrayValueMEcGH2y = "WqPBLyX2Wr3pqOIHKi3BqdUXHTLORwM0vnmDUs55ZG3didlyxIH3EN1mJq4DAMjGXD";
		const _returnValueBVVKltH = true;
		const _arrayValueFJhFvdb = () => { return _returnValueBVVKltH };
		const _returnValueORMclzl = [_arrayValueMEcGH2y, _arrayValueFJhFvdb]
		const _defaultValueQlftOhU = () => { return _returnValueORMclzl };
		const _returnValueLm4R61b = await result(_objectPrlCk2y, _pathvjFoVYm, _defaultValueQlftOhU)
	});
})