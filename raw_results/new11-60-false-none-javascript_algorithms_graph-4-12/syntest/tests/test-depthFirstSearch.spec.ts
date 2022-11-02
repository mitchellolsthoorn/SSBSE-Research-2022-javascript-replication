export {}
import depthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/depth-first-search/depthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('depthFirstSearch', () => {
	it('test for depthFirstSearch', async () => {
		const _returnValuewVlPdVE = null;
		const _graphASXNEm = () => { return _returnValuewVlPdVE };
		const _startVertexOYzptxI = false;
		const _callbacksKafDGrY = null;
		const _returnValueNCtz5GO = await depthFirstSearch(_graphASXNEm, _startVertexOYzptxI, _callbacksKafDGrY)
	});

	it('test for depthFirstSearch', async () => {
		const _arrayValuex46FBmc = true;
		const _graphMbLZ2CD = [_arrayValuex46FBmc]
		const _startVertexOpadACX = "RfVW2eugGs2ll25S0NdADpkPWkqEvUXBRMQb9QxJYYs3FihRn4LiWv32kLWhxwJZDe5yM";
		const _returnValueBtzrfT = false;
		const _callbackswFDjlV = () => { return _returnValueBtzrfT };
		const _returnValuexrSJ1aW = await depthFirstSearch(_graphMbLZ2CD, _startVertexOpadACX, _callbackswFDjlV)
	});
})