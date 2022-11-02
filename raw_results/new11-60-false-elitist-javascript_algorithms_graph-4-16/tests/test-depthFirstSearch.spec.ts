export {}
import depthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/depth-first-search/depthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('depthFirstSearch', () => {
	it('test for depthFirstSearch', async () => {
		const _graphsutilB = "VFUO8HgNKl7IUNt3IjvBIoDly2CKg5HVi6hVAGA6bQAHzgykL1XQPznhqLNNkEuULTpH";
		const _startVertexDxhUtkX = true;
		const _callbacksx0W9PYT = null;
		const _returnValueve5ZGqe = await depthFirstSearch(_graphsutilB, _startVertexDxhUtkX, _callbacksx0W9PYT)
	});

	it('test for depthFirstSearch', async () => {
		const _graphMTbDcU1 = undefined;
		const _startVertexJtENg0P = "GY0BoqcDkgcJNYitm8iwIKSK9X4B7";
		const _callbacksakbHbTK = undefined;
		const _returnValueP0GIBAh = await depthFirstSearch(_graphMTbDcU1, _startVertexJtENg0P, _callbacksakbHbTK)
	});
})