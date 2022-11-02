export {}
import depthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/depth-first-search/depthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('depthFirstSearch', () => {
	it('test for depthFirstSearch', async () => {
		const _arrayValueN1Jc6cc = "keksoguKoUHCCdPRXtYhXslWnyLJWoMoeqynmuGz3yEcvTaSuPD4cQ";
		const _graphfyGOzqm = [_arrayValueN1Jc6cc]
		const _startVertexdFut5ZG = -9.286116357731247;
		const _arrayValuevCnfvWP = false;
		const _arrayValueqlJpOrH = undefined;
		const _arrayValuegox0RPq = null;
		const _arrayValueM1bEvqK = "qwIC2JUZiSSD7xP8BRxoV9vXMNdD9";
		const _callbacksqsmFvya = [_arrayValuevCnfvWP, _arrayValueqlJpOrH, _arrayValuegox0RPq, _arrayValueM1bEvqK]
		const _returnValueFLPXCLc = await depthFirstSearch(_graphfyGOzqm, _startVertexdFut5ZG, _callbacksqsmFvya)
	});
})