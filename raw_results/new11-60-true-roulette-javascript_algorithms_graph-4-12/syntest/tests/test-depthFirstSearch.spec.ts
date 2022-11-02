export {}
import depthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/depth-first-search/depthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('depthFirstSearch', () => {
	it('test for depthFirstSearch', async () => {
		const _graphZc1to7F = 4.143868810075338;
		const _startVertexyi6qxRT = -1.9409469432624817;
		const _arrayValuesFG1Frp = true;
		const _arrayValuegFL6GFd = "ox51tXNM1q8I73G8Pjb4wHsMpDA3vGmioiYqFuEgKEuEsF6wEqy3KBfloJRqGtpUqSIjf67hlXYEcR8szO";
		const _arrayValue1ePob7 = false;
		const _arrayValueostgtTg = false;
		const _arrayValuesjkZVRj = undefined;
		const _arrayValueAV6cUdm = [_arrayValue1ePob7, _arrayValueostgtTg, _arrayValuesjkZVRj]
		const _callbacksDUgC2aH = [_arrayValuesFG1Frp, _arrayValuegFL6GFd, _arrayValueAV6cUdm]
		const _returnValuelF1swr1 = await depthFirstSearch(_graphZc1to7F, _startVertexyi6qxRT, _callbacksDUgC2aH)
	});
})