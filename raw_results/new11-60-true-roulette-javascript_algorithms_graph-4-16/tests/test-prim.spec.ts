export {}
import prim from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/prim/prim.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";

describe('prim', () => {
	it('test for prim', async () => {
		const _graphDAg0JOn = "u6hrirKeTTVlQvzIKmdEdXZWFjQu6zivDKUDwF2xyT89V7i1QexTFW5t";
		const _returnValueQpFXHU3 = await prim(_graphDAg0JOn)
	});

	it('test for prim', async () => {
		const _isDirecteduDj5s6d = "tpIMYNybMJrg2iIAw";
		const _getAllVerticessJceUSG = "f7v22NCXmGrrtsLnwgGeYTex53JEbi1O5mM7BwcXy18J8xESm";
		const _graphBNlYb0J = {
			"isDirected": _isDirecteduDj5s6d,
		"getAllVertices": _getAllVerticessJceUSG
	}
		const _returnValueuBfFAkV = await prim(_graphBNlYb0J)
	});

	it('test for prim', async () => {
		const _isDirectedATgshn2 = false;
		const _graphco025Mw = new Graph(_isDirectedATgshn2)
		const _returnValuePydicze = await _graphco025Mw.reverse()
		const _returnValueo1VSOcZ = await _graphco025Mw.getWeight()
		const _arrayValueoVsXbdm = undefined;
		const _arrayValuebtPrhO = "rqQ7PR4CpIy259jsYCKzX8QXe6D7TwLIN0DAE3elsaGdrmRJSR84ARav8F9qVbDozuAfLXL7";
		const _arrayValueP1r542k = {
		
	}
		const _valueMfBCo4F = [_arrayValueoVsXbdm, _arrayValuebtPrhO, _arrayValueP1r542k]
		const _returnValueQ5KNuNe = false;
		const _keyCallbackkHuR7br = () => { return _returnValueQ5KNuNe };
		const _newVertexHjwnReD = new DisjointSetItem(_valueMfBCo4F, _keyCallbackkHuR7br)
		const _returnValueGYiGBvI = await _newVertexHjwnReD.getRoot()
		const _returnValueePYSAO2 = await _newVertexHjwnReD.getChildren()
		const _returnValueiUavIdf = await _newVertexHjwnReD.isRoot()
		const _returnValuePJ4n3m0 = await _graphco025Mw.addVertex(_newVertexHjwnReD)
		const _returnValueIAPBFlX = await prim(_graphco025Mw)
	});
})