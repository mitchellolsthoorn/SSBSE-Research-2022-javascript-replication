export {}
import dijkstra from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/dijkstra/dijkstra.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('dijkstra', () => {
	it('test for dijkstra', async () => {
		const _graphg5X1mBA = false;
		const _startVertexXTFFxsq = "RDNICBPVVwGzyoMo1X44BkHg1yoAUClfhpXYJsQw8oXFkZPQ8OnIierJKSkNmhNdjM05C9K4lXtIchVkwgiAiYmv";
		const _returnValueVmlLtTZ = await dijkstra(_graphg5X1mBA, _startVertexXTFFxsq)
	});
})