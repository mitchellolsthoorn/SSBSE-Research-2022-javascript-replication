export {}
import detectUndirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectUndirectedCycle', () => {
	it('test for detectUndirectedCycle', async () => {
		const _returnValuex9c9uMy = false;
		const _getAllVerticess9JyTVI = () => { return _returnValuex9c9uMy };
		const _graphAhBRn30 = {
			"getAllVertices": _getAllVerticess9JyTVI
	}
		const _returnValueNA1QITu = await detectUndirectedCycle(_graphAhBRn30)
	});
})