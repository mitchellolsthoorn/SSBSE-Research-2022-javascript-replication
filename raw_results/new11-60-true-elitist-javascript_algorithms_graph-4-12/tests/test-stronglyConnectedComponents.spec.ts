export {}
import stronglyConnectedComponents from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/strongly-connected-components/stronglyConnectedComponents.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('stronglyConnectedComponents', () => {
	it('test for stronglyConnectedComponents', async () => {
		const _returnValuevl8jPp = "iWOIZrGy6o4h4aPiR0BaTDkmsCXSUnlrzdmkYFzIMGgUAf2to";
		const _reversezV6960 = () => { return _returnValuevl8jPp };
		const _graphgUeVWCG = {
			"reverse": _reversezV6960
	}
		const _returnValuem3adXEY = await stronglyConnectedComponents(_graphgUeVWCG)
	});

	it('test for stronglyConnectedComponents', async () => {
		const _isDirectedXDN8PDh = false;
		const _graphAlYWv2I = new Graph(_isDirectedXDN8PDh)
		const _vertexKeyxA8aul4 = {
		
	}
		const _returnValueuiNIodu = await _graphAlYWv2I.getVertexByKey(_vertexKeyxA8aul4)
		const _returnValueET8dKAa = await _graphAlYWv2I.getAllEdges()
		const _returnValueEB1q8K5 = await stronglyConnectedComponents(_graphAlYWv2I)
	});
})