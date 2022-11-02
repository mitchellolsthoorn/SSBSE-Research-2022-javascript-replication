export {}
import hamiltonianCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/hamiltonian-cycle/hamiltonianCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hamiltonianCycle', () => {
	it('test for hamiltonianCycle', async () => {
		const _returnValueXTGyip = true;
		const _returnValuee3P0dG7 = () => { return _returnValueXTGyip };
		const _getVerticesIndicesBxI3bo = () => { return _returnValuee3P0dG7 };
		const _arrayValueolASx90 = null;
		const _getAdjacencyMatrixAu1hzaU = [_arrayValueolASx90]
		const _returnValuenJhLSHg = true;
		const _getAllVerticesbeklbMK = () => { return _returnValuenJhLSHg };
		const _graphuK3XmhO = {
			"getVerticesIndices": _getVerticesIndicesBxI3bo,
		"getAdjacencyMatrix": _getAdjacencyMatrixAu1hzaU,
		"getAllVertices": _getAllVerticesbeklbMK
	}
		const _returnValueVw9htjF = await hamiltonianCycle(_graphuK3XmhO)
	});

	it('test for hamiltonianCycle', async () => {
		const _returnValueullxDp1 = -6.3666209534416085;
		const _returnValueHtKaSRA = () => { return _returnValueullxDp1 };
		const _getVerticesIndicesORhaSkc = () => { return _returnValueHtKaSRA };
		const _returnValueHLAMYTY = undefined;
		const _getAdjacencyMatrixEaiU1sU = () => { return _returnValueHLAMYTY };
		const _returnValueaszeUrp = "guxWkiq86BkcgbMMHH3SoVHOjFs1Ly7ZUGy7feUqHLFcDrENN6w";
		const _getAllVerticescXF29We = () => { return _returnValueaszeUrp };
		const _graphESjrePv = {
			"getVerticesIndices": _getVerticesIndicesORhaSkc,
		"getAdjacencyMatrix": _getAdjacencyMatrixEaiU1sU,
		"getAllVertices": _getAllVerticescXF29We
	}
		const _returnValuegxkq9XH = await hamiltonianCycle(_graphESjrePv)
	});
})