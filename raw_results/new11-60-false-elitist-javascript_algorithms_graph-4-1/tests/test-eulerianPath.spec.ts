export {}
import eulerianPath from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/eulerian-path/eulerianPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('eulerianPath', () => {
	it('test for eulerianPath', async () => {
		const _returnValueFiifLbZ = -4.059923794036964;
		const _getAllEdgesrnnCjv5 = () => { return _returnValueFiifLbZ };
		const _returnValuezQHbdW3 = undefined;
		const _getAllVerticeswtktfAF = () => { return _returnValuezQHbdW3 };
		const _returnValuecVXakHq = "Ol33MEqMmrPTpxxsPDFt95dHgPfCDRxOtaZGVmMMd9xxVxC6WBq6AcgUu4IhxzF66uzKbU0W27gpT8a";
		const _deleteEdgeS1VWwG3 = () => { return _returnValuecVXakHq };
		const _graphJbs0SG = {
			"getAllEdges": _getAllEdgesrnnCjv5,
		"getAllVertices": _getAllVerticeswtktfAF,
		"deleteEdge": _deleteEdgeS1VWwG3
	}
		const _returnValueIRTRDZh = await eulerianPath(_graphJbs0SG)
	});

	it('test for eulerianPath', async () => {
		const _returnValuexb0mW3W = []
		const _getAllEdgest1IJJjl = () => { return _returnValuexb0mW3W };
		const _returnValuefwI7G4q = 1.0641131506455324;
		const _returnValueLHLm3rp = () => { return _returnValuefwI7G4q };
		const _getAllVerticesSwU9p87 = () => { return _returnValueLHLm3rp };
		const _returnValuesNKpbsP = -8.951845275503834;
		const _deleteEdgeZfu9znb = () => { return _returnValuesNKpbsP };
		const _graphMjI8Joa = {
			"getAllEdges": _getAllEdgest1IJJjl,
		"getAllVertices": _getAllVerticesSwU9p87,
		"deleteEdge": _deleteEdgeZfu9znb
	}
		const _returnValueLAsGhvn = await eulerianPath(_graphMjI8Joa)
	});
})