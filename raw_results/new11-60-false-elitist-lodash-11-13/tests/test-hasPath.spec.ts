export {}
import hasPath from "../../.syntest/instrumented/benchmark/top10npm/lodash/hasPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hasPath', () => {
	it('test for hasPath', async () => {
		const _lengthH0EJz2 = []
		const _objectm22MLNT = {
			"length": _lengthH0EJz2
	}
		const _pathg6dm7Ns = {
		
	}
		const _returnValueK41x0Bq = await hasPath(_objectm22MLNT, _pathg6dm7Ns)
	});

	it('test for hasPath', async () => {
		const _lengthkACFmWR = false;
		const _objectaKC0SVO = {
			"length": _lengthkACFmWR
	}
		const _pathWQeBod5 = null;
		const _returnValueYDuwkG4 = await hasPath(_objectaKC0SVO, _pathWQeBod5)
	});

	it('test for hasPath', async () => {
		const _objectmjEKtOo = null;
		const _pathXeMlLmO = true;
		const _returnValuewYiEDX1 = await hasPath(_objectmjEKtOo, _pathXeMlLmO)
	});
})