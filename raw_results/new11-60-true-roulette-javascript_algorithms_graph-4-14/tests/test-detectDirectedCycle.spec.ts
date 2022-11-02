export {}
import detectDirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectDirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('detectDirectedCycle', () => {
	it('test for detectDirectedCycle', async () => {
		const _returnValueEUdSOw9 = -5.440293958572138;
		const _graphClcnW4e = () => { return _returnValueEUdSOw9 };
		const _returnValuej47DgO8 = await detectDirectedCycle(_graphClcnW4e)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedZL5kF6j = false;
		const _graphceSrdxp = new Graph(_isDirectedZL5kF6j)
		const _returnValuey4XkmEM = {
		
	}
		const _getKeyer6LbT3 = () => { return _returnValuey4XkmEM };
		const _newVertexbkkWIBa = {
			"getKey": _getKeyer6LbT3
	}
		const _returnValueunFfCk2 = await _graphceSrdxp.addVertex(_newVertexbkkWIBa)
		const _returnValueSfMszi6 = await _graphceSrdxp.getVerticesIndices()
		const _returnValueHT7wdh = await detectDirectedCycle(_graphceSrdxp)
	});
})