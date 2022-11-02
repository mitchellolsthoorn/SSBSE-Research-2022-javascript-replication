export {}
import breadthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('breadthFirstSearch', () => {
	it('test for breadthFirstSearch', async () => {
		const _arrayValuedJ42JB2 = null;
		const _graphP4ClFjh = [_arrayValuedJ42JB2]
		const _startVertexk733XCn = false;
		const _arrayValuehP4Usbp = "EyMcpAHdBBobjMnvNJfWWQLLrpAVqY0Tz";
		const _arrayValueSDphdHU = null;
		const _originalCallbacksjlrjELj = [_arrayValuehP4Usbp, _arrayValueSDphdHU]
		const _returnValuecJXG1a7 = await breadthFirstSearch(_graphP4ClFjh, _startVertexk733XCn, _originalCallbacksjlrjELj)
	});

	it('test for breadthFirstSearch', async () => {
		const _arrayValueKqK3GuB = null;
		const _arrayValuetzPV1V7 = null;
		const _returnValueWUVpWPr = undefined;
		const _arrayValuetq9RW2X = () => { return _returnValueWUVpWPr };
		const _arrayValuevW5Dwg = undefined;
		const _arrayValueZQWsRnP = [_arrayValuetq9RW2X, _arrayValuevW5Dwg]
		const _returnValuexLKES0w = [_arrayValueKqK3GuB, _arrayValuetzPV1V7, _arrayValueZQWsRnP]
		const _getNeighborskWubwx1 = () => { return _returnValuexLKES0w };
		const _graphZ61zca7 = {
			"getNeighbors": _getNeighborskWubwx1
	}
		const _startVertexVEfoveD = 1.0174689357787496;
		const _arrayValueNiec2II = 6.066579804803606;
		const _arrayValueL7klgQ9 = {
		
	}
		const _originalCallbackstI23IUP = [_arrayValueNiec2II, _arrayValueL7klgQ9]
		const _returnValueK9wjmbZ = await breadthFirstSearch(_graphZ61zca7, _startVertexVEfoveD, _originalCallbackstI23IUP)
	});

	it('test for breadthFirstSearch', async () => {
		const _valuekB9goBQ = true;
		const _graphpnWCKKM = new GraphVertex(_valuekB9goBQ)
		const _returnValueAoNvtjX = await _graphpnWCKKM.getDegree()
		const _returnValueMT4TcYr = await _graphpnWCKKM.deleteAllEdges()
		const _vertexu4F2C7d = null;
		const _returnValueBEzPY7a = await _graphpnWCKKM.hasNeighbor(_vertexu4F2C7d)
		const _returnValueIhecbpX = await _graphpnWCKKM.getEdges()
		const _startVertexGmG9ivr = null;
		const _originalCallbacksX5nR1TE = []
		const _returnValueC87LiY7 = await breadthFirstSearch(_graphpnWCKKM, _startVertexGmG9ivr, _originalCallbacksX5nR1TE)
	});
})