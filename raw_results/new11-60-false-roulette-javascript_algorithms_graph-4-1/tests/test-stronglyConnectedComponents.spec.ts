export {}
import LinkedList from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/linked-list/LinkedList.js";
import stronglyConnectedComponents from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/strongly-connected-components/stronglyConnectedComponents.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('stronglyConnectedComponents', () => {
	it('test for stronglyConnectedComponents', async () => {
		const _comparatorFunctionXh52q9F = undefined;
		const _graphMXhqK2q = new LinkedList(_comparatorFunctionXh52q9F)
		const _returnValueh5OTYv = await _graphMXhqK2q.deleteTail()
		const _returnValueOhSPT1z = await _graphMXhqK2q.deleteTail()
		const _returnValuec7edZ4 = await _graphMXhqK2q.reverse()
		const _returnValueBVIOMar = await _graphMXhqK2q.deleteHead()
		const _returnValueY88ifR5 = await stronglyConnectedComponents(_graphMXhqK2q)
	});

	it('test for stronglyConnectedComponents', async () => {
		const _isDirectedCQieNbd = true;
		const _graphV0oOUxS = new Graph(_isDirectedCQieNbd)
		const _returnValueTXAM2c5 = await _graphV0oOUxS.getAdjacencyMatrix()
		const _returnValueAqJ9Y6 = await _graphV0oOUxS.getWeight()
		const _returnValuenWCHXYY = await stronglyConnectedComponents(_graphV0oOUxS)
	});
})