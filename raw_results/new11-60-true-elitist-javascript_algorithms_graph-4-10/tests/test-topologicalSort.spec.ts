export {}
import topologicalSort from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/topological-sorting/topologicalSort.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('topologicalSort', () => {
	it('test for topologicalSort', async () => {
		const _arrayValue1afeKl = "u3zMC63PFbrMy";
		const _arrayValueoinTOaJ = "Bm7QrD8t9q9fMbGLdtdpRh7vahrdMCcV12q";
		const _arrayValuekumFphk = [_arrayValue1afeKl, _arrayValueoinTOaJ]
		const _arrayValuerCx8cP9 = -5.094279360826209;
		const _returnValueepPf4Y0 = [_arrayValuekumFphk, _arrayValuerCx8cP9]
		const _getAllVerticesKJ8DHR = () => { return _returnValueepPf4Y0 };
		const _graphpfT8FwJ = {
			"getAllVertices": _getAllVerticesKJ8DHR
	}
		const _returnValueyiy2nTy = await topologicalSort(_graphpfT8FwJ)
	});
})