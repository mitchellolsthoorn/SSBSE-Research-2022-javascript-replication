export {}
import kruskal from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/kruskal/kruskal.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('kruskal', () => {
	it('test for kruskal', async () => {
		const _isDirectedk5JxAK6 = undefined;
		const _returnValueaMjU610 = null;
		const _getAllEdgesWa7LQpi = () => { return _returnValueaMjU610 };
		const _returnValuetdBSPHP = "nXp2rE64mEIBaDSzMHovaDrJ9izzSWzMgz1KdBZni0azIz3ijanGksaDLOd2dMxW";
		const _getAllVerticesGZNxDP = () => { return _returnValuetdBSPHP };
		const _graphO9UhU0b = {
			"isDirected": _isDirectedk5JxAK6,
		"getAllEdges": _getAllEdgesWa7LQpi,
		"getAllVertices": _getAllVerticesGZNxDP
	}
		const _returnValueT883lxz = await kruskal(_graphO9UhU0b)
	});

	it('test for kruskal', async () => {
		const _isDirectedDVQot3G = -1.940616754165843;
		const _arrayValuemUuAPJO = true;
		const _returnValueuVHnvGM = null;
		const _arrayValueOi88cJc = () => { return _returnValueuVHnvGM };
		const _returnValueqHzwWpZ = [_arrayValuemUuAPJO, _arrayValueOi88cJc]
		const _getAllEdgesau4xHrA = () => { return _returnValueqHzwWpZ };
		const _returnValueaxKDmkn = 9.787099448572654;
		const _getAllVerticesr4WRHOy = () => { return _returnValueaxKDmkn };
		const _graphPsOCiMZ = {
			"isDirected": _isDirectedDVQot3G,
		"getAllEdges": _getAllEdgesau4xHrA,
		"getAllVertices": _getAllVerticesr4WRHOy
	}
		const _returnValueEVwqli = await kruskal(_graphPsOCiMZ)
	});

	it('test for kruskal', async () => {
		const _isDirected6DUWRR = false;
		const _returnValueUQzj8e = "JE";
		const _getAllEdgesM45Y9DW = () => { return _returnValueUQzj8e };
		const _returnValueWnrzk8Y = {
		
	}
		const _getAllVerticesiN1nxwr = () => { return _returnValueWnrzk8Y };
		const _graphGoPlvH = {
			"isDirected": _isDirected6DUWRR,
		"getAllEdges": _getAllEdgesM45Y9DW,
		"getAllVertices": _getAllVerticesiN1nxwr
	}
		const _returnValue6tSQG3 = await kruskal(_graphGoPlvH)
	});
})