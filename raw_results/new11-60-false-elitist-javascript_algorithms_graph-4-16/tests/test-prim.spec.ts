export {}
import prim from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/prim/prim.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('prim', () => {
	it('test for prim', async () => {
		const _isDirecteddjRYtkA = "IaXBnXegXdlP2ZzKizvkXphewKe0PH7V3MWLTwrMxa6CGaxanjUXirfN1HP8ZajHIIEFTLdqp1";
		const _returnValuei4xrDU6 = null;
		const _getAllVerticesfXBGUXd = () => { return _returnValuei4xrDU6 };
		const _graphXw37ZRh = {
			"isDirected": _isDirecteddjRYtkA,
		"getAllVertices": _getAllVerticesfXBGUXd
	}
		const _returnValue636VkS = await prim(_graphXw37ZRh)
	});
})