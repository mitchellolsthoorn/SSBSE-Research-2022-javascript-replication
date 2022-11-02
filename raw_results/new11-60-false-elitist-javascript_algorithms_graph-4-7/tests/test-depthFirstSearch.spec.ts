export {}
import depthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/depth-first-search/depthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('depthFirstSearch', () => {
	it('test for depthFirstSearch', async () => {
		const _graphmDF8ksp = null;
		const _startVertexjVBb2vV = -2.3670690021565655;
		const _callbacksYZ0HUJe = 3.517783259718531;
		const _returnValuekR5zDvx = await depthFirstSearch(_graphmDF8ksp, _startVertexjVBb2vV, _callbacksYZ0HUJe)
	});

	it('test for depthFirstSearch', async () => {
		const _graphdRh14gI = "Ue1885iT8iO9jhxl3y6dd6lb9gNnowGj6bbgrUMqFcGTCh401gz7nBrzkwIyJLjoCzFx";
		const _startVertexnLs5mTr = false;
		const _arrayValueNN7LtS = 6.528746421378141;
		const _arrayValueHHOsphG = null;
		const _arrayValueDoKMf6t = [_arrayValueNN7LtS, _arrayValueHHOsphG]
		const _returnValuekWhp8x = [_arrayValueDoKMf6t]
		const _callbackscG2p5IC = () => { return _returnValuekWhp8x };
		const _returnValueYLaQHAq = await depthFirstSearch(_graphdRh14gI, _startVertexnLs5mTr, _callbackscG2p5IC)
	});
})