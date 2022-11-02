export {}
import depthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/depth-first-search/depthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('depthFirstSearch', () => {
	it('test for depthFirstSearch', async () => {
		const _graphwOxGMGL = false;
		const _startVertexvm4g4Gm = 6.159909203631447;
		const _callbackskIGhhe = true;
		const _returnValueabRCYpP = await depthFirstSearch(_graphwOxGMGL, _startVertexvm4g4Gm, _callbackskIGhhe)
	});

	it('test for depthFirstSearch', async () => {
		const _graphJfQfRGT = false;
		const _startVertexHPUm9d = false;
		const _arrayValueY2EIKFs = 4.081140777274857;
		const _arrayValuecXu0smC = "0UB8ek6giyck6Xz";
		const _callbacksjQvClSm = [_arrayValueY2EIKFs, _arrayValuecXu0smC]
		const _returnValuebvo9vPD = await depthFirstSearch(_graphJfQfRGT, _startVertexHPUm9d, _callbacksjQvClSm)
	});
})