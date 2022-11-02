export {}
import depthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/depth-first-search/depthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('depthFirstSearch', () => {
	it('test for depthFirstSearch', async () => {
		const _returnValuex96kw6k = undefined;
		const _graphRolYbVC = () => { return _returnValuex96kw6k };
		const _arrayValueQpQgBNF = 7.352174502967703;
		const _arrayValueN8tcQv = 0.6284369068526772;
		const _arrayValuehKy9Ndi = undefined;
		const _startVertexw1pS8xZ = [_arrayValueQpQgBNF, _arrayValueN8tcQv, _arrayValuehKy9Ndi]
		const _callbacksGjSHHu = false;
		const _returnValueuQRpYoS = await depthFirstSearch(_graphRolYbVC, _startVertexw1pS8xZ, _callbacksGjSHHu)
	});

	it('test for depthFirstSearch', async () => {
		const _graphFD2dLo = 3.881941825641684;
		const _startVertexUygekef = {
		
	}
		const _arrayValueX5KLiz4 = true;
		const _callbacksy6wd8lt = [_arrayValueX5KLiz4]
		const _returnValueb93pKoQ = await depthFirstSearch(_graphFD2dLo, _startVertexUygekef, _callbacksy6wd8lt)
	});
})