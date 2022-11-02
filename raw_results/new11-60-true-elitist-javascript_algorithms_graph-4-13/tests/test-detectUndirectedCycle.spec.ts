export {}
import detectUndirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectUndirectedCycle', () => {
	it('test for detectUndirectedCycle', async () => {
		const _returnValueWFV1zhz = true;
		const _getAllVerticesZ1le79y = () => { return _returnValueWFV1zhz };
		const _graphZm46sLh = {
			"getAllVertices": _getAllVerticesZ1le79y
	}
		const _returnValuenpF52uz = await detectUndirectedCycle(_graphZm46sLh)
	});
})