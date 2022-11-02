export {}
import floydWarshall from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/floyd-warshall/floydWarshall.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('floydWarshall', () => {
	it('test for floydWarshall', async () => {
		const _returnValueUV6H6Oh = null;
		const _returnValuehsrcfXM = () => { return _returnValueUV6H6Oh };
		const _graphU88GGh8 = () => { return _returnValuehsrcfXM };
		const _returnValuehCM9yZn = await floydWarshall(_graphU88GGh8)
	});

	it('test for floydWarshall', async () => {
		const _isDirectedzhVwYzP = false;
		const _graphFHTgt7k = new Graph(_isDirectedzhVwYzP)
		const _vertexKeydy1OekH = "I5RPmGuIBzTmQgIRW";
		const _returnValuesapQd0p = await _graphFHTgt7k.getVertexByKey(_vertexKeydy1OekH)
		const _returnValueAgbcEEV = await _graphFHTgt7k.getAdjacencyMatrix()
		const _returnValueXVIlXA2 = await _graphFHTgt7k.getVerticesIndices()
		const _returnValuesc4CE5l = await _graphFHTgt7k.getVerticesIndices()
		const _returnValueon2y9mf = await floydWarshall(_graphFHTgt7k)
	});

	it('test for floydWarshall', async () => {
		const _arrayValuer7AGx64 = "dB3dozp943TrqIy5RPBxFHSG6Uv4UeA7Eg05kjIxOb5qz3QrPvJmwzvzTtVgcYoYG88bitj1xFhC2";
		const _returnValueSA4pvDm = [_arrayValuer7AGx64]
		const _getAllVerticesVSoiDUb = () => { return _returnValueSA4pvDm };
		const _arrayValueUlWsPsw = "fm2VHQdHwQHRdPi3J3kjxt5m4u4UX1qHLirfWKC1GeR9fi6nVqEnSfq";
		const _returnValueCFaAeAr = [_arrayValueUlWsPsw]
		const _findEdgedanr734 = () => { return _returnValueCFaAeAr };
		const _graphNclUzSL = {
			"getAllVertices": _getAllVerticesVSoiDUb,
		"findEdge": _findEdgedanr734
	}
		const _returnValueMMR4mw0 = await floydWarshall(_graphNclUzSL)
	});

	it('test for floydWarshall', async () => {
		const _arrayValueiiqU0z = null;
		const _arrayValuetZVUxE3 = 0.4233156208368314;
		const _returnValueky1jzdf = [_arrayValueiiqU0z, _arrayValuetZVUxE3]
		const _getAllVerticesg5finjZ = () => { return _returnValueky1jzdf };
		const _returnValuezPa9FF0 = "wTDVnyICMQdx6asi2vVdkuK";
		const _findEdgeVnSC9Dz = () => { return _returnValuezPa9FF0 };
		const _graphK8ibWis = {
			"getAllVertices": _getAllVerticesg5finjZ,
		"findEdge": _findEdgeVnSC9Dz
	}
		const _returnValuem0Mx7By = await floydWarshall(_graphK8ibWis)
	});
})