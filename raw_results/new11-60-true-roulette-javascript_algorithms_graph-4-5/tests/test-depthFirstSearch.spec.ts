export {}
import depthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/depth-first-search/depthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('depthFirstSearch', () => {
	it('test for depthFirstSearch', async () => {
		const _graphTKc4Uv5 = -9.401201344048236;
		const _arrayValue4zr8Ig = null;
		const _arrayValuetQUGRZc = {
		
	}
		const _arrayValuel34WLEc = {
		
	}
		const _startVertexkFHiBvh = [_arrayValue4zr8Ig, _arrayValuetQUGRZc, _arrayValuel34WLEc]
		const _callbacksrIbYfSG = false;
		const _returnValuelXdnS9K = await depthFirstSearch(_graphTKc4Uv5, _startVertexkFHiBvh, _callbacksrIbYfSG)
	});

	it('test for depthFirstSearch', async () => {
		const _arrayValueCRrWF6 = -7.107541609034234;
		const _graphdhvXTHc = [_arrayValueCRrWF6]
		const _startVertexj3H8D9u = "H4Ef9aegjVNYOuSi5xrN5mGs40qE9vv3oE7P752PrJDA6tKiXrATftOt31JNhh6TtktvOIap7dOwkpMHBWdKvaYbMarAJnU";
		const _callbacksZWW4cim = {
		
	}
		const _returnValuezon6eZr = await depthFirstSearch(_graphdhvXTHc, _startVertexj3H8D9u, _callbacksZWW4cim)
	});
})