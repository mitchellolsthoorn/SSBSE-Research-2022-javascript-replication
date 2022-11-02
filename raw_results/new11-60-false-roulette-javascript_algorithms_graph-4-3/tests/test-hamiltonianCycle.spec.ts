export {}
import hamiltonianCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/hamiltonian-cycle/hamiltonianCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('hamiltonianCycle', () => {
	it('test for hamiltonianCycle', async () => {
		const _returnValueLDBK4T9 = false;
		const _graphzagwYOI = () => { return _returnValueLDBK4T9 };
		const _returnValueVIot7Pe = await hamiltonianCycle(_graphzagwYOI)
	});

	it('test for hamiltonianCycle', async () => {
		const _isDirectedp3pjEC = false;
		const _graphrU93lkz = new Graph(_isDirectedp3pjEC)
		const _returnValueqaC1FwJ = await _graphrU93lkz.getVerticesIndices()
		const _returnValuecqwGR1F = await _graphrU93lkz.getVerticesIndices()
		const _returnValuenzXYVhS = await hamiltonianCycle(_graphrU93lkz)
	});

	it('test for hamiltonianCycle', async () => {
		const _isDirectedAtce3iT = true;
		const _graphNmv9Rs2 = new Graph(_isDirectedAtce3iT)
		const _returnValueJjupnyI = await _graphNmv9Rs2.getAdjacencyMatrix()
		const _returnValue4kJk0p = null;
		const _valuevjQLSdj = () => { return _returnValue4kJk0p };
		const _newVertexXmflle = new GraphVertex(_valuevjQLSdj)
		const _returnValueRIHT7Qa = await _newVertexXmflle.getKey()
		const _requiredEdgeTbEn2N = true;
		const _returnValuevLMWgve = await _newVertexXmflle.hasEdge(_requiredEdgeTbEn2N)
		const _edgebY5BIW6 = 1.057239379377128;
		const _returnValueM9PNUpy = await _newVertexXmflle.deleteEdge(_edgebY5BIW6)
		const _returnValueV3U8sL5 = await _graphNmv9Rs2.addVertex(_newVertexXmflle)
		const _returnValueA0GxGq5 = await hamiltonianCycle(_graphNmv9Rs2)
	});
})