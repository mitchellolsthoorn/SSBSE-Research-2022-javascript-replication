export {}
import prim from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/prim/prim.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('prim', () => {
	it('test for prim', async () => {
		const _isDirectedqHf8NIp = true;
		const _returnValueMDSnGx = "qvKNc6yeYi";
		const _getAllVerticesermuVDN = () => { return _returnValueMDSnGx };
		const _graphXI3ZE0p = {
			"isDirected": _isDirectedqHf8NIp,
		"getAllVertices": _getAllVerticesermuVDN
	}
		const _returnValueg5onEx = await prim(_graphXI3ZE0p)
	});

	it('test for prim', async () => {
		const _isDirectedfJXGFpb = null;
		const _graphmD1YaSG = new Graph(_isDirectedfJXGFpb)
		const _returnValueSqhRQM = await _graphmD1YaSG.reverse()
		const _returnValuejFqCBcd = await _graphmD1YaSG.getWeight()
		const _returnValue2o9kup = 3.0911768310593395;
		const _getKeyLDv8u7j = () => { return _returnValue2o9kup };
		const _newVertexKJ8gAT = {
			"getKey": _getKeyLDv8u7j
	}
		const _returnValuecx9GsvD = await _graphmD1YaSG.addVertex(_newVertexKJ8gAT)
		const _returnValueVpk1d5 = await prim(_graphmD1YaSG)
	});

	it('test for prim', async () => {
		const _isDirectedV6SjwRZ = false;
		const _graphPKruI8t = new Graph(_isDirectedV6SjwRZ)
		const _returnValueXOvV5Yq = await _graphPKruI8t.reverse()
		const _valueW8OMjX9 = "M8rWCTkHsXMesUFtnsaabSFNbO8U2b4FmHpZq1Q5zdtpHJeKSOV6C";
		const _newVertexysG7Q1y = new GraphVertex(_valueW8OMjX9)
		const _returnValueyPzwMO6 = await _newVertexysG7Q1y.getDegree()
		const _returnValueIKTXY9J = await _newVertexysG7Q1y.getDegree()
		const _returnValue9HlOz5 = await _newVertexysG7Q1y.getNeighbors()
		const _returnValueWIi0sDw = await _newVertexysG7Q1y.getNeighbors()
		const _returnValueiicFsv7 = await _newVertexysG7Q1y.getKey()
		const _returnValueV4tiYFM = await _graphPKruI8t.addVertex(_newVertexysG7Q1y)
		const _returnValuefWwbek = await prim(_graphPKruI8t)
	});
})