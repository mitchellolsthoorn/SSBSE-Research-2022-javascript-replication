export {}
import hamiltonianCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/hamiltonian-cycle/hamiltonianCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hamiltonianCycle', () => {
	it('test for hamiltonianCycle', async () => {
		const _arrayValueSyVvhGh = false;
		const _returnValueaQFiHS8 = -3.001242212089778;
		const _arrayValuecYTqPFn = () => { return _returnValueaQFiHS8 };
		const _arrayValuetrGfo4l = true;
		const _arrayValueK9vYCO = "N3nBXY9t799PAaDMJAC3FvoZUX2kS24gDVbg";
		const _arrayValueEW8woql = null;
		const _arrayValueZt4ciOs = [_arrayValuecYTqPFn, _arrayValuetrGfo4l, _arrayValueK9vYCO, _arrayValueEW8woql]
		const _returnValueZFP4Gzu = [_arrayValueSyVvhGh, _arrayValueZt4ciOs]
		const _getVerticesIndicesgCwuClU = () => { return _returnValueZFP4Gzu };
		const _returnValuehYKmmk3 = "r";
		const _getAdjacencyMatrixlYszm8X = () => { return _returnValuehYKmmk3 };
		const _arrayValueAfrUJcQ = -9.370208784914137;
		const _arrayValuea0BJlW = "mEVx9Jvm2oYet8PXjo8jOs";
		const _arrayValueHJbeGzN = true;
		const _arrayValueeIi4tvj = [_arrayValueAfrUJcQ, _arrayValuea0BJlW, _arrayValueHJbeGzN]
		const _arrayValueyeJeSxq = undefined;
		const _returnValuePB0xwz3 = [_arrayValueeIi4tvj, _arrayValueyeJeSxq]
		const _getAllVerticesuj5mHHF = () => { return _returnValuePB0xwz3 };
		const _graphq4XxQpy = {
			"getVerticesIndices": _getVerticesIndicesgCwuClU,
		"getAdjacencyMatrix": _getAdjacencyMatrixlYszm8X,
		"getAllVertices": _getAllVerticesuj5mHHF
	}
		const _returnValueZmvKjZR = await hamiltonianCycle(_graphq4XxQpy)
	});
})