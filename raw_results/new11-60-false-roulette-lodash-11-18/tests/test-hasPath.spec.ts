export {}
import hasPath from "../../.syntest/instrumented/benchmark/top10npm/lodash/hasPath.js";

describe('hasPath', () => {
	it('test for hasPath', async () => {
		const _arrayValueN424e93 = -5.160124350239186;
		const _arrayValueeuh6fQq = 5.276805089480723;
		const _returnValueDGEKDbT = [_arrayValueN424e93, _arrayValueeuh6fQq]
		const _objectMNTwutT = () => { return _returnValueDGEKDbT };
		const _returnValueJvTL37k = null;
		const _pathI4ax21 = () => { return _returnValueJvTL37k };
		const _returnValuepDWQm82 = await hasPath(_objectMNTwutT, _pathI4ax21)
	});

	it('test for hasPath', async () => {
		const _object3m5CLP = null;
		const _returnValueEAYh13u = 8.048856843733851;
		const _pathKjr5Xu = () => { return _returnValueEAYh13u };
		const _returnValueIvHb4RN = await hasPath(_object3m5CLP, _pathKjr5Xu)
	});

	it('test for hasPath', async () => {
		const _objectiFgbh8I = "BOvS1LRLw8Kvsbi19kSThSfqtsZtE8lW";
		const _pathTdQBVfY = "1";
		const _returnValueqvutNVU = await hasPath(_objectiFgbh8I, _pathTdQBVfY)
	});
})