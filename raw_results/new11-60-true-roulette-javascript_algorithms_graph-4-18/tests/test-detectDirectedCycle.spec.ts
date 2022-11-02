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
		const _returnValueYYFVvTm = true;
		const _getAllVerticesnshA34L = () => { return _returnValueYYFVvTm };
		const _graphIVWAns0 = {
			"getAllVertices": _getAllVerticesnshA34L
	}
		const _returnValuePDeiXjU = await detectDirectedCycle(_graphIVWAns0)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedlQrmNWk = false;
		const _graphKiG9cfG = new Graph(_isDirectedlQrmNWk)
		const _returnValueh5tLglh = await _graphKiG9cfG.getAllVertices()
		const _returnValuesNEP6KU = await _graphKiG9cfG.getWeight()
		const _returnValueafncjWZ = await detectDirectedCycle(_graphKiG9cfG)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedFQCQIfx = true;
		const _graphUI23zC = new Graph(_isDirectedFQCQIfx)
		const _returnValueKXrDI2J = "txWOozxFjdKCshiGVmuZKQFGhFE6RUgQ8VZolSTo1dMkexadpfls9unS4MMIeG8";
		const _getNeighborsjvL6Hg = () => { return _returnValueKXrDI2J };
		const _vertexvKfyhx = {
			"getNeighbors": _getNeighborsjvL6Hg
	}
		const _returnValueTwf9K0 = await _graphUI23zC.getNeighbors(_vertexvKfyhx)
		const _valuepLQXLhG = false;
		const _returnValuewzUwMIM = 1.8407755910346175;
		const _keyCallbackOSOFRmp = () => { return _returnValuewzUwMIM };
		const _newVertextSgtK8W = new DisjointSetItem(_valuepLQXLhG, _keyCallbackOSOFRmp)
		const _returnValuev0FFVod = await _newVertextSgtK8W.getRoot()
		const _returnValueeSChrOB = await _newVertextSgtK8W.isRoot()
		const _returnValue6WdhPO = await _newVertextSgtK8W.getRoot()
		const _returnValueowNXS0 = await _newVertextSgtK8W.getKey()
		const _returnValueLq92My6 = await _graphUI23zC.addVertex(_newVertextSgtK8W)
		const _returnValuegEPB2eE = await _graphUI23zC.getVerticesIndices()
		const _returnValueHZ4KakT = await _graphUI23zC.getAllEdges()
		const _returnValuezxjC5eG = await _graphUI23zC.getAllVertices()
		const _returnValueaQQdoni = await detectDirectedCycle(_graphUI23zC)
	});
})