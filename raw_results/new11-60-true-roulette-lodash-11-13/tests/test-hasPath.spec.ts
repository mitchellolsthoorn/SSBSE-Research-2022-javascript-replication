export {}
import hasPath from "../../.syntest/instrumented/benchmark/top10npm/lodash/hasPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hasPath', () => {
	it('test for hasPath', async () => {
		const _objectLIRPPLy = {
		
	}
		const _pathFUUqtPg = {
		
	}
		const _returnValuefHqFtJ8 = await hasPath(_objectLIRPPLy, _pathFUUqtPg)
	});

	it('test for hasPath', async () => {
		const _objectIkpcZYl = null;
		const _pathT2nAYN = "QOP3mK6xLt7zeDshor7";
		const _returnValueMD8lUEN = await hasPath(_objectIkpcZYl, _pathT2nAYN)
	});

	it('test for hasPath', async () => {
		const _length2ayTyJ = "3Tyh3STdrZ";
		const _objectLAiZ0f9 = {
			"length": _length2ayTyJ
	}
		const _returnValuemrUzVsW = "KWDQDhxiBZc9HoDwxQfs3aiKL178BVjFKGI";
		const _arrayValuehnXQgOC = () => { return _returnValuemrUzVsW };
		const _path8gqieP = [_arrayValuehnXQgOC]
		const _returnValuelHeTsh = await hasPath(_objectLAiZ0f9, _path8gqieP)
	});

	it('test for hasPath', async () => {
		const _objectDUKVRM7 = "feLy1Nqa4q4Kj5K5zBAgSS0aduWuEa4AgQG3oz6wHZKUvnPP0Iysrk2uvGBd9";
		const _pathDTyHkHk = "3";
		const _returnValueHyg0mBM = await hasPath(_objectDUKVRM7, _pathDTyHkHk)
	});
})