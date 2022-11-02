export {}
const {compileETag} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('compileETag', () => {
	it('test for compileETag', async () => {
		const _valJWwYjG9 = undefined;
		const _returnValuecxPaKAx = await compileETag(_valJWwYjG9)
	});

	it('test for compileETag', async () => {
		const _returnValueZTeQfrd = "zyA5QOFsdzlMUKcDx3WVoFpaHeTXul4yIfUYmAWugj8rLbZXuTKnfa2JS5r2uGdCRPuolDFQH0BnW2zMZcajfU8hYIYxavqQ";
		const _arrayValuefgvDPzT = () => { return _returnValueZTeQfrd };
		const _arrayValueI4pBPzb = "ziz";
		const _arrayValuejyPKZsW = null;
		const _arrayValueDOZGP0 = [_arrayValueI4pBPzb, _arrayValuejyPKZsW]
		const _arrayValueTXKSf32 = undefined;
		const _arrayValuetrF1uBz = "7j9CTNppLqPWgdP8qy1fSsNNKJGTWAgoBkPwJ3FKEwe12JjEG7k1LPNHxK3";
		const _returnValuebG8Jhlp = [_arrayValuefgvDPzT, _arrayValueDOZGP0, _arrayValueTXKSf32, _arrayValuetrF1uBz]
		const _valJFIvxY = () => { return _returnValuebG8Jhlp };
		const _returnValueCOKVHhL = await compileETag(_valJFIvxY)
	});
})