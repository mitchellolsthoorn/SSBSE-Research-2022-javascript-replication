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
		const _returnValue1bavWe = true;
		const _returnValuelmgd1ep = () => { return _returnValue1bavWe };
		const _getVerticesIndicesF8q7iA6 = () => { return _returnValuelmgd1ep };
		const _returnValueARmbb1 = "Rk8bJLu";
		const _getAdjacencyMatrixhsctovG = () => { return _returnValueARmbb1 };
		const _returnValuegC1aLfu = null;
		const _getAllVerticeskTWl4Q8 = () => { return _returnValuegC1aLfu };
		const _graphodOXfo = {
			"getVerticesIndices": _getVerticesIndicesF8q7iA6,
		"getAdjacencyMatrix": _getAdjacencyMatrixhsctovG,
		"getAllVertices": _getAllVerticeskTWl4Q8
	}
		const _returnValueBhqpCoq = await hamiltonianCycle(_graphodOXfo)
	});

	it('test for hamiltonianCycle', async () => {
		const _returnValueTrUo2r2 = 0.8222411710479527;
		const _getVerticesIndicesKZlRNF2 = () => { return _returnValueTrUo2r2 };
		const _returnValueCGD6siV = null;
		const _returnValueLd2qrT = () => { return _returnValueCGD6siV };
		const _getAdjacencyMatrixjq3xCGe = () => { return _returnValueLd2qrT };
		const _returnValueC67E452 = true;
		const _getAllVerticesDj0U6i = () => { return _returnValueC67E452 };
		const _graphUYp6v4b = {
			"getVerticesIndices": _getVerticesIndicesKZlRNF2,
		"getAdjacencyMatrix": _getAdjacencyMatrixjq3xCGe,
		"getAllVertices": _getAllVerticesDj0U6i
	}
		const _returnValuelwrOUEI = await hamiltonianCycle(_graphUYp6v4b)
	});

	it('test for hamiltonianCycle', async () => {
		const _isDirectedHbfKLQo = false;
		const _graphKVb2R7 = new Graph(_isDirectedHbfKLQo)
		const _arrayValueQsuM0GH = null;
		const _arrayValueRV8OSRp = -8.095435629070035;
		const _valueRetC6m3 = [_arrayValueQsuM0GH, _arrayValueRV8OSRp]
		const _newVertexFsbAJUn = new GraphVertex(_valueRetC6m3)
		const _requiredEdgeuf9RTD1 = "yXPY9fVocw7okqMoUaNmNGWwIV7HWRXsm6mgKZ8cRJ98L438evUh";
		const _returnValueoNkSABV = await _newVertexFsbAJUn.hasEdge(_requiredEdgeuf9RTD1)
		const _requiredEdgeqdyLez6 = -4.220995841162827;
		const _returnValueOnGJ6AQ = await _newVertexFsbAJUn.hasEdge(_requiredEdgeqdyLez6)
		const _vertexIaCnDBn = "LSGwowNAbegkTmVAD5ME8OSiVyfXFOUES5gqpjJ95Ej00PpSS0yvUhQ2CwDK2GrgvUYkHEEHVjLNS8fmG6NZPh79cBNKQqwEQRW";
		const _returnValueTMjTFgH = await _newVertexFsbAJUn.hasNeighbor(_vertexIaCnDBn)
		const _returnValueIZGR32p = await _graphKVb2R7.addVertex(_newVertexFsbAJUn)
		const _returnValueELd4zDv = await hamiltonianCycle(_graphKVb2R7)
	});
})