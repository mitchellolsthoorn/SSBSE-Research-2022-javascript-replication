export {}
import floydWarshall from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/floyd-warshall/floydWarshall.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('floydWarshall', () => {
	it('test for floydWarshall', async () => {
		const _arrayValueYRy3Wi5 = null;
		const _arrayValueBScujFZ = undefined;
		const _returnValuelWabvp = [_arrayValueYRy3Wi5, _arrayValueBScujFZ]
		const _returnValueT7Szji = () => { return _returnValuelWabvp };
		const _getAllVerticesHNX34b = () => { return _returnValueT7Szji };
		const _returnValuebRB7i8C = undefined;
		const _findEdgeiT7ehYr = () => { return _returnValuebRB7i8C };
		const _graphy2YUPAx = {
			"getAllVertices": _getAllVerticesHNX34b,
		"findEdge": _findEdgeiT7ehYr
	}
		const _returnValueGqtNr7D = await floydWarshall(_graphy2YUPAx)
	});

	it('test for floydWarshall', async () => {
		const _arrayValueZABgBJC = 5.1598268601827435;
		const _arrayValueQwtC643 = null;
		const _arrayValuee9HfSO = 7.139665149383426;
		const _arrayValueaHYQiJA = null;
		const _arrayValueKeAfPHm = undefined;
		const _arrayValueuAWUXn2 = undefined;
		const _arrayValuequZV6PY = [_arrayValueKeAfPHm, _arrayValueuAWUXn2]
		const _arrayValueaxkhSCU = true;
		const _arrayValuersBrGmn = [_arrayValueaHYQiJA, _arrayValuequZV6PY, _arrayValueaxkhSCU]
		const _returnValuevn4NLEH = [_arrayValueZABgBJC, _arrayValueQwtC643, _arrayValuee9HfSO, _arrayValuersBrGmn]
		const _getAllVerticestYD4qx6 = () => { return _returnValuevn4NLEH };
		const _returnValueb1qaVWT = -3.3678118998822733;
		const _findEdgeuxdkDW = () => { return _returnValueb1qaVWT };
		const _graphJHPfzqy = {
			"getAllVertices": _getAllVerticestYD4qx6,
		"findEdge": _findEdgeuxdkDW
	}
		const _returnValueTKdK2Lo = await floydWarshall(_graphJHPfzqy)
	});
})