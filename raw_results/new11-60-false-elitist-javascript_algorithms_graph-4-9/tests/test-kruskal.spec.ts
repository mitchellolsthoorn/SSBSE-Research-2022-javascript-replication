export {}
import kruskal from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/kruskal/kruskal.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('kruskal', () => {
	it('test for kruskal', async () => {
		const _isDirectedWyo4O7C = null;
		const _returnValueyFvmgyp = "aghaQSOneYuPK8sTJKTlTxh5KpBj8kaFfIoiaDp4Pwp7GGP1hHrDsf3KMf36ZW";
		const _getAllEdgesTzXQnfU = () => { return _returnValueyFvmgyp };
		const _returnValueALEKhFH = {
		
	}
		const _getAllVerticesYbKnPF1 = () => { return _returnValueALEKhFH };
		const _graphxfp2hA = {
			"isDirected": _isDirectedWyo4O7C,
		"getAllEdges": _getAllEdgesTzXQnfU,
		"getAllVertices": _getAllVerticesYbKnPF1
	}
		const _returnValue3t2PZw = await kruskal(_graphxfp2hA)
	});

	it('test for kruskal', async () => {
		const _isDirectedfhGZzS = "PcA3nVYsT9tuOUnc9qVHHKesaW5JP";
		const _returnValueYNvup7S = 8.180394481193623;
		const _getAllEdgesfaWbvdk = () => { return _returnValueYNvup7S };
		const _getAllVerticesLzgV1Ox = "Z2JULO8pn6ZM4leJo1";
		const _graphjz7vCoP = {
			"isDirected": _isDirectedfhGZzS,
		"getAllEdges": _getAllEdgesfaWbvdk,
		"getAllVertices": _getAllVerticesLzgV1Ox
	}
		const _returnValuerb7BptG = await kruskal(_graphjz7vCoP)
	});
})