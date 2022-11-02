export {}
import eulerianPath from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/eulerian-path/eulerianPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('eulerianPath', () => {
	it('test for eulerianPath', async () => {
		const _returnValuep20pNUS = false;
		const _graphoxN0LIl = () => { return _returnValuep20pNUS };
		const _returnValueZKu5g3 = await eulerianPath(_graphoxN0LIl)
	});

	it('test for eulerianPath', async () => {
		const _isDirectedSnqOVQ1 = true;
		const _graphvtkiWAX = new Graph(_isDirectedSnqOVQ1)
		const _returnValuesBYN8su = await _graphvtkiWAX.getAllVertices()
		const _returnValuefBOGHG3 = await _graphvtkiWAX.getAllVertices()
		const _returnValueqOZE5sA = await eulerianPath(_graphvtkiWAX)
	});

	it('test for eulerianPath', async () => {
		const _isDirectedVXx0P5P = false;
		const _graphoy7Er8 = new Graph(_isDirectedVXx0P5P)
		const _valueuKgWj6h = -2.935015102188925;
		const _newVertexzf6QQeT = new GraphVertex(_valueuKgWj6h)
		const _returnValueH7INBoG = await _newVertexzf6QQeT.getDegree()
		const _returnValueRyEGqGH = await _newVertexzf6QQeT.deleteAllEdges()
		const _returnValueBuMxbdQ = null;
		const _callbackSBcfd9U = () => { return _returnValueBuMxbdQ };
		const _returnValueO2o6SOm = await _newVertexzf6QQeT.toString(_callbackSBcfd9U)
		const _edge3s2tPh = true;
		const _returnValueYwUu0f1 = await _newVertexzf6QQeT.addEdge(_edge3s2tPh)
		const _returnValuer3b0Aoi = await _graphoy7Er8.addVertex(_newVertexzf6QQeT)
		const _valueIgGEsjI = 9.404195890212058;
		const _startVertexkRQQCO7 = new GraphVertex(_valueIgGEsjI)
		const _returnValuewM8JBEJ = await _startVertexkRQQCO7.getNeighbors()
		const _returnValuehDRPW0Z = await _startVertexkRQQCO7.deleteAllEdges()
		const _returnValueQmteZP1 = await _startVertexkRQQCO7.deleteAllEdges()
		const _returnValueRv20V87 = await _startVertexkRQQCO7.getKey()
		const _endVertexNE3biU1 = undefined;
		const _returnValuebIXL43R = await _graphoy7Er8.findEdge(_startVertexkRQQCO7, _endVertexNE3biU1)
		const _returnValuegO64SZu = await eulerianPath(_graphoy7Er8)
	});
})