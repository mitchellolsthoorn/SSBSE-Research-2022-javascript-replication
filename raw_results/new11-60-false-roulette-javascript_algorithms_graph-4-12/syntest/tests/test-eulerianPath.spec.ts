export {}
import eulerianPath from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/eulerian-path/eulerianPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('eulerianPath', () => {
	it('test for eulerianPath', async () => {
		const _returnValueAt57Zot = -7.662520123304172;
		const _getAllEdgesCCEetul = () => { return _returnValueAt57Zot };
		const _returnValueE7TmUQb = "kbe3YPSCY4E3n9VXgDLtr4WUHnYJbJSyIScnvujv37PAt46L8xVhQoRYNbSYtFry8TLM0KjTUF460GGID3xrSujUY";
		const _getAllVerticesUMHmOcj = () => { return _returnValueE7TmUQb };
		const _returnValueri3hH4K = "oR69UpYmVTVgiOQGYw3D6JSemWyGwH3mvO1l6R9vtHaQBiUxoGo2YYeKmpzDNItKULk";
		const _deleteEdgech3bl1y = () => { return _returnValueri3hH4K };
		const _graphaEv6IY1 = {
			"getAllEdges": _getAllEdgesCCEetul,
		"getAllVertices": _getAllVerticesUMHmOcj,
		"deleteEdge": _deleteEdgech3bl1y
	}
		const _returnValueNWDBZbO = await eulerianPath(_graphaEv6IY1)
	});

	it('test for eulerianPath', async () => {
		const _isDirectedldb18tm = false;
		const _graphDqLAtdK = new Graph(_isDirectedldb18tm)
		const _returnValuevkC0wLV = await _graphDqLAtdK.getAllVertices()
		const _returnValueAS5lkU = await eulerianPath(_graphDqLAtdK)
	});
})