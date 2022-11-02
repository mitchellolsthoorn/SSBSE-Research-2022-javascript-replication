export {}
import hasPath from "../../.syntest/instrumented/benchmark/top10npm/lodash/hasPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hasPath', () => {
	it('test for hasPath', async () => {
		const _arrayValueAgtMqZs = undefined;
		const _lengthxz0KY6K = [_arrayValueAgtMqZs]
		const _objectF3JzsK = {
			"length": _lengthxz0KY6K
	}
		const _pathkrQ7xjq = {
		
	}
		const _returnValueEQvNL1B = await hasPath(_objectF3JzsK, _pathkrQ7xjq)
	});

	it('test for hasPath', async () => {
		const _lengthCrUOxIs = null;
		const _objectcclhhwV = {
			"length": _lengthCrUOxIs
	}
		const _returnValuecnSRkSa = null;
		const _pathybKkPi4 = () => { return _returnValuecnSRkSa };
		const _returnValueqHizxB1 = await hasPath(_objectcclhhwV, _pathybKkPi4)
	});

	it('test for hasPath', async () => {
		const _objectl3AK3MH = null;
		const _pathfvFLaSr = null;
		const _returnValueHQZM0yc = await hasPath(_objectl3AK3MH, _pathfvFLaSr)
	});
})