export {}
import depthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/depth-first-search/depthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('depthFirstSearch', () => {
	it('test for depthFirstSearch', async () => {
		const _returnValueryGtCc5 = null;
		const _arrayValuePcoxsn = () => { return _returnValueryGtCc5 };
		const _arrayValuecI6FzRP = -6.384328641589414;
		const _graphjREDoiC = [_arrayValuePcoxsn, _arrayValuecI6FzRP]
		const _startVertexQ9irT5W = 8.509702652842122;
		const _returnValueaMG5lGe = false;
		const _callbacksFX8X7zH = () => { return _returnValueaMG5lGe };
		const _returnValuekDjnA7P = await depthFirstSearch(_graphjREDoiC, _startVertexQ9irT5W, _callbacksFX8X7zH)
	});
})