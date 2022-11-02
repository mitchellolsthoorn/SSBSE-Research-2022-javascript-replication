export {}
import stronglyConnectedComponents from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/strongly-connected-components/stronglyConnectedComponents.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('stronglyConnectedComponents', () => {
	it('test for stronglyConnectedComponents', async () => {
		const _arrayValueCEhKLCa = "8bceVzcnbNK2r4usKUVuiBvfmeolsnfg1dTPJEAACMxoDLf9J47ywxbpkFnSzUV";
		const _arrayValuemm4GWK9 = undefined;
		const _arrayValueAxt2hPt = [_arrayValuemm4GWK9]
		const _graphsuXfuxO = [_arrayValueCEhKLCa, _arrayValueAxt2hPt]
		const _returnValuekDfEFl = await stronglyConnectedComponents(_graphsuXfuxO)
	});

	it('test for stronglyConnectedComponents', async () => {
		const _isDirectedD1A70Y = true;
		const _graphs0AGkNL = new Graph(_isDirectedD1A70Y)
		const _returnValueTnHnKll = await _graphs0AGkNL.getVerticesIndices()
		const _returnValuetrqvCS9 = await _graphs0AGkNL.getAllVertices()
		const _returnValueKrXytoc = await stronglyConnectedComponents(_graphs0AGkNL)
	});
})