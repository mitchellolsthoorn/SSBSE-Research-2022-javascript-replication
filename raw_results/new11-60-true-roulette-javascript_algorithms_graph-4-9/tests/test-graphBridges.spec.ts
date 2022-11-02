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
		const _graphophXxxn = null;
		const _returnValuea3jgmCw = await graphBridges(_graphophXxxn)
	});

	it('test for graphBridges', async () => {
		const _isDirectedDWm2ClT = false;
		const _graphQ9guQRA = new Graph(_isDirectedDWm2ClT)
		const _returnValueJk67ku9 = await _graphQ9guQRA.getAdjacencyMatrix()
		const _returnValueXe5xZGy = await _graphQ9guQRA.getAllVertices()
		const _returnValuenUfyqj = true;
		const _valueoi9sUs = () => { return _returnValuenUfyqj };
		const _arrayValueb5YTWen = {
		
	}
		const _arrayValueVWSKGVZ = undefined;
		const _returnValueuXGkGBb = [_arrayValueb5YTWen, _arrayValueVWSKGVZ]
		const _returnValuejDx8awl = () => { return _returnValueuXGkGBb };
		const _keyCallbackKTlspT4 = () => { return _returnValuejDx8awl };
		const _newVertexADdQqK4 = new DisjointSetItem(_valueoi9sUs, _keyCallbackKTlspT4)
		const _returnValueCRbrAoz = await _newVertexADdQqK4.isRoot()
		const _valueC8jqiZ = null;
		const _returnValuegfvcxhA = "gbuJQUBk0pErDGL1pRxeJPodwk9PCuGPiPqDn9JxL";
		const _keyCallbackVH9Y6Ir = () => { return _returnValuegfvcxhA };
		const _childItemU8ZP3F = new DisjointSetItem(_valueC8jqiZ, _keyCallbackVH9Y6Ir)
		const _returnValuerNuZuae = await _childItemU8ZP3F.getKey()
		const _returnValueZHr9GmY = await _childItemU8ZP3F.isRoot()
		const _returnValue74gdnz = await _newVertexADdQqK4.addChild(_childItemU8ZP3F)
		const _returnValueZsOiWHt = await _graphQ9guQRA.addVertex(_newVertexADdQqK4)
		const _vertexKeykcQg4VV = {
		
	}
		const _returnValueAEyO9OI = await _graphQ9guQRA.getVertexByKey(_vertexKeykcQg4VV)
		const _returnValuem9G1U0l = await graphBridges(_graphQ9guQRA)
	});
})