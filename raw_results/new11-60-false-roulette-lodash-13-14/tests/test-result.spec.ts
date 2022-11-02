export {}
import result from "../../.syntest/instrumented/benchmark/top10npm/lodash/result.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('result', () => {
	it('test for result', async () => {
		const _objectA1cGBaq = {
		
	}
		const _lengthegNutmH = {
		
	}
		const _pathETaFOPR = {
			"length": _lengthegNutmH
	}
		const _defaultValuem1FDGJP = {
		
	}
		const _returnValueLBobdFb = await result(_objectA1cGBaq, _pathETaFOPR, _defaultValuem1FDGJP)
	});

	it('test for result', async () => {
		const _objectHRUME5W = undefined;
		const _pathchCF5a7 = undefined;
		const _defaultValuetH1ughC = "9EuGiySRXMbx0dNVIbWaXY4XpsGYhgOSOniF4l2uXOCe";
		const _returnValueXmOPn7N = await result(_objectHRUME5W, _pathchCF5a7, _defaultValuetH1ughC)
	});

	it('test for result', async () => {
		const _objectOD5qOPu = {
		
	}
		const _pathJvy1yNm = "pnp9a8iGHkU4e5C3gHHfExLgBQO7vNWQosXREbGzbvpnbAskWTqYsg4xg";
		const _arrayValuerAmVRX8 = "oA7vy2iNVDyn2puKBqrnD3S16rpFo";
		const _arrayValueniTjqd7 = null;
		const _returnValuenOBpQFe = [_arrayValuerAmVRX8, _arrayValueniTjqd7]
		const _defaultValuevmR0gQo = () => { return _returnValuenOBpQFe };
		const _returnValuenDiAIjj = await result(_objectOD5qOPu, _pathJvy1yNm, _defaultValuevmR0gQo)
	});

	it('test for result', async () => {
		const _returnValueaAI4qBK = []
		const _objectP3rO0Pg = () => { return _returnValueaAI4qBK };
		const _pathM5hiLEn = []
		const _defaultValues1LOJvp = {
		
	}
		const _returnValuekNoOLhD = await result(_objectP3rO0Pg, _pathM5hiLEn, _defaultValues1LOJvp)
	});
})