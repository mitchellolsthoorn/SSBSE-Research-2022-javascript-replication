export {}
import hasPath from "../../.syntest/instrumented/benchmark/top10npm/lodash/hasPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hasPath', () => {
	it('test for hasPath', async () => {
		const _arrayValueVgscQsW = true;
		const _lengthRZWmWu = [_arrayValueVgscQsW]
		const _objectpnpIVJE = {
			"length": _lengthRZWmWu
	}
		const _pathKXNqdfQ = {
		
	}
		const _returnValueMz3sW69 = await hasPath(_objectpnpIVJE, _pathKXNqdfQ)
	});

	it('test for hasPath', async () => {
		const _lengthAeixVC1 = true;
		const _objectLCQnebH = {
			"length": _lengthAeixVC1
	}
		const _pathPNk8rl9 = undefined;
		const _returnValueNp6Bj1W = await hasPath(_objectLCQnebH, _pathPNk8rl9)
	});

	it('test for hasPath', async () => {
		const _objecttIXne0j = undefined;
		const _pathWkjN26A = undefined;
		const _returnValue7jhWUf = await hasPath(_objecttIXne0j, _pathWkjN26A)
	});
})