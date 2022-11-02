export {}
import kruskal from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/kruskal/kruskal.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('kruskal', () => {
	it('test for kruskal', async () => {
		const _isDirectedwKNFPeH = "cAwxwqAJl5";
		const _arrayValuednKn56F = {
		
	}
		const _arrayValueoDFjEO0 = undefined;
		const _returnValuevxDfBd = undefined;
		const _arrayValueqYCxdRw = () => { return _returnValuevxDfBd };
		const _arrayValueIGOOTP8 = -4.680394003174582;
		const _returnValueU8uPxp2 = [_arrayValuednKn56F, _arrayValueoDFjEO0, _arrayValueqYCxdRw, _arrayValueIGOOTP8]
		const _getAllEdgesYpF28ib = () => { return _returnValueU8uPxp2 };
		const _getAllVerticeshAhCbg2 = -1.4011924470434725;
		const _graphnBTAxVp = {
			"isDirected": _isDirectedwKNFPeH,
		"getAllEdges": _getAllEdgesYpF28ib,
		"getAllVertices": _getAllVerticeshAhCbg2
	}
		const _returnValueATlCCD = await kruskal(_graphnBTAxVp)
	});

	it('test for kruskal', async () => {
		const _isDirectedFoQHoS = null;
		const _returnValuezRcW2gS = "r3Z6IgGOPSdTPeDKtsDjfJ6nvOyMAYzP56D3h4dLhbE9gA0P5y6OEys7Xe5d84foXHkykY";
		const _getAllEdgestRPjwbj = () => { return _returnValuezRcW2gS };
		const _returnValuevNlEkfZ = null;
		const _getAllVerticesgJuHeDF = () => { return _returnValuevNlEkfZ };
		const _graphOjXlDii = {
			"isDirected": _isDirectedFoQHoS,
		"getAllEdges": _getAllEdgestRPjwbj,
		"getAllVertices": _getAllVerticesgJuHeDF
	}
		const _returnValuexNHHcuh = await kruskal(_graphOjXlDii)
	});
})