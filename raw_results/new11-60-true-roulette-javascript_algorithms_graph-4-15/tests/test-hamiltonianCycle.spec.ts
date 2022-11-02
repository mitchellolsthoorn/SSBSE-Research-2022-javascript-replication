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
		const _arrayValuevlG4w8Y = "";
		const _arrayValueLLeBBl = "5sNarwJYeWmCnkvWeCnSWqgc6v7QRxmCgfXEl2uiFalyJv5cuVnnCV61aVtcxHV34c";
		const _arrayValuep48dT70 = "HBNNBAokvl4N2KP3YnOMrLsOq2BwcyfHJI8KWdGp";
		const _returnValueLnfU5g = [_arrayValuevlG4w8Y, _arrayValueLLeBBl, _arrayValuep48dT70]
		const _getVerticesIndicesRIF9JeK = () => { return _returnValueLnfU5g };
		const _returnValueRP9Uuo = null;
		const _getAdjacencyMatrixPXzCfYX = () => { return _returnValueRP9Uuo };
		const _returnValueCfzAdEx = undefined;
		const _getAllVerticesYcpTVMG = () => { return _returnValueCfzAdEx };
		const _graph8bYkjv = {
			"getVerticesIndices": _getVerticesIndicesRIF9JeK,
		"getAdjacencyMatrix": _getAdjacencyMatrixPXzCfYX,
		"getAllVertices": _getAllVerticesYcpTVMG
	}
		const _returnValueM0rtull = await hamiltonianCycle(_graph8bYkjv)
	});

	it('test for hamiltonianCycle', async () => {
		const _returnValuelpAc8g = null;
		const _getVerticesIndicesJrZhFEd = () => { return _returnValuelpAc8g };
		const _returnValueq2ap2Bc = false;
		const _getAdjacencyMatrixyAlVqE = () => { return _returnValueq2ap2Bc };
		const _returnValuec2nJpok = "OclVh7bKGz1ct1ZPczITqVUGCruhNgMCUymrx0OOepH3JI6TGBFMUzMAX9LCTr9btIQHKf";
		const _getAllVerticesyp18SIi = () => { return _returnValuec2nJpok };
		const _graphLa7sDQF = {
			"getVerticesIndices": _getVerticesIndicesJrZhFEd,
		"getAdjacencyMatrix": _getAdjacencyMatrixyAlVqE,
		"getAllVertices": _getAllVerticesyp18SIi
	}
		const _returnValuef31163o = await hamiltonianCycle(_graphLa7sDQF)
	});

	it('test for hamiltonianCycle', async () => {
		const _isDirectedIOxT0L8 = true;
		const _graphWRJmeCL = new Graph(_isDirectedIOxT0L8)
		const _returnValue4wS7BS = await _graphWRJmeCL.getAllVertices()
		const _returnValueSdaWgvz = await _graphWRJmeCL.getWeight()
		const _vertexKeyX7benQG = undefined;
		const _returnValueGTh4U1H = await _graphWRJmeCL.getVertexByKey(_vertexKeyX7benQG)
		const _returnValueg0Q76U = await _graphWRJmeCL.getAdjacencyMatrix()
		const _valuedTUVJjB = {
		
	}
		const _newVertexwHFKRvJ = new GraphVertex(_valuedTUVJjB)
		const _returnValuedR2CZqW = await _newVertexwHFKRvJ.getEdges()
		const _edgeuCpl0CS = "5OZnIi1DzQddtCyaDNQC4Ymhu7W5O";
		const _returnValuemUhOlX = await _newVertexwHFKRvJ.deleteEdge(_edgeuCpl0CS)
		const _returnValueVJgmCLo = await _graphWRJmeCL.addVertex(_newVertexwHFKRvJ)
		const _returnValueDKD2HWL = await hamiltonianCycle(_graphWRJmeCL)
	});
})