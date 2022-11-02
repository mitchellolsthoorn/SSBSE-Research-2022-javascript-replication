export {}
import breadthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('breadthFirstSearch', () => {
	it('test for breadthFirstSearch', async () => {
		const _returnValueJ1Y3wHb = {
		
	}
		const _getNeighborsqyAVopU = () => { return _returnValueJ1Y3wHb };
		const _graphSlTuDtT = {
			"getNeighbors": _getNeighborsqyAVopU
	}
		const _startVertexQ5cAWLR = 4.580236949724359;
		const _originalCallbacksoRb4vgL = false;
		const _returnValueDa13HU9 = await breadthFirstSearch(_graphSlTuDtT, _startVertexQ5cAWLR, _originalCallbacksoRb4vgL)
	});

	it('test for breadthFirstSearch', async () => {
		const _returnValuecT458ZM = 2.134163384788108;
		const _getNeighborsSJqA1NO = () => { return _returnValuecT458ZM };
		const _graphD9VCkSF = {
			"getNeighbors": _getNeighborsSJqA1NO
	}
		const _arrayValueoFSbqQx = "MekQSWwmYqCXrwyf43UKpRphd26jCw5OvV67Gyf6MCslaFUKaddGzSnoT5dQUQqrYfWlBZKqB86e96XeLLhd9l";
		const _arrayValuegyov2gm = undefined;
		const _arrayValueSeKiq48 = 7.635586901401357;
		const _arrayValueSlaLLWZ = 6.120796066700237;
		const _arrayValueGqbnFac = {
		
	}
		const _returnValuejEt1Vsn = [_arrayValueSlaLLWZ, _arrayValueGqbnFac]
		const _returnValueovXb0lQ = () => { return _returnValuejEt1Vsn };
		const _arrayValueiDAI9S9 = () => { return _returnValueovXb0lQ };
		const _arrayValueVwbVmhu = {
		
	}
		const _arrayValueHIVK41d = [_arrayValueiDAI9S9, _arrayValueVwbVmhu]
		const _startVertexTDgMkkA = [_arrayValueoFSbqQx, _arrayValuegyov2gm, _arrayValueSeKiq48, _arrayValueHIVK41d]
		const _originalCallbacksMNqZLoo = undefined;
		const _returnValueQFIi7bq = await breadthFirstSearch(_graphD9VCkSF, _startVertexTDgMkkA, _originalCallbacksMNqZLoo)
	});

	it('test for breadthFirstSearch', async () => {
		const _arrayValuemK9pm9x = -3.914294793642849;
		const _arrayValuecxWhJ6q = -5.15076056824814;
		const _arrayValueoTpVcSe = -5.276577371993548;
		const _returnValueIbPEosi = [_arrayValuemK9pm9x, _arrayValuecxWhJ6q, _arrayValueoTpVcSe]
		const _getNeighborstQ3K5ni = () => { return _returnValueIbPEosi };
		const _graphK9XT1F8 = {
			"getNeighbors": _getNeighborstQ3K5ni
	}
		const _startVertexTnprzC4 = true;
		const _originalCallbacksN0bzL8B = {
		
	}
		const _returnValueI3qMNaL = await breadthFirstSearch(_graphK9XT1F8, _startVertexTnprzC4, _originalCallbacksN0bzL8B)
	});

	it('test for breadthFirstSearch', async () => {
		const _returnValuefotHZHG = []
		const _getNeighborsGjyeK4 = () => { return _returnValuefotHZHG };
		const _graphWQ55Mwg = {
			"getNeighbors": _getNeighborsGjyeK4
	}
		const _arrayValuebGtcxZ = undefined;
		const _startVertexTgFzF36 = [_arrayValuebGtcxZ]
		const _originalCallbacksYgGWlNj = undefined;
		const _returnValueHJrDEgA = await breadthFirstSearch(_graphWQ55Mwg, _startVertexTgFzF36, _originalCallbacksYgGWlNj)
	});
})