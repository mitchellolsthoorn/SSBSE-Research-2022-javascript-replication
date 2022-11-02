export {}
import stronglyConnectedComponents from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/strongly-connected-components/stronglyConnectedComponents.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('stronglyConnectedComponents', () => {
	it('test for stronglyConnectedComponents', async () => {
		const _returnValueUI4VdV = "PMsCWZaFKFReCl1HysQMhtArBYWQnBB4FjzaufgMFCT4H1NhRvYzV50yL3Go5OeifWVzsvItFUJpYVn7kdbWLd";
		const _graphoaM2Jpz = () => { return _returnValueUI4VdV };
		const _returnValueSS2ET8q = await stronglyConnectedComponents(_graphoaM2Jpz)
	});
})