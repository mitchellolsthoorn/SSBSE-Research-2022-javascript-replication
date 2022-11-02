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
		const _returnValueZz0JU1O = "ndPQN1CrXepv5RmC8nFHnYY1BmgpHtFMBakEW36aTYjfPJF5famjR4zvHzHChtIc5DmATvbZgCh16ZWuDdEVwAog1H0Fo07";
		const _getAllVerticesz3WsNZx = () => { return _returnValueZz0JU1O };
		const _returnValuefeYOgrn = true;
		const _findEdgeOAmSF4u = () => { return _returnValuefeYOgrn };
		const _graph82dRM1 = {
			"getAllVertices": _getAllVerticesz3WsNZx,
		"findEdge": _findEdgeOAmSF4u
	}
		const _getKeyrnE3Ncw = false;
		const _startVertexz1nEywt = {
			"getKey": _getKeyrnE3Ncw
	}
		const _returnValueCammRG = await dijkstra(_graph82dRM1, _startVertexz1nEywt)
	});

	it('test for dijkstra', async () => {
		const _isDirectedWJBxDek = true;
		const _graphKXsqPC9 = new Graph(_isDirectedWJBxDek)
		const _returnValueKeQ6MPJ = await _graphKXsqPC9.getVerticesIndices()
		const _returnValueaPaLVnw = -5.967333447865404;
		const _getKeyU8UWFWv = () => { return _returnValueaPaLVnw };
		const _startVertexiWTYHg8 = {
			"getKey": _getKeyU8UWFWv
	}
		const _returnValueEVNSc2x = await dijkstra(_graphKXsqPC9, _startVertexiWTYHg8)
	});

	it('test for dijkstra', async () => {
		const _isDirectedyb503CH = undefined;
		const _graphliFxKbF = new Graph(_isDirectedyb503CH)
		const _vertexKeym5FO2hX = "1X8x3fuyZ9HsH9UgFEybNTz9DjiLo4pOFOEG8B";
		const _returnValueTQBGKG = await _graphliFxKbF.getVertexByKey(_vertexKeym5FO2hX)
		const _valueGXqoGLw = null;
		const _startVertexVf6Zlg4 = new GraphVertex(_valueGXqoGLw)
		const _returnValuef5tAh2Z = await _startVertexVf6Zlg4.getDegree()
		const _vertexwGiYlsw = null;
		const _returnValueKruvbza = await _startVertexVf6Zlg4.hasNeighbor(_vertexwGiYlsw)
		const _returnValueOuDRwVP = await _startVertexVf6Zlg4.getDegree()
		const _vertexjPgkMnn = null;
		const _returnValueZF8oCd = await _startVertexVf6Zlg4.hasNeighbor(_vertexjPgkMnn)
		const _returnValueQ67NhTI = await _startVertexVf6Zlg4.deleteAllEdges()
		const _returnValuenelKXXg = await dijkstra(_graphliFxKbF, _startVertexVf6Zlg4)
	});
})