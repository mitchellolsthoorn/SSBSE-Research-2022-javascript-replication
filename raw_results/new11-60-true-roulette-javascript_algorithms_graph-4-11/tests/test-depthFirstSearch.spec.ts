export {}
import depthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/depth-first-search/depthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('depthFirstSearch', () => {
	it('test for depthFirstSearch', async () => {
		const _graphtzd03yC = 0.4504646848754774;
		const _startVertexmwuPgCV = "d6KOV5nzKGJuELZLcRHgxGA9gt3GU2PHRnmtFwCFeYbxqyP1MwNH27zU6Kzdnljmt6kS9CG85hrvMuc5b2B8S6Vgl2zl4";
		const _callbacksXHwRDlr = {
		
	}
		const _returnValueel8pS2I = await depthFirstSearch(_graphtzd03yC, _startVertexmwuPgCV, _callbacksXHwRDlr)
	});
})