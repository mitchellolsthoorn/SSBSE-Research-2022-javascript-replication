export {}
import breadthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('breadthFirstSearch', () => {
	it('test for breadthFirstSearch', async () => {
		const _graphuOHLmtN = "wgd8VbQTu1LL6aS6icO";
		const _arrayValueXxmOK3Q = undefined;
		const _arrayValue5QRSVK = "XKqAChR8MwVmpApI";
		const _startVertexB26X0YX = [_arrayValueXxmOK3Q, _arrayValue5QRSVK]
		const _originalCallbacksQStuusG = true;
		const _returnValueSuOgK1J = await breadthFirstSearch(_graphuOHLmtN, _startVertexB26X0YX, _originalCallbacksQStuusG)
	});

	it('test for breadthFirstSearch', async () => {
		const _returnValueukkEV1L = "m4nwzehqXUUmLhTPL66hyoDIPnTLOX14iKbVCFNE7NPnsJ5ayluFdrR5AXIrY8rE3BuohwXPQqN9K9";
		const _graphvTm3jt7 = () => { return _returnValueukkEV1L };
		const _startVertexnLI1Pyv = false;
		const _originalCallbacksamxiSw = {
		
	}
		const _returnValuecWVbM8H = await breadthFirstSearch(_graphvTm3jt7, _startVertexnLI1Pyv, _originalCallbacksamxiSw)
	});

	it('test for breadthFirstSearch', async () => {
		const _arrayValuelbH21n = {
		
	}
		const _arrayValuePIOLWl = [_arrayValuelbH21n]
		const _valueVzZ5tlu = [_arrayValuePIOLWl]
		const _graphtLtQ30l = new GraphVertex(_valueVzZ5tlu)
		const _vertexr7h1rYn = true;
		const _returnValueKp3rKjd = await _graphtLtQ30l.hasNeighbor(_vertexr7h1rYn)
		const _returnValueDU37MKK = await _graphtLtQ30l.getEdges()
		const _startVertexkQNQztJ = undefined;
		const _originalCallbacksHdpPo9X = undefined;
		const _returnValueVANuT5D = await breadthFirstSearch(_graphtLtQ30l, _startVertexkQNQztJ, _originalCallbacksHdpPo9X)
	});

	it('test for breadthFirstSearch', async () => {
		const _valueRxolgwu = false;
		const _graphqkyHqXV = new GraphVertex(_valueRxolgwu)
		const _returnValuedaMHjDT = await _graphqkyHqXV.getEdges()
		const _edgeLULWdXn = 7.857959458685901;
		const _returnValueceJ5Bo = await _graphqkyHqXV.addEdge(_edgeLULWdXn)
		const _startVertexTG8AW3t = true;
		const _arrayValuenS7ggs2 = -2.7254540161722494;
		const _originalCallbacksXW5kWZr = [_arrayValuenS7ggs2]
		const _returnValuebXj8yNZ = await breadthFirstSearch(_graphqkyHqXV, _startVertexTG8AW3t, _originalCallbacksXW5kWZr)
	});
})