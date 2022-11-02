export {}
import kruskal from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/kruskal/kruskal.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('kruskal', () => {
	it('test for kruskal', async () => {
		const _isDirectedi2Ymh7Y = null;
		const _returnValuerngk9b6 = null;
		const _returnValueIc04yIn = () => { return _returnValuerngk9b6 };
		const _getAllEdgeskpSuF6f = () => { return _returnValueIc04yIn };
		const _getAllVerticestKuXQLY = null;
		const _graphcs98Tnu = {
			"isDirected": _isDirectedi2Ymh7Y,
		"getAllEdges": _getAllEdgeskpSuF6f,
		"getAllVertices": _getAllVerticestKuXQLY
	}
		const _returnValueE4W4I9D = await kruskal(_graphcs98Tnu)
	});

	it('test for kruskal', async () => {
		const _isDirectedppmJMdu = undefined;
		const _returnValuevJx4atc = "6CBw5DppcH8N91vgIAg2lWDYQ1QzbHA0qkFWapxEVHDChMRyqSvh1JfwJkxVpAjh7AzonRhVaGggdkJ7boxr48jvr6iPAd2JE";
		const _getAllEdgestOa3hQk = () => { return _returnValuevJx4atc };
		const _returnValueu4HABlE = -4.653257689881758;
		const _getAllVerticesjaCO0Gg = () => { return _returnValueu4HABlE };
		const _graphTnq8QXG = {
			"isDirected": _isDirectedppmJMdu,
		"getAllEdges": _getAllEdgestOa3hQk,
		"getAllVertices": _getAllVerticesjaCO0Gg
	}
		const _returnValueKDQp9Vf = await kruskal(_graphTnq8QXG)
	});

	it('test for kruskal', async () => {
		const _isDirectedSg5EY07 = true;
		const _returnValueP4GXCI = 9.257521701056547;
		const _getAllEdgespH2hSek = () => { return _returnValueP4GXCI };
		const _returnValuecFiseH4 = null;
		const _getAllVerticesIYBnRG3 = () => { return _returnValuecFiseH4 };
		const _graphp9TCxAj = {
			"isDirected": _isDirectedSg5EY07,
		"getAllEdges": _getAllEdgespH2hSek,
		"getAllVertices": _getAllVerticesIYBnRG3
	}
		const _returnValueMWHUeHa = await kruskal(_graphp9TCxAj)
	});
})