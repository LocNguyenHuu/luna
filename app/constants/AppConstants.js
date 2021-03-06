/**
 * APP constants
 * */

export const GITHUB = {
  baseUrl: 'https://api.github.com/repos/'
}

export const APP_GLOBALS = {
  name: 'luna'
}

// app modes
export const APP_MODES = {
  GLOBAL: 'GLOBAL',
  LOCAL: 'LOCAL'
}

// package actions
export const APP_ACTIONS = {
  INSTALL: 'INSTALL',
  UPDATE: 'UPDATE',
  UNINSTALL: 'UNINSTALL'
}

export const APP_INFO = {
  NOT_AVAILABLE: 'N/A',
  NO_NOTIFICATIONS: 'No notifications',
  CONFIRMATION: 'Would you like to $action $name@version?'
}

// supported package groups
export const PACKAGE_GROUPS = {
  dependencies: 'save',
  devDependencies: 'save-dev',
  optionalDependencies: 'save-optional',
  bundleDependencies: 'save-bundle'
}

// command options when perfoming an APP action
export const COMMAND_OPTIONS = [
  'save*Package will appear in your dependencies',
  'save-dev*Package will appear in your devDependencies',
  'save-optional*Package will appear in your optionalDependencies',
  "save-exact*Saved dependencies will be configured with an exact version rather than using npm's default semver range operator"
]

//npm config allowed values
export const NPM_CONFIG_VALUES = {
  REGISTRY: 'registry',
  PROXY: 'proxy',
  HTTPS_PROXY: 'https-proxy'
}
