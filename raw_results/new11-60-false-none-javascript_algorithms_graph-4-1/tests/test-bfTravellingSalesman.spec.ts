export {}
import bfTravellingSalesman from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/travelling-salesman/bfTravellingSalesman.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('bfTravellingSalesman', () => {
	it('test for bfTravellingSalesman', async () => {
		const _arrayValuenvRba4k = undefined;
		const _arrayValueIg65UtR = "j8LGoMFMyLG4YAwm0hB1riWgcE3ahyIcrBolHtxQiNttEabBNbvsXGokSv0HFmOHBhD2bLi4PpuPusP3H";
		const _arrayValuehaDXdX4 = "a7sLL8petpYcLe1LiFrC7uIzeQaGtgzfnBcHKJDeQdCRksg7qDFEtqek7rz68sEuQzxQ3Xt5qA";
		const _graphTMWnZC7 = [_arrayValuenvRba4k, _arrayValueIg65UtR, _arrayValuehaDXdX4]
		const _returnValuesY76dcN = await bfTravellingSalesman(_graphTMWnZC7)
	});
})