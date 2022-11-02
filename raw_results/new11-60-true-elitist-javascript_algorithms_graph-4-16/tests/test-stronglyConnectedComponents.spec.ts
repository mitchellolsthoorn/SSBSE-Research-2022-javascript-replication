export {}
import stronglyConnectedComponents from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/strongly-connected-components/stronglyConnectedComponents.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('stronglyConnectedComponents', () => {
	it('test for stronglyConnectedComponents', async () => {
		const _returnValueReSHha = true;
		const _reversegggV5Rh = () => { return _returnValueReSHha };
		const _graphYB1H40m = {
			"reverse": _reversegggV5Rh
	}
		const _returnValuesV8Faod = await stronglyConnectedComponents(_graphYB1H40m)
	});

	it('test for stronglyConnectedComponents', async () => {
		const _isDirectedUif880c = true;
		const _graphJQ3Ynd3 = new Graph(_isDirectedUif880c)
		const _vertexKeyGPgqreX = -9.275825041278123;
		const _returnValueMhajaaa = await _graphJQ3Ynd3.getVertexByKey(_vertexKeyGPgqreX)
		const _returnValueebYMq7q = await stronglyConnectedComponents(_graphJQ3Ynd3)
	});
})