export {}
import depthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/depth-first-search/depthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('depthFirstSearch', () => {
	it('test for depthFirstSearch', async () => {
		const _graphamyE0cd = -8.577073199162523;
		const _startVertexMA3dNSW = undefined;
		const _callbacksWM92Qz = null;
		const _returnValueC9Tp54 = await depthFirstSearch(_graphamyE0cd, _startVertexMA3dNSW, _callbacksWM92Qz)
	});

	it('test for depthFirstSearch', async () => {
		const _graphiLnCJYu = undefined;
		const _arrayValueGueWo5O = "JRtrVi7LXidh1yqeddDCFXDSxmx0vYRxJTKEeIcTCzL87O";
		const _startVertexghy1vLp = [_arrayValueGueWo5O]
		const _returnValueqpU6asS = true;
		const _callbacksNIoTtv2 = () => { return _returnValueqpU6asS };
		const _returnValueHfDMJ7W = await depthFirstSearch(_graphiLnCJYu, _startVertexghy1vLp, _callbacksNIoTtv2)
	});
})