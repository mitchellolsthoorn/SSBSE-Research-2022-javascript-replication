export {}
import detectUndirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectUndirectedCycle', () => {
	it('test for detectUndirectedCycle', async () => {
		const _returnValueMx8dWur = null;
		const _returnValueFIJctH = () => { return _returnValueMx8dWur };
		const _arrayValueKhloxhJ = () => { return _returnValueFIJctH };
		const _arrayValueghxyLAH = "3MCDYwIi8MrwzvtvqLElAv6qJIhW3O6TpOnzwPhDkCni";
		const _graphe6XzEfn = [_arrayValueKhloxhJ, _arrayValueghxyLAH]
		const _returnValuerLHoRCp = await detectUndirectedCycle(_graphe6XzEfn)
	});
})