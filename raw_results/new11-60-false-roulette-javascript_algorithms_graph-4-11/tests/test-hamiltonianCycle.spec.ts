export {}
import hamiltonianCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/hamiltonian-cycle/hamiltonianCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('hamiltonianCycle', () => {
	it('test for hamiltonianCycle', async () => {
		const _arrayValuezRJwAKf = true;
		const _returnValuedXN3onZ = [_arrayValuezRJwAKf]
		const _graphIuqq7nB = () => { return _returnValuedXN3onZ };
		const _returnValuefHgItcO = await hamiltonianCycle(_graphIuqq7nB)
	});

	it('test for hamiltonianCycle', async () => {
		const _isDirectedD48z6sO = false;
		const _graph06yHGB = new Graph(_isDirectedD48z6sO)
		const _returnValuesvbSfKE = await _graph06yHGB.getWeight()
		const _returnValueMgCjI0 = await _graph06yHGB.getWeight()
		const _returnValuexdjayEK = await _graph06yHGB.reverse()
		const _returnValueEXLPyzk = await _graph06yHGB.getAllEdges()
		const _returnValueIzKZr1c = await _graph06yHGB.toString()
		const _returnValuev6bcESK = await hamiltonianCycle(_graph06yHGB)
	});
})