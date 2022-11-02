export {}
import bfTravellingSalesman from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/travelling-salesman/bfTravellingSalesman.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('bfTravellingSalesman', () => {
	it('test for bfTravellingSalesman', async () => {
		const _arrayValueqbK1CI = null;
		const _arrayValueCuuv5G0 = undefined;
		const _returnValuez4uwPcQ = [_arrayValueqbK1CI, _arrayValueCuuv5G0]
		const _getAllVerticesjHqLvdt = () => { return _returnValuez4uwPcQ };
		const _returnValuezwCzH8U = null;
		const _getAdjacencyMatrixDtgwG1M = () => { return _returnValuezwCzH8U };
		const _returnValueRN9Dxxh = "GcY5hTy18xx14X19n0sHtna3fwHJqis3cYXceEWgkqFLWFz8F0joDhqg9T3omc3PnJcczm";
		const _returnValueVOgY4aP = () => { return _returnValueRN9Dxxh };
		const _returnValueysItZMS = () => { return _returnValueVOgY4aP };
		const _getVerticesIndicesJFYZNf = () => { return _returnValueysItZMS };
		const _graphK4ncq1i = {
			"getAllVertices": _getAllVerticesjHqLvdt,
		"getAdjacencyMatrix": _getAdjacencyMatrixDtgwG1M,
		"getVerticesIndices": _getVerticesIndicesJFYZNf
	}
		const _returnValue8TZMJX = await bfTravellingSalesman(_graphK4ncq1i)
	});

	it('test for bfTravellingSalesman', async () => {
		const _isDirectedoyko8k = true;
		const _graphaDS5QdH = new Graph(_isDirectedoyko8k)
		const _returnValuesRwG0Z = await _graphaDS5QdH.getWeight()
		const _returnValue3t2keH = await _graphaDS5QdH.reverse()
		const _returnValueUURAOq = await _graphaDS5QdH.getAllVertices()
		const _arrayValueAd4vbX = {
		
	}
		const _arrayValueoopAXKc = null;
		const _arrayValue2gaodv = "REEb";
		const _arrayValuedEM97Mp = undefined;
		const _arrayValueli6tHRt = false;
		const _arrayValueNgNsVkV = undefined;
		const _arrayValueLQhMnUa = null;
		const _arrayValueQR8Knx = [_arrayValuedEM97Mp, _arrayValueli6tHRt, _arrayValueNgNsVkV, _arrayValueLQhMnUa]
		const _arrayValueti22d8P = undefined;
		const _arrayValueri475Cr = [_arrayValueoopAXKc, _arrayValue2gaodv, _arrayValueQR8Knx, _arrayValueti22d8P]
		const _valueK8PKxK4 = [_arrayValueAd4vbX, _arrayValueri475Cr]
		const _newVertexV3NqTrG = new GraphVertex(_valueK8PKxK4)
		const _arrayValueaRSkRqC = null;
		const _returnValuesnSiyhQ = [_arrayValueaRSkRqC]
		const _arrayValuegsFlCT4 = () => { return _returnValuesnSiyhQ };
		const _arrayValueQ3ehCum = {
		
	}
		const _arrayValueIuMM0qC = true;
		const _arrayValueXa85VM = [_arrayValueIuMM0qC]
		const _arrayValueNalSSyE = [_arrayValueQ3ehCum, _arrayValueXa85VM]
		const _edgeAgVoPM = [_arrayValuegsFlCT4, _arrayValueNalSSyE]
		const _returnValueDs4HIHw = await _newVertexV3NqTrG.deleteEdge(_edgeAgVoPM)
		const _requiredEdgeeAlk9w = null;
		const _returnValuettDkTrY = await _newVertexV3NqTrG.hasEdge(_requiredEdgeeAlk9w)
		const _returnValuezP5Ewww = false;
		const _edgeTwAOWu = () => { return _returnValuezP5Ewww };
		const _returnValuesDWmMYZ = await _newVertexV3NqTrG.deleteEdge(_edgeTwAOWu)
		const _returnValuezoVavLc = await _newVertexV3NqTrG.getDegree()
		const _returnValueFuFbrv = await _newVertexV3NqTrG.getNeighbors()
		const _returnValuePbUXhqX = await _graphaDS5QdH.addVertex(_newVertexV3NqTrG)
		const _returnValueVPVrpbf = await bfTravellingSalesman(_graphaDS5QdH)
	});
})