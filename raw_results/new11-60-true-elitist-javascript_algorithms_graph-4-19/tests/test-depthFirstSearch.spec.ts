export {}
import depthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/depth-first-search/depthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('depthFirstSearch', () => {
	it('test for depthFirstSearch', async () => {
		const _graphn0hEScv = "cyTPctZbqTDc3PNDo24TDjxgOaIUeT";
		const _startVertexf14QyLN = "lGpQSufkvI4sfBEWAJfgVSaUJ2IrGmNvgC44OSolMXQJyYIpRupEBcfFeiv";
		const _callbacksvJONcBd = null;
		const _returnValueT1HIVJW = await depthFirstSearch(_graphn0hEScv, _startVertexf14QyLN, _callbacksvJONcBd)
	});

	it('test for depthFirstSearch', async () => {
		const _arrayValuei8f2oR9 = undefined;
		const _arrayValueb0SfO9g = "bNIBACJ3QvLQtJt4ROlV";
		const _arrayValuetOZqdUg = true;
		const _returnValuery0q9C = false;
		const _arrayValueJvKtA8R = () => { return _returnValuery0q9C };
		const _arrayValuesDFBKS = null;
		const _arrayValueUQIWV48 = [_arrayValuetOZqdUg, _arrayValueJvKtA8R, _arrayValuesDFBKS]
		const _graphxlxbvxX = [_arrayValuei8f2oR9, _arrayValueb0SfO9g, _arrayValueUQIWV48]
		const _returnValuek92FItX = undefined;
		const _startVertexbQOp2Qm = () => { return _returnValuek92FItX };
		const _callbacksjNuRG2D = undefined;
		const _returnValuen3PK7pC = await depthFirstSearch(_graphxlxbvxX, _startVertexbQOp2Qm, _callbacksjNuRG2D)
	});
})