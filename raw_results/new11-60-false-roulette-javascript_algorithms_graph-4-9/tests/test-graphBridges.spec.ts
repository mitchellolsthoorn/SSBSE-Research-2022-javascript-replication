export {}
import graphBridges from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bridges/graphBridges.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('graphBridges', () => {
	it('test for graphBridges', async () => {
		const _graphr1KYro = true;
		const _returnValueE2lKzh = await graphBridges(_graphr1KYro)
	});

	it('test for graphBridges', async () => {
		const _isDirected2SlIcw = true;
		const _graphumHQeSS = new Graph(_isDirected2SlIcw)
		const _returnValueMljeW42 = await _graphumHQeSS.toString()
		const _returnValueYWNZcQN = false;
		const _getKeyDnFQeAQ = () => { return _returnValueYWNZcQN };
		const _newVertexK4Y0c8I = {
			"getKey": _getKeyDnFQeAQ
	}
		const _returnValuemK0zWtW = await _graphumHQeSS.addVertex(_newVertexK4Y0c8I)
		const _returnValueuwvgsJs = await graphBridges(_graphumHQeSS)
	});
})