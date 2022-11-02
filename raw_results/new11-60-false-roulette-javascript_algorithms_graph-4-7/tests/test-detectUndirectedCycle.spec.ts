export {}
import detectUndirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectUndirectedCycle', () => {
	it('test for detectUndirectedCycle', async () => {
		const _graphn9ouDZk = "c6AhILnKlPKnpXMbnPJ4p3779BJ8pc2uDNAULlXhR59WCP4VlRSdzMlzykWZA5iPsZBYka3lpGHPynl5enioetE";
		const _returnValuesmmwPGy = await detectUndirectedCycle(_graphn9ouDZk)
	});
})