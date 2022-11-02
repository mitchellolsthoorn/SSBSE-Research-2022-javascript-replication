export {}
import hasPath from "../../.syntest/instrumented/benchmark/top10npm/lodash/hasPath.js";

describe('hasPath', () => {
	it('test for hasPath', async () => {
		const _lengthLWTR3d8 = -2.507797233114051;
		const _objectcbQq6oB = {
			"length": _lengthLWTR3d8
	}
		const _arrayValuemIZPWIY = {
		
	}
		const _arrayValuefNecLo = {
		
	}
		const _pathVxqK9ye = [_arrayValuemIZPWIY, _arrayValuefNecLo]
		const _returnValueoPXiQJ5 = await hasPath(_objectcbQq6oB, _pathVxqK9ye)
	});

	it('test for hasPath', async () => {
		const _lengthM5wAuOE = true;
		const _objectMPtcv82 = {
			"length": _lengthM5wAuOE
	}
		const _pathZ9XmZW = -5.160197003175067;
		const _returnValuepb8kgR = await hasPath(_objectMPtcv82, _pathZ9XmZW)
	});

	it('test for hasPath', async () => {
		const _objectp1jbPoN = null;
		const _pathbixhG3p = null;
		const _returnValueh5PEcyv = await hasPath(_objectp1jbPoN, _pathbixhG3p)
	});
})