export {}
import topologicalSort from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/topological-sorting/topologicalSort.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('topologicalSort', () => {
	it('test for topologicalSort', async () => {
		const _arrayValuezaIzexD = {
		
	}
		const _arrayValueM4ld6Ib = null;
		const _arrayValueztmDVH6 = "nVitedS1LP3BzVkvbb4w6Tn5UZnYkXnr8PXXQtebYwao3yRVsmUECiJJADW9i1z5S7YDY9qfRWCe84NSlGCWBQGwLNP4Jbp";
		const _arrayValueEghqLsK = -4.766465120283776;
		const _returnValueaDHCNeZ = [_arrayValuezaIzexD, _arrayValueM4ld6Ib, _arrayValueztmDVH6, _arrayValueEghqLsK]
		const _getAllVerticeshRXzqAC = () => { return _returnValueaDHCNeZ };
		const _graphRUtMWdy = {
			"getAllVertices": _getAllVerticeshRXzqAC
	}
		const _returnValueoWVJzm = await topologicalSort(_graphRUtMWdy)
	});
})