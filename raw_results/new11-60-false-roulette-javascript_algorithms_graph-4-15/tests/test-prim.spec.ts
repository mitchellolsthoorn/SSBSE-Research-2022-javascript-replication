export {}
import prim from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/prim/prim.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('prim', () => {
	it('test for prim', async () => {
		const _arrayValueivbMeXk = null;
		const _returnValuepXLEujL = {
		
	}
		const _arrayValuebYf23Fd = () => { return _returnValuepXLEujL };
		const _arrayValuejwpKkcD = -7.374262150750096;
		const _graphGUoUuKF = [_arrayValueivbMeXk, _arrayValuebYf23Fd, _arrayValuejwpKkcD]
		const _returnValuejfdRx8x = await prim(_graphGUoUuKF)
	});

	it('test for prim', async () => {
		const _isDirectedhOkB6v = 8.127420420988937;
		const _returnValueG6sj9Sv = {
		
	}
		const _getAllVerticesi0uJBIW = () => { return _returnValueG6sj9Sv };
		const _graphEyHOitD = {
			"isDirected": _isDirectedhOkB6v,
		"getAllVertices": _getAllVerticesi0uJBIW
	}
		const _returnValuehjVlfoE = await prim(_graphEyHOitD)
	});
})