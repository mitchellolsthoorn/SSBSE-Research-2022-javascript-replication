export {}
import prim from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/prim/prim.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('prim', () => {
	it('test for prim', async () => {
		const _isDirectedGz7Mfh8 = {
		
	}
		const _returnValueJ7VADvO = null;
		const _getAllVerticesvmKgDRH = () => { return _returnValueJ7VADvO };
		const _graphleXW95s = {
			"isDirected": _isDirectedGz7Mfh8,
		"getAllVertices": _getAllVerticesvmKgDRH
	}
		const _returnValueEc9WKkG = await prim(_graphleXW95s)
	});
})