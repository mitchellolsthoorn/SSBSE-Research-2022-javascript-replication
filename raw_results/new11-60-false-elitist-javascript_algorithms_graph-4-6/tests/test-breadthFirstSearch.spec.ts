export {}
import breadthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('breadthFirstSearch', () => {
	it('test for breadthFirstSearch', async () => {
		const _arrayValueQraa01W = undefined;
		const _returnValueqbflqXl = [_arrayValueQraa01W]
		const _returnValuenjVkk3h = () => { return _returnValueqbflqXl };
		const _getNeighborsFqc5qCo = () => { return _returnValuenjVkk3h };
		const _graphRP9ipOk = {
			"getNeighbors": _getNeighborsFqc5qCo
	}
		const _startVertexqrKvmK8 = "Do0";
		const _originalCallbacksTUXpFYG = "ezeyYGHY3q3lAMUbbqPR6x3IPcyVVv";
		const _returnValueW9T68x = await breadthFirstSearch(_graphRP9ipOk, _startVertexqrKvmK8, _originalCallbacksTUXpFYG)
	});

	it('test for breadthFirstSearch', async () => {
		const _arrayValueK7Kt0mG = undefined;
		const _returnValueRXwcnMA = [_arrayValueK7Kt0mG]
		const _getNeighborsPQFWj0K = () => { return _returnValueRXwcnMA };
		const _graphPqlT4hv = {
			"getNeighbors": _getNeighborsPQFWj0K
	}
		const _startVertexc5xkuIR = "lXbrR0r606cJw";
		const _originalCallbackseA9hQ45 = undefined;
		const _returnValueznNMeu0 = await breadthFirstSearch(_graphPqlT4hv, _startVertexc5xkuIR, _originalCallbackseA9hQ45)
	});

	it('test for breadthFirstSearch', async () => {
		const _returnValuee3DwSdg = []
		const _getNeighborsYeAkhHd = () => { return _returnValuee3DwSdg };
		const _graphUzLCuQh = {
			"getNeighbors": _getNeighborsYeAkhHd
	}
		const _startVertexom91ARf = false;
		const _originalCallbackscjF5xCf = undefined;
		const _returnValueDE0z7a = await breadthFirstSearch(_graphUzLCuQh, _startVertexom91ARf, _originalCallbackscjF5xCf)
	});
})