export {}
import detectUndirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectUndirectedCycle', () => {
	it('test for detectUndirectedCycle', async () => {
		const _returnValuez8nz7E = -1.6196899507801792;
		const _arrayValuectEUA5P = () => { return _returnValuez8nz7E };
		const _arrayValueXEWYyyX = "e";
		const _arrayValueVvpV3MG = null;
		const _arrayValueMaFhDCv = [_arrayValueVvpV3MG]
		const _graphp7lDUuv = [_arrayValuectEUA5P, _arrayValueXEWYyyX, _arrayValueMaFhDCv]
		const _returnValueJ5m9Ak = await detectUndirectedCycle(_graphp7lDUuv)
	});
})