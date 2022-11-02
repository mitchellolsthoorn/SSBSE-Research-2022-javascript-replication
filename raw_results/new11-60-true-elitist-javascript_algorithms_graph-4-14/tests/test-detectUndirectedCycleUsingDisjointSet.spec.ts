export {}
import detectUndirectedCycleUsingDisjointSet from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycleUsingDisjointSet.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";

describe('detectUndirectedCycleUsingDisjointSet', () => {
	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValueUhg5qOH = {
		
	}
		const _getAllVerticesrfwOt5U = () => { return _returnValueUhg5qOH };
		const _returnValueW04EgPc = "VXys1bpyUl17sY5AkABRbdFx7DFSFypwFbRNVLxSHWKmxWWsVB6LRnA";
		const _getAllEdgesdS0G29d = () => { return _returnValueW04EgPc };
		const _graphALmBeGM = {
			"getAllVertices": _getAllVerticesrfwOt5U,
		"getAllEdges": _getAllEdgesdS0G29d
	}
		const _returnValueU4ALG63 = await detectUndirectedCycleUsingDisjointSet(_graphALmBeGM)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _isDirectedtpgd5fC = true;
		const _graphgGU1Ndh = new Graph(_isDirectedtpgd5fC)
		const _valuesEXXOzV = false;
		const _returnValueKHKgXhf = undefined;
		const _keyCallbackqCPQifl = () => { return _returnValueKHKgXhf };
		const _startVertexkwQhg08 = new DisjointSetItem(_valuesEXXOzV, _keyCallbackqCPQifl)
		const _returnValuecCYS4As = await _startVertexkwQhg08.getKey()
		const _returnValueHACBSsC = await _startVertexkwQhg08.isRoot()
		const _endVertexa4heeyx = "vkXRMAC9Vfs5TT5TyXcxobxsawbYNVnvHGzgOXDC5YB63JYyzVXp0ftb9eiggW7ryQHmyG5jUDJCJVVA6L";
		const _returnValuetLPUH06 = await _graphgGU1Ndh.findEdge(_startVertexkwQhg08, _endVertexa4heeyx)
		const _returnValueZx7KTTr = await _graphgGU1Ndh.getAllVertices()
		const _valueq72SBoG = 0.4184491369043464;
		const _returnValuettYZTNj = 1.09262299248625;
		const _keyCallbackSzWqNCZ = () => { return _returnValuettYZTNj };
		const _startVertexRYHZhSE = new DisjointSetItem(_valueq72SBoG, _keyCallbackSzWqNCZ)
		const _returnValueYvuaC5 = await _startVertexRYHZhSE.getRoot()
		const _returnValueOXVgZ2 = await _startVertexRYHZhSE.getRank()
		const _returnValuex3dUN5r = await _startVertexRYHZhSE.isRoot()
		const _returnValuegJ1ddW2 = await _startVertexRYHZhSE.getChildren()
		const _returnValuetQatlar = -2.6026905889486907;
		const _endVertexngnm7kf = () => { return _returnValuetQatlar };
		const _returnValuetCLdKpU = await _graphgGU1Ndh.findEdge(_startVertexRYHZhSE, _endVertexngnm7kf)
		const _returnValuert8UbbB = await detectUndirectedCycleUsingDisjointSet(_graphgGU1Ndh)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValueIv7k76p = []
		const _getAllVerticesZopAMOt = () => { return _returnValueIv7k76p };
		const _arrayValuemWZ1sM1 = 4.909820247618404;
		const _arrayValueIoMNivN = 3.3956316422438366;
		const _returnValueYR2QvNp = [_arrayValuemWZ1sM1, _arrayValueIoMNivN]
		const _getAllEdgesQc3A7XC = () => { return _returnValueYR2QvNp };
		const _graphsVNMnvs = {
			"getAllVertices": _getAllVerticesZopAMOt,
		"getAllEdges": _getAllEdgesQc3A7XC
	}
		const _returnValuenlxQqOl = await detectUndirectedCycleUsingDisjointSet(_graphsVNMnvs)
	});
})