export {}
import graphBridges from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bridges/graphBridges.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";

describe('graphBridges', () => {
	it('test for graphBridges', async () => {
		const _returnValueVlTxoK9 = {
		
	}
		const _getAllVerticesMTuoGv = () => { return _returnValueVlTxoK9 };
		const _returnValueCeQSGU6 = false;
		const _findEdgeJFoknb = () => { return _returnValueCeQSGU6 };
		const _graphD1T5nto = {
			"getAllVertices": _getAllVerticesMTuoGv,
		"findEdge": _findEdgeJFoknb
	}
		const _returnValueSTFEPB1 = await graphBridges(_graphD1T5nto)
	});

	it('test for graphBridges', async () => {
		const _isDirectedReqhQmn = false;
		const _graphebPVjSm = new Graph(_isDirectedReqhQmn)
		const _valueRDYuUU = "JZPujNtwsvhOxrKITca83OmzAspTsh5Ls87zTU5a6MflN3bww1Qo2oiNQrJgbsc7bAs";
		const _returnValueJ9cQ8i = -1.903651844349607;
		const _keyCallbacktwbW84c = () => { return _returnValueJ9cQ8i };
		const _startVertexxCvQMG9 = new DisjointSetItem(_valueRDYuUU, _keyCallbacktwbW84c)
		const _returnValueZ5bbXAL = await _startVertexxCvQMG9.getRank()
		const _returnValueTjc3t6s = await _startVertexxCvQMG9.getChildren()
		const _endVertexctTga2S = {
		
	}
		const _returnValuedkxx8pH = await _graphebPVjSm.findEdge(_startVertexxCvQMG9, _endVertexctTga2S)
		const _returnValuesToFFKn = await _graphebPVjSm.reverse()
		const _valuePrU7ON6 = false;
		const _returnValueozPn6zb = false;
		const _keyCallbackW2Jfq1u = () => { return _returnValueozPn6zb };
		const _newVertexjKzoQwo = new DisjointSetItem(_valuePrU7ON6, _keyCallbackW2Jfq1u)
		const _returnValueigF4L8u = await _newVertexjKzoQwo.getRoot()
		const _returnValueUSAA87R = await _graphebPVjSm.addVertex(_newVertexjKzoQwo)
		const _returnValueiO8dqnS = await graphBridges(_graphebPVjSm)
	});
})