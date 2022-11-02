export {}
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";
import floydWarshall from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/floyd-warshall/floydWarshall.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('floydWarshall', () => {
	it('test for floydWarshall', async () => {
		const _valueq6eIw7r = {
		
	}
		const _grapheGQ58MV = new GraphVertex(_valueq6eIw7r)
		const _edgecUTXc1y = false;
		const _returnValueDVdM8G = await _grapheGQ58MV.addEdge(_edgecUTXc1y)
		const _returnValueCtcl1Wb = 8.40845799650139;
		const _callbackp9txby2 = () => { return _returnValueCtcl1Wb };
		const _returnValuexUxTYcE = await _grapheGQ58MV.toString(_callbackp9txby2)
		const _returnValuecae3ezz = await floydWarshall(_grapheGQ58MV)
	});

	it('test for floydWarshall', async () => {
		const _arrayValuerxCvXm = -2.150857487901793;
		const _arrayValueEHQFwuv = null;
		const _arrayValueZ3tkOiv = undefined;
		const _returnValuehkZ6814 = [_arrayValuerxCvXm, _arrayValueEHQFwuv, _arrayValueZ3tkOiv]
		const _getAllVerticesLJJ0cj = () => { return _returnValuehkZ6814 };
		const _returnValuewH2r8m = -4.416527846012634;
		const _findEdgeGoBNXvl = () => { return _returnValuewH2r8m };
		const _graphGfrMbT0 = {
			"getAllVertices": _getAllVerticesLJJ0cj,
		"findEdge": _findEdgeGoBNXvl
	}
		const _returnValuegCmn7IG = await floydWarshall(_graphGfrMbT0)
	});
})