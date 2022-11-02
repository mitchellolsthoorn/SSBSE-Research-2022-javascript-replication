export {}
const Route = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/router/route.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Route', () => {
	it('test for Route', async () => {
		const _pathPo93WfT = false;
		const _RoutekKW1TF6 = new Route(_pathPo93WfT)
		const _returnValueVemc47 = await _RoutekKW1TF6._options()
		const _returnValueNb5jc28 = await _RoutekKW1TF6.all()
		const _methodk4L6IW = true;
		const _returnValuejSusVqn = await _RoutekKW1TF6._handles_method(_methodk4L6IW)
		const _reqgwjaeX9 = 0.9279135441070974;
		const _resqByB1VX = true;
		const _doneR1YDcl4 = undefined;
		const _returnValueS0Iy7f = await _RoutekKW1TF6.dispatch(_reqgwjaeX9, _resqByB1VX, _doneR1YDcl4)
	});

	it('test for Route', async () => {
		const _pathIbS6Jsj = false;
		const _RouteU7HmytZ = new Route(_pathIbS6Jsj)
		const _arrayValue9M2mtA = false;
		const _arrayValueQunmhiG = 6.820855763954754;
		const _reqwnve6Tm = [_arrayValue9M2mtA, _arrayValueQunmhiG]
		const _resh9fSc50 = "c0oLDMraMg1MuvYJAXU8ABI2mwvbBUUYDI1G5";
		const _donekgsejtQ = "1nJEfKzJQ4aJzGsHu5iRIRWPR0gv17Iv9SuW3nlaOFR8IBm8mhzOf";
		const _returnValueAt0fwO0 = await _RouteU7HmytZ.dispatch(_reqwnve6Tm, _resh9fSc50, _donekgsejtQ)
		const _methodIur8qbr = null;
		const _returnValueW1PKhV5 = await _RouteU7HmytZ._handles_method(_methodIur8qbr)
		const _returnValueeuvnyVC = "xUQ5vvNg1aOVg5ur68IC2IvgJu9nvnRYxBXSt1aLPBvsAz7rgyGpiEjAjwUViWyh2nFRhSyds";
		const _reqADKliEQ = () => { return _returnValueeuvnyVC };
		const _resMmQpCZ = {
		
	}
		const _returnValuehglBXpW = null;
		const _doneBgqesql = () => { return _returnValuehglBXpW };
		const _returnValueYtqvrRw = await _RouteU7HmytZ.dispatch(_reqADKliEQ, _resMmQpCZ, _doneBgqesql)
		const _returnValueiEkzNn9 = await _RouteU7HmytZ.all()
	});

	it('test for Route', async () => {
		const _pathN4Sc0d = false;
		const _RouteXOaJY3N = new Route(_pathN4Sc0d)
		const _methodiqIGwIg = "9RaKMF3rkyIy7RB1ENv6sCldv5xi";
		const _returnValueNy8BT7i = await _RouteXOaJY3N._handles_method(_methodiqIGwIg)
		const _arrayValueo4sbgcM = "RV7TIGqqe5vRMKHDB54JCKIOAOgKHkukC3RsBQY14";
		const _arrayValueNhFEHgy = [_arrayValueo4sbgcM]
		const _reqpRVMrAS = [_arrayValueNhFEHgy]
		const _resrqJtexH = {
		
	}
		const _donee4OxsPl = null;
		const _returnValueHns47Mu = await _RouteXOaJY3N.dispatch(_reqpRVMrAS, _resrqJtexH, _donee4OxsPl)
	});
})