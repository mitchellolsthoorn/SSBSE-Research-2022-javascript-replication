export {}
import prim from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/prim/prim.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('prim', () => {
	it('test for prim', async () => {
		const _grapheLm87IE = undefined;
		const _returnValueLCTvK4V = await prim(_grapheLm87IE)
	});

	it('test for prim', async () => {
		const _isDirectedTkI9UVb = "0Yqn0CiPsL8dL";
		const _returnValueKqchFqM = undefined;
		const _getAllVerticesvRdO4BS = () => { return _returnValueKqchFqM };
		const _graphsehOyQr = {
			"isDirected": _isDirectedTkI9UVb,
		"getAllVertices": _getAllVerticesvRdO4BS
	}
		const _returnValueEIarY3c = await prim(_graphsehOyQr)
	});

	it('test for prim', async () => {
		const _isDirectedWzhrSjt = false;
		const _graphYnrBgTl = new Graph(_isDirectedWzhrSjt)
		const _arrayValueKPpaAFD = undefined;
		const _returnValuei6KNjT = [_arrayValueKPpaAFD]
		const _getKeyIoLvIne = () => { return _returnValuei6KNjT };
		const _newVertexnXR81Tk = {
			"getKey": _getKeyIoLvIne
	}
		const _returnValuewid0K3x = await _graphYnrBgTl.addVertex(_newVertexnXR81Tk)
		const _returnValueGYlAzkc = await prim(_graphYnrBgTl)
	});
})