# sfdx-gulp-manifest

This helps you to build a Salesforce manifest file (package.xml), which contains all metadata types in your Salesforce org and never uses wildcard `*`.

## How to use

### Download

First of all, let's clone this repository:

```sh
git clone https://github.com/takahitomiyamoto/sfdx-gulp-manifest.git
cd sfdx-gulp-manifest
rm -rf .git
```

### environment.json

Next, let's go to the directory `.secrets`, rename `environment.sample.json` to `environment.json`, and configure a few environment variables:

| name        | description                                                                           |
| :---------- | :------------------------------------------------------------------------------------ |
| clientId    | consumer key of the connected app in your org                                         |
| username    | username of the login user to your org                                                |
| hostname    | `login.salesforce.com` or `test.salesforce.com`                                       |
| asOfVersion | API version in your org                                                               |
| myDomain    | my domain of your org <br> e.g.) heat-dev-ed.cs117.my.salesforce.com --> `heat-dev-ed.cs117` |

### Metadata WSDL

If you want to use the latest API version (except `48.0`), please download the latest Metadata WSDL and replace `metadata.wsdl` in the directory `.assets`.

> [Generate or Obtain the Web Service WSDLs for Your Organization](https://developer.salesforce.com/docs/atlas.en-us.api_meta.meta/api_meta/meta_quickstart_get_WSDLs.htm)

### Private Key and Certificate

Next, let's create a private key and self-signed digital certificate, and store `server.key` to the directory `.secrets`:

> [Create a Private Key and Self-Signed Digital Certificate](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_key_and_cert.htm)

By the way, if you want to use a self-signed certificate created on your Salesforce org, you can create `server.key` from your Keystore `00Dxxxxxxxxxxxx.jks` by the steps below:

```sh
keytool -importkeystore -srckeystore 00Dxxxxxxxxxxxx.jks -destkeystore keystore.p12 -deststoretype PKCS12
openssl pkcs12 -in keystore.p12 -nocerts -nodes -out server.key
```

### Connected App

Next, please create a connected app and attach the self-signed certificate:

> [Create a Connected App](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_connected_app.htm)

### Enjoy

Now, it's time to go. Have you already setup `Node.js` and `Yarn`?

- [Node.js](https://nodejs.dev/)
- [Yarn](https://classic.yarnpkg.com/en/docs/install)

```sh
yarn install
yarn gulp:init
yarn gulp:manifest:create
```

Enjoy!!

## Acknowledgment

- [salesforce-manifest-generator](https://github.com/takahitomiyamoto/salesforce-manifest-generator)
- [heat-sfdx-metadata](https://github.com/takahitomiyamoto/heat-sfdx-metadata)
- [heat-sfdx-soap](https://github.com/takahitomiyamoto/heat-sfdx-soap)
- [heat-sfdx-common](https://github.com/takahitomiyamoto/heat-sfdx-common)
