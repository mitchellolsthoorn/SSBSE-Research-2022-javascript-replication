export {}
import prim from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/prim/prim.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('prim', () => {
	it('test for prim', async () => {
		const _graphR6Q8EcY = "Mypc9uJlhRMiufTzt";
		const _returnValueFA9oyTE = await prim(_graphR6Q8EcY)
	});

	it('test for prim', async () => {
		const _arrayValuerSlfq5N = "319Ow1Mrt3tQrhBTkRY5uP2oZr18rxkDMBTs5Er9Meh";
		const _isDirectedRPrjWno = [_arrayValuerSlfq5N]
		const _returnValueu0dNZ8b = {
		
	}
		const _getAllVerticesODjIej2 = () => { return _returnValueu0dNZ8b };
		const _graphJAvSb2P = {
			"isDirected": _isDirectedRPrjWno,
		"getAllVertices": _getAllVerticesODjIej2
	}
		const _returnValuevnq3sIZ = await prim(_graphJAvSb2P)
	});

	it('test for prim', async () => {
		const _isDirectedwxsBN4t = false;
		const _graphjp8xMh = new Graph(_isDirectedwxsBN4t)
		const _returnValuevH79RxK = {
		
	}
		const _getKeybj6zQUe = () => { return _returnValuevH79RxK };
		const _newVertexWb0ons4 = {
			"getKey": _getKeybj6zQUe
	}
		const _returnValuehdRU5Ei = await _graphjp8xMh.addVertex(_newVertexWb0ons4)
		const _returnValueNsnb1wc = await _graphjp8xMh.toString()
		const _returnValuePT8rasj = await prim(_graphjp8xMh)
	});
})