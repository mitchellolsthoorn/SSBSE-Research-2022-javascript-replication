export {}
import hasPath from "../../.syntest/instrumented/benchmark/top10npm/lodash/hasPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hasPath', () => {
	it('test for hasPath', async () => {
		const _lengthZIFjjzC = null;
		const _objectNQvYmVe = {
			"length": _lengthZIFjjzC
	}
		const _pathIEcfX6V = {
		
	}
		const _returnValuex96dTCu = await hasPath(_objectNQvYmVe, _pathIEcfX6V)
	});

	it('test for hasPath', async () => {
		const _lengthKvC9WJm = null;
		const _objectJWR1vQq = {
			"length": _lengthKvC9WJm
	}
		const _pathz19agVT = undefined;
		const _returnValueA1LbTb = await hasPath(_objectJWR1vQq, _pathz19agVT)
	});

	it('test for hasPath', async () => {
		const _objectnt0QQPN = undefined;
		const _pathanWcmN0 = null;
		const _returnValuelmI74Sa = await hasPath(_objectnt0QQPN, _pathanWcmN0)
	});
})