export {}
import eulerianPath from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/eulerian-path/eulerianPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('eulerianPath', () => {
	it('test for eulerianPath', async () => {
		const _returnValueswpw9kv = false;
		const _getAllEdgesCOz83y = () => { return _returnValueswpw9kv };
		const _arrayValueXwFPPP = "aGg4JkFXAjPnIvKJmp6DFdHRe1NOsK8LavALuDjApoHaqMktBcVGPppRXhqpmI2RoVc";
		const _returnValuecdinG5Q = null;
		const _arrayValueFDz4cEU = () => { return _returnValuecdinG5Q };
		const _arrayValueMScTQBq = [_arrayValueFDz4cEU]
		const _returnValuefbkKita = [_arrayValueXwFPPP, _arrayValueMScTQBq]
		const _getAllVerticesFDtJfHh = () => { return _returnValuefbkKita };
		const _returnValueLwugROS = undefined;
		const _deleteEdgeNUaPBhv = () => { return _returnValueLwugROS };
		const _graphMvJBDqY = {
			"getAllEdges": _getAllEdgesCOz83y,
		"getAllVertices": _getAllVerticesFDtJfHh,
		"deleteEdge": _deleteEdgeNUaPBhv
	}
		const _returnValueOBLlFu = await eulerianPath(_graphMvJBDqY)
	});

	it('test for eulerianPath', async () => {
		const _returnValueBM610hg = []
		const _getAllEdgesjx5kt42 = () => { return _returnValueBM610hg };
		const _returnValueUTxVIkb = null;
		const _getAllVerticesx4DLycu = () => { return _returnValueUTxVIkb };
		const _returnValuexj0GzwL = {
		
	}
		const _deleteEdgeyjOSAX = () => { return _returnValuexj0GzwL };
		const _graphh8sR1yu = {
			"getAllEdges": _getAllEdgesjx5kt42,
		"getAllVertices": _getAllVerticesx4DLycu,
		"deleteEdge": _deleteEdgeyjOSAX
	}
		const _returnValue2mnob7 = await eulerianPath(_graphh8sR1yu)
	});

	it('test for eulerianPath', async () => {
		const _isDirecteddmuo4Ki = false;
		const _graphvqzUhzX = new Graph(_isDirecteddmuo4Ki)
		const _returnValueMTMQdAl = await _graphvqzUhzX.reverse()
		const _returnValuegdpXOgM = await eulerianPath(_graphvqzUhzX)
	});
})