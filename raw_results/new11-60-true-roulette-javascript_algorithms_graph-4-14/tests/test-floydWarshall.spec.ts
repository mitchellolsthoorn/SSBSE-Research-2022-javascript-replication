export {}
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import floydWarshall from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/floyd-warshall/floydWarshall.js";

describe('floydWarshall', () => {
	it('test for floydWarshall', async () => {
		const _isDirectedqv3LozJ = false;
		const _graphioWpPAb = new Graph(_isDirectedqv3LozJ)
		const _returnValueRWrJTbq = await _graphioWpPAb.getWeight()
		const _returnValueeP4vnQP = await _graphioWpPAb.getAllEdges()
		const _returnValueQiqFA0J = await _graphioWpPAb.getAdjacencyMatrix()
		const _returnValuePathE2m = await floydWarshall(_graphioWpPAb)
	});

	it('test for floydWarshall', async () => {
		const _arrayValuezA52WXS = "cB9QhVayjK20fJ2c4Nzm87HCpwqMo2cVmPlXfI25oKPqRHxnSvEK4oLOGN";
		const _arrayValueC09QLeF = null;
		const _arrayValueCz2hM9v = "titJvLekAzxaaJZFTuwQe9p7qYOwMa6goovxPt9Xecw9QtesHYAXYBXa";
		const _arrayValuey5H31sg = "MdPiTgwANqmSnxvfzeOwDhorBV369O5cHNWq7rNZfO3mqdJ4z4J94utnTl3f1I9aN7vc04jfXr77oo2TA4";
		const _arrayValueH1tTPip = [_arrayValueC09QLeF, _arrayValueCz2hM9v, _arrayValuey5H31sg]
		const _arrayValueYYLnORN = null;
		const _arrayValueFt14pp = [_arrayValueH1tTPip, _arrayValueYYLnORN]
		const _arrayValuehOKaDQ = -7.476531188332185;
		const _returnValueE1NqNU9 = [_arrayValuezA52WXS, _arrayValueFt14pp, _arrayValuehOKaDQ]
		const _getAllVerticesZ3yS3j0 = () => { return _returnValueE1NqNU9 };
		const _arrayValuetpkQwD = {
		
	}
		const _returnValuevi9z63d = [_arrayValuetpkQwD]
		const _findEdgeTVRa1w3 = () => { return _returnValuevi9z63d };
		const _graphkIqcZ6b = {
			"getAllVertices": _getAllVerticesZ3yS3j0,
		"findEdge": _findEdgeTVRa1w3
	}
		const _returnValueZDmEceT = await floydWarshall(_graphkIqcZ6b)
	});
})