export {}
import bellmanFord from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('bellmanFord', () => {
	it('test for bellmanFord', async () => {
		const _returnValuemeEc2AW = null;
		const _getAllVerticesfiZPLME = () => { return _returnValuemeEc2AW };
		const _arrayValueNWEovrH = true;
		const _returnValuezM9ChU6 = [_arrayValueNWEovrH]
		const _getVertexByKeyIf9KrUo = () => { return _returnValuezM9ChU6 };
		const _returnValueQu0bQZx = 3.4006741220646024;
		const _getNeighborsP4VSeKH = () => { return _returnValueQu0bQZx };
		const _returnValueufwQaMc = null;
		const _returnValueoLqCQU0 = () => { return _returnValueufwQaMc };
		const _findEdgequPsozr = () => { return _returnValueoLqCQU0 };
		const _graphXQt1Zjt = {
			"getAllVertices": _getAllVerticesfiZPLME,
		"getVertexByKey": _getVertexByKeyIf9KrUo,
		"getNeighbors": _getNeighborsP4VSeKH,
		"findEdge": _findEdgequPsozr
	}
		const _returnValuetbJCyI = "PQB3UeMoLo4zlKVNx9EKBt9EfwsDBx9a5FgsPknwYfYoQcIGtHt";
		const _getKeyKSrqTAm = () => { return _returnValuetbJCyI };
		const _startVertexJXVGaFf = {
			"getKey": _getKeyKSrqTAm
	}
		const _returnValueASujTm0 = await bellmanFord(_graphXQt1Zjt, _startVertexJXVGaFf)
	});

	it('test for bellmanFord', async () => {
		const _returnValueUnJxzqi = []
		const _getAllVerticesUD3R8A1 = () => { return _returnValueUnJxzqi };
		const _returnValueL4C956X = {
		
	}
		const _getVertexByKeyjxea2Mj = () => { return _returnValueL4C956X };
		const _returnValuedDIkL9k = "4rQk8b4PFMZNbqCYTLjHWozyCv0O7YdSeiG5IYUkV0wgHJL1WUdmzMzfzLh5bvbvKy97oPYWLG3eEShQouAmmaBc8yWofF";
		const _getNeighborsIsaeOX = () => { return _returnValuedDIkL9k };
		const _returnValuevBGoEme = {
		
	}
		const _findEdgeKoStDih = () => { return _returnValuevBGoEme };
		const _graphj0hbfDL = {
			"getAllVertices": _getAllVerticesUD3R8A1,
		"getVertexByKey": _getVertexByKeyjxea2Mj,
		"getNeighbors": _getNeighborsIsaeOX,
		"findEdge": _findEdgeKoStDih
	}
		const _arrayValueUZtiHIa = {
		
	}
		const _returnValuep8udXW = [_arrayValueUZtiHIa]
		const _getKeycAeJwAI = () => { return _returnValuep8udXW };
		const _startVertexyICLWVy = {
			"getKey": _getKeycAeJwAI
	}
		const _returnValuecbSGCpt = await bellmanFord(_graphj0hbfDL, _startVertexyICLWVy)
	});
})