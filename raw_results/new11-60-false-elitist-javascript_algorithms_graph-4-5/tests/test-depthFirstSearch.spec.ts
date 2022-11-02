export {}
import depthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/depth-first-search/depthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('depthFirstSearch', () => {
	it('test for depthFirstSearch', async () => {
		const _graphFLuOIl1 = "TXYbTuihfela0C8hGSHqep";
		const _startVertexaIXvbrU = "OEp7FxLJlQBdQra1aNYuWmis80Hg6vmExSF0G0qtv5Gky5faafJPFBMUuScAcXYS6MB4BYGfubxEip";
		const _callbackslczWSW6 = undefined;
		const _returnValuehwWVuv5 = await depthFirstSearch(_graphFLuOIl1, _startVertexaIXvbrU, _callbackslczWSW6)
	});
})