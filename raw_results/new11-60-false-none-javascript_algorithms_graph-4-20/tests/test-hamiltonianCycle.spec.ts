export {}
import hamiltonianCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/hamiltonian-cycle/hamiltonianCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hamiltonianCycle', () => {
	it('test for hamiltonianCycle', async () => {
		const _returnValueHclqSo4 = -8.65701957519427;
		const _returnValueFcTLFUv = () => { return _returnValueHclqSo4 };
		const _arrayValuerrkdwJO = () => { return _returnValueFcTLFUv };
		const _arrayValueAjsZlMW = undefined;
		const _arrayValueOkOyHnx = -4.269488461032829;
		const _arrayValueTUTdreP = [_arrayValueAjsZlMW, _arrayValueOkOyHnx]
		const _graph9gcYmM = [_arrayValuerrkdwJO, _arrayValueTUTdreP]
		const _returnValueHWoFVe = await hamiltonianCycle(_graph9gcYmM)
	});
})