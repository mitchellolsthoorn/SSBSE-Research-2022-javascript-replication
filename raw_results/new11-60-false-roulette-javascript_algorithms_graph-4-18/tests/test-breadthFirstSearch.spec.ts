export {}
import breadthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('breadthFirstSearch', () => {
	it('test for breadthFirstSearch', async () => {
		const _graphLU4B1MG = "VYuLztqENJpYI24GDIyBb7zuYScYyObZYiG2UxPp1XFqyfvtipKAYF9Mh3P4DEeUlz0XrBgKHU";
		const _startVertexHqFFdaz = {
		
	}
		const _originalCallbacksKyZxzkx = "R4SyRyh3jS9GRL6sRKcjFQcr1Sy4ztksuhXjnCJw3H7jgIuIV4Yc0qPUbClaITLQ7";
		const _returnValueiSuDe10 = await breadthFirstSearch(_graphLU4B1MG, _startVertexHqFFdaz, _originalCallbacksKyZxzkx)
	});

	it('test for breadthFirstSearch', async () => {
		const _returnValuejyszcBl = {
		
	}
		const _returnValuewgcRHX6 = () => { return _returnValuejyszcBl };
		const _graphdCwbZYJ = () => { return _returnValuewgcRHX6 };
		const _returnValueFgZSPMc = null;
		const _startVertexT00NCB = () => { return _returnValueFgZSPMc };
		const _returnValueaT4jdTo = -1.2682043738899598;
		const _originalCallbacksdV6fJYQ = () => { return _returnValueaT4jdTo };
		const _returnValueEt87C23 = await breadthFirstSearch(_graphdCwbZYJ, _startVertexT00NCB, _originalCallbacksdV6fJYQ)
	});

	it('test for breadthFirstSearch', async () => {
		const _arrayValueLJlXEeF = "1OasHlKxpD";
		const _arrayValueIue5Z0Y = null;
		const _arrayValueSOa9Dbc = null;
		const _returnValueZi6st7B = [_arrayValueLJlXEeF, _arrayValueIue5Z0Y, _arrayValueSOa9Dbc]
		const _getNeighborsKSCPi95 = () => { return _returnValueZi6st7B };
		const _graphFFeseqz = {
			"getNeighbors": _getNeighborsKSCPi95
	}
		const _startVertexhFkwsIj = false;
		const _arrayValueY3zox9L = false;
		const _originalCallbacksoQ6h2i1 = [_arrayValueY3zox9L]
		const _returnValuebhmmhtQ = await breadthFirstSearch(_graphFFeseqz, _startVertexhFkwsIj, _originalCallbacksoQ6h2i1)
	});

	it('test for breadthFirstSearch', async () => {
		const _valueOLv1sp = "nGLncQu37TaqEseQDl7nBFN2Jtl7ExONOHNzaZrrGzw9eu7";
		const _graphP8LBXpa = new GraphVertex(_valueOLv1sp)
		const _vertexCyRo1iM = "L7xcXtrdjI";
		const _returnValueNAXYsVb = await _graphP8LBXpa.hasNeighbor(_vertexCyRo1iM)
		const _requiredEdgenNGIVGP = true;
		const _returnValueAShvwkz = await _graphP8LBXpa.hasEdge(_requiredEdgenNGIVGP)
		const _startVertexw6KTCfN = "kRVy";
		const _originalCallbacksogpJwT7 = []
		const _returnValueqSpBpBN = await breadthFirstSearch(_graphP8LBXpa, _startVertexw6KTCfN, _originalCallbacksogpJwT7)
	});
})