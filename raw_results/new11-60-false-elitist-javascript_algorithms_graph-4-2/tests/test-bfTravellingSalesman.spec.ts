export {}
import bfTravellingSalesman from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/travelling-salesman/bfTravellingSalesman.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('bfTravellingSalesman', () => {
	it('test for bfTravellingSalesman', async () => {
		const _getAllVerticesj0lZoQd = null;
		const _returnValueTnb38K3 = "QbVS5qqf8oLkR2L5Sa";
		const _getAdjacencyMatrixuduFe4M = () => { return _returnValueTnb38K3 };
		const _returnValueon7Xe0 = "IUaxHLqo4WkEUgYdmJjxQsoTd3HhGlF6cHgj2vyvY2HDOwd1jiDgSWXJ1wP2AQX6FR";
		const _getVerticesIndicesWdQJUKH = () => { return _returnValueon7Xe0 };
		const _graphfMox02G = {
			"getAllVertices": _getAllVerticesj0lZoQd,
		"getAdjacencyMatrix": _getAdjacencyMatrixuduFe4M,
		"getVerticesIndices": _getVerticesIndicesWdQJUKH
	}
		const _returnValueY2JboX2 = await bfTravellingSalesman(_graphfMox02G)
	});

	it('test for bfTravellingSalesman', async () => {
		const _returnValueAgJih6M = {
		
	}
		const _getAllVerticesHKHurwD = () => { return _returnValueAgJih6M };
		const _returnValueaE4JOv = "xAWHF0515IN6iSE3iK1GTjKiWsokb7KZwK9a3fNf1ioPYupWpb3o";
		const _returnValueAw6lrw5 = () => { return _returnValueaE4JOv };
		const _getAdjacencyMatrixoIqZ60f = () => { return _returnValueAw6lrw5 };
		const _returnValuefpewjuh = false;
		const _getVerticesIndicesrdRvHCr = () => { return _returnValuefpewjuh };
		const _graphxDR5pFe = {
			"getAllVertices": _getAllVerticesHKHurwD,
		"getAdjacencyMatrix": _getAdjacencyMatrixoIqZ60f,
		"getVerticesIndices": _getVerticesIndicesrdRvHCr
	}
		const _returnValuemVVR1kz = await bfTravellingSalesman(_graphxDR5pFe)
	});
})