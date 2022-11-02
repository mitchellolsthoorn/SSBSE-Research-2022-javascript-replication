export {}
import result from "../../.syntest/instrumented/benchmark/top10npm/lodash/result.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('result', () => {
	it('test for result', async () => {
		const _objectwQ3N4gI = undefined;
		const _lengthx9wZKWS = -6.002763976226345;
		const _pathXZaSKXG = {
			"length": _lengthx9wZKWS
	}
		const _defaultValuexpa2pQ = {
		
	}
		const _returnValueJosfgLD = await result(_objectwQ3N4gI, _pathXZaSKXG, _defaultValuexpa2pQ)
	});

	it('test for result', async () => {
		const _objectQ2ph2BH = undefined;
		const _pathgqvFBLr = undefined;
		const _defaultValuep2Y1iv = {
		
	}
		const _returnValuelJ6XFM = await result(_objectQ2ph2BH, _pathgqvFBLr, _defaultValuep2Y1iv)
	});

	it('test for result', async () => {
		const _objectahYyElt = undefined;
		const _pathqdBt15Z = []
		const _defaultValueWOG0Duh = {
		
	}
		const _returnValue5lRpQ4 = await result(_objectahYyElt, _pathqdBt15Z, _defaultValueWOG0Duh)
	});

	it('test for result', async () => {
		const _objectxZAHPD = undefined;
		const _pathcWT5YP4 = undefined;
		const _returnValuezkPlFwi = {
		
	}
		const _defaultValuevWcNABg = () => { return _returnValuezkPlFwi };
		const _returnValueMlgBRGu = await result(_objectxZAHPD, _pathcWT5YP4, _defaultValuevWcNABg)
	});
})