export {}
import bellmanFord from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('bellmanFord', () => {
	it('test for bellmanFord', async () => {
		const _arrayValueWKE4kLc = "VfVjXgUomv5fOQh9FKh2JijrtG65asXCgFl6S8q7o3KT1Wqh4O3Yf6eM3ELwfi3gQTjoCRGkjQ4vtqp8n";
		const _arrayValuesXIm9HC = "SSJ4jdD4jBctTj4P78Ao";
		const _arrayValuewfebzr = null;
		const _arrayValuebFlXvNx = "VuqR0zbaFqTSaeJrGAQXyhxP87gfXeMTOum7GRGImBhbhq5RLY1JW1UTyywQxPjOA9PpDakXlJlPzDXi";
		const _arrayValueoRmGRtp = [_arrayValuesXIm9HC, _arrayValuewfebzr, _arrayValuebFlXvNx]
		const _returnValueNwHi4Co = [_arrayValueWKE4kLc, _arrayValueoRmGRtp]
		const _getAllVerticesLB0fIFw = () => { return _returnValueNwHi4Co };
		const _returnValuegiAtxRG = null;
		const _getVertexByKeyJS5nwMN = () => { return _returnValuegiAtxRG };
		const _returnValuejbWjLmC = 7.432713715456007;
		const _getNeighborscCgs7Y4 = () => { return _returnValuejbWjLmC };
		const _findEdgeqaZkweJ = {
		
	}
		const _graphRtacLxD = {
			"getAllVertices": _getAllVerticesLB0fIFw,
		"getVertexByKey": _getVertexByKeyJS5nwMN,
		"getNeighbors": _getNeighborscCgs7Y4,
		"findEdge": _findEdgeqaZkweJ
	}
		const _getKeyn1HPi5n = null;
		const _startVertexs5kBxc4 = {
			"getKey": _getKeyn1HPi5n
	}
		const _returnValueWZJRyrK = await bellmanFord(_graphRtacLxD, _startVertexs5kBxc4)
	});

	it('test for bellmanFord', async () => {
		const _returnValuemDbpTM6 = "Ga7tVSZdXQKGK8TcQgcXUw3eoB8n00pBEQ";
		const _graphmgxuoa = () => { return _returnValuemDbpTM6 };
		const _returnValuebngo0MS = "XdUOMaJ5jJ76LQ2ud7zC1adO2YTaRPm17BgmmB1fqfCm5gZF8pklck1VDTKKrexY";
		const _getKeyTQZBEjV = () => { return _returnValuebngo0MS };
		const _startVertexCef4Wz1 = {
			"getKey": _getKeyTQZBEjV
	}
		const _returnValueND0QH3S = await bellmanFord(_graphmgxuoa, _startVertexCef4Wz1)
	});

	it('test for bellmanFord', async () => {
		const _returnValuefkjfiWQ = []
		const _getAllVerticesMptvH1u = () => { return _returnValuefkjfiWQ };
		const _returnValuepNqQl0W = {
		
	}
		const _getVertexByKeyA72gnH6 = () => { return _returnValuepNqQl0W };
		const _returnValuenfNR1Ek = undefined;
		const _getNeighborsGuQ7ZcN = () => { return _returnValuenfNR1Ek };
		const _returnValueI46cwv = undefined;
		const _findEdgeQt4x0vp = () => { return _returnValueI46cwv };
		const _graphAGe6Bq0 = {
			"getAllVertices": _getAllVerticesMptvH1u,
		"getVertexByKey": _getVertexByKeyA72gnH6,
		"getNeighbors": _getNeighborsGuQ7ZcN,
		"findEdge": _findEdgeQt4x0vp
	}
		const _returnValueB8obVCk = "9WOnpxKO";
		const _getKeyNU9hcK6 = () => { return _returnValueB8obVCk };
		const _startVertexgjoL1gw = {
			"getKey": _getKeyNU9hcK6
	}
		const _returnValueVrDkDh = await bellmanFord(_graphAGe6Bq0, _startVertexgjoL1gw)
	});
})