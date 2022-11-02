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
		const _returnValueCbacCY7 = 4.087700036812318;
		const _getAllVerticesK6MQtpz = () => { return _returnValueCbacCY7 };
		const _arrayValued2ZugLM = undefined;
		const _arrayValuejpqrHBs = null;
		const _returnValueA72W7f = [_arrayValued2ZugLM, _arrayValuejpqrHBs]
		const _findEdgeJlt5GWI = () => { return _returnValueA72W7f };
		const _graphkGcQE6W = {
			"getAllVertices": _getAllVerticesK6MQtpz,
		"findEdge": _findEdgeJlt5GWI
	}
		const _returnValueIgCr5WI = await graphBridges(_graphkGcQE6W)
	});

	it('test for graphBridges', async () => {
		const _isDirectedWtrKqH = true;
		const _graph9cMG54 = new Graph(_isDirectedWtrKqH)
		const _returnValueqNW5Wi6 = await _graph9cMG54.getAdjacencyMatrix()
		const _arrayValueV7rxqlb = -7.608225424326206;
		const _returnValueEWFiDbO = {
		
	}
		const _arrayValueF92zGe = () => { return _returnValueEWFiDbO };
		const _arrayValueAVNykU = [_arrayValueF92zGe]
		const _arrayValueDw4h0NQ = [_arrayValueV7rxqlb, _arrayValueAVNykU]
		const _arrayValueJ0X4t2J = null;
		const _arrayValueL8Hhk61 = null;
		const _valuej5bdguo = [_arrayValueDw4h0NQ, _arrayValueJ0X4t2J, _arrayValueL8Hhk61]
		const _returnValueMZUPbOv = null;
		const _keyCallbackgp9LiEs = () => { return _returnValueMZUPbOv };
		const _newVertexZbE6pc = new DisjointSetItem(_valuej5bdguo, _keyCallbackgp9LiEs)
		const _returnValuexuNBaFE = await _newVertexZbE6pc.getRank()
		const _returnValuePWIXakn = await _newVertexZbE6pc.getRoot()
		const _returnValueKpQC8zT = "lKaOdY0xSTg4JtCIVphVMcS942prJ9dkR43ICGO09uGTa6xaX9kFXTIsDnGQEXxM8toHlzA2Q7Ht6";
		const _addChild5ZQDfj = () => { return _returnValueKpQC8zT };
		const _parentItemozK1Hp = {
			"addChild": _addChild5ZQDfj
	}
		const _arrayValueO5OPMFb = true;
		const _forceSettingParentChildtUzRskT = [_arrayValueO5OPMFb]
		const _returnValuelm0lRk = await _newVertexZbE6pc.setParent(_parentItemozK1Hp, _forceSettingParentChildtUzRskT)
		const _returnValueCXI9gx5 = await _newVertexZbE6pc.getRank()
		const _returnValueLpPPTUQ = await _graph9cMG54.addVertex(_newVertexZbE6pc)
		const _returnValuemlGXBjW = await graphBridges(_graph9cMG54)
	});
})