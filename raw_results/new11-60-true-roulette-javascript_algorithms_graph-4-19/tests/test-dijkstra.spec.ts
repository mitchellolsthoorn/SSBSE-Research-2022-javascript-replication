export {}
import dijkstra from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/dijkstra/dijkstra.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('dijkstra', () => {
	it('test for dijkstra', async () => {
		const _arrayValueJCcdc0O = {
		
	}
		const _arrayValuedspvseX = true;
		const _arrayValuepzb1lWQ = null;
		const _returnValuetIldquu = [_arrayValueJCcdc0O, _arrayValuedspvseX, _arrayValuepzb1lWQ]
		const _graphkxCfVNK = () => { return _returnValuetIldquu };
		const _arrayValueUgYK0np = {
		
	}
		const _startVertexFQgQeAz = [_arrayValueUgYK0np]
		const _returnValue4V2tq1 = await dijkstra(_graphkxCfVNK, _startVertexFQgQeAz)
	});

	it('test for dijkstra', async () => {
		const _isDirected3TvnHJ = "PAWk6GcG6dkuslWYA6oGsjFrMvfiw7CnbFxtdk99G";
		const _graphN75BTvl = new Graph(_isDirected3TvnHJ)
		const _returnValuem2iwXAD = await _graphN75BTvl.getWeight()
		const _arrayValueqQWQF5 = undefined;
		const _arrayValueoQ875Ro = "EteZD724JUkPpgCmjpYz5t";
		const _arrayValueV5EHpEh = false;
		const _arrayValuenQ9jO35 = [_arrayValueV5EHpEh]
		const _arrayValueuSHJ7R = [_arrayValueoQ875Ro, _arrayValuenQ9jO35]
		const _arrayValueewVR0Ha = {
		
	}
		const _returnValuejDMf638 = [_arrayValueqQWQF5, _arrayValueuSHJ7R, _arrayValueewVR0Ha]
		const _getKeyq7PugiM = () => { return _returnValuejDMf638 };
		const _startVertexskbH7OJ = {
			"getKey": _getKeyq7PugiM
	}
		const _returnValueDssItMU = await dijkstra(_graphN75BTvl, _startVertexskbH7OJ)
	});

	it('test for dijkstra', async () => {
		const _isDirectedB6RxzpE = true;
		const _graphGHYGm3 = new Graph(_isDirectedB6RxzpE)
		const _valuexrx5KjA = false;
		const _startVertexR7Mvkbz = new GraphVertex(_valuexrx5KjA)
		const _returnValueFpwaXCJ = await _startVertexR7Mvkbz.deleteAllEdges()
		const _endVertexnvxJJ2v = null;
		const _returnValuerVGa2ro = await _graphGHYGm3.findEdge(_startVertexR7Mvkbz, _endVertexnvxJJ2v)
		const _returnValueLd5jnu = await _graphGHYGm3.reverse()
		const _valueXTQJqtM = -9.277964159004737;
		const _startVertexv28p41d = new GraphVertex(_valueXTQJqtM)
		const _requiredEdgex5MFoIp = []
		const _returnValueRNnGij = await _startVertexv28p41d.hasEdge(_requiredEdgex5MFoIp)
		const _arrayValueZN592Pg = "UUVD3lTE3fjH5gIGZR0lmk1He72q4aIxoMjNfsBDg7euByKTwTR43Niwx9vRkCoHmDe9yRzvAPVbgqV";
		const _arrayValuePbyUSTO = undefined;
		const _arrayValueMohqHkK = [_arrayValueZN592Pg, _arrayValuePbyUSTO]
		const _vertexSC2USGQ = [_arrayValueMohqHkK]
		const _returnValueqm0Zcfu = await _startVertexv28p41d.findEdge(_vertexSC2USGQ)
		const _returnValueq7Bkyix = await dijkstra(_graphGHYGm3, _startVertexv28p41d)
	});
})