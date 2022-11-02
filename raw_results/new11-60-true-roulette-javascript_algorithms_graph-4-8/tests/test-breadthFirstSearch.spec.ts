export {}
import breadthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('breadthFirstSearch', () => {
	it('test for breadthFirstSearch', async () => {
		const _arrayValueF8o2mpr = "fc8rHlub2UgRUDtd9qPnKIbJ9NTk7fdn1tS5ToPNmOvRMbvtyUleiyws2";
		const _arrayValuezt6YXM8 = null;
		const _getNeighborsjN79BAA = [_arrayValueF8o2mpr, _arrayValuezt6YXM8]
		const _graphByb65DU = {
			"getNeighbors": _getNeighborsjN79BAA
	}
		const _startVertexO97Fb1r = "mHIudqWwohhJT0rpTlJiAMPG8VkpaXUUApGCyJ80nNut7MgsCVDuclXLMsmV7FXBdCs7CacYa";
		const _originalCallbacksMzMi4gW = -1.253380729844988;
		const _returnValuekOI5hVe = await breadthFirstSearch(_graphByb65DU, _startVertexO97Fb1r, _originalCallbacksMzMi4gW)
	});

	it('test for breadthFirstSearch', async () => {
		const _graphw44SPso = "C3oONr9jhYFVLqn4oURZ708G8iZ5R9aUaL3VHNXFmwFDGRwGLG066esPB";
		const _arrayValueTmRIwoL = "IFL423Mcmw59D2yWdKCE4GrOjkh7EKT3xBPIesNKtRQmg5YKkoFDWdIYZaF3";
		const _arrayValueOAlkLYB = undefined;
		const _startVertexVct6134 = [_arrayValueTmRIwoL, _arrayValueOAlkLYB]
		const _originalCallbackstCP0TXj = undefined;
		const _returnValuezxq51r = await breadthFirstSearch(_graphw44SPso, _startVertexVct6134, _originalCallbackstCP0TXj)
	});

	it('test for breadthFirstSearch', async () => {
		const _arrayValueZaYWG6m = false;
		const _arrayValueYCsoNJg = "91aes";
		const _arrayValuei9bPEAY = true;
		const _arrayValuetcrXA3 = true;
		const _returnValueeOUsFRW = [_arrayValueZaYWG6m, _arrayValueYCsoNJg, _arrayValuei9bPEAY, _arrayValuetcrXA3]
		const _getNeighborsXtbElsA = () => { return _returnValueeOUsFRW };
		const _graphn27uzCy = {
			"getNeighbors": _getNeighborsXtbElsA
	}
		const _startVertexDatwDBn = "u1JaSYAziJxfOkZfCsHdan";
		const _originalCallbacksIQcDgk4 = undefined;
		const _returnValueKzi5pA = await breadthFirstSearch(_graphn27uzCy, _startVertexDatwDBn, _originalCallbacksIQcDgk4)
	});

	it('test for breadthFirstSearch', async () => {
		const _valueis3hlNt = true;
		const _graphrlrMsg = new GraphVertex(_valueis3hlNt)
		const _returnValueyX8tma = await _graphrlrMsg.getEdges()
		const _returnValuehOad85o = await _graphrlrMsg.getKey()
		const _startVertexBwlFTis = null;
		const _returnValueLoXEbD = "Q8ojwdV9";
		const _originalCallbacksgH0THf = () => { return _returnValueLoXEbD };
		const _returnValuefc6Isw4 = await breadthFirstSearch(_graphrlrMsg, _startVertexBwlFTis, _originalCallbacksgH0THf)
	});
})