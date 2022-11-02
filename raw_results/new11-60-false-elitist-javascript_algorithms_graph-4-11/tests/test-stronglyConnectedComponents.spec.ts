export {}
import stronglyConnectedComponents from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/strongly-connected-components/stronglyConnectedComponents.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('stronglyConnectedComponents', () => {
	it('test for stronglyConnectedComponents', async () => {
		const _arrayValuewh9HaMX = null;
		const _arrayValuehG1vnEr = true;
		const _returnValueG3WikE = [_arrayValuewh9HaMX, _arrayValuehG1vnEr]
		const _reverseSlAQ2yB = () => { return _returnValueG3WikE };
		const _graphIz9bOiz = {
			"reverse": _reverseSlAQ2yB
	}
		const _returnValueZBsVCZK = await stronglyConnectedComponents(_graphIz9bOiz)
	});
})