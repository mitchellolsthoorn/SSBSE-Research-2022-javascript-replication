export {}
import bellmanFord from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('bellmanFord', () => {
	it('test for bellmanFord', async () => {
		const _graphngjjfg1 = "XcSLK6I4byK6ineLtqe3pyiawcSCaeKgQeWG5u291PoIKaCCAZCi1Dw1hyiTuqPgLwewwLvnyXdL8OCuumhe3o49TxCqX9f2Ry";
		const _returnValuecCFqqHG = -0.3122890533712752;
		const _startVertexWR9YHHs = () => { return _returnValuecCFqqHG };
		const _returnValuez5klLl = await bellmanFord(_graphngjjfg1, _startVertexWR9YHHs)
	});

	it('test for bellmanFord', async () => {
		const _graphQ6ZYh52 = undefined;
		const _returnValueZ6LCcZq = null;
		const _getKeyP5Quuoj = () => { return _returnValueZ6LCcZq };
		const _startVertexL7jstnT = {
			"getKey": _getKeyP5Quuoj
	}
		const _returnValue4UOYIx = await bellmanFord(_graphQ6ZYh52, _startVertexL7jstnT)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedJ16amN = "bWKvBgRRHW";
		const _graphyG8KF9R = new Graph(_isDirectedJ16amN)
		const _returnValue69ZDVy = await _graphyG8KF9R.getAllEdges()
		const _returnValuegZVhqqh = await _graphyG8KF9R.getAdjacencyMatrix()
		const _returnValueqMg0jg = true;
		const _returnValuerSlsI6m = () => { return _returnValueqMg0jg };
		const _getKeyQkjsF7z = () => { return _returnValuerSlsI6m };
		const _startVertexp1Q41bV = {
			"getKey": _getKeyQkjsF7z
	}
		const _returnValueJjsd87q = await bellmanFord(_graphyG8KF9R, _startVertexp1Q41bV)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedU7O7oOD = "YkiTlHdc2j7ONzhLhUtJwhXCazRl1qWRKSa9XXUjyv7u";
		const _graphFq7noQr = new Graph(_isDirectedU7O7oOD)
		const _returnValuebHpHsvB = undefined;
		const _getKeyoOIYH81 = () => { return _returnValuebHpHsvB };
		const _newVertexRhSlqve = {
			"getKey": _getKeyoOIYH81
	}
		const _returnValueIPqCAKU = await _graphFq7noQr.addVertex(_newVertexRhSlqve)
		const _returnValuewtzpUG = await _graphFq7noQr.toString()
		const _returnValueeTkr9yI = await _graphFq7noQr.getWeight()
		const _returnValuevzY918G = await _graphFq7noQr.getAllEdges()
		const _returnValuefWu6VYr = []
		const _getKeyOs1Win2 = () => { return _returnValuefWu6VYr };
		const _startVertext12TYM = {
			"getKey": _getKeyOs1Win2
	}
		const _returnValuecEGeqcU = await bellmanFord(_graphFq7noQr, _startVertext12TYM)
	});
})