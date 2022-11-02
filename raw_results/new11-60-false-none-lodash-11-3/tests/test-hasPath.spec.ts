export {}
import hasPath from "../../.syntest/instrumented/benchmark/top10npm/lodash/hasPath.js";

describe('hasPath', () => {
	it('test for hasPath', async () => {
		const _arrayValuehe8mL8K = "oQ9dKbFkDOKWsk5DsHq";
		const _arrayValuebN00LO7 = true;
		const _objectAVKWZbG = [_arrayValuehe8mL8K, _arrayValuebN00LO7]
		const _arrayValueQe8BYtT = false;
		const _pathOVgIyF = [_arrayValueQe8BYtT]
		const _returnValueOwh1b8 = await hasPath(_objectAVKWZbG, _pathOVgIyF)
	});

	it('test for hasPath', async () => {
		const _objectZlIV0GH = undefined;
		const _pathbwxOeZ = true;
		const _returnValueSBarbSH = await hasPath(_objectZlIV0GH, _pathbwxOeZ)
	});
})