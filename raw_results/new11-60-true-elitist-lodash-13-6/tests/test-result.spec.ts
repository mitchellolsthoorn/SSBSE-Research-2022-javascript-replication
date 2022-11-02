export {}
import result from "../../.syntest/instrumented/benchmark/top10npm/lodash/result.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('result', () => {
	it('test for result', async () => {
		const _objectpBXv4cy = undefined;
		const _lengthXpdHGr5 = 7.070553140481884;
		const _pathzV47FrE = {
			"length": _lengthXpdHGr5
	}
		const _defaultValueyaIYx41 = {
		
	}
		const _returnValueIhu17p3 = await result(_objectpBXv4cy, _pathzV47FrE, _defaultValueyaIYx41)
	});

	it('test for result', async () => {
		const _objectZM5l5b = undefined;
		const _arrayValuekEBA7Um = true;
		const _arrayValueLsDGKJv = false;
		const _arrayValue1zjFfX = -4.521047458175329;
		const _pathz6DZgkX = [_arrayValuekEBA7Um, _arrayValueLsDGKJv, _arrayValue1zjFfX]
		const _defaultValuey1NBuFz = {
		
	}
		const _returnValuen5ZcBMr = await result(_objectZM5l5b, _pathz6DZgkX, _defaultValuey1NBuFz)
	});

	it('test for result', async () => {
		const _objectlXmQH7k = 8.537541986733;
		const _pathWYoLFJw = []
		const _defaultValueMYesLD = {
		
	}
		const _returnValueXVbtjKr = await result(_objectlXmQH7k, _pathWYoLFJw, _defaultValueMYesLD)
	});

	it('test for result', async () => {
		const _objectJKan50v = undefined;
		const _returnValuexSyU2Q9 = false;
		const _pathHj6NsV1 = () => { return _returnValuexSyU2Q9 };
		const _arrayValueJQUFjhz = true;
		const _arrayValueC30vdzP = [_arrayValueJQUFjhz]
		const _returnValueK6bB8J = null;
		const _arrayValueJanAuTi = () => { return _returnValueK6bB8J };
		const _arrayValueY1eE1z5 = undefined;
		const _arrayValueDN9Exia = 1.6396683119283662;
		const _arrayValuehhJwDDi = -7.829928860585781;
		const _arrayValueErfiNXT = null;
		const _arrayValueObJ83e = [_arrayValueY1eE1z5, _arrayValueDN9Exia, _arrayValuehhJwDDi, _arrayValueErfiNXT]
		const _arrayValueIMNn44M = undefined;
		const _arrayValueLFvdmx = [_arrayValueIMNn44M]
		const _arrayValueEMkOxw = true;
		const _arrayValueVdUuUQ = [_arrayValueJanAuTi, _arrayValueObJ83e, _arrayValueLFvdmx, _arrayValueEMkOxw]
		const _arrayValueOia1E8S = 4.572139444753368;
		const _arrayValueZNnHzoa = [_arrayValueVdUuUQ, _arrayValueOia1E8S]
		const _arrayValueOm95R6b = undefined;
		const _returnValuei8Vcyyc = [_arrayValueC30vdzP, _arrayValueZNnHzoa, _arrayValueOm95R6b]
		const _defaultValuez5y14Io = () => { return _returnValuei8Vcyyc };
		const _returnValuez0aGX3R = await result(_objectJKan50v, _pathHj6NsV1, _defaultValuez5y14Io)
	});
})