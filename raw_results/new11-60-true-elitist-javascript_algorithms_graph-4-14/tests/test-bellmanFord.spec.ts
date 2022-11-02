export {}
import bellmanFord from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('bellmanFord', () => {
	it('test for bellmanFord', async () => {
		const _returnValueOQPvybB = undefined;
		const _getAllVerticesvflYA8V = () => { return _returnValueOQPvybB };
		const _returnValue42ybhO = {
		
	}
		const _getVertexByKeyLSj6qxm = () => { return _returnValue42ybhO };
		const _arrayValuerZZzbMw = "WgLh0cjNXFXgyqdtv4oBuMJ9";
		const _arrayValuetY0SbXp = null;
		const _arrayValueqfc8hFk = {
		
	}
		const _returnValuemma6rx = [_arrayValuerZZzbMw, _arrayValuetY0SbXp, _arrayValueqfc8hFk]
		const _getNeighborsKvDHlgO = () => { return _returnValuemma6rx };
		const _returnValueV6mxzY = undefined;
		const _findEdgegqW96oJ = () => { return _returnValueV6mxzY };
		const _graph3UFdsp = {
			"getAllVertices": _getAllVerticesvflYA8V,
		"getVertexByKey": _getVertexByKeyLSj6qxm,
		"getNeighbors": _getNeighborsKvDHlgO,
		"findEdge": _findEdgegqW96oJ
	}
		const _arrayValueSFa5ULh = "lAS1L6XKY7GJwNnwMGOQyzXMzPB8hDYXccEQlGDaWk6hIRG7HrFVY";
		const _returnValuewdTdar = {
		
	}
		const _arrayValueB1J9szo = () => { return _returnValuewdTdar };
		const _arrayValueR6TCHGg = false;
		const _returnValuewzScdXf = [_arrayValueSFa5ULh, _arrayValueB1J9szo, _arrayValueR6TCHGg]
		const _getKeyssCOCy3 = () => { return _returnValuewzScdXf };
		const _startVertexknRjH4 = {
			"getKey": _getKeyssCOCy3
	}
		const _returnValueZOkwxyf = await bellmanFord(_graph3UFdsp, _startVertexknRjH4)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedJe2ytUz = true;
		const _graphVSdgRpI = new Graph(_isDirectedJe2ytUz)
		const _returnValueueBTOpT = await _graphVSdgRpI.getVerticesIndices()
		const _returnValueeCa003 = await _graphVSdgRpI.getAllVertices()
		const _arrayValuewjT98HF = undefined;
		const _returnValueMCfs82C = [_arrayValuewjT98HF]
		const _getKeyE74ntwZ = () => { return _returnValueMCfs82C };
		const _startVertexkoURu6F = {
			"getKey": _getKeyE74ntwZ
	}
		const _returnValuey7an2Ot = await bellmanFord(_graphVSdgRpI, _startVertexkoURu6F)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedU2c6DBT = true;
		const _graphp6NW494 = new Graph(_isDirectedU2c6DBT)
		const _arrayValueyAAhSNZ = {
		
	}
		const _arrayValueYzMkpq = [_arrayValueyAAhSNZ]
		const _arrayValueSeqBqAo = {
		
	}
		const _returnValueWMwstCH = [_arrayValueYzMkpq, _arrayValueSeqBqAo]
		const _getNeighborsWHiiIAi = () => { return _returnValueWMwstCH };
		const _vertexjNKOEQL = {
			"getNeighbors": _getNeighborsWHiiIAi
	}
		const _returnValueTjOvnKi = await _graphp6NW494.getNeighbors(_vertexjNKOEQL)
		const _arrayValuebHgmwsf = null;
		const _returnValuegzRlzBd = [_arrayValuebHgmwsf]
		const _getNeighborsxGOjHyd = () => { return _returnValuegzRlzBd };
		const _vertexng5Thjt = {
			"getNeighbors": _getNeighborsxGOjHyd
	}
		const _returnValuelm2QlYs = await _graphp6NW494.getNeighbors(_vertexng5Thjt)
		const _returnValuelbKK5hs = await _graphp6NW494.getWeight()
		const _returnValueEe6N77 = undefined;
		const _getKeyseuHT8q = () => { return _returnValueEe6N77 };
		const _newVertexZrlYoZQ = {
			"getKey": _getKeyseuHT8q
	}
		const _returnValueUFhHR8S = await _graphp6NW494.addVertex(_newVertexZrlYoZQ)
		const _returnValuejyfZSsO = "plibEv7Qeau9KvcY6lgMB1a";
		const _getKeymt00Bix = () => { return _returnValuejyfZSsO };
		const _startVertexYjHXb0a = {
			"getKey": _getKeymt00Bix
	}
		const _returnValueIguFM3k = await bellmanFord(_graphp6NW494, _startVertexYjHXb0a)
	});
})