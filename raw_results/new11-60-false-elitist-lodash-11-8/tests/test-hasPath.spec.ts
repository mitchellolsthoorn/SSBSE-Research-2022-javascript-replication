export {}
import hasPath from "../../.syntest/instrumented/benchmark/top10npm/lodash/hasPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hasPath', () => {
	it('test for hasPath', async () => {
		const _objectK1P08AV = null;
		const _pathFbLvo4z = {
		
	}
		const _returnValueJPPL6BP = await hasPath(_objectK1P08AV, _pathFbLvo4z)
	});

	it('test for hasPath', async () => {
		const _lengthDGeBRiO = 0.09084981602061859;
		const _objectSmNNsqK = {
			"length": _lengthDGeBRiO
	}
		const _pathQWZqzc0 = null;
		const _returnValueqYMA3oS = await hasPath(_objectSmNNsqK, _pathQWZqzc0)
	});

	it('test for hasPath', async () => {
		const _objecttZBWl7Z = null;
		const _pathfyrn7Ne = true;
		const _returnValuerR2VBP1 = await hasPath(_objecttZBWl7Z, _pathfyrn7Ne)
	});
})