export {}
import breadthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('breadthFirstSearch', () => {
	it('test for breadthFirstSearch', async () => {
		const _graphXTOZtWw = "dmGddjhyp985Yi9GUnDE9sh663lpwYSDSoIwnfePOpJiJqUp3ZUBU3NljlEUeYVb2n584u2wzXSdq6gKv";
		const _startVertexFFevvi6 = undefined;
		const _originalCallbacks55G2ig = false;
		const _returnValueSPsm2F = await breadthFirstSearch(_graphXTOZtWw, _startVertexFFevvi6, _originalCallbacks55G2ig)
	});

	it('test for breadthFirstSearch', async () => {
		const _returnValue6vq88t = null;
		const _getNeighborsWGBBsif = () => { return _returnValue6vq88t };
		const _graphVXOhtDK = {
			"getNeighbors": _getNeighborsWGBBsif
	}
		const _startVertexoR558Oi = null;
		const _returnValueYochQMm = 5.862830793590419;
		const _originalCallbacksmpHl57G = () => { return _returnValueYochQMm };
		const _returnValueDryLAHs = await breadthFirstSearch(_graphVXOhtDK, _startVertexoR558Oi, _originalCallbacksmpHl57G)
	});

	it('test for breadthFirstSearch', async () => {
		const _arrayValueiJcy1L = undefined;
		const _arrayValueL2okLI8 = "Nz10hbhfIBAvwKmb6khzSd4RH3gYSAkuxoDzElA6A4xnk1HjzFIuCEGXEecPQnFlXfBAdWfPlzLNyqpP";
		const _returnValueEna28gY = [_arrayValueiJcy1L, _arrayValueL2okLI8]
		const _getNeighborssxTX1Uq = () => { return _returnValueEna28gY };
		const _graphZ4rwMMZ = {
			"getNeighbors": _getNeighborssxTX1Uq
	}
		const _startVertexTVGnomi = false;
		const _returnValuePx08nD1 = "KjCqVwA7k9Jt29UkEPrxENGaGCWFpmtWitrA50ql1B";
		const _originalCallbacksoeXPh39 = () => { return _returnValuePx08nD1 };
		const _returnValueXC5xWw0 = await breadthFirstSearch(_graphZ4rwMMZ, _startVertexTVGnomi, _originalCallbacksoeXPh39)
	});

	it('test for breadthFirstSearch', async () => {
		const _returnValueVU7jgL = []
		const _getNeighborsdN4zqXn = () => { return _returnValueVU7jgL };
		const _graphKNZlWcH = {
			"getNeighbors": _getNeighborsdN4zqXn
	}
		const _startVertexAYzobBN = false;
		const _originalCallbacksDO6KQY7 = []
		const _returnValueyyIz7mm = await breadthFirstSearch(_graphKNZlWcH, _startVertexAYzobBN, _originalCallbacksDO6KQY7)
	});
})