export {}
import bfTravellingSalesman from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/travelling-salesman/bfTravellingSalesman.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('bfTravellingSalesman', () => {
	it('test for bfTravellingSalesman', async () => {
		const _returnValuee36zYjy = false;
		const _getAllVerticesVP5WTZg = () => { return _returnValuee36zYjy };
		const _returnValuefpQYIr3 = "HmMeUQHcRCa4LbiIRWzCrrwcHbyVZA4L5aHlQxJF1qtVtCCoCl7dCUnPfRAFlPI";
		const _getAdjacencyMatrixs1JU9oL = () => { return _returnValuefpQYIr3 };
		const _returnValueclBhkQ5 = true;
		const _getVerticesIndicesmxhOHRD = () => { return _returnValueclBhkQ5 };
		const _graphnKV1FHf = {
			"getAllVertices": _getAllVerticesVP5WTZg,
		"getAdjacencyMatrix": _getAdjacencyMatrixs1JU9oL,
		"getVerticesIndices": _getVerticesIndicesmxhOHRD
	}
		const _returnValueNtODPtP = await bfTravellingSalesman(_graphnKV1FHf)
	});
})