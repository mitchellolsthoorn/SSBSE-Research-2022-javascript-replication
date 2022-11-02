export {}
import eulerianPath from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/eulerian-path/eulerianPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";

describe('eulerianPath', () => {
	it('test for eulerianPath', async () => {
		const _returnValuemwcVXZr = 2.7033260273712507;
		const _getAllEdgeshIIQm7 = () => { return _returnValuemwcVXZr };
		const _arrayValueKUPAAo = {
		
	}
		const _arrayValueYlYdC2 = undefined;
		const _arrayValuev5d4q3F = []
		const _returnValuerHCF5Cx = [_arrayValueKUPAAo, _arrayValueYlYdC2, _arrayValuev5d4q3F]
		const _getAllVerticesqzfa8k3 = () => { return _returnValuerHCF5Cx };
		const _returnValuep7U5CTb = 2.3876450736141273;
		const _deleteEdgePczoTgr = () => { return _returnValuep7U5CTb };
		const _graphGaBaOv = {
			"getAllEdges": _getAllEdgeshIIQm7,
		"getAllVertices": _getAllVerticesqzfa8k3,
		"deleteEdge": _deleteEdgePczoTgr
	}
		const _returnValueHv3HkcH = await eulerianPath(_graphGaBaOv)
	});

	it('test for eulerianPath', async () => {
		const _isDirectedZnIJYvB = true;
		const _graph7PdJ0o = new Graph(_isDirectedZnIJYvB)
		const _valueCYyEkj4 = {
		
	}
		const _keyCallbackjOvU6yw = false;
		const _startVertexVnXaLeW = new DisjointSetItem(_valueCYyEkj4, _keyCallbackjOvU6yw)
		const _returnValueuETAVEG = await _startVertexVnXaLeW.isRoot()
		const _valueZ0wXHUs = false;
		const _returnValueqaUdh9L = "CtevvTg2wA7XlvQdLMEsgYrxz4FfjvdMqtDNjTBHlhTj17HCouWu";
		const _keyCallbackGpUyWpk = () => { return _returnValueqaUdh9L };
		const _parentItemeHIwoi = new DisjointSetItem(_valueZ0wXHUs, _keyCallbackGpUyWpk)
		const _returnValueUXmBpza = await _parentItemeHIwoi.getRoot()
		const _returnValueMFvx8IA = await _parentItemeHIwoi.getChildren()
		const _returnValueV0vCf1E = await _parentItemeHIwoi.isRoot()
		const _forceSettingParentChilddVB3xS9 = true;
		const _returnValueWL2xhD = await _startVertexVnXaLeW.setParent(_parentItemeHIwoi, _forceSettingParentChilddVB3xS9)
		const _returnValueh57ngY2 = await _startVertexVnXaLeW.getChildren()
		const _returnValueL7AIiP2 = await _startVertexVnXaLeW.getRoot()
		const _endVertexqLVU2nR = null;
		const _returnValuep9QSNHV = await _graph7PdJ0o.findEdge(_startVertexVnXaLeW, _endVertexqLVU2nR)
		const _returnValueV60qf0P = await eulerianPath(_graph7PdJ0o)
	});
})