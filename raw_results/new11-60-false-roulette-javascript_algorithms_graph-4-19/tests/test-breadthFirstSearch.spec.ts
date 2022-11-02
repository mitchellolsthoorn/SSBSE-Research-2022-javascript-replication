export {}
import breadthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('breadthFirstSearch', () => {
	it('test for breadthFirstSearch', async () => {
		const _returnValuepzmmPG = true;
		const _graphjQL3j8 = () => { return _returnValuepzmmPG };
		const _startVertexfoafFXc = {
		
	}
		const _arrayValuewVIhpUL = {
		
	}
		const _originalCallbacksdiv6axc = [_arrayValuewVIhpUL]
		const _returnValuewA3mRFz = await breadthFirstSearch(_graphjQL3j8, _startVertexfoafFXc, _originalCallbacksdiv6axc)
	});

	it('test for breadthFirstSearch', async () => {
		const _valueANlEf9T = 6.17257041771142;
		const _graphPg47mqE = new GraphVertex(_valueANlEf9T)
		const _vertexI9zKz6i = "4mqc2ATUxvTfMafefwxGPgXkL9bn7pexMCPKxw0uMHCemg8hc8WeNl2wwNVeYjXVNYw032aMXNFeXkiyXWqfSr7n";
		const _returnValueHIki2WD = await _graphPg47mqE.findEdge(_vertexI9zKz6i)
		const _returnValueTqLnYV = await _graphPg47mqE.getKey()
		const _startVertexKK9cGJ = 6.525127860504082;
		const _arrayValueRSUSseT = "I29pPOOq2U1vzvNXNox1pKpnjLTGTqjI7Y7PAwKIzApL4V8wvhmh7Nf5Qly5YJ1JQRNXFkrgNhQ9EyOf";
		const _originalCallbacksspKCZ5E = [_arrayValueRSUSseT]
		const _returnValuewUkeWk1 = await breadthFirstSearch(_graphPg47mqE, _startVertexKK9cGJ, _originalCallbacksspKCZ5E)
	});

	it('test for breadthFirstSearch', async () => {
		const _arrayValueboKwyvn = false;
		const _arrayValueMqc7zRU = "uPCsQKNglLUUFqfYddVbe2hA8kKxY9";
		const _arrayValuecTA0Y3G = [_arrayValueboKwyvn, _arrayValueMqc7zRU]
		const _arrayValueP0f7qnD = true;
		const _arrayValueWtOwmXb = false;
		const _arrayValuevyKYImg = [_arrayValuecTA0Y3G, _arrayValueP0f7qnD, _arrayValueWtOwmXb]
		const _arrayValueD06kDdX = "qYXKeh5Ulq4Uz33ImtQK5XZH3DD6F2I18fYFV2mf9wuQLY08bx5";
		const _returnValuentRmhEz = [_arrayValuevyKYImg, _arrayValueD06kDdX]
		const _getNeighborshoHudpp = () => { return _returnValuentRmhEz };
		const _graphMBTksAI = {
			"getNeighbors": _getNeighborshoHudpp
	}
		const _startVertexIcbcWQ = undefined;
		const _originalCallbacksqBOT7h1 = undefined;
		const _returnValueUPL93vP = await breadthFirstSearch(_graphMBTksAI, _startVertexIcbcWQ, _originalCallbacksqBOT7h1)
	});
})