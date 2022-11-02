export {}
import result from "../../.syntest/instrumented/benchmark/top10npm/lodash/result.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('result', () => {
	it('test for result', async () => {
		const _objectvdUY2bi = null;
		const _lengthiX0wCU = -8.496325180158653;
		const _pathnoaJiey = {
			"length": _lengthiX0wCU
	}
		const _defaultValuekRXtjK8 = {
		
	}
		const _returnValueVrwzvj = await result(_objectvdUY2bi, _pathnoaJiey, _defaultValuekRXtjK8)
	});

	it('test for result', async () => {
		const _objectAHcWpJT = undefined;
		const _pathRsbQxwl = undefined;
		const _defaultValue0CDGJk = {
		
	}
		const _returnValuedZuidHr = await result(_objectAHcWpJT, _pathRsbQxwl, _defaultValue0CDGJk)
	});

	it('test for result', async () => {
		const _objecthsDEaqo = undefined;
		const _patheVyfMir = []
		const _defaultValueO1KvGy = {
		
	}
		const _returnValueXGek3qZ = await result(_objecthsDEaqo, _patheVyfMir, _defaultValueO1KvGy)
	});

	it('test for result', async () => {
		const _objectaqkiNok = undefined;
		const _returnValuembwRUF0 = undefined;
		const _pathFWTLgjv = () => { return _returnValuembwRUF0 };
		const _returnValuekXEvvc1 = true;
		const _defaultValueDWJXFQ = () => { return _returnValuekXEvvc1 };
		const _returnValueIHrPrOj = await result(_objectaqkiNok, _pathFWTLgjv, _defaultValueDWJXFQ)
	});
})