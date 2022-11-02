export {}
import detectUndirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectUndirectedCycle', () => {
	it('test for detectUndirectedCycle', async () => {
		const _graphi5fZEFJ = "9ImFOY4ykcGSfW57nuKhW8YmMcphrC2T1XHG8";
		const _returnValueNk9ivua = await detectUndirectedCycle(_graphi5fZEFJ)
	});
})