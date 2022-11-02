export {}
import kruskal from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/kruskal/kruskal.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('kruskal', () => {
	it('test for kruskal', async () => {
		const _isDirectedcafBuRL = null;
		const _returnValueq6iZSAK = "D2DHbB0c2Vk1dwB4";
		const _getAllEdgesqeawAQp = () => { return _returnValueq6iZSAK };
		const _returnValuepGvIyH = 3.071049946404333;
		const _getAllVerticesqA10vhg = () => { return _returnValuepGvIyH };
		const _graphpQYDD8 = {
			"isDirected": _isDirectedcafBuRL,
		"getAllEdges": _getAllEdgesqeawAQp,
		"getAllVertices": _getAllVerticesqA10vhg
	}
		const _returnValueyqAolDw = await kruskal(_graphpQYDD8)
	});

	it('test for kruskal', async () => {
		const _returnValueF3XF0Q = -6.222870900233246;
		const _isDirectedrCsSaeR = () => { return _returnValueF3XF0Q };
		const _arrayValueaqfL40n = undefined;
		const _arrayValuefesGG2 = 4.91743427592548;
		const _returnValue0l9h3D = [_arrayValueaqfL40n, _arrayValuefesGG2]
		const _getAllEdgesOzykzaI = () => { return _returnValue0l9h3D };
		const _returnValueJBdTVdz = 0.6018461193047244;
		const _getAllVerticesI2xsVFL = () => { return _returnValueJBdTVdz };
		const _graphKip6E7X = {
			"isDirected": _isDirectedrCsSaeR,
		"getAllEdges": _getAllEdgesOzykzaI,
		"getAllVertices": _getAllVerticesI2xsVFL
	}
		const _returnValuelxmZMqv = await kruskal(_graphKip6E7X)
	});
})