export {}
import breadthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('breadthFirstSearch', () => {
	it('test for breadthFirstSearch', async () => {
		const _arrayValuezXLltau = "Lk8cxQTWZGlNeqlHEtORWX6aDnzk";
		const _returnValuevEuivOq = "tENyQZWOf9jzPbitHy6HaCI";
		const _arrayValueDEjZZGt = () => { return _returnValuevEuivOq };
		const _arrayValuessYt2gR = null;
		const _arrayValueOsno2Xb = undefined;
		const _arrayValuedIzfTKh = [_arrayValueDEjZZGt, _arrayValuessYt2gR, _arrayValueOsno2Xb]
		const _arrayValueFLmvwpV = undefined;
		const _arrayValue5Ndr6T = undefined;
		const _graphQ4xwuet = [_arrayValuezXLltau, _arrayValuedIzfTKh, _arrayValueFLmvwpV, _arrayValue5Ndr6T]
		const _startVertexKxlqrKe = null;
		const _originalCallbacksqsLaQaV = true;
		const _returnValuexTj7bv = await breadthFirstSearch(_graphQ4xwuet, _startVertexKxlqrKe, _originalCallbacksqsLaQaV)
	});

	it('test for breadthFirstSearch', async () => {
		const _arrayValueMSgRp6Q = "cjsNHiacNFtkxh3w1zfUP67HFO5Enb";
		const _returnValuezVYK0a = false;
		const _arrayValuePccenvV = () => { return _returnValuezVYK0a };
		const _arrayValuewT1WsGQ = undefined;
		const _arrayValueQt0Wc3B = 2.6448649124260193;
		const _returnValuejZFoCBC = true;
		const _arrayValuexwIbvi = () => { return _returnValuejZFoCBC };
		const _arrayValueUFdgCtQ = [_arrayValuePccenvV, _arrayValuewT1WsGQ, _arrayValueQt0Wc3B, _arrayValuexwIbvi]
		const _graphTfYrf6p = [_arrayValueMSgRp6Q, _arrayValueUFdgCtQ]
		const _startVertexOTqV2Mq = {
		
	}
		const _originalCallbacksR8u3I6E = undefined;
		const _returnValueu279OdV = await breadthFirstSearch(_graphTfYrf6p, _startVertexOTqV2Mq, _originalCallbacksR8u3I6E)
	});
})