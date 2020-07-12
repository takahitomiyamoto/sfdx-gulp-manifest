/**
 * @name utils.js
 * @description utilities
 */
import gulp from 'gulp';
import shell from 'gulp-shell';
import path from 'path';
import {
  loginJwt,
  readFileSyncUtf8,
  writeFileSyncUtf8
} from 'heat-sfdx-common';
import { buildManifest } from 'heat-sfdx-metadata';

const execute = (command) => {
  return gulp.src('.').pipe(
    shell(command, {
      verbose: true,
      ignoreErrors: false
    })
  );
};

export {
  buildManifest,
  execute,
  loginJwt,
  path,
  readFileSyncUtf8,
  writeFileSyncUtf8
};
