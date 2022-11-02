export {}
import kruskal from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/kruskal/kruskal.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('kruskal', () => {
	it('test for kruskal', async () => {
		const _returnValueiZjArUR = null;
		const _isDirectedsSHXy1 = () => { return _returnValueiZjArUR };
		const _returnValuea5hkJEn = false;
		const _getAllEdgesHvjzTwF = () => { return _returnValuea5hkJEn };
		const _arrayValuehbNkag = undefined;
		const _returnValuevmvfpx5 = [_arrayValuehbNkag]
		const _getAllVerticeswxU5agU = () => { return _returnValuevmvfpx5 };
		const _graphSopTZCx = {
			"isDirected": _isDirectedsSHXy1,
		"getAllEdges": _getAllEdgesHvjzTwF,
		"getAllVertices": _getAllVerticeswxU5agU
	}
		const _returnValueKEjtZa = await kruskal(_graphSopTZCx)
	});

	it('test for kruskal', async () => {
		const _isDirectedIT05S7E = undefined;
		const _arrayValueolxkEj8 = -0.2562457523781987;
		const _arrayValueccmWzmJ = 8.193158661911323;
		const _returnValueEom6u4 = [_arrayValueolxkEj8, _arrayValueccmWzmJ]
		const _getAllEdgesRoW0sMI = () => { return _returnValueEom6u4 };
		const _returnValueM0aIjz2 = null;
		const _getAllVerticeswAkDPCx = () => { return _returnValueM0aIjz2 };
		const _graphwPINp4a = {
			"isDirected": _isDirectedIT05S7E,
		"getAllEdges": _getAllEdgesRoW0sMI,
		"getAllVertices": _getAllVerticeswAkDPCx
	}
		const _returnValuedfQmwOX = await kruskal(_graphwPINp4a)
	});
})