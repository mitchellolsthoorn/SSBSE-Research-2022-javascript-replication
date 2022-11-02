export {}
import breadthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('breadthFirstSearch', () => {
	it('test for breadthFirstSearch', async () => {
		const _graphLEcxdaR = -9.166353194680346;
		const _startVertexeYwsUqS = null;
		const _originalCallbacksnKeR05Z = true;
		const _returnValuesOPxOWa = await breadthFirstSearch(_graphLEcxdaR, _startVertexeYwsUqS, _originalCallbacksnKeR05Z)
	});

	it('test for breadthFirstSearch', async () => {
		const _arrayValueHAPG8kg = undefined;
		const _arrayValuedD6Et47 = [_arrayValueHAPG8kg]
		const _arrayValueYlS6u3N = "AnzLr2QFKwdoGK";
		const _arrayValueZnhhfU = "LfgHFPVpYosWVYr5meHEpQAfR9nGcDye7yZnRimqzp3ijuTLC64orbgUO25hEMMNF5lTXhtTXcslRAzljauTnvZHUoB9KFYdS";
		const _graphIrFBMzV = [_arrayValuedD6Et47, _arrayValueYlS6u3N, _arrayValueZnhhfU]
		const _startVertexG8A4CBo = -3.610731480702283;
		const _returnValuezMK9XBb = []
		const _originalCallbacksTscDTlT = () => { return _returnValuezMK9XBb };
		const _returnValueN5y9frA = await breadthFirstSearch(_graphIrFBMzV, _startVertexG8A4CBo, _originalCallbacksTscDTlT)
	});

	it('test for breadthFirstSearch', async () => {
		const _arrayValueMe7f7G7 = false;
		const _arrayValueyOBvnEt = "NuF1irpUtGrm82XjFixXg2W7YlWpcDJjwZ";
		const _arrayValueuhKjfb4 = undefined;
		const _returnValuen0EAVGB = [_arrayValueMe7f7G7, _arrayValueyOBvnEt, _arrayValueuhKjfb4]
		const _getNeighbors9GiDQN = () => { return _returnValuen0EAVGB };
		const _graphskst6l8 = {
			"getNeighbors": _getNeighbors9GiDQN
	}
		const _arrayValueKFXzXKU = 2.4943988821858287;
		const _arrayValueYewyuT0 = 0.7644497548187665;
		const _arrayValueQtKfZDx = [_arrayValueKFXzXKU, _arrayValueYewyuT0]
		const _startVertexpxS8w87 = [_arrayValueQtKfZDx]
		const _arrayValuezayZkPl = null;
		const _arrayValuec5luusO = [_arrayValuezayZkPl]
		const _arrayValuew41Whtu = "AtAFDubaxGj3v1k2N81eGlTM7rx1MARNQ";
		const _arrayValuedF4Q4tI = null;
		const _arrayValuehwt3ipD = [_arrayValuec5luusO, _arrayValuew41Whtu, _arrayValuedF4Q4tI]
		const _originalCallbacksBImfkHw = [_arrayValuehwt3ipD]
		const _returnValueAJkFnRM = await breadthFirstSearch(_graphskst6l8, _startVertexpxS8w87, _originalCallbacksBImfkHw)
	});

	it('test for breadthFirstSearch', async () => {
		const _valueXToRtpX = null;
		const _graphykIurS = new GraphVertex(_valueXToRtpX)
		const _vertexjj8FfpE = null;
		const _returnValueeh2xEn5 = await _graphykIurS.findEdge(_vertexjj8FfpE)
		const _requiredEdgeMiBev9T = "qYW6vOT2gGszFxXfrTojF3VEJArAspnUMNPMTjUpOK1NRnyFYXmtHuAkZVRHwOOXnQ6NqJEmBVUrg";
		const _returnValueTRWGXfK = await _graphykIurS.hasEdge(_requiredEdgeMiBev9T)
		const _returnValueMXkeQEI = await _graphykIurS.deleteAllEdges()
		const _returnValueftuqSMt = await _graphykIurS.getDegree()
		const _returnValueEpkWJ9P = await _graphykIurS.getKey()
		const _returnValueb8Wc4il = null;
		const _arrayValueoIpIRdG = () => { return _returnValueb8Wc4il };
		const _startVertexUPt7UT6 = [_arrayValueoIpIRdG]
		const _arrayValueZ1QIj5i = 4.209612561316515;
		const _arrayValueyzGCcP = 1.4600918408822636;
		const _arrayValuekGRsaDn = true;
		const _arrayValueQkl7uKA = [_arrayValueyzGCcP, _arrayValuekGRsaDn]
		const _originalCallbacksKS2xSAl = [_arrayValueZ1QIj5i, _arrayValueQkl7uKA]
		const _returnValueHipbfgD = await breadthFirstSearch(_graphykIurS, _startVertexUPt7UT6, _originalCallbacksKS2xSAl)
	});
})