export {}
import breadthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('breadthFirstSearch', () => {
	it('test for breadthFirstSearch', async () => {
		const _returnValueter5dmA = undefined;
		const _getNeighborsvy6gkRv = () => { return _returnValueter5dmA };
		const _graphOBXHDkM = {
			"getNeighbors": _getNeighborsvy6gkRv
	}
		const _startVertexuwDlVnE = "rcx8qe6elprFOBqN8tqLGw9fvqV";
		const _originalCallbackspgeQvbC = "uTE2HwmV1VcMDQQjESHxkh6XMA9TELWXdcGqDsjnk";
		const _returnValueamHeqO1 = await breadthFirstSearch(_graphOBXHDkM, _startVertexuwDlVnE, _originalCallbackspgeQvbC)
	});

	it('test for breadthFirstSearch', async () => {
		const _arrayValueEcAhOCp = {
		
	}
		const _arrayValueW92luco = "c4wnrvkzs";
		const _returnValuey7ewd6A = [_arrayValueEcAhOCp, _arrayValueW92luco]
		const _graphP3NE382 = () => { return _returnValuey7ewd6A };
		const _returnValuebrsf39H = {
		
	}
		const _startVertexkpCrgW = () => { return _returnValuebrsf39H };
		const _returnValuexNo5tRH = null;
		const _originalCallbackso5Fc5lS = () => { return _returnValuexNo5tRH };
		const _returnValuePCVT6xR = await breadthFirstSearch(_graphP3NE382, _startVertexkpCrgW, _originalCallbackso5Fc5lS)
	});

	it('test for breadthFirstSearch', async () => {
		const _arrayValuegBYt52b = null;
		const _arrayValuek0XZziu = "Ge9ZkOQ9qCQCLBuO0";
		const _arrayValuecaPgVp = {
		
	}
		const _returnValueqpfdaV6 = [_arrayValuegBYt52b, _arrayValuek0XZziu, _arrayValuecaPgVp]
		const _getNeighborsSMZitNf = () => { return _returnValueqpfdaV6 };
		const _graphZIkdGWa = {
			"getNeighbors": _getNeighborsSMZitNf
	}
		const _startVertexZpPi9B2 = {
		
	}
		const _originalCallbacksNwPqaz = {
		
	}
		const _returnValueRihG1DZ = await breadthFirstSearch(_graphZIkdGWa, _startVertexZpPi9B2, _originalCallbacksNwPqaz)
	});

	it('test for breadthFirstSearch', async () => {
		const _valuekohYi3 = true;
		const _graphTApYtok = new GraphVertex(_valuekohYi3)
		const _requiredEdge79OQk6 = "3rlnbUDtEWzX5jUxtq1nR87mqhpuRNoCPrXeqx";
		const _returnValueLgzOGZu = await _graphTApYtok.hasEdge(_requiredEdge79OQk6)
		const _vertexlFD0Awn = "G5wVMa2lyM7Cuv6ANNfSDTUVzrev9ufaiXDtLTtBOo41B3odzmjgoVssAyA8QrdrMepjjQFGTeAifkUQmCPq3neT95DoL6tF";
		const _returnValuejS3HZge = await _graphTApYtok.hasNeighbor(_vertexlFD0Awn)
		const _vertexdhdvxGe = "RGOXqvoYQjjpWfTMw5J1YpZzMgUdcC6HeHEjhPHHhOh9EBPDhKNus0wZsu1MWJP1Qd4IyUt4JL4UEVcnB5";
		const _returnValueKaPkNfY = await _graphTApYtok.findEdge(_vertexdhdvxGe)
		const _vertexKuVUn4n = 5.758684941395046;
		const _returnValueM1U2GlN = await _graphTApYtok.findEdge(_vertexKuVUn4n)
		const _startVertexQR7SSap = false;
		const _arrayValueyVDMGUN = false;
		const _arrayValuexekOWwk = null;
		const _arrayValueYNS7bcm = [_arrayValueyVDMGUN, _arrayValuexekOWwk]
		const _arrayValueAeT52uI = "6EbYl4SPGwmXY7uld8Zs88D1bBtPRtvMdKi6xqRombNHbyGpjR66zqUgrXM3fGOL3UjYAt0EVid";
		const _arrayValuehrYXqmn = [_arrayValueYNS7bcm, _arrayValueAeT52uI]
		const _arrayValuexnrs8Ag = 5.237266645630239;
		const _originalCallbackskXnRxeL = [_arrayValuehrYXqmn, _arrayValuexnrs8Ag]
		const _returnValuemFvA1wT = await breadthFirstSearch(_graphTApYtok, _startVertexQR7SSap, _originalCallbackskXnRxeL)
	});
})