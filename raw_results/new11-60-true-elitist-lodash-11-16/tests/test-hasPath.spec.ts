export {}
import hasPath from "../../.syntest/instrumented/benchmark/top10npm/lodash/hasPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hasPath', () => {
	it('test for hasPath', async () => {
		const _length6LuCOe = "mKteLWMRx4b4F58p1sxYX7D8C1";
		const _objectpXToFi3 = {
			"length": _length6LuCOe
	}
		const _patherYVwo = {
		
	}
		const _returnValueuxt9ETb = await hasPath(_objectpXToFi3, _patherYVwo)
	});

	it('test for hasPath', async () => {
		const _objectgBxe8Yo = null;
		const _pathSqSY3Hn = 8.391679779393922;
		const _returnValuec0n5Scu = await hasPath(_objectgBxe8Yo, _pathSqSY3Hn)
	});

	it('test for hasPath', async () => {
		const _lengthsuC5wWA = 5.622363499952126;
		const _objectt6xVlKH = {
			"length": _lengthsuC5wWA
	}
		const _pathkYVdUG3 = false;
		const _returnValuep7WuA5q = await hasPath(_objectt6xVlKH, _pathkYVdUG3)
	});
})