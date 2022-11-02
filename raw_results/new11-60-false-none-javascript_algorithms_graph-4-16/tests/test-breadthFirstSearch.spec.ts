export {}
import breadthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('breadthFirstSearch', () => {
	it('test for breadthFirstSearch', async () => {
		const _graphKpglAu = "uLf6gjoOjC6gjm4fqtFUdVMFNMthTH4Wm";
		const _arrayValueqNokwX = undefined;
		const _startVertexVUpLoj = [_arrayValueqNokwX]
		const _originalCallbacksECeCeCd = {
		
	}
		const _returnValuef6u1MNP = await breadthFirstSearch(_graphKpglAu, _startVertexVUpLoj, _originalCallbacksECeCeCd)
	});
})