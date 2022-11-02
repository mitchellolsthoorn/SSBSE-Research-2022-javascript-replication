export {}
import hamiltonianCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/hamiltonian-cycle/hamiltonianCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hamiltonianCycle', () => {
	it('test for hamiltonianCycle', async () => {
		const _returnValueJjsIlYB = undefined;
		const _getVerticesIndiceskH8LFR = () => { return _returnValueJjsIlYB };
		const _returnValueVbjAkEy = null;
		const _getAdjacencyMatrixUpRSLSY = () => { return _returnValueVbjAkEy };
		const _returnValuefFsvVm = null;
		const _getAllVerticesGAyattj = () => { return _returnValuefFsvVm };
		const _graphY4b6rJo = {
			"getVerticesIndices": _getVerticesIndiceskH8LFR,
		"getAdjacencyMatrix": _getAdjacencyMatrixUpRSLSY,
		"getAllVertices": _getAllVerticesGAyattj
	}
		const _returnValuefjkfEz = await hamiltonianCycle(_graphY4b6rJo)
	});

	it('test for hamiltonianCycle', async () => {
		const _arrayValueRJah2om = undefined;
		const _arrayValuevKMhAXd = "w";
		const _arrayValuefYwRR1p = false;
		const _returnValuetKgP0a = [_arrayValueRJah2om, _arrayValuevKMhAXd, _arrayValuefYwRR1p]
		const _getVerticesIndicesg5jkMZA = () => { return _returnValuetKgP0a };
		const _returnValuexOoxEVN = -8.696688000643773;
		const _getAdjacencyMatrixtjeY6zJ = () => { return _returnValuexOoxEVN };
		const _returnValueqWe9oPI = {
		
	}
		const _getAllVerticesnamHPMW = () => { return _returnValueqWe9oPI };
		const _graphQNChNH6 = {
			"getVerticesIndices": _getVerticesIndicesg5jkMZA,
		"getAdjacencyMatrix": _getAdjacencyMatrixtjeY6zJ,
		"getAllVertices": _getAllVerticesnamHPMW
	}
		const _returnValueb2A80jN = await hamiltonianCycle(_graphQNChNH6)
	});
})