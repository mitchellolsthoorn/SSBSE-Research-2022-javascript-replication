export {}
import hamiltonianCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/hamiltonian-cycle/hamiltonianCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hamiltonianCycle', () => {
	it('test for hamiltonianCycle', async () => {
		const _getVerticesIndicesbhnHTM5 = "he4hiCmTafQS3";
		const _returnValueedT8gvS = undefined;
		const _returnValueuj0wBl = () => { return _returnValueedT8gvS };
		const _getAdjacencyMatrixTtTPytW = () => { return _returnValueuj0wBl };
		const _arrayValuea1Nxrw5 = null;
		const _arrayValueW45m4lS = -5.425839331033206;
		const _returnValueHbD92xT = [_arrayValuea1Nxrw5, _arrayValueW45m4lS]
		const _getAllVerticesr4kRtm0 = () => { return _returnValueHbD92xT };
		const _graphatagLNw = {
			"getVerticesIndices": _getVerticesIndicesbhnHTM5,
		"getAdjacencyMatrix": _getAdjacencyMatrixTtTPytW,
		"getAllVertices": _getAllVerticesr4kRtm0
	}
		const _returnValuePpipprW = await hamiltonianCycle(_graphatagLNw)
	});

	it('test for hamiltonianCycle', async () => {
		const _returnValuegl8x8Qu = -9.881618039754663;
		const _getVerticesIndicesvOBn0m4 = () => { return _returnValuegl8x8Qu };
		const _returnValuegENFXJe = "zTEXzgG3TfAxViH7JmvabKGQAh4mfDVvrnJaIuua3TGLcfp1clA4nAMnJ6dXm6n7hneewq7b4bSOYFasBQ3yndeWgtCSG";
		const _getAdjacencyMatrixAKoSpqu = () => { return _returnValuegENFXJe };
		const _returnValueUC7Mr24 = {
		
	}
		const _getAllVerticesL7ANjsm = () => { return _returnValueUC7Mr24 };
		const _graphPWO5kCW = {
			"getVerticesIndices": _getVerticesIndicesvOBn0m4,
		"getAdjacencyMatrix": _getAdjacencyMatrixAKoSpqu,
		"getAllVertices": _getAllVerticesL7ANjsm
	}
		const _returnValuebPavixz = await hamiltonianCycle(_graphPWO5kCW)
	});
})