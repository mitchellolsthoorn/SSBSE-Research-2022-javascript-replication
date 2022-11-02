export {}
import prim from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/prim/prim.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('prim', () => {
	it('test for prim', async () => {
		const _isDirectedeEV8afI = undefined;
		const _returnValuebnEcE1M = "EqEhFLHjEp8lndDpii9Pb4F";
		const _getAllVertices2SKKwL = () => { return _returnValuebnEcE1M };
		const _graphyQJWH5Z = {
			"isDirected": _isDirectedeEV8afI,
		"getAllVertices": _getAllVertices2SKKwL
	}
		const _returnValueP6dxCye = await prim(_graphyQJWH5Z)
	});

	it('test for prim', async () => {
		const _isDirectedJzWTFv1 = "N785SJ5G2lhceFx8DOCNm7O6gDDWqXIlk7BETLxdrcYmEe";
		const _returnValueowhKRgq = "g8XCKijqz6E7dmHtpBROyoNdUMajI35blNaFLxUf6A";
		const _getAllVerticeswRejhh = () => { return _returnValueowhKRgq };
		const _graphbArPX4a = {
			"isDirected": _isDirectedJzWTFv1,
		"getAllVertices": _getAllVerticeswRejhh
	}
		const _returnValueAep4X7Z = await prim(_graphbArPX4a)
	});

	it('test for prim', async () => {
		const _isDirectedpVUWsY = false;
		const _graphdaNRf1s = new Graph(_isDirectedpVUWsY)
		const _returnValueyi00qpE = {
		
	}
		const _getKeyr738Btp = () => { return _returnValueyi00qpE };
		const _newVertexd9svIbO = {
			"getKey": _getKeyr738Btp
	}
		const _returnValueVmTFZrp = await _graphdaNRf1s.addVertex(_newVertexd9svIbO)
		const _returnValuenNFKvY = await _graphdaNRf1s.getVerticesIndices()
		const _returnValuepKgaAeg = await prim(_graphdaNRf1s)
	});
})