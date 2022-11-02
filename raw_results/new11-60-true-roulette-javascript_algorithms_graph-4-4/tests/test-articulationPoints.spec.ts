export {}
import articulationPoints from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/articulation-points/articulationPoints.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('articulationPoints', () => {
	it('test for articulationPoints', async () => {
		const _arrayValueymsatHb = -5.726601898531344;
		const _arrayValuesUDgjdf = 2.0577147342209923;
		const _arrayValuetw04tHB = {
		
	}
		const _arrayValuecsbBsdt = [_arrayValuesUDgjdf, _arrayValuetw04tHB]
		const _returnValueMSILbQ = false;
		const _arrayValueC90rDgB = () => { return _returnValueMSILbQ };
		const _graphCMGDaMB = [_arrayValueymsatHb, _arrayValuecsbBsdt, _arrayValueC90rDgB]
		const _returnValueueICH9k = await articulationPoints(_graphCMGDaMB)
	});

	it('test for articulationPoints', async () => {
		const _isDirectedgxmQ7hN = true;
		const _graph7cmWa3 = new Graph(_isDirectedgxmQ7hN)
		const _returnValueutbpjEL = await _graph7cmWa3.reverse()
		const _returnValuezJKSmaU = 3.041639051811835;
		const _getKeyoOWle4 = () => { return _returnValuezJKSmaU };
		const _newVertexi3t260U = {
			"getKey": _getKeyoOWle4
	}
		const _returnValueD93I2qc = await _graph7cmWa3.addVertex(_newVertexi3t260U)
		const _returnValueDHeY3em = await _graph7cmWa3.reverse()
		const _vertexKeyitZH35 = {
		
	}
		const _returnValuePAdtSd = await _graph7cmWa3.getVertexByKey(_vertexKeyitZH35)
		const _returnValueK19wQt = undefined;
		const _vertexKeyLnBU8Ar = () => { return _returnValueK19wQt };
		const _returnValuekBptgJG = await _graph7cmWa3.getVertexByKey(_vertexKeyLnBU8Ar)
		const _returnValueXCn45Au = await articulationPoints(_graph7cmWa3)
	});
})