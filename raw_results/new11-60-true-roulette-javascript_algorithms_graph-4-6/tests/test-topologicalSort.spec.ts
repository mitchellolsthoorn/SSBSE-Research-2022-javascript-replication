export {}
import topologicalSort from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/topological-sorting/topologicalSort.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('topologicalSort', () => {
	it('test for topologicalSort', async () => {
		const _arrayValuePhVDbz = "spi23cDEEhzaGF5Bld5iFYFExzj98vUoJ39KEI04wRTzYrHPJFvDgjMvH1UT3pvNFZvGd3q";
		const _arrayValuew8mD5JW = {
		
	}
		const _arrayValuev1sT4d9 = {
		
	}
		const _arrayValueU47OQF = [_arrayValuew8mD5JW, _arrayValuev1sT4d9]
		const _getAllVerticesVZhfRPd = [_arrayValuePhVDbz, _arrayValueU47OQF]
		const _graphS9gSPLb = {
			"getAllVertices": _getAllVerticesVZhfRPd
	}
		const _returnValuetkPDzFV = await topologicalSort(_graphS9gSPLb)
	});
})