export {}
import DoublyLinkedList from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/doubly-linked-list/DoublyLinkedList.js";
import stronglyConnectedComponents from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/strongly-connected-components/stronglyConnectedComponents.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('stronglyConnectedComponents', () => {
	it('test for stronglyConnectedComponents', async () => {
		const _comparatorFunctionAucgXL = undefined;
		const _graphFkxalfF = new DoublyLinkedList(_comparatorFunctionAucgXL)
		const _returnValueATVu8ye = await _graphFkxalfF.reverse()
		const _valueHwGoU8T = undefined;
		const _returnValueWihuJSp = await _graphFkxalfF.delete(_valueHwGoU8T)
		const _returnValuensf0IZi = null;
		const _valueqf0eREk = () => { return _returnValuensf0IZi };
		const _returnValueCNvQ5GT = await _graphFkxalfF.prepend(_valueqf0eREk)
		const _arrayValuevLvZAaW = false;
		const _arrayValueBDWag41 = undefined;
		const _valuenBhVXoC = [_arrayValuevLvZAaW, _arrayValueBDWag41]
		const _returnValueFmqc9ew = await _graphFkxalfF.append(_valuenBhVXoC)
		const _returnValuewDeX2kW = await stronglyConnectedComponents(_graphFkxalfF)
	});

	it('test for stronglyConnectedComponents', async () => {
		const _isDirectedHSf7zHR = false;
		const _graphKg019u2 = new Graph(_isDirectedHSf7zHR)
		const _arrayValueJFz4XcT = 8.04393191226795;
		const _returnValueIc5KuNd = {
		
	}
		const _arrayValue3BxGxc = () => { return _returnValueIc5KuNd };
		const _arrayValueCht6pZa = undefined;
		const _arrayValuep7jR8W = [_arrayValueCht6pZa]
		const _arrayValueJwzkC8W = null;
		const _arrayValuehgYQzt5 = [_arrayValueJFz4XcT, _arrayValue3BxGxc, _arrayValuep7jR8W, _arrayValueJwzkC8W]
		const _vertexKeygBAKlz = [_arrayValuehgYQzt5]
		const _returnValuesqpGSKk = await _graphKg019u2.getVertexByKey(_vertexKeygBAKlz)
		const _returnValuelg6jtq5 = await _graphKg019u2.getWeight()
		const _returnValuej2kxfU8 = await _graphKg019u2.getAllEdges()
		const _returnValueo6GWdRE = await _graphKg019u2.toString()
		const _returnValueplUqQR = await stronglyConnectedComponents(_graphKg019u2)
	});

	it('test for stronglyConnectedComponents', async () => {
		const _isDirectedcf9VSde = false;
		const _graphtFGoP9 = new Graph(_isDirectedcf9VSde)
		const _returnValueTasw45H = await _graphtFGoP9.getAllVertices()
		const _vertexKeyUAlWdA0 = 7.297557049341503;
		const _returnValueWhUG4bl = await _graphtFGoP9.getVertexByKey(_vertexKeyUAlWdA0)
		const _returnValueCNpzqyh = await _graphtFGoP9.getAllEdges()
		const _valuegjwYpKL = null;
		const _newVertexDRGSsWo = new GraphVertex(_valuegjwYpKL)
		const _returnValuemPjVd7U = await _newVertexDRGSsWo.deleteAllEdges()
		const _requiredEdgeGpBzeWF = undefined;
		const _returnValueYaYEW3O = await _newVertexDRGSsWo.hasEdge(_requiredEdgeGpBzeWF)
		const _vertexrFh4qko = {
		
	}
		const _returnValueNF3Cn1F = await _newVertexDRGSsWo.hasNeighbor(_vertexrFh4qko)
		const _returnValuer7w13fW = await _graphtFGoP9.addVertex(_newVertexDRGSsWo)
		const _returnValuef9gAh3c = await stronglyConnectedComponents(_graphtFGoP9)
	});
})