export {}
import hamiltonianCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/hamiltonian-cycle/hamiltonianCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('hamiltonianCycle', () => {
	it('test for hamiltonianCycle', async () => {
		const _returnValuerYGxS89 = null;
		const _getVerticesIndicesu0X8IEt = () => { return _returnValuerYGxS89 };
		const _getAdjacencyMatrixTkegFK2 = undefined;
		const _returnValueN56D0BV = true;
		const _getAllVerticesiz9L06x = () => { return _returnValueN56D0BV };
		const _grapheDUqXgF = {
			"getVerticesIndices": _getVerticesIndicesu0X8IEt,
		"getAdjacencyMatrix": _getAdjacencyMatrixTkegFK2,
		"getAllVertices": _getAllVerticesiz9L06x
	}
		const _returnValuemF8QGT0 = await hamiltonianCycle(_grapheDUqXgF)
	});

	it('test for hamiltonianCycle', async () => {
		const _arrayValuenvcXy9u = null;
		const _arrayValueyToo1vu = true;
		const _arrayValueGpquGdS = "RzXKMZtqfO5q";
		const _arrayValueM3F4Bth = 7.1687398941576;
		const _arrayValueOYSWd5O = [_arrayValueyToo1vu, _arrayValueGpquGdS, _arrayValueM3F4Bth]
		const _arrayValueWaO5DXz = "oJaJRtoFSC28neXVRwijfhdnwUJkv7GNvaZgaHkXlKTrX8KDWdeM";
		const _returnValueESlIST = [_arrayValuenvcXy9u, _arrayValueOYSWd5O, _arrayValueWaO5DXz]
		const _getVerticesIndiceshgYVKpg = () => { return _returnValueESlIST };
		const _returnValueVIAWWAL = undefined;
		const _getAdjacencyMatrixhWHu5nw = () => { return _returnValueVIAWWAL };
		const _returnValueBfREyA = "fqzxvRceBfIQjRvYwGGh7Hgp34L21dW9QvIzY1yS2gEcKbAPaxALAtM";
		const _getAllVerticesGNzAjx = () => { return _returnValueBfREyA };
		const _graphh5D6vYT = {
			"getVerticesIndices": _getVerticesIndiceshgYVKpg,
		"getAdjacencyMatrix": _getAdjacencyMatrixhWHu5nw,
		"getAllVertices": _getAllVerticesGNzAjx
	}
		const _returnValue6h9FOM = await hamiltonianCycle(_graphh5D6vYT)
	});

	it('test for hamiltonianCycle', async () => {
		const _isDirectedamOD9Zp = true;
		const _graphBh8FZvy = new Graph(_isDirectedamOD9Zp)
		const _returnValuevRmfxZr = await _graphBh8FZvy.getAllVertices()
		const _returnValueJfuZPfR = await _graphBh8FZvy.toString()
		const _valueGpDKqYA = {
		
	}
		const _newVertexINHjWGj = new GraphVertex(_valueGpDKqYA)
		const _vertexUfsPOsd = false;
		const _returnValuesude78P = await _newVertexINHjWGj.hasNeighbor(_vertexUfsPOsd)
		const _vertexov7z9hY = 2.762666278448126;
		const _returnValuecJaFk69 = await _newVertexINHjWGj.findEdge(_vertexov7z9hY)
		const _returnValueGUMyQ0p = await _graphBh8FZvy.addVertex(_newVertexINHjWGj)
		const _returnValueICRzwN = await _graphBh8FZvy.getAllEdges()
		const _returnValuepGT9P4w = await hamiltonianCycle(_graphBh8FZvy)
	});
})