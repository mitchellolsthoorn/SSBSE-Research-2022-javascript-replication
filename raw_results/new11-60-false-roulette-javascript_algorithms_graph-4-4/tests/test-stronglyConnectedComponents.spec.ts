export {}
import stronglyConnectedComponents from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/strongly-connected-components/stronglyConnectedComponents.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('stronglyConnectedComponents', () => {
	it('test for stronglyConnectedComponents', async () => {
		const _arrayValueayPzPrL = 6.402655196429503;
		const _arrayValueYoCmdNw = false;
		const _arrayValuefcrxUez = undefined;
		const _arrayValuel6Y9zHk = [_arrayValueYoCmdNw, _arrayValuefcrxUez]
		const _arrayValueIC8dUbz = [_arrayValuel6Y9zHk]
		const _returnValueq4r7IFv = [_arrayValueayPzPrL, _arrayValueIC8dUbz]
		const _graphHHBD6SV = () => { return _returnValueq4r7IFv };
		const _returnValueBjz9De = await stronglyConnectedComponents(_graphHHBD6SV)
	});

	it('test for stronglyConnectedComponents', async () => {
		const _isDirectedjW8Vzlf = false;
		const _graphmsWBSFS = new Graph(_isDirectedjW8Vzlf)
		const _returnValuehyieyl4 = await _graphmsWBSFS.toString()
		const _returnValueIG7uxzC = await _graphmsWBSFS.reverse()
		const _returnValueKDdfO9k = await _graphmsWBSFS.getAdjacencyMatrix()
		const _returnValueVVyUeNg = await stronglyConnectedComponents(_graphmsWBSFS)
	});
})