export {}
import prim from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/prim/prim.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('prim', () => {
	it('test for prim', async () => {
		const _isDirectedBWAIAfT = "ycYGrsm8Hs5Gy66iSMKDXIWWvGT6x0ifB2Yl0mUqhpmvfgzclQXRhsUDRn8XQPrKlUPGW5AYeidOSuidfEjvBO";
		const _returnValuefuSugK0 = 4.511374839068862;
		const _getAllVerticesLOLjiie = () => { return _returnValuefuSugK0 };
		const _graphBr8cva = {
			"isDirected": _isDirectedBWAIAfT,
		"getAllVertices": _getAllVerticesLOLjiie
	}
		const _returnValuesuXUCby = await prim(_graphBr8cva)
	});
})