export {}
import detectUndirectedCycleUsingDisjointSet from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycleUsingDisjointSet.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('detectUndirectedCycleUsingDisjointSet', () => {
	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValueJLHefD8 = {
		
	}
		const _getAllVerticesrpePpIA = () => { return _returnValueJLHefD8 };
		const _returnValueAigHIx3 = false;
		const _getAllEdgesRUz71qh = () => { return _returnValueAigHIx3 };
		const _graphFAcHRTa = {
			"getAllVertices": _getAllVerticesrpePpIA,
		"getAllEdges": _getAllEdgesRUz71qh
	}
		const _returnValuenSnng5c = await detectUndirectedCycleUsingDisjointSet(_graphFAcHRTa)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _isDirectedmuqZGdD = null;
		const _graphZiS1HAK = new Graph(_isDirectedmuqZGdD)
		const _returnValuewcJDYyo = {
		
	}
		const _returnValuep1C83pD = () => { return _returnValuewcJDYyo };
		const _vertexKeyo1yB1tS = () => { return _returnValuep1C83pD };
		const _returnValueOgQSo26 = await _graphZiS1HAK.getVertexByKey(_vertexKeyo1yB1tS)
		const _returnValuej20O7Mn = await _graphZiS1HAK.getVerticesIndices()
		const _returnValueBW0r3jB = await _graphZiS1HAK.getWeight()
		const _returnValueB9idjn = await _graphZiS1HAK.getAllEdges()
		const _returnValuePtJzrd = await detectUndirectedCycleUsingDisjointSet(_graphZiS1HAK)
	});
})