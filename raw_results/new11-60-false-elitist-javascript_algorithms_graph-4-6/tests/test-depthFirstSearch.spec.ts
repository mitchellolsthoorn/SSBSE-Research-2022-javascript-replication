export {}
import depthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/depth-first-search/depthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('depthFirstSearch', () => {
	it('test for depthFirstSearch', async () => {
		const _graphNfUrek = "9BB86SSHpnWczLwt5WDKc82mbxt2vNMHt4k7LQXOLzPgY7l7dZ53xLJzsA80OTf2618uJjPPq4ut4srjBSIp0m3A98";
		const _returnValueA2DG0Y = "4oug6TGlJq9yACfBGxnNfthzVKESUchVe5HjclmCiMk7rL8mIaDn82W4bZgq3dmtoxUPvWcMzOGy3fJtwknesyOkei8BQvx";
		const _returnValueeDS8Yu = () => { return _returnValueA2DG0Y };
		const _startVertexttiJsmP = () => { return _returnValueeDS8Yu };
		const _arrayValuezxCrY2O = 6.269936745318898;
		const _callbacksiWD3YSL = [_arrayValuezxCrY2O]
		const _returnValueMQrXcHr = await depthFirstSearch(_graphNfUrek, _startVertexttiJsmP, _callbacksiWD3YSL)
	});
})