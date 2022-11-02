export {}
import detectDirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectDirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";

describe('detectDirectedCycle', () => {
	it('test for detectDirectedCycle', async () => {
		const _arrayValueTFTtVOJ = null;
		const _arrayValue0gIpij = null;
		const _returnValuefSbbZQk = [_arrayValueTFTtVOJ, _arrayValue0gIpij]
		const _getAllVerticesPriMfR1 = () => { return _returnValuefSbbZQk };
		const _graphwVKz7h = {
			"getAllVertices": _getAllVerticesPriMfR1
	}
		const _returnValueEqn8t3H = await detectDirectedCycle(_graphwVKz7h)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedypnnKlR = true;
		const _graphZ9NYSFC = new Graph(_isDirectedypnnKlR)
		const _returnValueaRX4kI9 = await _graphZ9NYSFC.reverse()
		const _returnValueuwRu6Q5 = await _graphZ9NYSFC.getAdjacencyMatrix()
		const _vertexKeyX77knvM = true;
		const _returnValueewAc0Ae = await _graphZ9NYSFC.getVertexByKey(_vertexKeyX77knvM)
		const _returnValuezccXBjB = await detectDirectedCycle(_graphZ9NYSFC)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedBqXzQwQ = null;
		const _graphFIprEY = new Graph(_isDirectedBqXzQwQ)
		const _returnValueK17HYxE = {
		
	}
		const _returnValueunUDUAL = () => { return _returnValueK17HYxE };
		const _valueccunLhN = () => { return _returnValueunUDUAL };
		const _returnValuefeRb5oW = false;
		const _keyCallbackQlq2KAd = () => { return _returnValuefeRb5oW };
		const _startVertexI6bUwwC = new DisjointSetItem(_valueccunLhN, _keyCallbackQlq2KAd)
		const _returnValueCRiQFR9 = await _startVertexI6bUwwC.isRoot()
		const _returnValuei8075RQ = await _startVertexI6bUwwC.getRoot()
		const _endVertexB7hQfDE = undefined;
		const _returnValuexrWOTKv = await _graphFIprEY.findEdge(_startVertexI6bUwwC, _endVertexB7hQfDE)
		const _valueZp0vzM = undefined;
		const _returnValuezBkMiDn = undefined;
		const _keyCallbackJKPQlay = () => { return _returnValuezBkMiDn };
		const _startVertexwDXopdz = new DisjointSetItem(_valueZp0vzM, _keyCallbackJKPQlay)
		const _returnValuetDc5u7 = "OO1cYaogR4cDHy1F7ZNkBZfkxTgIrzo2e8rCfJ6ujR05bH5iheAcPW2agfjO";
		const _addChilddiIfT5 = () => { return _returnValuetDc5u7 };
		const _parentItemf1DtHH = {
			"addChild": _addChilddiIfT5
	}
		const _forceSettingParentChildkjPPe4U = false;
		const _returnValueEj19Fkk = await _startVertexwDXopdz.setParent(_parentItemf1DtHH, _forceSettingParentChildkjPPe4U)
		const _returnValuePwSxD8k = await _startVertexwDXopdz.getRank()
		const _returnValueLJIecJd = await _startVertexwDXopdz.isRoot()
		const _returnValueM5mctJK = await _startVertexwDXopdz.getChildren()
		const _endVertexdCO21Yl = "6p8FytK46SHQLul9gWOOabFxpXig5JcxsxJTOTxttKLF4I97";
		const _returnValuebm5wk5T = await _graphFIprEY.findEdge(_startVertexwDXopdz, _endVertexdCO21Yl)
		const _returnValueEB9Srw = await _graphFIprEY.reverse()
		const _returnValuez1edcUc = 5.8016139758331615;
		const _getKeyPLpAzwb = () => { return _returnValuez1edcUc };
		const _newVertexbpjZeUp = {
			"getKey": _getKeyPLpAzwb
	}
		const _returnValueWSoaLO4 = await _graphFIprEY.addVertex(_newVertexbpjZeUp)
		const _returnValuehakHoH = await detectDirectedCycle(_graphFIprEY)
	});
})