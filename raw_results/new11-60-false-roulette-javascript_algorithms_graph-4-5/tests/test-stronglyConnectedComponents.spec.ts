export {}
import stronglyConnectedComponents from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/strongly-connected-components/stronglyConnectedComponents.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('stronglyConnectedComponents', () => {
	it('test for stronglyConnectedComponents', async () => {
		const _arrayValuedlz0Dnt = null;
		const _arrayValuen0ylMCl = true;
		const _arrayValuejyugyy = {
		
	}
		const _graphxwJX0Ye = [_arrayValuedlz0Dnt, _arrayValuen0ylMCl, _arrayValuejyugyy]
		const _returnValuepBixWaf = await stronglyConnectedComponents(_graphxwJX0Ye)
	});

	it('test for stronglyConnectedComponents', async () => {
		const _isDirectedqdoy8Eg = false;
		const _graphxIkRua0 = new Graph(_isDirectedqdoy8Eg)
		const _returnValueFCUcenJ = await _graphxIkRua0.getAdjacencyMatrix()
		const _returnValueZ83yFHG = await stronglyConnectedComponents(_graphxIkRua0)
	});
})