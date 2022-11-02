export {}
import detectUndirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectUndirectedCycle', () => {
	it('test for detectUndirectedCycle', async () => {
		const _arrayValuePrFqugo = "NWynoZk6gkeWS6JECoLzZPLtsizKjZ1WCKD2Msodh47rckw6KV7b9dPnjSODRQQ4FiSW94UpsnlDk2AnOE4w1raCH22HC7Q";
		const _arrayValuepNEQYkc = []
		const _arrayValuelLazd4m = [_arrayValuepNEQYkc]
		const _graphSA8nAH = [_arrayValuePrFqugo, _arrayValuelLazd4m]
		const _returnValueOECVIZ = await detectUndirectedCycle(_graphSA8nAH)
	});
})