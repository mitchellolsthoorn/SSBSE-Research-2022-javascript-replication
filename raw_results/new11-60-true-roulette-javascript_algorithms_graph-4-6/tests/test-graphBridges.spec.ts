export {}
import graphBridges from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bridges/graphBridges.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('graphBridges', () => {
	it('test for graphBridges', async () => {
		const _graphEeogwCk = "TsgnRwdvM9ruX9Kv6j3JCZntiQHgSx7AyjOg3S0glxH2IGfmH2spKhigSWt6Mh1xoADfdFGfg65GE";
		const _returnValuea67Ht9M = await graphBridges(_graphEeogwCk)
	});

	it('test for graphBridges', async () => {
		const _isDirectedD12wP1A = false;
		const _graphpjJUd4H = new Graph(_isDirectedD12wP1A)
		const _returnValueUdUgaZu = await _graphpjJUd4H.getWeight()
		const _returnValueJi3tsFh = true;
		const _vertexKeyXynmFuh = () => { return _returnValueJi3tsFh };
		const _returnValueBw8yqTN = await _graphpjJUd4H.getVertexByKey(_vertexKeyXynmFuh)
		const _arrayValueCYQElga = null;
		const _arrayValuehElCe9P = false;
		const _arrayValueF9HVHMb = false;
		const _returnValueDJ1mXaz = [_arrayValueCYQElga, _arrayValuehElCe9P, _arrayValueF9HVHMb]
		const _getKeyg8tnwJi = () => { return _returnValueDJ1mXaz };
		const _newVertexLUM3VmF = {
			"getKey": _getKeyg8tnwJi
	}
		const _returnValueiI9Koxy = await _graphpjJUd4H.addVertex(_newVertexLUM3VmF)
		const _returnValueBaXmFlV = await _graphpjJUd4H.getAllVertices()
		const _returnValueScBRm1N = await _graphpjJUd4H.getWeight()
		const _returnValueKqBx01G = await graphBridges(_graphpjJUd4H)
	});
})