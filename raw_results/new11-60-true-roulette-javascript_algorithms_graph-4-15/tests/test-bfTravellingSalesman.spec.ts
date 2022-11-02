export {}
import bfTravellingSalesman from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/travelling-salesman/bfTravellingSalesman.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('bfTravellingSalesman', () => {
	it('test for bfTravellingSalesman', async () => {
		const _arrayValue6fnqpU = null;
		const _arrayValueSZLDbUv = undefined;
		const _arrayValueStDcZ8t = []
		const _graphBigSwq = [_arrayValue6fnqpU, _arrayValueSZLDbUv, _arrayValueStDcZ8t]
		const _returnValueBc5iPgN = await bfTravellingSalesman(_graphBigSwq)
	});

	it('test for bfTravellingSalesman', async () => {
		const _returnValueUYceyzC = "NFxiXmUgDaf8aesqIcB3JXaHUS8Rvddsy9QQr1WTypO";
		const _getAllVerticesNaqJAjv = () => { return _returnValueUYceyzC };
		const _returnValueNM4uOp8 = -6.233048006159773;
		const _getAdjacencyMatrixaimC0dV = () => { return _returnValueNM4uOp8 };
		const _returnValueZrEiYIN = false;
		const _getVerticesIndicesOqiluWw = () => { return _returnValueZrEiYIN };
		const _graphrdQbwh4 = {
			"getAllVertices": _getAllVerticesNaqJAjv,
		"getAdjacencyMatrix": _getAdjacencyMatrixaimC0dV,
		"getVerticesIndices": _getVerticesIndicesOqiluWw
	}
		const _returnValuedGCPlc = await bfTravellingSalesman(_graphrdQbwh4)
	});

	it('test for bfTravellingSalesman', async () => {
		const _isDirectedflN5HhN = false;
		const _graphI4wC9ft = new Graph(_isDirectedflN5HhN)
		const _valueO9AETRr = "pRL7IMb8Mo3CubXQz20S5xwmsWb2dllxkmbUj3ho73xp1NrAX3V2H89EKN5BcZYYtpqhBtZNIr2oPc6r43h";
		const _returnValuedviO9t = 6.298862373987166;
		const _keyCallbackDMxEpDL = () => { return _returnValuedviO9t };
		const _newVertexpo8qpVE = new DisjointSetItem(_valueO9AETRr, _keyCallbackDMxEpDL)
		const _returnValueSgDwN6O = await _newVertexpo8qpVE.getRoot()
		const _returnValue6mLZ80 = await _newVertexpo8qpVE.getChildren()
		const _returnValueUoSnkIP = await _newVertexpo8qpVE.getRank()
		const _valued2PP0m = -0.6923385769462236;
		const _returnValueLIzhNge = {
		
	}
		const _keyCallbackhXhhT4Q = () => { return _returnValueLIzhNge };
		const _parentItemNaItUUD = new DisjointSetItem(_valued2PP0m, _keyCallbackhXhhT4Q)
		const _returnValueF3jIr5t = await _parentItemNaItUUD.getChildren()
		const _forceSettingParentChildaByAsgZ = true;
		const _returnValueG7d8dfD = await _newVertexpo8qpVE.setParent(_parentItemNaItUUD, _forceSettingParentChildaByAsgZ)
		const _returnValueIsVhl4p = await _newVertexpo8qpVE.getRoot()
		const _returnValuealjo87c = await _graphI4wC9ft.addVertex(_newVertexpo8qpVE)
		const _vertexKeyOAFmbqa = "fpmWygsjPEuUUrigJLeSeEk8oaBstDggqE6oNSX3VfuCrlHMyVvg0NhTys4epQdA3fhb0721xoolnbJmVEt3z5ol2hQH";
		const _returnValuesbYA3iy = await _graphI4wC9ft.getVertexByKey(_vertexKeyOAFmbqa)
		const _vertexKeylf7z4ev = false;
		const _returnValueKFnduc = await _graphI4wC9ft.getVertexByKey(_vertexKeylf7z4ev)
		const _arrayValuea9MkUlS = true;
		const _arrayValuer2f5lO = true;
		const _arrayValuer1jWsIB = null;
		const _arrayValueYWlxvlH = "lczVkyy44XjjCAPvJq1J7";
		const _arrayValueniDTIGr = [_arrayValueYWlxvlH]
		const _arrayValueGF4SKo7 = [_arrayValuea9MkUlS, _arrayValuer2f5lO, _arrayValuer1jWsIB, _arrayValueniDTIGr]
		const _arrayValuewSvk4sw = null;
		const _arrayValuefX1Q0Xu = -2.244032596829916;
		const _arrayValuelUsLrci = [_arrayValuewSvk4sw, _arrayValuefX1Q0Xu]
		const _vertexKeyHoTHFVv = [_arrayValueGF4SKo7, _arrayValuelUsLrci]
		const _returnValueW7Apa88 = await _graphI4wC9ft.getVertexByKey(_vertexKeyHoTHFVv)
		const _returnValueMBMaUW4 = await bfTravellingSalesman(_graphI4wC9ft)
	});

	it('test for bfTravellingSalesman', async () => {
		const _isDirectedHtlIcHO = false;
		const _graphGdT0kHK = new Graph(_isDirectedHtlIcHO)
		const _returnValuetVmJAGU = await _graphGdT0kHK.getWeight()
		const _vertexKeyH3QKBN9 = -9.684847434137259;
		const _returnValueREyZdgQ = await _graphGdT0kHK.getVertexByKey(_vertexKeyH3QKBN9)
		const _arrayValuextg5Aal = "0l6i46sxG7MCNFUL9hy2vA2mvsyvhYUKoP0qneMr9rDbr41Y6MOPz183rwVNPyQfMKnYG9brG18w2me";
		const _arrayValuelhA7yXa = true;
		const _arrayValueQPUtnhD = "fjTW5vYgggeucPJIksEdtBYTzGhPnNjWYN2m5afkH8VUHTmWu6MkRwXJ5hf7hKhfkEl4jhu4";
		const _valueZRYQNkv = [_arrayValuextg5Aal, _arrayValuelhA7yXa, _arrayValueQPUtnhD]
		const _newVertexdCN8EcH = new GraphVertex(_valueZRYQNkv)
		const _returnValueZInSQdz = await _newVertexdCN8EcH.getDegree()
		const _returnValueIkrmeHZ = await _newVertexdCN8EcH.getDegree()
		const _edgejFdX12l = null;
		const _returnValue1F1HY2 = await _newVertexdCN8EcH.deleteEdge(_edgejFdX12l)
		const _returnValuepHIoeZC = await _newVertexdCN8EcH.getDegree()
		const _returnValueqSDI0Xh = await _graphGdT0kHK.addVertex(_newVertexdCN8EcH)
		const _returnValueKPf3Cta = await _graphGdT0kHK.toString()
		const _returnValueDjOYqs = await _graphGdT0kHK.getAdjacencyMatrix()
		const _returnValueVOqZoxs = await bfTravellingSalesman(_graphGdT0kHK)
	});
})