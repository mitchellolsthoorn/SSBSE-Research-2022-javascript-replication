export {}
import articulationPoints from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/articulation-points/articulationPoints.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('articulationPoints', () => {
	it('test for articulationPoints', async () => {
		const _returnValueNPQdQvN = "BqIL2BrUAu3U4A6vj1ypO0DSjFx7cKOxUr8FFljWOT5wCsqo8upHXDFS0LNL9Y85PPodaloEGrFXdMVxPIMzfS3YvR";
		const _getAllVerticesHwyuCr = () => { return _returnValueNPQdQvN };
		const _graphdH49yB7 = {
			"getAllVertices": _getAllVerticesHwyuCr
	}
		const _returnValueWRfnmB = await articulationPoints(_graphdH49yB7)
	});

	it('test for articulationPoints', async () => {
		const _isDirectednzpVuy = false;
		const _graphh3JrAsE = new Graph(_isDirectednzpVuy)
		const _returnValueBKHXsZQ = await _graphh3JrAsE.getVerticesIndices()
		const _arrayValueg3LTnlj = null;
		const _arrayValueb6aK8Z = undefined;
		const _arrayValueJTnW8nn = [_arrayValueb6aK8Z]
		const _arrayValuen4gAs6k = "M324jh8a29P7h72TSF07OVKV9vqfYn8GGp1w6EP86GwEUE";
		const _arrayValueuOP6rPZ = [_arrayValueJTnW8nn, _arrayValuen4gAs6k]
		const _arrayValueOWxQpQ = "vy9gmmcuO7aC8Sxv1KGPtukw1Za5y7YlFoy7oz5WDXk5VC1Eu1s6APfkFSnjk8CxsvxxNa1";
		const _arrayValueJXNTd9n = [_arrayValueuOP6rPZ, _arrayValueOWxQpQ]
		const _returnValueZmcPA5n = [_arrayValueg3LTnlj, _arrayValueJXNTd9n]
		const _getKeygKOrUip = () => { return _returnValueZmcPA5n };
		const _newVertexGH9hdLl = {
			"getKey": _getKeygKOrUip
	}
		const _returnValueEzYJRWB = await _graphh3JrAsE.addVertex(_newVertexGH9hdLl)
		const _returnValueb0JB2sf = await _graphh3JrAsE.getVerticesIndices()
		const _returnValueftKFvYR = await articulationPoints(_graphh3JrAsE)
	});
})