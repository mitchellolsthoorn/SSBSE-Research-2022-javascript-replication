export {}
import detectUndirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectUndirectedCycle', () => {
	it('test for detectUndirectedCycle', async () => {
		const _arrayValueDna3DZ3 = null;
		const _returnValuebTCeGe8 = [_arrayValueDna3DZ3]
		const _getAllVerticesj5SbuoU = () => { return _returnValuebTCeGe8 };
		const _graphR3SQM4n = {
			"getAllVertices": _getAllVerticesj5SbuoU
	}
		const _returnValueP6HA86T = await detectUndirectedCycle(_graphR3SQM4n)
	});
})