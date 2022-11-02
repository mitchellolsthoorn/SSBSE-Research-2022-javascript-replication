export {}
import breadthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('breadthFirstSearch', () => {
	it('test for breadthFirstSearch', async () => {
		const _arrayValueZxo9xjm = "yrqebfhDFMeRoB1KcR00Qp7jnnlwEbWkB3TkryAon5e25fk8GwhiG8o8MIkc";
		const _returnValuen5VBJnB = null;
		const _arrayValuexDMkD9 = () => { return _returnValuen5VBJnB };
		const _arrayValueLsLrF3u = "kPkHwMjGPMgHA5ZVeyeMBOCIyDOzmsaU4i4qOqMBityID4KqHiOcaOR8GW9ZQ3PADFjvIZuD5ATmqFXHr";
		const _arrayValuexwDAYLT = "eTdbncYlVP5BmrrRcle3tTUfVMHZ9hNtqcR1vhGr7jliRHkKwlGKDLEvIlcHSDHRduXABRM79pdtUY1pn7B6YCkaHj";
		const _arrayValueDRQw7N = [_arrayValueLsLrF3u, _arrayValuexwDAYLT]
		const _returnValuesX0roM9 = [_arrayValueZxo9xjm, _arrayValuexDMkD9, _arrayValueDRQw7N]
		const _getNeighborsWC3GEkB = () => { return _returnValuesX0roM9 };
		const _graphCoYSSuf = {
			"getNeighbors": _getNeighborsWC3GEkB
	}
		const _startVertexT3Xmt08 = -7.4051392444505755;
		const _originalCallbacksmx9WlZK = undefined;
		const _returnValueHDxzduu = await breadthFirstSearch(_graphCoYSSuf, _startVertexT3Xmt08, _originalCallbacksmx9WlZK)
	});

	it('test for breadthFirstSearch', async () => {
		const _returnValueiOImBZl = []
		const _getNeighborsoKQPCfP = () => { return _returnValueiOImBZl };
		const _graphAlUaB36 = {
			"getNeighbors": _getNeighborsoKQPCfP
	}
		const _startVertexqhKRzEU = false;
		const _arrayValuejPFYlvF = []
		const _arrayValueIzODcz9 = -4.46524423777684;
		const _originalCallbacksHPe3fNI = [_arrayValuejPFYlvF, _arrayValueIzODcz9]
		const _returnValueiwudzo8 = await breadthFirstSearch(_graphAlUaB36, _startVertexqhKRzEU, _originalCallbacksHPe3fNI)
	});
})