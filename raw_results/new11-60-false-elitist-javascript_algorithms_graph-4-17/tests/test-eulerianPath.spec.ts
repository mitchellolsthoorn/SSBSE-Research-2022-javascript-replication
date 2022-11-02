export {}
import eulerianPath from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/eulerian-path/eulerianPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('eulerianPath', () => {
	it('test for eulerianPath', async () => {
		const _arrayValueKo6nQTZ = 7.26662231558571;
		const _arrayValueekEy8o1 = "wNrqjD8X3X2JeEq";
		const _returnValuePcO8zE9 = [_arrayValueKo6nQTZ, _arrayValueekEy8o1]
		const _getAllEdgesB67ZCws = () => { return _returnValuePcO8zE9 };
		const _getAllVerticestDYnNil = "qsbK2lWZ6iNu2zV17XuwD7lQkI";
		const _arrayValueZMD2cXf = undefined;
		const _returnValueBOzI2IO = [_arrayValueZMD2cXf]
		const _deleteEdgepPbEgd9 = () => { return _returnValueBOzI2IO };
		const _graphiMPNbRu = {
			"getAllEdges": _getAllEdgesB67ZCws,
		"getAllVertices": _getAllVerticestDYnNil,
		"deleteEdge": _deleteEdgepPbEgd9
	}
		const _returnValueHOfxHo8 = await eulerianPath(_graphiMPNbRu)
	});

	it('test for eulerianPath', async () => {
		const _returnValueMUe2Avz = []
		const _getAllEdgessba3Emc = () => { return _returnValueMUe2Avz };
		const _returnValueaCWuGoM = false;
		const _getAllVerticesw1bmEhu = () => { return _returnValueaCWuGoM };
		const _deleteEdgeMqigLre = undefined;
		const _graphZNDVMsX = {
			"getAllEdges": _getAllEdgessba3Emc,
		"getAllVertices": _getAllVerticesw1bmEhu,
		"deleteEdge": _deleteEdgeMqigLre
	}
		const _returnValuepQmDGng = await eulerianPath(_graphZNDVMsX)
	});
})