export {}
import hamiltonianCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/hamiltonian-cycle/hamiltonianCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hamiltonianCycle', () => {
	it('test for hamiltonianCycle', async () => {
		const _arrayValueBDMwW87 = null;
		const _arrayValueFbRLYRt = {
		
	}
		const _returnValueEjk7wDH = [_arrayValueBDMwW87, _arrayValueFbRLYRt]
		const _getVerticesIndicesqcJsqz = () => { return _returnValueEjk7wDH };
		const _returnValuelsFdHy3 = {
		
	}
		const _getAdjacencyMatrixW5O6sT3 = () => { return _returnValuelsFdHy3 };
		const _returnValueatAr8fI = undefined;
		const _getAllVerticeswKkRcd7 = () => { return _returnValueatAr8fI };
		const _graphZnOLBlF = {
			"getVerticesIndices": _getVerticesIndicesqcJsqz,
		"getAdjacencyMatrix": _getAdjacencyMatrixW5O6sT3,
		"getAllVertices": _getAllVerticeswKkRcd7
	}
		const _returnValueP4dctEY = await hamiltonianCycle(_graphZnOLBlF)
	});

	it('test for hamiltonianCycle', async () => {
		const _returnValueBTQ6gA = null;
		const _getVerticesIndicesbppTDD = () => { return _returnValueBTQ6gA };
		const _returnValueYLViEgC = null;
		const _getAdjacencyMatrixdr6Dz49 = () => { return _returnValueYLViEgC };
		const _returnValuekvNuDAv = true;
		const _getAllVerticesyBREAJ9 = () => { return _returnValuekvNuDAv };
		const _graphFGSVBjL = {
			"getVerticesIndices": _getVerticesIndicesbppTDD,
		"getAdjacencyMatrix": _getAdjacencyMatrixdr6Dz49,
		"getAllVertices": _getAllVerticesyBREAJ9
	}
		const _returnValuek2VKPGg = await hamiltonianCycle(_graphFGSVBjL)
	});
})