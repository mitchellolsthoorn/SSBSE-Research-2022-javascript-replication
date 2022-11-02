export {}
import {set} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/get-set.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('set', () => {
	it('test for set', async () => {
		const _returnValueE0VlcKZ = -1.822624350638213;
		const _isValidyETYi1j = () => { return _returnValueE0VlcKZ };
		const _returnValueN5syRgN = "KyHvW8mssW6xWLeV39s5at4YxmAnHLjAS5KUnwcmqtK9eVKDhOO3X";
		const _isAfterf0sEJwF = () => { return _returnValueN5syRgN };
		const _arrayValuewnbfWC5 = 4.9777138373057355;
		const _arrayValueGtR0uDq = 3.5028482854147427;
		const _returnValuez3Q6bN = [_arrayValuewnbfWC5, _arrayValueGtR0uDq]
		const _isBeforeFu6pIuU = () => { return _returnValuez3Q6bN };
		const _momUMunOMd = {
			"isValid": _isValidyETYi1j,
		"isAfter": _isAfterf0sEJwF,
		"isBefore": _isBeforeFu6pIuU
	}
		const _unitlYYBFj = "PV4Ep4qtwAoh8WtkBdsSeJsirWZuXC1kPVEC2Jp70BXwZ9W";
		const _valueyaXhef3 = {
		
	}
		const _returnValuerMA5UGW = await set(_momUMunOMd, _unitlYYBFj, _valueyaXhef3)
	});

	it('test for set', async () => {
		const _returnValuepezEQ6T = "VXaa2XsFKCqaTl38wn2kRySmR3BA2Yrz9yr7Jk";
		const _isValidbCppIUQ = () => { return _returnValuepezEQ6T };
		const _returnValuetujlpR = "GC3DizkGf0PZKUSWYddfJcWMJiJiXX2op6jNO3g6A2aWWuqyct81MMb6BnpS1tMrM";
		const _valueOfH9IcWDO = () => { return _returnValuetujlpR };
		const _returnValueSjUE7cY = null;
		const _clone2ED2rH = () => { return _returnValueSjUE7cY };
		const _momVBVD4kh = {
			"isValid": _isValidbCppIUQ,
		"valueOf": _valueOfH9IcWDO,
		"clone": _clone2ED2rH
	}
		const _unitnhIAZDN = 8.181367542507694;
		const _valueMJ29M93 = -7.949987123989528;
		const _returnValueqEOe062 = await set(_momVBVD4kh, _unitnhIAZDN, _valueMJ29M93)
	});
})