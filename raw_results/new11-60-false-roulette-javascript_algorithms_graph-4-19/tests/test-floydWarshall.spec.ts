export {}
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import floydWarshall from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/floyd-warshall/floydWarshall.js";

describe('floydWarshall', () => {
	it('test for floydWarshall', async () => {
		const _isDirectedzySWJLj = true;
		const _graphUSe03R = new Graph(_isDirectedzySWJLj)
		const _returnValueok5YbY = await _graphUSe03R.reverse()
		const _returnValueSkRy0Np = await floydWarshall(_graphUSe03R)
	});

	it('test for floydWarshall', async () => {
		const _arrayValueRvcEBNZ = null;
		const _arrayValue2VCJpi = "LdQ68yPGb5sn1DyGycpTydJ7vpzC6chFknRFzpftEJVByuNHQ5cEMB63j7k7";
		const _arrayValue9W7GZa = undefined;
		const _returnValueGgsFLi4 = [_arrayValueRvcEBNZ, _arrayValue2VCJpi, _arrayValue9W7GZa]
		const _getAllVerticesYgh9O9b = () => { return _returnValueGgsFLi4 };
		const _arrayValueELFO1ni = true;
		const _returnValuehZj8CpA = "ljUFvHYACQDO31OpS8CVC2WtrKo4yyiCfWt0MwGP75";
		const _arrayValueIiXNPME = () => { return _returnValuehZj8CpA };
		const _returnValueNJRLEYk = [_arrayValueELFO1ni, _arrayValueIiXNPME]
		const _findEdgeDpZFRJ = () => { return _returnValueNJRLEYk };
		const _graphGnURLj1 = {
			"getAllVertices": _getAllVerticesYgh9O9b,
		"findEdge": _findEdgeDpZFRJ
	}
		const _returnValueR4X5mY7 = await floydWarshall(_graphGnURLj1)
	});
})