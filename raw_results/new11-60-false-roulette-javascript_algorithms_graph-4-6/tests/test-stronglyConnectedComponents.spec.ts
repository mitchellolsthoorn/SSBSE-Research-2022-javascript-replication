export {}
import LinkedList from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/linked-list/LinkedList.js";
import stronglyConnectedComponents from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/strongly-connected-components/stronglyConnectedComponents.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('stronglyConnectedComponents', () => {
	it('test for stronglyConnectedComponents', async () => {
		const _arrayValueYO5jX08 = true;
		const _comparatorFunctionGtDMSt = [_arrayValueYO5jX08]
		const _graphnFUJDNL = new LinkedList(_comparatorFunctionGtDMSt)
		const _returnValueTp8zOsj = await _graphnFUJDNL.toArray()
		const _returnValueCTc2mTD = await _graphnFUJDNL.deleteTail()
		const _arrayValueQ9XWhCS = -7.939597725776451;
		const _arrayValueo7T6JMy = null;
		const _callbackF84KaK4 = [_arrayValueQ9XWhCS, _arrayValueo7T6JMy]
		const _returnValueH5Vy9Ow = await _graphnFUJDNL.toString(_callbackF84KaK4)
		const _returnValueMe4cjs0 = await stronglyConnectedComponents(_graphnFUJDNL)
	});

	it('test for stronglyConnectedComponents', async () => {
		const _isDirectedddEbylf = false;
		const _graphBMevUlG = new Graph(_isDirectedddEbylf)
		const _returnValuex0n04sL = await _graphBMevUlG.getWeight()
		const _arrayValue4VA71P = 6.506610568706719;
		const _arrayValuevRkEuB = undefined;
		const _arrayValueTkrPXDo = 4.686143025897302;
		const _returnValueA8Vur4W = [_arrayValuevRkEuB, _arrayValueTkrPXDo]
		const _arrayValuewtY2uxg = () => { return _returnValueA8Vur4W };
		const _vertexKeyJJJN8Wt = [_arrayValue4VA71P, _arrayValuewtY2uxg]
		const _returnValueAMJkCII = await _graphBMevUlG.getVertexByKey(_vertexKeyJJJN8Wt)
		const _returnValuerhaTVd6 = await stronglyConnectedComponents(_graphBMevUlG)
	});
})