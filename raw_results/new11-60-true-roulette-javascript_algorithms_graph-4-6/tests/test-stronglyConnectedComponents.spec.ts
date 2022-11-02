export {}
import stronglyConnectedComponents from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/strongly-connected-components/stronglyConnectedComponents.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('stronglyConnectedComponents', () => {
	it('test for stronglyConnectedComponents', async () => {
		const _arrayValuer5V7QJB = undefined;
		const _arrayValueUY1WisA = undefined;
		const _arrayValueleglLaQ = [_arrayValuer5V7QJB, _arrayValueUY1WisA]
		const _graph497YMq = [_arrayValueleglLaQ]
		const _returnValuesjuETjw = await stronglyConnectedComponents(_graph497YMq)
	});

	it('test for stronglyConnectedComponents', async () => {
		const _isDirectedch7SUSF = true;
		const _graphnGuWFF7 = new Graph(_isDirectedch7SUSF)
		const _returnValueD5oX77q = await _graphnGuWFF7.getAllVertices()
		const _returnValuejVVukCQ = await _graphnGuWFF7.getAllEdges()
		const _returnValuevp2Jom1 = await _graphnGuWFF7.getAllVertices()
		const _returnValueGOKlGYd = await _graphnGuWFF7.getAdjacencyMatrix()
		const _returnValuetM4tYt7 = await stronglyConnectedComponents(_graphnGuWFF7)
	});
})