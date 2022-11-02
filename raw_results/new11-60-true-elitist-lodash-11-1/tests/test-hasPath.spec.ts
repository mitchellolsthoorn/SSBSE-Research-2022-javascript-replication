export {}
import hasPath from "../../.syntest/instrumented/benchmark/top10npm/lodash/hasPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hasPath', () => {
	it('test for hasPath', async () => {
		const _lengthuavbrzS = undefined;
		const _objectPosLNBr = {
			"length": _lengthuavbrzS
	}
		const _pathB4Z8QOq = {
		
	}
		const _returnValuez3jpLBm = await hasPath(_objectPosLNBr, _pathB4Z8QOq)
	});

	it('test for hasPath', async () => {
		const _objectgpmUjSL = null;
		const _pathihxmRb8 = undefined;
		const _returnValueg3w2F3 = await hasPath(_objectgpmUjSL, _pathihxmRb8)
	});

	it('test for hasPath', async () => {
		const _lengthsWXUXQ1 = true;
		const _objectkOjM6Lo = {
			"length": _lengthsWXUXQ1
	}
		const _pathbI921Yv = null;
		const _returnValueZxE4GzZ = await hasPath(_objectkOjM6Lo, _pathbI921Yv)
	});
})