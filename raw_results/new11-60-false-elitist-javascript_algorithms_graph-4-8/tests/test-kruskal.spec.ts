export {}
import kruskal from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/kruskal/kruskal.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('kruskal', () => {
	it('test for kruskal', async () => {
		const _isDirectedf1vvKm = -8.57433643714889;
		const _returnValueKhBwG9s = null;
		const _getAllEdgeslcHQadY = () => { return _returnValueKhBwG9s };
		const _arrayValuewkiTIBR = 8.475010053428107;
		const _arrayValuee8vCWch = null;
		const _arrayValuev4euz4K = {
		
	}
		const _arrayValueCAGuX59 = [_arrayValuewkiTIBR, _arrayValuee8vCWch, _arrayValuev4euz4K]
		const _getAllVerticesV5of9u = [_arrayValueCAGuX59]
		const _graphfLtdkfE = {
			"isDirected": _isDirectedf1vvKm,
		"getAllEdges": _getAllEdgeslcHQadY,
		"getAllVertices": _getAllVerticesV5of9u
	}
		const _returnValuefKxjMfi = await kruskal(_graphfLtdkfE)
	});

	it('test for kruskal', async () => {
		const _isDirectedpOPpDzT = null;
		const _arrayValuegfW2jR7 = {
		
	}
		const _arrayValueNXabX4s = "MWR3a5A38M8HH";
		const _arrayValueBwiYu7h = "XWO1ErRFqioUcRNnSh0XqZ1f3a9BTH9p5mk5U6Cz75R0psHT1ovaG5Al5r5BQ2nsEteIi3Vomjp0nPbKbXk4OuaROSg";
		const _returnValuelnM022P = [_arrayValuegfW2jR7, _arrayValueNXabX4s, _arrayValueBwiYu7h]
		const _getAllEdgesKmCLRL = () => { return _returnValuelnM022P };
		const _returnValuex3yCjB0 = 8.546902323116832;
		const _getAllVertices2Bni9e = () => { return _returnValuex3yCjB0 };
		const _graphZhj3ku5 = {
			"isDirected": _isDirectedpOPpDzT,
		"getAllEdges": _getAllEdgesKmCLRL,
		"getAllVertices": _getAllVertices2Bni9e
	}
		const _returnValueLY86ZSW = await kruskal(_graphZhj3ku5)
	});
})