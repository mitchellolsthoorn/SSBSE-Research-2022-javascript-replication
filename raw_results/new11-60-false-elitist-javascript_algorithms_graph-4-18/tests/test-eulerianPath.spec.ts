export {}
import eulerianPath from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/eulerian-path/eulerianPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('eulerianPath', () => {
	it('test for eulerianPath', async () => {
		const _arrayValueO0hAGVl = -0.026068353283122292;
		const _arrayValueWfUOGD1 = "wxjHrB86OJc1WOhuJ4urxXj8ocgrHO92q1o4WoQpRtNsywvSnHyXaYU8runmXBxoCYxq3dXjMCSE2Y";
		const _arrayValuecahbmj1 = [_arrayValueO0hAGVl, _arrayValueWfUOGD1]
		const _arrayValueCJ68LJe = {
		
	}
		const _arrayValueSaBL1rI = undefined;
		const _returnValuekWObp4Q = [_arrayValuecahbmj1, _arrayValueCJ68LJe, _arrayValueSaBL1rI]
		const _returnValuel2WPOVW = () => { return _returnValuekWObp4Q };
		const _getAllEdgesj9CBCoA = () => { return _returnValuel2WPOVW };
		const _returnValueSja7hG9 = null;
		const _getAllVerticesbF76ZoU = () => { return _returnValueSja7hG9 };
		const _returnValueezP3tuz = {
		
	}
		const _deleteEdgehFePo44 = () => { return _returnValueezP3tuz };
		const _graphwg51NyO = {
			"getAllEdges": _getAllEdgesj9CBCoA,
		"getAllVertices": _getAllVerticesbF76ZoU,
		"deleteEdge": _deleteEdgehFePo44
	}
		const _returnValueXlL1Rzy = await eulerianPath(_graphwg51NyO)
	});

	it('test for eulerianPath', async () => {
		const _returnValueS5rRsOM = []
		const _getAllEdgesaL6ehY = () => { return _returnValueS5rRsOM };
		const _returnValuejLl58Gr = "5cptTsGkRhemwDXRpPAK7Jat2a68J5UuPZhIxh03T8YpDbgnTShFRl03vd2mig";
		const _getAllVerticesscAinB3 = () => { return _returnValuejLl58Gr };
		const _deleteEdgeNcivSnN = undefined;
		const _graphqEH7k7y = {
			"getAllEdges": _getAllEdgesaL6ehY,
		"getAllVertices": _getAllVerticesscAinB3,
		"deleteEdge": _deleteEdgeNcivSnN
	}
		const _returnValueRXgODGw = await eulerianPath(_graphqEH7k7y)
	});
})