const spawn = require('child_process').spawn;
var Session = require('msgpack5rpc');
const session = new Session([]);

var nvim_args = ['--embed'];
const nvim_process = spawn('nvim', nvim_args, { stdio: ['pipe', 'pipe', process.stderr] });

session.attach(nvim_process.stdin, nvim_process.stdout);
session.on('notification', function(method, args) {
    if (method === 'redraw') {
        console.log(args);
    }
});

session.request('ui_attach', [5, 5, true], function() {
        session.request('vim_input', ['a'], function (arg1, arg2) {
    });
});
