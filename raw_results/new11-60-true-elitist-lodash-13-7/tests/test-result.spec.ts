export {}
import result from "../../.syntest/instrumented/benchmark/top10npm/lodash/result.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('result', () => {
	it('test for result', async () => {
		const _objecty0Nk15e = undefined;
		const _lengtheRDMNX0 = -8.799953709725377;
		const _pathVmevD1o = {
			"length": _lengtheRDMNX0
	}
		const _defaultValuegeOMr2x = {
		
	}
		const _returnValueSOP4gfG = await result(_objecty0Nk15e, _pathVmevD1o, _defaultValuegeOMr2x)
	});

	it('test for result', async () => {
		const _objectWk6udey = undefined;
		const _arrayValueh2M3NGO = undefined;
		const _arrayValuef7Cxyyx = false;
		const _pathemQQcC = [_arrayValueh2M3NGO, _arrayValuef7Cxyyx]
		const _defaultValuen800ZdG = {
		
	}
		const _returnValueBfihCI2 = await result(_objectWk6udey, _pathemQQcC, _defaultValuen800ZdG)
	});

	it('test for result', async () => {
		const _objectcykSGH6 = undefined;
		const _pathkDI8Im1 = []
		const _defaultValuennHvUEx = {
		
	}
		const _returnValuewTloIRM = await result(_objectcykSGH6, _pathkDI8Im1, _defaultValuennHvUEx)
	});

	it('test for result', async () => {
		const _objectvRtA4lB = undefined;
		const _returnValuew82e9Lr = null;
		const _pathRTpBxxj = () => { return _returnValuew82e9Lr };
		const _returnValuebeeNy73 = null;
		const _defaultValuePeNvZ1e = () => { return _returnValuebeeNy73 };
		const _returnValueAfABhU3 = await result(_objectvRtA4lB, _pathRTpBxxj, _defaultValuePeNvZ1e)
	});
})