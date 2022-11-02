export {}
import depthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/depth-first-search/depthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('depthFirstSearch', () => {
	it('test for depthFirstSearch', async () => {
		const _returnValueqMmOKqS = {
		
	}
		const _returnValueh1QrVST = () => { return _returnValueqMmOKqS };
		const _graphKNARQTH = () => { return _returnValueh1QrVST };
		const _startVertexCCRKGCw = undefined;
		const _callbacksikZ1GbW = true;
		const _returnValueSHa5CtJ = await depthFirstSearch(_graphKNARQTH, _startVertexCCRKGCw, _callbacksikZ1GbW)
	});

	it('test for depthFirstSearch', async () => {
		const _graphgeEANNm = "2GA55oNCQIpSC";
		const _startVertexScroNyY = undefined;
		const _returnValuenW70Xtc = undefined;
		const _callbacksDmiYx4D = () => { return _returnValuenW70Xtc };
		const _returnValuetmg6O2y = await depthFirstSearch(_graphgeEANNm, _startVertexScroNyY, _callbacksDmiYx4D)
	});
})