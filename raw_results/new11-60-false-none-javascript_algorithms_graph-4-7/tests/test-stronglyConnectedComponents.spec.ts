export {}
import stronglyConnectedComponents from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/strongly-connected-components/stronglyConnectedComponents.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('stronglyConnectedComponents', () => {
	it('test for stronglyConnectedComponents', async () => {
		const _arrayValueoogB4aa = undefined;
		const _arrayValueqbTQqwP = "bI741CYWpagQRP4LFpT9HYNxrdBXkbQac8euxdFypiiIzg7Na0O";
		const _arrayValueIj41xsO = "m9ByW7z5pdqgOj3AgXXQtR";
		const _graphfmS8ago = [_arrayValueoogB4aa, _arrayValueqbTQqwP, _arrayValueIj41xsO]
		const _returnValueXEpPcUA = await stronglyConnectedComponents(_graphfmS8ago)
	});
})