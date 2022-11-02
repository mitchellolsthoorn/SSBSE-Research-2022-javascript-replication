export {}
import floydWarshall from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/floyd-warshall/floydWarshall.js";

describe('floydWarshall', () => {
	it('test for floydWarshall', async () => {
		const _arrayValuep8trsC = true;
		const _arrayValueO13z9qS = null;
		const _arrayValuelcvdgOB = undefined;
		const _arrayValueyVTPacL = [_arrayValueO13z9qS, _arrayValuelcvdgOB]
		const _arrayValueMSjFC7S = "4DRwSw9V6xCD12Vv8mLlCIJLH9Hzo6CKqLEUaMUigw4CfAQzthcBkA2LDz0skOzBvxLNw9MFTS";
		const _returnValuex45ruhj = [_arrayValuep8trsC, _arrayValueyVTPacL, _arrayValueMSjFC7S]
		const _getAllVertices50TAft = () => { return _returnValuex45ruhj };
		const _returnValueVOqGul1 = null;
		const _findEdgeEsw4pKR = () => { return _returnValueVOqGul1 };
		const _graphk8MQ0Tb = {
			"getAllVertices": _getAllVertices50TAft,
		"findEdge": _findEdgeEsw4pKR
	}
		const _returnValueLVwwAw = await floydWarshall(_graphk8MQ0Tb)
	});
})