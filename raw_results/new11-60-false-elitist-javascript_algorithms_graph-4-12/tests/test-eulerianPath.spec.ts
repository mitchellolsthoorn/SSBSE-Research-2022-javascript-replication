export {}
import eulerianPath from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/eulerian-path/eulerianPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('eulerianPath', () => {
	it('test for eulerianPath', async () => {
		const _returnValueVdboaH = undefined;
		const _getAllEdgesmDKxdwp = () => { return _returnValueVdboaH };
		const _returnValueGSx7P1M = false;
		const _getAllVerticesRt437tM = () => { return _returnValueGSx7P1M };
		const _returnValuesJEI2TG = "T0tvanDfyy1mkAsVciGFlaYxcmEbiEpHJPgARQXLX83VGIitVTthHxKRZSc9kTb1TaBheGV";
		const _deleteEdgehlG8kTl = () => { return _returnValuesJEI2TG };
		const _graphpiAlNBk = {
			"getAllEdges": _getAllEdgesmDKxdwp,
		"getAllVertices": _getAllVerticesRt437tM,
		"deleteEdge": _deleteEdgehlG8kTl
	}
		const _returnValueuJ95ViW = await eulerianPath(_graphpiAlNBk)
	});

	it('test for eulerianPath', async () => {
		const _returnValueYcpb0O = []
		const _getAllEdgesonw4JwK = () => { return _returnValueYcpb0O };
		const _returnValueZ1R7Cal = null;
		const _getAllVerticesNLPy4To = () => { return _returnValueZ1R7Cal };
		const _returnValueh5P9boV = false;
		const _deleteEdgeZGk4z4S = () => { return _returnValueh5P9boV };
		const _graphLu2DJXd = {
			"getAllEdges": _getAllEdgesonw4JwK,
		"getAllVertices": _getAllVerticesNLPy4To,
		"deleteEdge": _deleteEdgeZGk4z4S
	}
		const _returnValuetRZ021W = await eulerianPath(_graphLu2DJXd)
	});
})