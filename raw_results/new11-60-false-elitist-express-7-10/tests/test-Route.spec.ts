export {}
const Route = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/router/route.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Route', () => {
	it('test for Route', async () => {
		const _pathwAvTsqH = false;
		const _RoutexDxYF6v = new Route(_pathwAvTsqH)
		const _returnValuetr6SNE5 = await _RoutexDxYF6v._options()
		const _returnValueEZSY1W = false;
		const _toLowerCasernRzUqK = () => { return _returnValueEZSY1W };
		const _methodNaW9HS = {
			"toLowerCase": _toLowerCasernRzUqK
	}
		const _returnValueVYcOMks = await _RoutexDxYF6v._handles_method(_methodNaW9HS)
		const _returnValueLwTLmgE = await _RoutexDxYF6v.all()
		const _arrayValuepNaQATH = {
		
	}
		const _arrayValuehyoRgPu = undefined;
		const _arrayValueXjsT3C = true;
		const _returnValueKJQwmeP = [_arrayValuepNaQATH, _arrayValuehyoRgPu, _arrayValueXjsT3C]
		const _route7a9HlX = () => { return _returnValueKJQwmeP };
		const _reqeIJq6yd = {
			"route": _route7a9HlX
	}
		const _resmh0EcPm = undefined;
		const _doneWAKHl7c = undefined;
		const _returnValuem0VbSjX = await _RoutexDxYF6v.dispatch(_reqeIJq6yd, _resmh0EcPm, _doneWAKHl7c)
		const _returnValueIaEiq79 = await _RoutexDxYF6v._options()
	});
})