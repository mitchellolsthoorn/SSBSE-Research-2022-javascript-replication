export {}
import breadthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('breadthFirstSearch', () => {
	it('test for breadthFirstSearch', async () => {
		const _returnValuehUMLRkN = -0.05443986086793018;
		const _graphfFDidiq = () => { return _returnValuehUMLRkN };
		const _returnValueqNDmRl7 = "FhjfRh7WPmBwyejnpH9Ck4vH4GIRZzEEhN01vS37MklVcWxckYCOuU7PunIoMKR01WHn1D";
		const _startVertexVRkCDMH = () => { return _returnValueqNDmRl7 };
		const _originalCallbacksxpRiPcJ = undefined;
		const _returnValueLRPQ3n1 = await breadthFirstSearch(_graphfFDidiq, _startVertexVRkCDMH, _originalCallbacksxpRiPcJ)
	});

	it('test for breadthFirstSearch', async () => {
		const _valuepFWph3h = "nBxC5xx9qr5HGjQ7b7AktNxX4OouspqCsaqLOrdbcLenf38sC3fBeaPLChAx2kp";
		const _graphcDr27Eg = new GraphVertex(_valuepFWph3h)
		const _callbackUjiT4aP = false;
		const _returnValueHDQu9qk = await _graphcDr27Eg.toString(_callbackUjiT4aP)
		const _startVertex0oSoev = null;
		const _originalCallbacksWcXjBQS = undefined;
		const _returnValueKW6xJT4 = await breadthFirstSearch(_graphcDr27Eg, _startVertex0oSoev, _originalCallbacksWcXjBQS)
	});

	it('test for breadthFirstSearch', async () => {
		const _arrayValueaopTxn = undefined;
		const _returnValueEhwCZBO = [_arrayValueaopTxn]
		const _getNeighborsCVRiQhT = () => { return _returnValueEhwCZBO };
		const _graphGfYHAfQ = {
			"getNeighbors": _getNeighborsCVRiQhT
	}
		const _returnValueSyKkTt3 = false;
		const _startVertexnS1d2xn = () => { return _returnValueSyKkTt3 };
		const _returnValueKAmmmm3 = -5.291689304755092;
		const _originalCallbacksh8ZBAXl = () => { return _returnValueKAmmmm3 };
		const _returnValueNSece6L = await breadthFirstSearch(_graphGfYHAfQ, _startVertexnS1d2xn, _originalCallbacksh8ZBAXl)
	});
})