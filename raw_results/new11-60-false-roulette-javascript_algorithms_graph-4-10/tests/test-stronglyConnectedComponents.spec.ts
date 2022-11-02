export {}
import Comparator from "../../benchmark/large_projects/javascript-algorithms/src/utils/comparator/Comparator.js";
import stronglyConnectedComponents from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/strongly-connected-components/stronglyConnectedComponents.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('stronglyConnectedComponents', () => {
	it('test for stronglyConnectedComponents', async () => {
		const _compareFunctionMXoenDY = null;
		const _graphN2kmufp = new Comparator(_compareFunctionMXoenDY)
		const _returnValuecWMRUkW = null;
		const _al53qr1F = () => { return _returnValuecWMRUkW };
		const _bUHSJRy0 = null;
		const _returnValue7YFnX1 = await _graphN2kmufp.greaterThanOrEqual(_al53qr1F, _bUHSJRy0)
		const _aHBRwqlm = 6.317595837320951;
		const _bSesq3IR = "3l5XM";
		const _returnValueP9cR4mu = await _graphN2kmufp.lessThan(_aHBRwqlm, _bSesq3IR)
		const _returnValueNFXgndw = await stronglyConnectedComponents(_graphN2kmufp)
	});

	it('test for stronglyConnectedComponents', async () => {
		const _isDirectedRMo7tAC = true;
		const _graphwi8psB = new Graph(_isDirectedRMo7tAC)
		const _returnValuetke72Sp = await _graphwi8psB.getAllVertices()
		const _returnValueJlwdWlh = await _graphwi8psB.getAllEdges()
		const _returnValueXegoXmI = await _graphwi8psB.getAdjacencyMatrix()
		const _returnValuerdmaCf6 = await stronglyConnectedComponents(_graphwi8psB)
	});
})