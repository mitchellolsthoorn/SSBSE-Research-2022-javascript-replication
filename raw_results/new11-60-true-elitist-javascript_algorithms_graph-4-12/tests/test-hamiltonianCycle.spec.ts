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
		const _returnValuef2BIm79 = null;
		const _getVerticesIndicesOWRtW53 = () => { return _returnValuef2BIm79 };
		const _returnValueJ8amYil = "2hRN46dQCbM1fck8CNh7KRhdsPCcNkG1oUFbFQhDqbbwaJX2iVPa3BsxE";
		const _returnValueaI0Dy4e = () => { return _returnValueJ8amYil };
		const _getAdjacencyMatrixawmng6I = () => { return _returnValueaI0Dy4e };
		const _returnValuee5ls6RC = 9.589995684197355;
		const _getAllVerticesAmMYy0H = () => { return _returnValuee5ls6RC };
		const _graphCWmUYPE = {
			"getVerticesIndices": _getVerticesIndicesOWRtW53,
		"getAdjacencyMatrix": _getAdjacencyMatrixawmng6I,
		"getAllVertices": _getAllVerticesAmMYy0H
	}
		const _returnValuewuenSvi = await hamiltonianCycle(_graphCWmUYPE)
	});

	it('test for hamiltonianCycle', async () => {
		const _isDirectedyhrC4H2 = -6.363247008419011;
		const _graphXU7HCNx = new Graph(_isDirectedyhrC4H2)
		const _valuezFEiwdn = false;
		const _newVertexyHl6XwO = new GraphVertex(_valuezFEiwdn)
		const _vertexRBAIZPt = 1.7582018757203777;
		const _returnValueLEmDm98 = await _newVertexyHl6XwO.findEdge(_vertexRBAIZPt)
		const _returnValuegGmTDgL = await _newVertexyHl6XwO.getKey()
		const _returnValuexDw8W6X = await _graphXU7HCNx.addVertex(_newVertexyHl6XwO)
		const _returnValuenVarG8G = await _graphXU7HCNx.getWeight()
		const _vertexKeyGo9nKRU = 9.965095244451831;
		const _returnValuernGJd4 = await _graphXU7HCNx.getVertexByKey(_vertexKeyGo9nKRU)
		const _returnValuepndFdsc = await hamiltonianCycle(_graphXU7HCNx)
	});
})