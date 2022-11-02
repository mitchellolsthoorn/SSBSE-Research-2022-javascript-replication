export {}
import kruskal from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/kruskal/kruskal.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('kruskal', () => {
	it('test for kruskal', async () => {
		const _graphonn8au1 = "zoPQYID9c3qE86WRVBHiGr5e7k5YwzIdpXirTrGZJ8K1coU5VFZX";
		const _returnValue18jeIl = await kruskal(_graphonn8au1)
	});

	it('test for kruskal', async () => {
		const _isDirectedxGPGrOx = -1.9995608582516553;
		const _returnValueUH8qZWz = 5.4523211328648244;
		const _getAllEdgeskifHMs8 = () => { return _returnValueUH8qZWz };
		const _returnValuerR3MGYC = true;
		const _getAllVerticesi5mTrRk = () => { return _returnValuerR3MGYC };
		const _graphj23uLe8 = {
			"isDirected": _isDirectedxGPGrOx,
		"getAllEdges": _getAllEdgeskifHMs8,
		"getAllVertices": _getAllVerticesi5mTrRk
	}
		const _returnValueqd7oTHX = await kruskal(_graphj23uLe8)
	});

	it('test for kruskal', async () => {
		const _isDirectede0Km4p = false;
		const _graph39dyw3 = new Graph(_isDirectede0Km4p)
		const _vertexKeyZO9JQCC = undefined;
		const _returnValueMBJaYRD = await _graph39dyw3.getVertexByKey(_vertexKeyZO9JQCC)
		const _vertexKeyqcRGUJ = true;
		const _returnValueiZjeJQ = await _graph39dyw3.getVertexByKey(_vertexKeyqcRGUJ)
		const _vertexKeypAUKAwy = {
		
	}
		const _returnValuepki68z = await _graph39dyw3.getVertexByKey(_vertexKeypAUKAwy)
		const _returnValuekI89Fx = await _graph39dyw3.getVerticesIndices()
		const _returnValueRumAR37 = await kruskal(_graph39dyw3)
	});
})