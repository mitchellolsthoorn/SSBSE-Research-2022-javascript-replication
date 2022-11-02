export {}
import prim from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/prim/prim.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('prim', () => {
	it('test for prim', async () => {
		const _isDirectedJLqxFTz = false;
		const _returnValueyPwdMvk = null;
		const _getAllVerticesGUWRdJe = () => { return _returnValueyPwdMvk };
		const _graphBoTuXVw = {
			"isDirected": _isDirectedJLqxFTz,
		"getAllVertices": _getAllVerticesGUWRdJe
	}
		const _returnValuez9w2JTK = await prim(_graphBoTuXVw)
	});

	it('test for prim', async () => {
		const _isDirectedqsnPY8H = 7.057298604061085;
		const _returnValueKwRw1SU = "7V25VeE4objL8R5tIqzyDJYZzpo";
		const _getAllVerticesif7sNeU = () => { return _returnValueKwRw1SU };
		const _graphyh7sZi = {
			"isDirected": _isDirectedqsnPY8H,
		"getAllVertices": _getAllVerticesif7sNeU
	}
		const _returnValuea7CT6zi = await prim(_graphyh7sZi)
	});
})