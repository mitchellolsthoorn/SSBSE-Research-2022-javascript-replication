export {}
import floydWarshall from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/floyd-warshall/floydWarshall.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('floydWarshall', () => {
	it('test for floydWarshall', async () => {
		const _returnValuet29KfU = null;
		const _getAllVerticesDZTAcIh = () => { return _returnValuet29KfU };
		const _findEdgeKHmfeb9 = true;
		const _graphtge6Rix = {
			"getAllVertices": _getAllVerticesDZTAcIh,
		"findEdge": _findEdgeKHmfeb9
	}
		const _returnValueReTQ9ho = await floydWarshall(_graphtge6Rix)
	});

	it('test for floydWarshall', async () => {
		const _returnValueZ60y8X = 2.6642300699593626;
		const _getAllVerticesOTkMqj = () => { return _returnValueZ60y8X };
		const _returnValueWBB5ajN = true;
		const _findEdgejDIzANP = () => { return _returnValueWBB5ajN };
		const _graphopqIUwy = {
			"getAllVertices": _getAllVerticesOTkMqj,
		"findEdge": _findEdgejDIzANP
	}
		const _returnValuedsBGZHT = await floydWarshall(_graphopqIUwy)
	});

	it('test for floydWarshall', async () => {
		const _arrayValuekResy6 = undefined;
		const _returnValuesBZ4PY = [_arrayValuekResy6]
		const _getAllVerticesmjrDz1e = () => { return _returnValuesBZ4PY };
		const _returnValuelITIwap = true;
		const _findEdgeVB0Tb1A = () => { return _returnValuelITIwap };
		const _graphF7BT9U2 = {
			"getAllVertices": _getAllVerticesmjrDz1e,
		"findEdge": _findEdgeVB0Tb1A
	}
		const _returnValueaIBCrSe = await floydWarshall(_graphF7BT9U2)
	});

	it('test for floydWarshall', async () => {
		const _arrayValuevq7zD9 = "kSiCSYd6pxQIagWJdcdQXF9ryDXgWQ7y1IwHhK7NPaLAICALUNTZy49oGfd2wuoruBkDR9YRD0pWB0p";
		const _arrayValueZyZsDzK = false;
		const _returnValueE6Ze2ES = [_arrayValuevq7zD9, _arrayValueZyZsDzK]
		const _getAllVerticesq5X6cKc = () => { return _returnValueE6Ze2ES };
		const _returnValueUY2IJ9R = "WLuwJiObdg4L4vyliqTeQ1mKKPwnjIFKddFzP3JxGTmyQxb";
		const _findEdges0K8syX = () => { return _returnValueUY2IJ9R };
		const _graphTBTh2ON = {
			"getAllVertices": _getAllVerticesq5X6cKc,
		"findEdge": _findEdges0K8syX
	}
		const _returnValuea8NTV8R = await floydWarshall(_graphTBTh2ON)
	});
})