export {}
import dijkstra from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/dijkstra/dijkstra.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('dijkstra', () => {
	it('test for dijkstra', async () => {
		const _returnValueXJp1Kxo = true;
		const _getAllVerticesKc2lHqR = () => { return _returnValueXJp1Kxo };
		const _arrayValueKKhPD3y = undefined;
		const _arrayValueNMn3HCR = [_arrayValueKKhPD3y]
		const _arrayValuedAFw4j = "sqDKWeiwfpHs0Ht4B9vdancoOSiV988vVDeLf0rSlzFxDW1G5YagLcxjDySnDOuTN";
		const _returnValueGtrxeud = [_arrayValueNMn3HCR, _arrayValuedAFw4j]
		const _findEdgegV7zI1j = () => { return _returnValueGtrxeud };
		const _graphux3ZMub = {
			"getAllVertices": _getAllVerticesKc2lHqR,
		"findEdge": _findEdgegV7zI1j
	}
		const _returnValuesqbrOHd = false;
		const _getKeyaQVFXaC = () => { return _returnValuesqbrOHd };
		const _startVertexgjhQcpj = {
			"getKey": _getKeyaQVFXaC
	}
		const _returnValuexUtDP02 = await dijkstra(_graphux3ZMub, _startVertexgjhQcpj)
	});

	it('test for dijkstra', async () => {
		const _returnValuevYVIiO5 = []
		const _getAllVerticeskfvX7QO = () => { return _returnValuevYVIiO5 };
		const _returnValuehx4h6YG = -4.784880578681675;
		const _findEdgejRkoLRt = () => { return _returnValuehx4h6YG };
		const _graphFkdoPtJ = {
			"getAllVertices": _getAllVerticeskfvX7QO,
		"findEdge": _findEdgejRkoLRt
	}
		const _returnValuesBWajgn = null;
		const _getKeyJQLNa9e = () => { return _returnValuesBWajgn };
		const _startVertexutTAKF9 = {
			"getKey": _getKeyJQLNa9e
	}
		const _returnValueRJU7M2j = await dijkstra(_graphFkdoPtJ, _startVertexutTAKF9)
	});
})