export {}
import breadthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('breadthFirstSearch', () => {
	it('test for breadthFirstSearch', async () => {
		const _returnValuegmftt4F = null;
		const _getNeighborsKIYoHyf = () => { return _returnValuegmftt4F };
		const _graphC7qsMOk = {
			"getNeighbors": _getNeighborsKIYoHyf
	}
		const _startVertexowuGd8s = false;
		const _returnValueowI8bYb = "WtNtkysTEvWIiW36uQfAdnU0SqAKzO7Mqbh54uzBvNEX6zC1aMhqxnlUiUGiYbCmvGvvXKqoqykuchtXxFF9K7k7kl42sK5lMho";
		const _originalCallbacksrFigvtB = () => { return _returnValueowI8bYb };
		const _returnValueFYfAz7n = await breadthFirstSearch(_graphC7qsMOk, _startVertexowuGd8s, _originalCallbacksrFigvtB)
	});

	it('test for breadthFirstSearch', async () => {
		const _arrayValueTGYf8Hv = undefined;
		const _returnValuenUvG2wX = [_arrayValueTGYf8Hv]
		const _getNeighborsesi61rF = () => { return _returnValuenUvG2wX };
		const _graphNYw9J2D = {
			"getNeighbors": _getNeighborsesi61rF
	}
		const _startVertexJv1EPBl = undefined;
		const _arrayValueq747AZy = true;
		const _arrayValuepqtnC0M = "Z8jRTamb3OlUUFTuLUGeSUuUKXG8AtXdGbzGocnCVajM9iNc2Be1m";
		const _arrayValuesssNCwz = false;
		const _arrayValueh0zfz6h = undefined;
		const _arrayValue1NwO1f = [_arrayValueh0zfz6h]
		const _arrayValueS6ByvoD = null;
		const _arrayValueonrLBns = [_arrayValueS6ByvoD]
		const _arrayValueZuqNBVn = [_arrayValuesssNCwz, _arrayValue1NwO1f, _arrayValueonrLBns]
		const _arrayValueCWPozgY = null;
		const _originalCallbacksn5y9Kny = [_arrayValueq747AZy, _arrayValuepqtnC0M, _arrayValueZuqNBVn, _arrayValueCWPozgY]
		const _returnValueXMYcm3 = await breadthFirstSearch(_graphNYw9J2D, _startVertexJv1EPBl, _originalCallbacksn5y9Kny)
	});

	it('test for breadthFirstSearch', async () => {
		const _arrayValueDjQkJh = "zzjak2uFhAMqs866YQD65wyeYWwX0lku3nI0mUN2TFwobHu8BCi0wfyNeI9uJKDIVZ4ktsyc6qdLVJUV";
		const _arrayValueOVu3rel = -5.754175596900323;
		const _arrayValuec11ObPG = undefined;
		const _valueElZjCcW = [_arrayValueDjQkJh, _arrayValueOVu3rel, _arrayValuec11ObPG]
		const _grapht8xBaXp = new GraphVertex(_valueElZjCcW)
		const _returnValueO1Z9Gn3 = await _grapht8xBaXp.deleteAllEdges()
		const _requiredEdgedjPx7Uk = undefined;
		const _returnValueUEDNwgj = await _grapht8xBaXp.hasEdge(_requiredEdgedjPx7Uk)
		const _edgea4CNcm = null;
		const _returnValuezi28dRA = await _grapht8xBaXp.deleteEdge(_edgea4CNcm)
		const _vertexlo2eYga = undefined;
		const _returnValuevYSzlEy = await _grapht8xBaXp.findEdge(_vertexlo2eYga)
		const _vertexc7FmlE = "8OHz0mDrakm";
		const _returnValueQYE49Y = await _grapht8xBaXp.findEdge(_vertexc7FmlE)
		const _startVertexQicwFKJ = -2.0445116561766135;
		const _arrayValuewzrOrZq = true;
		const _arrayValueXS5n0Wb = false;
		const _arrayValuejyRJ8pA = -7.3293229020768385;
		const _returnValueVxuDPU = [_arrayValuewzrOrZq, _arrayValueXS5n0Wb, _arrayValuejyRJ8pA]
		const _originalCallbacksrwHmxF = () => { return _returnValueVxuDPU };
		const _returnValueOw9wRR2 = await breadthFirstSearch(_grapht8xBaXp, _startVertexQicwFKJ, _originalCallbacksrwHmxF)
	});
})