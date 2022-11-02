export {}
import floydWarshall from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/floyd-warshall/floydWarshall.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('floydWarshall', () => {
	it('test for floydWarshall', async () => {
		const _graphdHlb587 = "obh9a9slEDR2QF841JMJ4kyDzwLuYbcd1NTBJMXQ4eGrrZmjOoxoHVzWUjGx9LsVsq9hvwiGPe";
		const _returnValuebiUk7Wc = await floydWarshall(_graphdHlb587)
	});
})