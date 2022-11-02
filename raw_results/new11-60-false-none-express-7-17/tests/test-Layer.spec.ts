export {}
const Layer = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/router/layer.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Layer', () => {
	it('test for Layer', async () => {
		const _pathcCXa0Tj = {
		
	}
		const _optionsenkR95 = {
		
	}
		const _returnValueG3KQzyt = 9.736273786605157;
		const _fnaP2gDhv = () => { return _returnValueG3KQzyt };
		const _Layerk4lN9zK = new Layer(_pathcCXa0Tj, _optionsenkR95, _fnaP2gDhv)
		const _reqP8KO81l = undefined;
		const _returnValuezzLQsiu = true;
		const _resqc17wWT = () => { return _returnValuezzLQsiu };
		const _nextjstdDDn = false;
		const _returnValueddb7qQ5 = await _Layerk4lN9zK.handle_request(_reqP8KO81l, _resqc17wWT, _nextjstdDDn)
		const _reqKwhLLUd = {
		
	}
		const _resTzkm6Kn = 8.670634565211024;
		const _nextQTAEq26 = true;
		const _returnValuehZ8gOYJ = await _Layerk4lN9zK.handle_request(_reqKwhLLUd, _resTzkm6Kn, _nextQTAEq26)
		const _arrayValueBYcuLPR = null;
		const _arrayValueuuxygVd = true;
		const _arrayValueN8IUxD = {
		
	}
		const _reqCobsDnN = [_arrayValueBYcuLPR, _arrayValueuuxygVd, _arrayValueN8IUxD]
		const _resHEdz8kP = null;
		const _returnValuelx5QVYm = -9.60698057085446;
		const _arrayValuewtZD3S7 = () => { return _returnValuelx5QVYm };
		const _arrayValueEvag2At = false;
		const _nextQs1dWVY = [_arrayValuewtZD3S7, _arrayValueEvag2At]
		const _returnValueZXJHo9w = await _Layerk4lN9zK.handle_request(_reqCobsDnN, _resHEdz8kP, _nextQs1dWVY)
		const _errorgSHF9Bw = "WGBFguRa4spGKXOOtUulpfSNam6EI6wPzljZzWz5dmOj5jCcBcAue5P9s71J2BH6QaCyX51gbtF4KikSne";
		const _reqFE8kWj = "WteSPPm93XnvBJtL6ptRrSq6Hgz8O7Wi0grevM1YkN7p";
		const _resHijjly0 = -8.170976041891997;
		const _nextFML83We = -9.28039980150185;
		const _returnValueXkvZTkM = await _Layerk4lN9zK.handle_error(_errorgSHF9Bw, _reqFE8kWj, _resHijjly0, _nextFML83We)
	});

	it('test for Layer', async () => {
		const _arrayValueHH45fp = "cRjNNWKGJIoMMFKRkYqQEdrsXZFqXTBkVpStbGPP53N8g0L6eqWyQ";
		const _arrayValueDcQXXjd = []
		const _pathogFWQYJ = [_arrayValueHH45fp, _arrayValueDcQXXjd]
		const _optionsG4YiWZH = null;
		const _fnZggniV5 = 8.764145552412053;
		const _LayerxwwhF9o = new Layer(_pathogFWQYJ, _optionsG4YiWZH, _fnZggniV5)
		const _pathZ1983E = "Jj";
		const _returnValueWvjYkcN = await _LayerxwwhF9o.match(_pathZ1983E)
		const _reqYK1rTZQ = 8.960386713785983;
		const _resBn9r1Iu = {
		
	}
		const _arrayValueQTrJAoF = null;
		const _nextBX5TeF = [_arrayValueQTrJAoF]
		const _returnValueXgpqqAk = await _LayerxwwhF9o.handle_request(_reqYK1rTZQ, _resBn9r1Iu, _nextBX5TeF)
	});

	it('test for Layer', async () => {
		const _pathxHZkEW5 = -4.486295577291552;
		const _optionsCAB6vS6 = null;
		const _arrayValuey4WZU7N = null;
		const _arrayValueQhIEX3D = false;
		const _arrayValueW372tx = [_arrayValueQhIEX3D]
		const _arrayValueYpIHWIj = {
		
	}
		const _fnysI9jg2 = [_arrayValuey4WZU7N, _arrayValueW372tx, _arrayValueYpIHWIj]
		const _LayerxtFmsvc = new Layer(_pathxHZkEW5, _optionsCAB6vS6, _fnysI9jg2)
		const _patho0dF0Y = false;
		const _returnValuetH5QpR = await _LayerxtFmsvc.match(_patho0dF0Y)
	});

	it('test for Layer', async () => {
		const _pathCXkUdB2 = "VrjonYmRVgOjAUl33aCQ1Q3Aku1trzMVNGkYiQpujsavCYF97Qb5pCXM7ekEd9";
		const _optionsmjOi45 = undefined;
		const _arrayValueiFwTRbx = false;
		const _arrayValuelQCezB2 = {
		
	}
		const _fnem5PU6 = [_arrayValueiFwTRbx, _arrayValuelQCezB2]
		const _LayerkcixhaB = new Layer(_pathCXkUdB2, _optionsmjOi45, _fnem5PU6)
		const _pathf03p4iK = null;
		const _returnValuehiPOATw = await _LayerkcixhaB.match(_pathf03p4iK)
		const _returnValueSkHHuUS = -2.386068601310402;
		const _pathdw9U2u = () => { return _returnValueSkHHuUS };
		const _returnValueQXP4OEA = await _LayerkcixhaB.match(_pathdw9U2u)
		const _reqGFzIcCi = false;
		const _resTXQJTgC = undefined;
		const _nexteq9FeZf = null;
		const _returnValueSMo4Y7F = await _LayerkcixhaB.handle_request(_reqGFzIcCi, _resTXQJTgC, _nexteq9FeZf)
	});

	it('test for Layer', async () => {
		const _pathd9huBji = false;
		const _optionsF1xE43t = undefined;
		const _fnYEVMzyK = "fIUZs";
		const _LayerOau5nB1 = new Layer(_pathd9huBji, _optionsF1xE43t, _fnYEVMzyK)
		const _reqsjEii6o = null;
		const _arrayValueW3xZ5He = null;
		const _arrayValueoImhMxH = null;
		const _arrayValuecD87Yf4 = [_arrayValueW3xZ5He, _arrayValueoImhMxH]
		const _arrayValueqYjcLKl = null;
		const _returnValuefPdgCaN = [_arrayValueqYjcLKl]
		const _arrayValueBYBnnWt = () => { return _returnValuefPdgCaN };
		const _arrayValueMbosJt8 = "LsC08Jflci";
		const _arrayValueSVeyxFc = -8.931176072710429;
		const _resZMayiuI = [_arrayValuecD87Yf4, _arrayValueBYBnnWt, _arrayValueMbosJt8, _arrayValueSVeyxFc]
		const _nextdD8Yfbx = "p7F1QATjPP7UvRwRYSE";
		const _returnValueQpNlZEE = await _LayerOau5nB1.handle_request(_reqsjEii6o, _resZMayiuI, _nextdD8Yfbx)
		const _reqRcqiqvO = null;
		const _resONhAhMj = null;
		const _nextuoo1hU = "hFsid48eDcbJiRxt1WA48iXQC7MQj6AccEQufPwnHw";
		const _returnValueNAxwYOo = await _LayerOau5nB1.handle_request(_reqRcqiqvO, _resONhAhMj, _nextuoo1hU)
	});
})