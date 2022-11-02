export {}
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";
import dijkstra from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/dijkstra/dijkstra.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('dijkstra', () => {
	it('test for dijkstra', async () => {
		const _returnValueEpGDHVA = "WN7QMIv9Lm";
		const _getAllVerticeszJRYwbJ = () => { return _returnValueEpGDHVA };
		const _returnValueCleJGVR = null;
		const _findEdgeQC5v9fE = () => { return _returnValueCleJGVR };
		const _graphtLbjwbe = {
			"getAllVertices": _getAllVerticeszJRYwbJ,
		"findEdge": _findEdgeQC5v9fE
	}
		const _arrayValuelKV99ft = null;
		const _valuesUd4TgL = [_arrayValuelKV99ft]
		const _arrayValueWoY4vt = "W";
		const _arrayValueRioUZKk = undefined;
		const _arrayValue4ZNFxU = "19jyQXq8tT9wAmmEdddsmCLdgwKWifXrucx";
		const _returnValueU9117xH = [_arrayValueWoY4vt, _arrayValueRioUZKk, _arrayValue4ZNFxU]
		const _keyCallbacknv3rM4m = () => { return _returnValueU9117xH };
		const _startVertexSQLyBfW = new DisjointSetItem(_valuesUd4TgL, _keyCallbacknv3rM4m)
		const _valueboGTBeF = {
		
	}
		const _returnValueUwOf8Ov = false;
		const _keyCallbackJEjiqHM = () => { return _returnValueUwOf8Ov };
		const _parentItemkp7oOMI = new DisjointSetItem(_valueboGTBeF, _keyCallbackJEjiqHM)
		const _returnValueBik95EQ = await _parentItemkp7oOMI.isRoot()
		const _returnValueE8jipX = await _parentItemkp7oOMI.getRank()
		const _forceSettingParentChildb4DpxA = true;
		const _returnValueaE7qlvL = await _startVertexSQLyBfW.setParent(_parentItemkp7oOMI, _forceSettingParentChildb4DpxA)
		const _returnValueNhaeqR = await _startVertexSQLyBfW.getChildren()
		const _returnValuemM5SGPm = await _startVertexSQLyBfW.isRoot()
		const _returnValuebt9CGjp = await _startVertexSQLyBfW.isRoot()
		const _returnValueSbeEwvr = await dijkstra(_graphtLbjwbe, _startVertexSQLyBfW)
	});

	it('test for dijkstra', async () => {
		const _isDirectedvmZh3FT = false;
		const _graphvQkSyeA = new Graph(_isDirectedvmZh3FT)
		const _returnValueL6aix4M = await _graphvQkSyeA.getAllVertices()
		const _returnValueeo7EdX7 = await _graphvQkSyeA.getAllEdges()
		const _returnValueEpEdn8 = true;
		const _getKeyLzEyZpa = () => { return _returnValueEpEdn8 };
		const _startVertexD7DvaZL = {
			"getKey": _getKeyLzEyZpa
	}
		const _returnValueDv4yKho = await dijkstra(_graphvQkSyeA, _startVertexD7DvaZL)
	});

	it('test for dijkstra', async () => {
		const _isDirectedeP5aPD = false;
		const _graphM3o9Yx = new Graph(_isDirectedeP5aPD)
		const _returnValuehr4KUUH = await _graphM3o9Yx.getAllVertices()
		const _returnValueiGdKIJH = undefined;
		const _getNeighborsi3M86Oe = () => { return _returnValueiGdKIJH };
		const _vertexkCSfIyX = {
			"getNeighbors": _getNeighborsi3M86Oe
	}
		const _returnValuegwgDhnL = await _graphM3o9Yx.getNeighbors(_vertexkCSfIyX)
		const _returnValueOYfY0h9 = await _graphM3o9Yx.reverse()
		const _valuegc2PXEh = 2.554252444940591;
		const _startVertexvhsjc0Q = new GraphVertex(_valuegc2PXEh)
		const _returnValuegz5k0xd = await _startVertexvhsjc0Q.getNeighbors()
		const _arrayValuervKTE38 = "5UvTqGtbiTq6EQb68dw7Pyi3KoiVw5jdVLx5iCPufvM2Vg2NQQOH7zGfr987JEl6ADm3hmFl58U9CXHIkPN6kI";
		const _arrayValuehwbXGk = -2.3152179011599134;
		const _edgeUCJ3jPa = [_arrayValuervKTE38, _arrayValuehwbXGk]
		const _returnValueil0sRxQ = await _startVertexvhsjc0Q.deleteEdge(_edgeUCJ3jPa)
		const _returnValuePkP8tQk = await _startVertexvhsjc0Q.getKey()
		const _edgeZuQzo2w = undefined;
		const _returnValueH2jDELX = await _startVertexvhsjc0Q.deleteEdge(_edgeZuQzo2w)
		const _returnValueuFNaVo7 = await dijkstra(_graphM3o9Yx, _startVertexvhsjc0Q)
	});

	it('test for dijkstra', async () => {
		const _isDirectedqtECSac = false;
		const _graphageU6VX = new Graph(_isDirectedqtECSac)
		const _returnValuemHvMNTv = await _graphageU6VX.getWeight()
		const _returnValueYIv2U1u = await _graphageU6VX.reverse()
		const _returnValueVsuOq6o = await _graphageU6VX.reverse()
		const _valueeaMf9fu = "tVV1sFIgNzMa8x1ewwyt9sobqThG5zD7us";
		const _startVertex76oI6d = new GraphVertex(_valueeaMf9fu)
		const _returnValueRo5rUiL = "atmY4nVepT8qJ7CnGbJcEMMGJkomJElekkVwZyd39Y2RkjRBb1jssxpmDI8X3HdrLtOyw2R66geub05pjda";
		const _arrayValueagSvc1U = () => { return _returnValueRo5rUiL };
		const _arrayValuetXcGm3m = -2.905694149801943;
		const _vertexns9Xg1o = [_arrayValueagSvc1U, _arrayValuetXcGm3m]
		const _returnValueGzwCSaK = await _startVertex76oI6d.findEdge(_vertexns9Xg1o)
		const _edgezUlC5L = undefined;
		const _returnValuedrTJ7my = await _startVertex76oI6d.deleteEdge(_edgezUlC5L)
		const _vertexRbNJbYf = "x7sXDnEfG";
		const _returnValueVGHc58 = await _startVertex76oI6d.hasNeighbor(_vertexRbNJbYf)
		const _arrayValueKOi1B5U = -0.8265939856881381;
		const _arrayValued8DL8SY = 5.299777495003479;
		const _edgeLhQxqlI = [_arrayValueKOi1B5U, _arrayValued8DL8SY]
		const _returnValuegjIearD = await _startVertex76oI6d.addEdge(_edgeLhQxqlI)
		const _returnValuedfW8sD7 = await _startVertex76oI6d.getDegree()
		const _returnValuesqzAZoc = await dijkstra(_graphageU6VX, _startVertex76oI6d)
	});
})