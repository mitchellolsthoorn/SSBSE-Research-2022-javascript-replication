export {}
import {mul} from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/math/matrix/Matrix.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('mul', () => {
	it('test for mul', async () => {
		const _ayZw9FG0 = []
		const _returnValueJaSGn0m = undefined;
		const _bW4cQuzw = () => { return _returnValueJaSGn0m };
		const _returnValueISn56vZ = await mul(_ayZw9FG0, _bW4cQuzw)
	});

	it('test for mul', async () => {
		const _arrayValueD20PT22 = 2.6585022890239607;
		const _arrayValueYp1ChY1 = [_arrayValueD20PT22]
		const _arrayValuekkQmWD = []
		const _returnValuetSTNsB7 = 1.8755363605385327;
		const _returnValueQ7OUK8c = () => { return _returnValuetSTNsB7 };
		const _arrayValueiPgj94 = () => { return _returnValueQ7OUK8c };
		const _a0OOxwk = [_arrayValueYp1ChY1, _arrayValuekkQmWD, _arrayValueiPgj94]
		const _bV0mIOBF = true;
		const _returnValueMbMCJwO = await mul(_a0OOxwk, _bV0mIOBF)
	});
})