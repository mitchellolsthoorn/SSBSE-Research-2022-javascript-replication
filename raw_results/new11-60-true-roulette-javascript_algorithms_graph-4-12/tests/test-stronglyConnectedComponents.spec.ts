export {}
import stronglyConnectedComponents from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/strongly-connected-components/stronglyConnectedComponents.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('stronglyConnectedComponents', () => {
	it('test for stronglyConnectedComponents', async () => {
		const _arrayValueQSD1KZB = 3.063417412021522;
		const _arrayValuemkaqGoe = undefined;
		const _arrayValueCo5ivdY = null;
		const _graphLttol0Y = [_arrayValueQSD1KZB, _arrayValuemkaqGoe, _arrayValueCo5ivdY]
		const _returnValueuW7kzjA = await stronglyConnectedComponents(_graphLttol0Y)
	});

	it('test for stronglyConnectedComponents', async () => {
		const _isDirectedymh8sT = true;
		const _graphuyU5cbh = new Graph(_isDirectedymh8sT)
		const _returnValueXTA3HfB = {
		
	}
		const _getNeighborsX2aeJb9 = () => { return _returnValueXTA3HfB };
		const _vertexEM6lJhx = {
			"getNeighbors": _getNeighborsX2aeJb9
	}
		const _returnValuelpIHpJ1 = await _graphuyU5cbh.getNeighbors(_vertexEM6lJhx)
		const _returnValuesMgM8XP = await stronglyConnectedComponents(_graphuyU5cbh)
	});
})