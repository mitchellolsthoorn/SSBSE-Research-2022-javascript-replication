export {}
import bellmanFord from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('bellmanFord', () => {
	it('test for bellmanFord', async () => {
		const _returnValueIrhNNKL = undefined;
		const _returnValueDgU7Vjo = () => { return _returnValueIrhNNKL };
		const _arrayValueGL1RAW = () => { return _returnValueDgU7Vjo };
		const _arrayValueGQqXjRt = "SRFlvm2OfXxf830kzLCOB3eUfbEzmHXtJNlX35H9CEKgVq2ag3qS4mLAqhXp5V9JQP96LcEt5I9AvLaul1Rk8bj";
		const _arrayValueiKPGGaa = true;
		const _graphHoGrlKf = [_arrayValueGL1RAW, _arrayValueGQqXjRt, _arrayValueiKPGGaa]
		const _returnValuePSmbd0j = "yBXaitfizN61otYEoL8SrUfV";
		const _getKeyFaY6nYx = () => { return _returnValuePSmbd0j };
		const _startVertexVqQtWfa = {
			"getKey": _getKeyFaY6nYx
	}
		const _returnValueJaLJmop = await bellmanFord(_graphHoGrlKf, _startVertexVqQtWfa)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedsBSD1j3 = true;
		const _graphXIVEtrA = new Graph(_isDirectedsBSD1j3)
		const _vertexKeyv0CsM2e = true;
		const _returnValueDlBgl7L = await _graphXIVEtrA.getVertexByKey(_vertexKeyv0CsM2e)
		const _valueHNhtAJz = 1.20050185728374;
		const _startVertexeYwO7v = new GraphVertex(_valueHNhtAJz)
		const _vertexM8lJRSd = 0.7471677712229727;
		const _returnValueH8Smgc = await _startVertexeYwO7v.hasNeighbor(_vertexM8lJRSd)
		const _returnValueJ8vkQug = await _startVertexeYwO7v.getEdges()
		const _returnValueoszrOwM = await _startVertexeYwO7v.getKey()
		const _returnValuesivB6e = await _startVertexeYwO7v.getKey()
		const _returnValueUo9309u = await _startVertexeYwO7v.getKey()
		const _endVertexln7PCkR = true;
		const _returnValuey0nyH0v = await _graphXIVEtrA.findEdge(_startVertexeYwO7v, _endVertexln7PCkR)
		const _arrayValuejeGzFxk = true;
		const _arrayValuedz03zpX = false;
		const _arrayValueeSLCONy = false;
		const _returnValuelAcIYUY = [_arrayValuejeGzFxk, _arrayValuedz03zpX, _arrayValueeSLCONy]
		const _getKeyPRazmgf = () => { return _returnValuelAcIYUY };
		const _startVertexWGl0LJd = {
			"getKey": _getKeyPRazmgf
	}
		const _returnValueWer1YFv = await bellmanFord(_graphXIVEtrA, _startVertexWGl0LJd)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedbaXOhPP = true;
		const _graphiR040zz = new Graph(_isDirectedbaXOhPP)
		const _vertexKeybNd5HOF = {
		
	}
		const _returnValuegFJRODR = await _graphiR040zz.getVertexByKey(_vertexKeybNd5HOF)
		const _returnValueIAOQcOY = null;
		const _getKeyZeAiQT = () => { return _returnValueIAOQcOY };
		const _newVertex8Z5Srk = {
			"getKey": _getKeyZeAiQT
	}
		const _returnValueqT98yJP = await _graphiR040zz.addVertex(_newVertex8Z5Srk)
		const _arrayValueG2BEmZi = {
		
	}
		const _arrayValueQucsgb8 = false;
		const _arrayValueBf1isJg = false;
		const _arrayValueZNYwND = undefined;
		const _arrayValueqCiG7M9 = [_arrayValueQucsgb8, _arrayValueBf1isJg, _arrayValueZNYwND]
		const _returnValueJqAbrIJ = [_arrayValueG2BEmZi, _arrayValueqCiG7M9]
		const _getKeyqhnRAr = () => { return _returnValueJqAbrIJ };
		const _startVertexnMRAhMx = {
			"getKey": _getKeyqhnRAr
	}
		const _returnValueJr7GEW = await bellmanFord(_graphiR040zz, _startVertexnMRAhMx)
	});
})