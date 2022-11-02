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
		const _returnValueZmD1pXL = -8.464822335239397;
		const _getVerticesIndicesdVORS7H = () => { return _returnValueZmD1pXL };
		const _returnValueLrmk7nB = null;
		const _getAdjacencyMatrixpbyQZMa = () => { return _returnValueLrmk7nB };
		const _arrayValueBeFM9B7 = -1.8539346165264696;
		const _arrayValuefcKIL9H = "5rwv59PG1tn4YQ8Gb8NDHfMwxOwtoDhNBHvXlRUB7tTKK6hp74daSrDjNw2mJhFvnEdiZPcb3qR";
		const _arrayValueFZxT6C0 = -6.340776330533289;
		const _arrayValuemXBAGCC = "SiX6kPRyk2YsOUe";
		const _arrayValueAc9pV6D = {
		
	}
		const _arrayValueibTFWPv = "iP1ChTkf5tNvKWy9u6a994T7NcB6CXIOt";
		const _arrayValueKPmq6eG = 8.00168462503568;
		const _arrayValueEltRnHX = [_arrayValueAc9pV6D, _arrayValueibTFWPv, _arrayValueKPmq6eG]
		const _arrayValueqhoJQsf = [_arrayValuefcKIL9H, _arrayValueFZxT6C0, _arrayValuemXBAGCC, _arrayValueEltRnHX]
		const _arrayValueYSnUW2C = []
		const _arrayValueFHUqh3b = null;
		const _getAllVerticesaULCCHP = [_arrayValueBeFM9B7, _arrayValueqhoJQsf, _arrayValueYSnUW2C, _arrayValueFHUqh3b]
		const _graphOs0jqH7 = {
			"getVerticesIndices": _getVerticesIndicesdVORS7H,
		"getAdjacencyMatrix": _getAdjacencyMatrixpbyQZMa,
		"getAllVertices": _getAllVerticesaULCCHP
	}
		const _returnValueRGJI4UC = await hamiltonianCycle(_graphOs0jqH7)
	});

	it('test for hamiltonianCycle', async () => {
		const _returnValueywD85bN = undefined;
		const _getVerticesIndiceshOFP0tk = () => { return _returnValueywD85bN };
		const _returnValuexYOEchg = undefined;
		const _returnValueqPoHRVz = () => { return _returnValuexYOEchg };
		const _getAdjacencyMatrixRa2WPB6 = () => { return _returnValueqPoHRVz };
		const _returnValueYvggKk7 = []
		const _getAllVerticesEaZD2AC = () => { return _returnValueYvggKk7 };
		const _graphWkwfnvp = {
			"getVerticesIndices": _getVerticesIndiceshOFP0tk,
		"getAdjacencyMatrix": _getAdjacencyMatrixRa2WPB6,
		"getAllVertices": _getAllVerticesEaZD2AC
	}
		const _returnValueOcHTew8 = await hamiltonianCycle(_graphWkwfnvp)
	});

	it('test for hamiltonianCycle', async () => {
		const _isDirectedImmQLu = false;
		const _graphc5li4Rh = new Graph(_isDirectedImmQLu)
		const _returnValueGIsSe6 = await _graphc5li4Rh.getAllVertices()
		const _valuem6RBbXc = -2.7508903397479765;
		const _newVertexBbopA3j = new GraphVertex(_valuem6RBbXc)
		const _returnValueCE99YNg = await _newVertexBbopA3j.getDegree()
		const _vertexcCOQWMa = undefined;
		const _returnValueuRIEMnU = await _newVertexBbopA3j.findEdge(_vertexcCOQWMa)
		const _returnValueH4X9aRi = await _graphc5li4Rh.addVertex(_newVertexBbopA3j)
		const _returnValueUg250V1 = await _graphc5li4Rh.getAllVertices()
		const _returnValueWGGUDEj = null;
		const _vertexKeyDQ6WCs = () => { return _returnValueWGGUDEj };
		const _returnValueRH9lZmH = await _graphc5li4Rh.getVertexByKey(_vertexKeyDQ6WCs)
		const _returnValuew9yn0t = await hamiltonianCycle(_graphc5li4Rh)
	});
})