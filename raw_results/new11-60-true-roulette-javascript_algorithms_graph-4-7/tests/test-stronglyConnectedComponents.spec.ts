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
		const _arrayValuePiaCwvh = {
		
	}
		const _arrayValueR4umoVa = true;
		const _arrayValuefXHY4UM = undefined;
		const _comparatorFunctionSvE1ehP = [_arrayValuePiaCwvh, _arrayValueR4umoVa, _arrayValuefXHY4UM]
		const _graphZv3EWoP = new DoublyLinkedList(_comparatorFunctionSvE1ehP)
		const _returnValueloMWunN = await _graphZv3EWoP.deleteHead()
		const _returnValuezh4mQHt = await stronglyConnectedComponents(_graphZv3EWoP)
	});

	it('test for stronglyConnectedComponents', async () => {
		const _isDirectedGPSgkYR = false;
		const _graphlvmPWw6 = new Graph(_isDirectedGPSgkYR)
		const _returnValueyzgvT8 = await _graphlvmPWw6.getAllVertices()
		const _returnValuefDVAqjH = await _graphlvmPWw6.reverse()
		const _returnValuerkKTwKG = await _graphlvmPWw6.reverse()
		const _returnValueae1qzhm = await stronglyConnectedComponents(_graphlvmPWw6)
	});
})