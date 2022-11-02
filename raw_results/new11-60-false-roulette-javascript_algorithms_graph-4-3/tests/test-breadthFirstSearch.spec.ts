export {}
import breadthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('breadthFirstSearch', () => {
	it('test for breadthFirstSearch', async () => {
		const _returnValueNTqdYCF = -2.799646351727758;
		const _getNeighborsXs8yIIt = () => { return _returnValueNTqdYCF };
		const _graphkQaCCPE = {
			"getNeighbors": _getNeighborsXs8yIIt
	}
		const _startVertexWFkTzJV = false;
		const _originalCallbackseikuPxI = undefined;
		const _returnValueVqNUW6Q = await breadthFirstSearch(_graphkQaCCPE, _startVertexWFkTzJV, _originalCallbackseikuPxI)
	});

	it('test for breadthFirstSearch', async () => {
		const _valueAl2JQ8X = false;
		const _graphCUVXewQ = new GraphVertex(_valueAl2JQ8X)
		const _returnValuebfjzBgL = await _graphCUVXewQ.getKey()
		const _returnValueLmaYvVl = await _graphCUVXewQ.getNeighbors()
		const _arrayValuee6Twj5F = {
		
	}
		const _arrayValueVH7NfNX = 6.909151774822831;
		const _arrayValueBg9EMop = [_arrayValueVH7NfNX]
		const _arrayValueRZ9Vi2 = false;
		const _arrayValueF80xKQt = [_arrayValueRZ9Vi2]
		const _edgeukhGwQT = [_arrayValuee6Twj5F, _arrayValueBg9EMop, _arrayValueF80xKQt]
		const _returnValueFi7ohgz = await _graphCUVXewQ.addEdge(_edgeukhGwQT)
		const _arrayValueYvZhhZF = undefined;
		const _arrayValuexLhnsGW = "nH8b5Zingggv8GMlJ9OCKFiGYrplbGiPPwmElYaqsA9cSeeRqv2Afj5FQy4E9rjHpZV9UTTHualn";
		const _arrayValueAK3EG8N = false;
		const _arrayValueZjhyoJ8 = [_arrayValueYvZhhZF, _arrayValuexLhnsGW, _arrayValueAK3EG8N]
		const _arrayValueRfrFUrJ = [_arrayValueZjhyoJ8]
		const _arrayValueMQ4J699 = -5.789022503990479;
		const _arrayValue3a5CQ5 = null;
		const _arrayValueEuPRL3y = 7.21110853984441;
		const _arrayValueV3UC6xQ = undefined;
		const _arrayValueoBT3pY9 = []
		const _arrayValueOxcILb = 7.733971225632182;
		const _returnValueglOK4mj = [_arrayValueEuPRL3y, _arrayValueV3UC6xQ, _arrayValueoBT3pY9, _arrayValueOxcILb]
		const _arrayValueWR1HgFJ = () => { return _returnValueglOK4mj };
		const _startVertexnWuKewa = [_arrayValueRfrFUrJ, _arrayValueMQ4J699, _arrayValue3a5CQ5, _arrayValueWR1HgFJ]
		const _arrayValueeq8um5v = {
		
	}
		const _arrayValuevlf8IJa = "KkeR9JbJSWqLxWR8EZi3ugDnXOAcSRiY2X2aDjXZhm6jlpFpgHYtDEq3oG5BLePTXkmfARk5kgEqvhjEPP2As72NP03Dx";
		const _originalCallbacksofguJiX = [_arrayValueeq8um5v, _arrayValuevlf8IJa]
		const _returnValueDQe1kPj = await breadthFirstSearch(_graphCUVXewQ, _startVertexnWuKewa, _originalCallbacksofguJiX)
	});

	it('test for breadthFirstSearch', async () => {
		const _returnValuewmuJgcT = {
		
	}
		const _arrayValuew1pzcDI = () => { return _returnValuewmuJgcT };
		const _arrayValueUng7ij7 = undefined;
		const _arrayValuecRL2RBy = [_arrayValuew1pzcDI, _arrayValueUng7ij7]
		const _arrayValuewyQ97QE = undefined;
		const _arrayValuem1juMbr = []
		const _arrayValueXPwcyk2 = [_arrayValuecRL2RBy, _arrayValuewyQ97QE, _arrayValuem1juMbr]
		const _arrayValueZQqp15S = false;
		const _arrayValueKT2Mdfv = "srz8Vi3flb37W2QBX4nr3KCyAvFc0KE9Kylzp7hmZ6TSVACTgerQj8OR6Hea8saTTyWo1FUTP1Pa3qDPKOtl0jMzYK";
		const _valueGyvyfTb = [_arrayValueXPwcyk2, _arrayValueZQqp15S, _arrayValueKT2Mdfv]
		const _graphXM7Az9a = new GraphVertex(_valueGyvyfTb)
		const _returnValueRlG8h4 = await _graphXM7Az9a.getNeighbors()
		const _returnValueOOMmgHe = await _graphXM7Az9a.getNeighbors()
		const _startVertexRoopFZ = false;
		const _arrayValuejm05cGw = "W3tLufmXb9vtizPSFRvInBQOP1Wbf5e2Bd";
		const _arrayValueEIwNI59 = [_arrayValuejm05cGw]
		const _originalCallbacksdzQA8Uo = [_arrayValueEIwNI59]
		const _returnValueJh09oPP = await breadthFirstSearch(_graphXM7Az9a, _startVertexRoopFZ, _originalCallbacksdzQA8Uo)
	});
})