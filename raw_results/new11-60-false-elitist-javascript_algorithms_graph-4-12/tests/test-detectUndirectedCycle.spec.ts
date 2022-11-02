export {}
import detectUndirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectUndirectedCycle', () => {
	it('test for detectUndirectedCycle', async () => {
		const _returnValueGvsEVYv = undefined;
		const _returnValueFyORqRo = () => { return _returnValueGvsEVYv };
		const _getAllVerticesEjIuOv = () => { return _returnValueFyORqRo };
		const _graphay0py6 = {
			"getAllVertices": _getAllVerticesEjIuOv
	}
		const _returnValuerUPnjsZ = await detectUndirectedCycle(_graphay0py6)
	});
})