export {}
import depthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/depth-first-search/depthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('depthFirstSearch', () => {
	it('test for depthFirstSearch', async () => {
		const _graphC1i6WjD = true;
		const _returnValueDnI03vs = "8p4wGfafUC";
		const _startVertexiQ1Yiac = () => { return _returnValueDnI03vs };
		const _arrayValuefIqOpyJ = false;
		const _arrayValueXIfhElr = "5RT11PQlaaRFu6x7PGO3ieqcqp64gFYhJ37W";
		const _arrayValueuiJ0YjV = "Y2kzRyLlFT9Mgi1yvCay1UkCEwse77dc8mMD1A";
		const _arrayValuedoYxc3g = "Jz9KMvqvqAtKyBCbkCOIvz4OAFpeKRxWZCdEBN";
		const _callbackslAi4hyb = [_arrayValuefIqOpyJ, _arrayValueXIfhElr, _arrayValueuiJ0YjV, _arrayValuedoYxc3g]
		const _returnValueZ4mhha = await depthFirstSearch(_graphC1i6WjD, _startVertexiQ1Yiac, _callbackslAi4hyb)
	});
})