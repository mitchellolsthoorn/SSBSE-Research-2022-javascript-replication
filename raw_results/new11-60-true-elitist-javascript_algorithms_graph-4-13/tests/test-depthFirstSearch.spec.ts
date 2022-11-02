export {}
import depthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/depth-first-search/depthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('depthFirstSearch', () => {
	it('test for depthFirstSearch', async () => {
		const _graphjzDDD8z = "hvch4J14nJBmPbePxXziE7FxFFAxcmCHnAhKA94F";
		const _startVertexwGnroAz = false;
		const _callbacksjNTdqQ8 = 0.879899938227819;
		const _returnValuemVcGIAE = await depthFirstSearch(_graphjzDDD8z, _startVertexwGnroAz, _callbacksjNTdqQ8)
	});

	it('test for depthFirstSearch', async () => {
		const _graphOoRJtIQ = false;
		const _startVertexfLSAsDZ = false;
		const _arrayValueQF7Bvc2 = null;
		const _returnValuevyvpDeN = true;
		const _arrayValuedDzeEM9 = () => { return _returnValuevyvpDeN };
		const _callbacksO2iZoFv = [_arrayValueQF7Bvc2, _arrayValuedDzeEM9]
		const _returnValueyWIDDb8 = await depthFirstSearch(_graphOoRJtIQ, _startVertexfLSAsDZ, _callbacksO2iZoFv)
	});
})