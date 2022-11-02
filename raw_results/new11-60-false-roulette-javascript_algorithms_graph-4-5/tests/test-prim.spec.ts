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
		const _graphtPP5Ucb = null;
		const _returnValueNPbH6Ms = await prim(_graphtPP5Ucb)
	});

	it('test for prim', async () => {
		const _isDirectedEAAhX1 = true;
		const _arrayValuenzBC8P = -6.911851433070126;
		const _returnValueVRJBVBV = [_arrayValuenzBC8P]
		const _getAllVerticesa6lO4Uu = () => { return _returnValueVRJBVBV };
		const _graphM4aGn0C = {
			"isDirected": _isDirectedEAAhX1,
		"getAllVertices": _getAllVerticesa6lO4Uu
	}
		const _returnValuecjs4A1 = await prim(_graphM4aGn0C)
	});

	it('test for prim', async () => {
		const _isDirectedrmp77ix = false;
		const _graphRJoRvYp = new Graph(_isDirectedrmp77ix)
		const _returnValuefH1bgix = await _graphRJoRvYp.getAllVertices()
		const _returnValueNK1NQGM = await _graphRJoRvYp.getAdjacencyMatrix()
		const _returnValuekMLnyL = await _graphRJoRvYp.reverse()
		const _returnValuev9hejuv = undefined;
		const _getKeyb7Xhkhg = () => { return _returnValuev9hejuv };
		const _newVertexB2CFL3q = {
			"getKey": _getKeyb7Xhkhg
	}
		const _returnValuewh4fOK0 = await _graphRJoRvYp.addVertex(_newVertexB2CFL3q)
		const _returnValueCcaqnc4 = await prim(_graphRJoRvYp)
	});

	it('test for prim', async () => {
		const _isDirectedqxFicsK = false;
		const _graphs9eGkwY = new Graph(_isDirectedqxFicsK)
		const _returnValueDpadlJ = await _graphs9eGkwY.getAllVertices()
		const _returnValueP9e7kDU = await _graphs9eGkwY.getVerticesIndices()
		const _arrayValueposdJYK = null;
		const _arrayValueiRS79It = {
		
	}
		const _arrayValueJqqorwl = [_arrayValueiRS79It]
		const _valuewAwndpA = [_arrayValueposdJYK, _arrayValueJqqorwl]
		const _newVertexbfDarEG = new GraphVertex(_valuewAwndpA)
		const _returnValueMbMYQ5t = await _newVertexbfDarEG.deleteAllEdges()
		const _returnValuekzF7a4 = await _newVertexbfDarEG.getDegree()
		const _returnValuexnGIfLL = await _graphs9eGkwY.addVertex(_newVertexbfDarEG)
		const _returnValueBmnqjUB = await _graphs9eGkwY.getVerticesIndices()
		const _returnValueKcnQSE4 = await prim(_graphs9eGkwY)
	});
})