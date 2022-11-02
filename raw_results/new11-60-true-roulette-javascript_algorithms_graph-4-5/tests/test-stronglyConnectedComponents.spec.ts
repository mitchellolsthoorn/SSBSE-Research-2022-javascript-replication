export {}
import DoublyLinkedList from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/doubly-linked-list/DoublyLinkedList.js";
import stronglyConnectedComponents from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/strongly-connected-components/stronglyConnectedComponents.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('stronglyConnectedComponents', () => {
	it('test for stronglyConnectedComponents', async () => {
		const _comparatorFunctionBr9M9Up = undefined;
		const _graphtaFdbm = new DoublyLinkedList(_comparatorFunctionBr9M9Up)
		const _returnValuekptRlNG = await _graphtaFdbm.deleteHead()
		const _returnValuee5IRAaH = await stronglyConnectedComponents(_graphtaFdbm)
	});

	it('test for stronglyConnectedComponents', async () => {
		const _isDirectedyzIi8nb = false;
		const _graphOuQxA5K = new Graph(_isDirectedyzIi8nb)
		const _vertexKeyMiFqNiG = "toQNkEKB1HP2KwKWWLjMj6UrcESqCtkctdtfhru1v6HhTS68yV9B7egKwY7pcqkds8zQeoobt";
		const _returnValueihpk8GH = await _graphOuQxA5K.getVertexByKey(_vertexKeyMiFqNiG)
		const _returnValuegsYvxxt = await stronglyConnectedComponents(_graphOuQxA5K)
	});
})