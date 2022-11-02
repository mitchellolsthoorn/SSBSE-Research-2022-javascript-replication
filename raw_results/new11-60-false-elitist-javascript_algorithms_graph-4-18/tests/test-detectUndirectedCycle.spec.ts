export {}
import detectUndirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectUndirectedCycle', () => {
	it('test for detectUndirectedCycle', async () => {
		const _returnValueHEGtTa6 = -2.227417527502535;
		const _getAllVerticesJBlZbrm = () => { return _returnValueHEGtTa6 };
		const _graphGGbC7XM = {
			"getAllVertices": _getAllVerticesJBlZbrm
	}
		const _returnValueJZBMymO = await detectUndirectedCycle(_graphGGbC7XM)
	});
})