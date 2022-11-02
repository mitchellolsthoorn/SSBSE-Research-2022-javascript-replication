export {}
import breadthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('breadthFirstSearch', () => {
	it('test for breadthFirstSearch', async () => {
		const _graphxdnlrRV = "pjlK3yNeXLy9AxMkj9tQOyM4P9QoGoA1uNa4k6ppKWiwXS4snCovT";
		const _startVertexRe7hCAr = undefined;
		const _originalCallbacksN0QW75c = {
		
	}
		const _returnValueXA6aeW = await breadthFirstSearch(_graphxdnlrRV, _startVertexRe7hCAr, _originalCallbacksN0QW75c)
	});

	it('test for breadthFirstSearch', async () => {
		const _returnValueZwsdYKs = []
		const _getNeighborsUM64now = () => { return _returnValueZwsdYKs };
		const _graphqXJ08xD = {
			"getNeighbors": _getNeighborsUM64now
	}
		const _arrayValueUFPVhk9 = true;
		const _startVertexEmKXIqP = [_arrayValueUFPVhk9]
		const _originalCallbacksQFxaiTy = {
		
	}
		const _returnValue56InPO = await breadthFirstSearch(_graphqXJ08xD, _startVertexEmKXIqP, _originalCallbacksQFxaiTy)
	});

	it('test for breadthFirstSearch', async () => {
		const _arrayValuenJGAg4T = null;
		const _arrayValuesp2i8d4 = 6.598991895055203;
		const _returnValueEAargO = undefined;
		const _arrayValueLo0wqXP = () => { return _returnValueEAargO };
		const _arrayValueJ0f2pr = [_arrayValueLo0wqXP]
		const _arrayValueu7JwJu6 = {
		
	}
		const _arrayValueS3MnASS = 5.607374253625734;
		const _arrayValuemP2CGjL = [_arrayValueS3MnASS]
		const _arrayValuerVgyPQp = [_arrayValueu7JwJu6, _arrayValuemP2CGjL]
		const _returnValuePcdb0Qi = [_arrayValuenJGAg4T, _arrayValuesp2i8d4, _arrayValueJ0f2pr, _arrayValuerVgyPQp]
		const _getNeighborshnpGe4 = () => { return _returnValuePcdb0Qi };
		const _graphNRQHBTK = {
			"getNeighbors": _getNeighborshnpGe4
	}
		const _startVertexJtqJWVo = {
		
	}
		const _originalCallbacksISqRxYg = {
		
	}
		const _returnValueEMQJEDw = await breadthFirstSearch(_graphNRQHBTK, _startVertexJtqJWVo, _originalCallbacksISqRxYg)
	});
})