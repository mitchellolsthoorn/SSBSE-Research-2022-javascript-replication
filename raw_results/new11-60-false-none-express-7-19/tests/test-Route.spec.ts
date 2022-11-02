export {}
const Route = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/router/route.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Route', () => {
	it('test for Route', async () => {
		const _pathGWjxlHq = "4wLQGRJcSAbV5cMzbJTynpZRgPYI9Ch8TALHTjHcjxwWYPBOov";
		const _RoutegNZSoAn = new Route(_pathGWjxlHq)
		const _returnValueTMt9HIw = await _RoutegNZSoAn._options()
		const _reqTVd3zHz = 2.242358174990464;
		const _resAdJ4qcg = "OSVrVXWzJl";
		const _donetLKJNwP = "hC1fMvqtwuWGvvgXRrylbyuCIXOCgMN9jkdbrzsXUAk6Krn2JEokBCs1sW2redlMhRGOA2tGIjzGczoJQj";
		const _returnValueXB2i4CD = await _RoutegNZSoAn.dispatch(_reqTVd3zHz, _resAdJ4qcg, _donetLKJNwP)
		const _arrayValueTzxW5qx = true;
		const _arrayValueQDIeaU6 = null;
		const _arrayValueXXoxJh = [_arrayValueQDIeaU6]
		const _arrayValueis85pOK = [_arrayValueTzxW5qx, _arrayValueXXoxJh]
		const _arrayValuek7Nw5Cq = null;
		const _arrayValueLHZGOCA = false;
		const _arrayValuernTpQy0 = [_arrayValueLHZGOCA]
		const _req6QaAWw = [_arrayValueis85pOK, _arrayValuek7Nw5Cq, _arrayValuernTpQy0]
		const _resewCogO7 = "bMVEysNcKXBLaA3q1iKhpXKGsVwdDbRfQCJrg9OcTfats0iCrsnKQf5y3sHICOn0DuEXdMNBw4DzAmahPN6e9";
		const _doneIfIwgF = null;
		const _returnValueyNW59hs = await _RoutegNZSoAn.dispatch(_req6QaAWw, _resewCogO7, _doneIfIwgF)
	});

	it('test for Route', async () => {
		const _pathJ4XZhFA = "o";
		const _RouteVKxKten = new Route(_pathJ4XZhFA)
		const _returnValueEbSLnO8 = await _RouteVKxKten.all()
	});

	it('test for Route', async () => {
		const _returnValueQ0bWj4M = -0.7235110431816292;
		const _pathtmfqenM = () => { return _returnValueQ0bWj4M };
		const _RoutepzuAJH = new Route(_pathtmfqenM)
		const _methodO6VgAk = -3.794320965217832;
		const _returnValuetbdcXMG = await _RoutepzuAJH._handles_method(_methodO6VgAk)
	});

	it('test for Route', async () => {
		const _path0ZMdkN = null;
		const _Routexm2Y0PE = new Route(_path0ZMdkN)
		const _returnValuevKnHcNj = await _Routexm2Y0PE._options()
		const _methodTbahs2A = "5m2Cu8zAUIyiQzOtnW7cny7LZzELwijyg1dV858WyIMfAgYmCT2nHe56zhcm7M6BbjHuLU4J2Yvm7EU";
		const _returnValueIu281Xa = await _Routexm2Y0PE._handles_method(_methodTbahs2A)
		const _methodaaVN0ha = -5.945348433477998;
		const _returnValueTSDtPoH = await _Routexm2Y0PE._handles_method(_methodaaVN0ha)
		const _arrayValueKc5PbQ = "oOGHCELN8kbUUzkBnE7pa8Nep4QmTvnad8myd2iAjc3p3zDtWyfU3vdgtiULcvF5EP9h88ODpGwG";
		const _arrayValueOFcCG6x = null;
		const _reqrleXic5 = [_arrayValueKc5PbQ, _arrayValueOFcCG6x]
		const _resiwGSGul = true;
		const _returnValueyS7MV7C = false;
		const _doneHY0UY4M = () => { return _returnValueyS7MV7C };
		const _returnValueDXfgLgj = await _Routexm2Y0PE.dispatch(_reqrleXic5, _resiwGSGul, _doneHY0UY4M)
	});
})