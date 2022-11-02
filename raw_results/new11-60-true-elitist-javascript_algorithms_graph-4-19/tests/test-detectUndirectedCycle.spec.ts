export {}
import detectUndirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectUndirectedCycle', () => {
	it('test for detectUndirectedCycle', async () => {
		const _returnValuekZa5dC3 = "edgvfeT6PqDH9TThIJgC8VqBsi33x6Ao5taWBdaAQa";
		const _returnValueVwthlfU = () => { return _returnValuekZa5dC3 };
		const _getAllVerticestyk1KLt = () => { return _returnValueVwthlfU };
		const _graphzfZsMXF = {
			"getAllVertices": _getAllVerticestyk1KLt
	}
		const _returnValueKbACSUE = await detectUndirectedCycle(_graphzfZsMXF)
	});
})