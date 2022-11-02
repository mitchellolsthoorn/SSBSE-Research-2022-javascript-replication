export {}
import dijkstra from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/dijkstra/dijkstra.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('dijkstra', () => {
	it('test for dijkstra', async () => {
		const _arrayValuerEXP0q3 = undefined;
		const _arrayValuedDutFwl = "zTiqRqQxkBfi4P98AhHPtofHDE2PDeiK6xLiVtEEffsm2DTZQnAHAzuqeMWX3EPo1f4L2";
		const _arrayValueUwCOR8p = -5.480265829060935;
		const _returnValuesGRuCaB = 0.9482109169291224;
		const _arrayValueKx0XS8v = () => { return _returnValuesGRuCaB };
		const _graphsxhdCsB = [_arrayValuerEXP0q3, _arrayValuedDutFwl, _arrayValueUwCOR8p, _arrayValueKx0XS8v]
		const _arrayValuefybtdTP = "47H3SFUiK4zShZO6F1zRI1kkt20z7eBDm7HAT";
		const _startVertexmBvUiif = [_arrayValuefybtdTP]
		const _returnValuenLFZ7nL = await dijkstra(_graphsxhdCsB, _startVertexmBvUiif)
	});

	it('test for dijkstra', async () => {
		const _isDirectedhc6rDFO = true;
		const _graphMe7HWGs = new Graph(_isDirectedhc6rDFO)
		const _returnValueuFje2z9 = await _graphMe7HWGs.getAllEdges()
		const _vertexKeyZR6K2Ts = {
		
	}
		const _returnValueIYFUDT = await _graphMe7HWGs.getVertexByKey(_vertexKeyZR6K2Ts)
		const _returnValuebggoT1W = 4.733118253333561;
		const _getKeyaZSpUc4 = () => { return _returnValuebggoT1W };
		const _newVertexkYGKH3r = {
			"getKey": _getKeyaZSpUc4
	}
		const _returnValuewujtTGY = await _graphMe7HWGs.addVertex(_newVertexkYGKH3r)
		const _vertexKeyzlNEv8 = null;
		const _returnValuearvtHuy = await _graphMe7HWGs.getVertexByKey(_vertexKeyzlNEv8)
		const _returnValueUKnTpN9 = await _graphMe7HWGs.getAllVertices()
		const _valuebFWNy9 = undefined;
		const _returnValuem8x9kpY = false;
		const _keyCallbackufrOVhu = () => { return _returnValuem8x9kpY };
		const _startVertexiiJiYQM = new DisjointSetItem(_valuebFWNy9, _keyCallbackufrOVhu)
		const _returnValueAro8yoW = await _startVertexiiJiYQM.isRoot()
		const _returnValueEwx1WZO = await _startVertexiiJiYQM.getRoot()
		const _returnValuesesilW5 = await _startVertexiiJiYQM.getKey()
		const _returnValueMYHB7Tz = await dijkstra(_graphMe7HWGs, _startVertexiiJiYQM)
	});

	it('test for dijkstra', async () => {
		const _isDirectednl7Iv1 = true;
		const _graphE01TbCE = new Graph(_isDirectednl7Iv1)
		const _returnValueB6k18i = await _graphE01TbCE.getAdjacencyMatrix()
		const _valueuKFRZxR = null;
		const _startVertexDrXCrsW = new GraphVertex(_valueuKFRZxR)
		const _returnValueE7qnNVf = await _startVertexDrXCrsW.getNeighbors()
		const _returnValue628uaP = await _startVertexDrXCrsW.deleteAllEdges()
		const _vertexpvzYJte = "sMPowLh61TrbaUp4uvEo1WbMwwwzdoUux8r3EQKxHy1FwGQUkJ";
		const _returnValuexRpbKbj = await _startVertexDrXCrsW.findEdge(_vertexpvzYJte)
		const _returnValueqVIQY6V = await _startVertexDrXCrsW.getNeighbors()
		const _returnValueyQ764Mg = await dijkstra(_graphE01TbCE, _startVertexDrXCrsW)
	});
})