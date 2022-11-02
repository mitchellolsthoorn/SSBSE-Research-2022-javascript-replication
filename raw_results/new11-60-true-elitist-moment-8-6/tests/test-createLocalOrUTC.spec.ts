export {}
import {createLocalOrUTC} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-anything.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('createLocalOrUTC', () => {
	it('test for createLocalOrUTC', async () => {
		const _lengthUbN0cxM = 8.277917656434347;
		const _inputAmxbD9T = {
			"length": _lengthUbN0cxM
	}
		const _formatbue0iC = false;
		const _localeueGQGs3 = true;
		const _strictqFKxvki = true;
		const _returnValuefWd8CmQ = true;
		const _isUTCE8AMtZ = () => { return _returnValuefWd8CmQ };
		const _returnValueDW0AVdn = await createLocalOrUTC(_inputAmxbD9T, _formatbue0iC, _localeueGQGs3, _strictqFKxvki, _isUTCE8AMtZ)
	});

	it('test for createLocalOrUTC', async () => {
		const _inputyqeL6d5 = "7mWOuc6LhMEcbBLmTAwzNsNDjV54on3HQmydOqYdboydnaEysTTfQN50itOQRlzs90PeYr1";
		const _formatDh6DtZM = false;
		const _localerb9N3ke = "Y62HCtNgj51VQ2";
		const _strictu7q4SUM = true;
		const _isUTCFZbj7P = {
		
	}
		const _returnValueEt0lBV = await createLocalOrUTC(_inputyqeL6d5, _formatDh6DtZM, _localerb9N3ke, _strictu7q4SUM, _isUTCFZbj7P)
	});

	it('test for createLocalOrUTC', async () => {
		const _inputOnIGsZH = null;
		const _formatnkA9Ps5 = true;
		const _localeFuUJ88H = true;
		const _strictDltEN7 = false;
		const _isUTCEjsTsXB = undefined;
		const _returnValueTti7tQ5 = await createLocalOrUTC(_inputOnIGsZH, _formatnkA9Ps5, _localeFuUJ88H, _strictDltEN7, _isUTCEjsTsXB)
	});

	it('test for createLocalOrUTC', async () => {
		const _inputdyZ2cq1 = undefined;
		const _formatdGapv5u = true;
		const _localeeaoFUJ = undefined;
		const _strictQTQ5NSe = false;
		const _isUTCNVy91lz = 0.20165679882201637;
		const _returnValuew3GkFWF = await createLocalOrUTC(_inputdyZ2cq1, _formatdGapv5u, _localeeaoFUJ, _strictQTQ5NSe, _isUTCNVy91lz)
	});

	it('test for createLocalOrUTC', async () => {
		const _arrayValueq7bEINI = "eAguotfzlnyOWiG7zcpGB6vF6Y7qIeKIhQBQAn9jq2dFqWZydx7y";
		const _arrayValueRh43T6t = undefined;
		const _inputUczvzeZ = [_arrayValueq7bEINI, _arrayValueRh43T6t]
		const _formatjl4YQDx = true;
		const _localeyv7Qy6y = true;
		const _strictSAcfBoO = true;
		const _isUTCichdhCU = false;
		const _returnValuegJD79Zx = await createLocalOrUTC(_inputUczvzeZ, _formatjl4YQDx, _localeyv7Qy6y, _strictSAcfBoO, _isUTCichdhCU)
	});
})