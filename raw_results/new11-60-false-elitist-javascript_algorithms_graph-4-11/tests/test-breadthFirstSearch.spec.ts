export {}
import breadthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('breadthFirstSearch', () => {
	it('test for breadthFirstSearch', async () => {
		const _returnValueWCJmpFD = null;
		const _getNeighborsqpQlRUc = () => { return _returnValueWCJmpFD };
		const _graphnpjv24 = {
			"getNeighbors": _getNeighborsqpQlRUc
	}
		const _startVertexVG6PiPt = false;
		const _originalCallbackslmXcb3r = true;
		const _returnValueA3IS7rK = await breadthFirstSearch(_graphnpjv24, _startVertexVG6PiPt, _originalCallbackslmXcb3r)
	});

	it('test for breadthFirstSearch', async () => {
		const _returnValuePMxtnQc = {
		
	}
		const _getNeighborsVDk4tus = () => { return _returnValuePMxtnQc };
		const _graphb2EnlDg = {
			"getNeighbors": _getNeighborsVDk4tus
	}
		const _arrayValueDzrSVs = null;
		const _startVertexX1a5Vpq = [_arrayValueDzrSVs]
		const _originalCallbacksyUdSXrv = undefined;
		const _returnValuem9194xO = await breadthFirstSearch(_graphb2EnlDg, _startVertexX1a5Vpq, _originalCallbacksyUdSXrv)
	});

	it('test for breadthFirstSearch', async () => {
		const _arrayValueX15gk5 = null;
		const _returnValueqWTqrLK = [_arrayValueX15gk5]
		const _getNeighborsh2TtYfq = () => { return _returnValueqWTqrLK };
		const _graphZ97zBR9 = {
			"getNeighbors": _getNeighborsh2TtYfq
	}
		const _startVertexVQ2wk7C = null;
		const _originalCallbacksDVzOeJf = undefined;
		const _returnValuea390YDM = await breadthFirstSearch(_graphZ97zBR9, _startVertexVQ2wk7C, _originalCallbacksDVzOeJf)
	});

	it('test for breadthFirstSearch', async () => {
		const _returnValueHdocRY1 = []
		const _getNeighborsgF9EDs = () => { return _returnValueHdocRY1 };
		const _graphivZYISQ = {
			"getNeighbors": _getNeighborsgF9EDs
	}
		const _arrayValueD25BeFk = null;
		const _arrayValueBvyaygb = []
		const _arrayValuelsTqir1 = 5.573751599830407;
		const _arrayValueQMFfgg6 = [_arrayValueD25BeFk, _arrayValueBvyaygb, _arrayValuelsTqir1]
		const _arrayValuek8Bd8t8 = -6.115339024844145;
		const _arrayValueMFmL3OV = false;
		const _startVertexnFm4N4j = [_arrayValueQMFfgg6, _arrayValuek8Bd8t8, _arrayValueMFmL3OV]
		const _originalCallbacksFsezwv = undefined;
		const _returnValueYzcJMCV = await breadthFirstSearch(_graphivZYISQ, _startVertexnFm4N4j, _originalCallbacksFsezwv)
	});
})