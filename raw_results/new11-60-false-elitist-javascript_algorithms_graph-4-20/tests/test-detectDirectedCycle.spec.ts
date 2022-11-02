export {}
import detectDirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectDirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectDirectedCycle', () => {
	it('test for detectDirectedCycle', async () => {
		const _returnValuem6pqcEW = null;
		const _getAllVerticesI2AeGca = () => { return _returnValuem6pqcEW };
		const _graphe13uB54 = {
			"getAllVertices": _getAllVerticesI2AeGca
	}
		const _returnValueSFVTZQD = await detectDirectedCycle(_graphe13uB54)
	});

	it('test for detectDirectedCycle', async () => {
		const _returnValueHsgSxh5 = []
		const _getAllVerticesbHoSxa = () => { return _returnValueHsgSxh5 };
		const _graphiQPCozT = {
			"getAllVertices": _getAllVerticesbHoSxa
	}
		const _returnValuetsmNipL = await detectDirectedCycle(_graphiQPCozT)
	});
})