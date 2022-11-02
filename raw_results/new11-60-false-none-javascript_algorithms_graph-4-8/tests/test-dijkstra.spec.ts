export {}
import dijkstra from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/dijkstra/dijkstra.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('dijkstra', () => {
	it('test for dijkstra', async () => {
		const _returnValueTDf1Fup = false;
		const _graphRbfAay7 = () => { return _returnValueTDf1Fup };
		const _startVertexCrXIwtk = undefined;
		const _returnValuemMIgNb = await dijkstra(_graphRbfAay7, _startVertexCrXIwtk)
	});
})