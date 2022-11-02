export {}
import hasPath from "../../.syntest/instrumented/benchmark/top10npm/lodash/hasPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hasPath', () => {
	it('test for hasPath', async () => {
		const _objectxLTxD31 = false;
		const _pathNxPFhHr = {
		
	}
		const _returnValueq9Qcd2N = await hasPath(_objectxLTxD31, _pathNxPFhHr)
	});

	it('test for hasPath', async () => {
		const _lengthZuRcRO6 = null;
		const _objectQ2dYZ1H = {
			"length": _lengthZuRcRO6
	}
		const _pathe8kuMFI = "LKmM7gz";
		const _returnValueVObPJjc = await hasPath(_objectQ2dYZ1H, _pathe8kuMFI)
	});

	it('test for hasPath', async () => {
		const _objectaSrNdA8 = null;
		const _pathezMEfUu = undefined;
		const _returnValuehMqCstH = await hasPath(_objectaSrNdA8, _pathezMEfUu)
	});
})