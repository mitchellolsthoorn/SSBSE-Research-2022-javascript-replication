export {}
import kruskal from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/kruskal/kruskal.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('kruskal', () => {
	it('test for kruskal', async () => {
		const _graphNZsjVoC = "3g8v8MGIEjAzwe1owDhq5lWh76bu1T0kBImdzd9JoUfDN1wBjRDQ99HM3IpQVFKVWqG1mhiqOdIKXSwbHFaX";
		const _returnValuemDO9Nd = await kruskal(_graphNZsjVoC)
	});

	it('test for kruskal', async () => {
		const _isDirectedt0cZaQz = "HzR8KB4ZmwpKjJ";
		const _returnValueYl3vU7O = undefined;
		const _getAllEdgeswBjYrZZ = () => { return _returnValueYl3vU7O };
		const _returnValueAeRlrCH = undefined;
		const _getAllVerticesVchVn7K = () => { return _returnValueAeRlrCH };
		const _graphKoYZ1k = {
			"isDirected": _isDirectedt0cZaQz,
		"getAllEdges": _getAllEdgeswBjYrZZ,
		"getAllVertices": _getAllVerticesVchVn7K
	}
		const _returnValueZLPn7cg = await kruskal(_graphKoYZ1k)
	});

	it('test for kruskal', async () => {
		const _isDirectedx35zjoI = false;
		const _arrayValueHS1Muy7 = true;
		const _returnValue34u1Ws = [_arrayValueHS1Muy7]
		const _getAllEdgesk44Hfcj = () => { return _returnValue34u1Ws };
		const _returnValueqULsh4B = {
		
	}
		const _getAllVerticesaKTsahV = () => { return _returnValueqULsh4B };
		const _graphBo0undy = {
			"isDirected": _isDirectedx35zjoI,
		"getAllEdges": _getAllEdgesk44Hfcj,
		"getAllVertices": _getAllVerticesaKTsahV
	}
		const _returnValueZa3MKi4 = await kruskal(_graphBo0undy)
	});
})