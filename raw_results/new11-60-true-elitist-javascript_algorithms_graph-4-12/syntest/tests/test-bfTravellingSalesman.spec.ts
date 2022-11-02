export {}
import bfTravellingSalesman from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/travelling-salesman/bfTravellingSalesman.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('bfTravellingSalesman', () => {
	it('test for bfTravellingSalesman', async () => {
		const _returnValuenzhvbsI = "GqLeATRw5VSTXBAF7FDPzJ84BAMiSCgHHlo8xpYeVYIpjAJ54PUS8jIAf1oyp7tO8SiSKKH6dK2rmIoJ43FHOYSFX";
		const _getAllVerticesPkawP5a = () => { return _returnValuenzhvbsI };
		const _returnValuevZs9NKD = false;
		const _getAdjacencyMatrixT7ICHCb = () => { return _returnValuevZs9NKD };
		const _returnValueG7IPxXe = null;
		const _getVerticesIndicesYDZ3kR0 = () => { return _returnValueG7IPxXe };
		const _graphQ4CFi5V = {
			"getAllVertices": _getAllVerticesPkawP5a,
		"getAdjacencyMatrix": _getAdjacencyMatrixT7ICHCb,
		"getVerticesIndices": _getVerticesIndicesYDZ3kR0
	}
		const _returnValue1fujrQ = await bfTravellingSalesman(_graphQ4CFi5V)
	});

	it('test for bfTravellingSalesman', async () => {
		const _isDirectednZErDOo = false;
		const _graphxMvixsH = new Graph(_isDirectednZErDOo)
		const _valueRXhNBKs = "OH2VLxsDf2lQ1dKTE0ucpQ";
		const _newVertexzAUUwk = new GraphVertex(_valueRXhNBKs)
		const _arrayValueN9QoRXN = -7.010643293918978;
		const _arrayValuec0XIONP = null;
		const _arrayValuelcT7tJB = true;
		const _vertexN89HOGC = [_arrayValueN9QoRXN, _arrayValuec0XIONP, _arrayValuelcT7tJB]
		const _returnValueKQkuoT5 = await _newVertexzAUUwk.hasNeighbor(_vertexN89HOGC)
		const _vertexxdkM9Fd = "bQFQOh5cVVcIm2";
		const _returnValuevehdIbs = await _newVertexzAUUwk.findEdge(_vertexxdkM9Fd)
		const _requiredEdgeydsyAgA = "tx9PSP73mk3FwJTKVlFpFxoEuTIE4BaObq6nUuVgH5DfcOBj71y";
		const _returnValueHmH9INz = await _newVertexzAUUwk.hasEdge(_requiredEdgeydsyAgA)
		const _returnValueEBUT82N = await _graphxMvixsH.addVertex(_newVertexzAUUwk)
		const _vertexKeygYPjuTJ = false;
		const _returnValueKEzkF06 = await _graphxMvixsH.getVertexByKey(_vertexKeygYPjuTJ)
		const _returnValueuo3rufW = await bfTravellingSalesman(_graphxMvixsH)
	});
})