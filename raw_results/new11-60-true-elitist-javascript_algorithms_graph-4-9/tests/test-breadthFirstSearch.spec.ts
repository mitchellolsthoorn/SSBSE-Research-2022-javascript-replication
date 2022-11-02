export {}
import breadthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('breadthFirstSearch', () => {
	it('test for breadthFirstSearch', async () => {
		const _returnValueHOLPme4 = true;
		const _getNeighborslvBCr5w = () => { return _returnValueHOLPme4 };
		const _graphzUcoMLn = {
			"getNeighbors": _getNeighborslvBCr5w
	}
		const _arrayValueKVkM21W = "XkrboV4InFVeTOyW";
		const _returnValueDWa5Whh = -3.1170783232485704;
		const _arrayValueMATvHUo = () => { return _returnValueDWa5Whh };
		const _returnValuePqihlxs = "FIDpP7OlYTm03y8hJKiuA8OTUmij5UH4vD97HsoGgyrQQTvTvyC7SMDVj55hG68HFY3ALeHHq1qbkx1WRExbneo4BXl07fpc";
		const _arrayValuekuGpD8Q = () => { return _returnValuePqihlxs };
		const _startVertexPYzVSeo = [_arrayValueKVkM21W, _arrayValueMATvHUo, _arrayValuekuGpD8Q]
		const _originalCallbacksUU9GeiF = "lKNcQatjRBtVX2m7lwFlsyF3aePxK31JIwX1cvk8lhsez47HBmfTk5RvtdME64lGFZj2m6kfLG3ixuJ04XaABK5odE";
		const _returnValue9ldmq1 = await breadthFirstSearch(_graphzUcoMLn, _startVertexPYzVSeo, _originalCallbacksUU9GeiF)
	});

	it('test for breadthFirstSearch', async () => {
		const _returnValueobiJI6a = undefined;
		const _getNeighborsrGsN2S6 = () => { return _returnValueobiJI6a };
		const _graphVEvKYhL = {
			"getNeighbors": _getNeighborsrGsN2S6
	}
		const _startVertexEBYYqS6 = undefined;
		const _originalCallbackshR41XtS = undefined;
		const _returnValuex4GxO9d = await breadthFirstSearch(_graphVEvKYhL, _startVertexEBYYqS6, _originalCallbackshR41XtS)
	});

	it('test for breadthFirstSearch', async () => {
		const _arrayValuew2D4N6O = 7.238516772679645;
		const _arrayValuesmqG7KL = null;
		const _arrayValuebFBkLbf = -4.556743354897678;
		const _returnValueSCjodE9 = null;
		const _arrayValueU0zgr5T = () => { return _returnValueSCjodE9 };
		const _arrayValuegwiN2VS = [_arrayValuew2D4N6O, _arrayValuesmqG7KL, _arrayValuebFBkLbf, _arrayValueU0zgr5T]
		const _arrayValueRdfYqJ = [_arrayValuegwiN2VS]
		const _arrayValuer4ATGib = true;
		const _returnValueyZu8G3z = [_arrayValueRdfYqJ, _arrayValuer4ATGib]
		const _getNeighborsQIfAuds = () => { return _returnValueyZu8G3z };
		const _graph8n3azg = {
			"getNeighbors": _getNeighborsQIfAuds
	}
		const _startVertexMM3Ilnc = 4.299634042285707;
		const _originalCallbacksJoWYdka = undefined;
		const _returnValueu3sCgXV = await breadthFirstSearch(_graph8n3azg, _startVertexMM3Ilnc, _originalCallbacksJoWYdka)
	});

	it('test for breadthFirstSearch', async () => {
		const _valueLy6isvB = null;
		const _graphY2UYhhF = new GraphVertex(_valueLy6isvB)
		const _returnValueHGn5axq = await _graphY2UYhhF.getKey()
		const _returnValuehZcTgZ5 = await _graphY2UYhhF.deleteAllEdges()
		const _startVertexwJ3hOoM = undefined;
		const _originalCallbacksCXtolVo = undefined;
		const _returnValueSc1Iu5 = await breadthFirstSearch(_graphY2UYhhF, _startVertexwJ3hOoM, _originalCallbacksCXtolVo)
	});
})