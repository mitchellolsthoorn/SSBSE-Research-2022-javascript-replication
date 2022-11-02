export {}
import breadthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('breadthFirstSearch', () => {
	it('test for breadthFirstSearch', async () => {
		const _returnValueDqAyY5L = true;
		const _getNeighborsqz4jxEy = () => { return _returnValueDqAyY5L };
		const _graphkyTB5fX = {
			"getNeighbors": _getNeighborsqz4jxEy
	}
		const _startVertexMMbNXG = false;
		const _originalCallbacksPwthMy = {
		
	}
		const _returnValueJ1v2VVO = await breadthFirstSearch(_graphkyTB5fX, _startVertexMMbNXG, _originalCallbacksPwthMy)
	});

	it('test for breadthFirstSearch', async () => {
		const _arrayValueCb4C1CD = null;
		const _returnValueMDaPyC = [_arrayValueCb4C1CD]
		const _getNeighborsPLsff2O = () => { return _returnValueMDaPyC };
		const _graphK2IiNCU = {
			"getNeighbors": _getNeighborsPLsff2O
	}
		const _arrayValueciwQouX = -9.270296390581805;
		const _startVertexHb4OSs9 = [_arrayValueciwQouX]
		const _originalCallbacksKaMcUSh = undefined;
		const _returnValueU1wnJf9 = await breadthFirstSearch(_graphK2IiNCU, _startVertexHb4OSs9, _originalCallbacksKaMcUSh)
	});

	it('test for breadthFirstSearch', async () => {
		const _valuer7jndWG = false;
		const _graphytXzAli = new GraphVertex(_valuer7jndWG)
		const _returnValueE5eTfPr = await _graphytXzAli.getNeighbors()
		const _returnValuelv1upOH = await _graphytXzAli.getKey()
		const _vertexQ3T8dOQ = "nGxq6impDd45NEZbGX4sOmfdjk";
		const _returnValueNhc3hQe = await _graphytXzAli.hasNeighbor(_vertexQ3T8dOQ)
		const _returnValueJC13Wup = "7EpCpjd6Aj37CNagoBnhoCrccdcU7q8c3vce8Aw1tw1Wxes2Gf4ViouUnhdCNe6RouXDdmzdGMhO41zLJProJ3V";
		const _arrayValueDiWCbmi = () => { return _returnValueJC13Wup };
		const _arrayValueAQMil1x = true;
		const _arrayValueZUcy1fJ = 1.3364691398380462;
		const _vertex9xrf8t = [_arrayValueDiWCbmi, _arrayValueAQMil1x, _arrayValueZUcy1fJ]
		const _returnValueFeOx0vI = await _graphytXzAli.hasNeighbor(_vertex9xrf8t)
		const _vertextceOEKp = "mCmil9P23GXb84";
		const _returnValuetmhakg = await _graphytXzAli.hasNeighbor(_vertextceOEKp)
		const _startVertexHFWZXx2 = undefined;
		const _arrayValuerszEYMS = null;
		const _arrayValuepVOHaM = undefined;
		const _arrayValueZKm2ZD = -3.412660685455209;
		const _originalCallbacksy9F4MIi = [_arrayValuerszEYMS, _arrayValuepVOHaM, _arrayValueZKm2ZD]
		const _returnValueY7JmIYi = await breadthFirstSearch(_graphytXzAli, _startVertexHFWZXx2, _originalCallbacksy9F4MIi)
	});
})