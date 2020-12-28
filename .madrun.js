'use strict';

const {
    run
} = require('madrun');

module.exports = {
    "lint": () => 'putout . .madrun.js',
    'fix:lint': () => run('lint', '--fix'),
    "lint:json":() => 'jsonlint -q package.json',
    "install:cloudcmd":() => 'echo \'INSTALL...\'; npm i cloudcmd',
    "mv:win":() => 'mv package-win.exe cloudcmd-v`version`-win-x64-standalone.exe',
    "mv:macos":() => 'mv package-macos cloudcmd-v`version`-macos-x64-standalone',
    "mv:linux":() => 'mv package-linux cloudcmd-v`version`-linux-x64-standalone',
    "pack:win":() => 'echo \'PACK WIN...\'; onezip -p cloudcmd-v`version`-win-x64-standalone.exe',
    "pack:macos":() => 'echo \'PACK MAC...\'; jaguar -p cloudcmd-v`version`-macos-x64-standalone',
    "pack:linux":() => 'echo \'PACK LINUX...\'; jaguar -p cloudcmd-v`version`-linux-x64-standalone',
    "rename:win":() => 'mv cloudcmd-v`version`-win-x64-standalone.exe.zip cloudcmd-v`version`-win-x64-standalone.zip',
    "upload:win":() => 'putasset -l -o coderaiser -r cloudcmd -t v`version` -f cloudcmd-v`version`-win-x64-standalone.zip',
    "upload:mac":() => 'putasset -l -o coderaiser -r cloudcmd -t v`version` -f cloudcmd-v`version`-macos-x64-standalone.tar.gz',
    "upload:linux":() => 'putasset -l -o coderaiser -r cloudcmd -t v`version` -f cloudcmd-v`version`-linux-x64-standalone.tar.gz',
    "pkg":() => 'echo \'PACKAGE...\'; pkg .',
    "build":async () => await run(['pkg', 'mv:*', 'pack:*', 'rename:*', 'upload:*', 'rm']),
    "wisdom:done":() => 'echo https://ci.appveyor.com/project/coderaiser/package/',
    "rm":() => 'rimraf cloudcmd-v`version`*'
};