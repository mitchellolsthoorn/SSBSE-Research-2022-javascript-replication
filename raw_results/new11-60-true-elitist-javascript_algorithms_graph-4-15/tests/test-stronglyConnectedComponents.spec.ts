export {}
import stronglyConnectedComponents from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/strongly-connected-components/stronglyConnectedComponents.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('stronglyConnectedComponents', () => {
	it('test for stronglyConnectedComponents', async () => {
		const _returnValueq9JZBBu = null;
		const _reversetlfsk8n = () => { return _returnValueq9JZBBu };
		const _graphGyaZENl = {
			"reverse": _reversetlfsk8n
	}
		const _returnValueaDGEegY = await stronglyConnectedComponents(_graphGyaZENl)
	});

	it('test for stronglyConnectedComponents', async () => {
		const _isDirectedyP5AJei = false;
		const _graphVVP1R82 = new Graph(_isDirectedyP5AJei)
		const _vertexKeyYYZOKt6 = undefined;
		const _returnValuegwdFFLy = await _graphVVP1R82.getVertexByKey(_vertexKeyYYZOKt6)
		const _returnValuesrEAoC = await _graphVVP1R82.getWeight()
		const _returnValueNvZRWyS = await stronglyConnectedComponents(_graphVVP1R82)
	});
})