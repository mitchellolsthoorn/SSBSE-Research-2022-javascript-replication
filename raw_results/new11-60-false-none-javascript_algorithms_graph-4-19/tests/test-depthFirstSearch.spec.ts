export {}
import depthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/depth-first-search/depthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('depthFirstSearch', () => {
	it('test for depthFirstSearch', async () => {
		const _returnValuexeGkJvr = "KZtIxz7hiz9DMt7kgVFugd5pnUSM2A8BBpXVhjvIoN4zDn2s50MPR3oY28lWnO";
		const _graphT8oO4tR = () => { return _returnValuexeGkJvr };
		const _startVertextGIfIVV = "vavFtHnVXHHScVLWWTB6IG9OExoHE2nEslOAfD3g1hAxaijeMv";
		const _callbacksOWGYydc = "B51AXPqd8aQgI7y9mIkAru8jVFFRomh9HocJP9JGqachhynPypLlhhGP1t1S7iBCg31OpAE1dO3q99v9ov";
		const _returnValued0Dhksc = await depthFirstSearch(_graphT8oO4tR, _startVertextGIfIVV, _callbacksOWGYydc)
	});

	it('test for depthFirstSearch', async () => {
		const _returnValueLIez3F = undefined;
		const _graphNvi4mWC = () => { return _returnValueLIez3F };
		const _startVertexWRSQyFB = null;
		const _callbacksCrVGtGs = {
		
	}
		const _returnValueQa6xJx = await depthFirstSearch(_graphNvi4mWC, _startVertexWRSQyFB, _callbacksCrVGtGs)
	});
})