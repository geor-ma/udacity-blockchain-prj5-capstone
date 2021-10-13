# Development Notes

To make your development experience better, please use vscode and select open in dev container. More info [here](https://code.visualstudio.com/docs/remote/containers)

### Setup OpenZeppelin and HD Wallet

Setup as you need them.

```bash

$ npm init
$ npm install --save  openzeppelin-solidity@2.3
$ npm install --save  truffle-hdwallet-provider@1.0.17
$ npm audit fix
```

### Zokrates

Refs:

- [Zokrates Getting started](https://zokrates.github.io/gettingstarted.html)
- [Zokrates CLI](https://zokrates.github.io/toolbox/cli.html)

```bash

# Ref: https://classroom.udacity.com/nanodegrees/nd1309/parts/36b45ada-c0e5-495e-b6cc-34ea14a18d61/modules/996c54f8-4fa5-4eee-98c3-25788c8a5fc5/lessons/d35b025b-01b3-4bd9-acf5-e8bb5b88f00c/concepts/a431480a-c27c-437d-a911-8d442d2c8624
$ docker run -v <path to your project folder>:/home/zokrates/code -ti zokrates/zokrates /bin/bash

# from inside the docker container, run the commands. change path according to yours

zokrates@21e88b35a5a3:~/code$ pwd
/home/zokrates/code

zokrates@21e88b35a5a3:~/code$ ls
square

zokrates@21e88b35a5a3:~/code$ ls -laR
.:
total 4
drwxr-xr-x 3 root     root       96 Oct 11 15:28 .
drwxr-xr-x 1 zokrates zokrates 4096 Oct 11 13:57 ..
drwxr-xr-x 3 root     root       96 Oct  8 12:40 square

./square:
total 4
drwxr-xr-x 3 root     root      96 Oct  8 12:40 .
drwxr-xr-x 3 root     root      96 Oct 11 15:28 ..
-rw-r--r-- 1 zokrates zokrates 123 Oct 11 15:24 square.code

# compile
zokrates@21e88b35a5a3:~/code$ zokrates compile -i square/square.code
Compiling square/square.code

Compiled code written to 'out'
Number of constraints: 4
zokrates@21e88b35a5a3:~/code$ ls -laR
.:
total 12
drwxr-xr-x 5 root     root      160 Oct 11 15:30 .
drwxr-xr-x 1 zokrates zokrates 4096 Oct 11 13:57 ..
-rw-r--r-- 1 root     root      227 Oct 11 15:30 abi.json
-rw-r--r-- 1 root     root      760 Oct 11 15:30 out
drwxr-xr-x 3 root     root       96 Oct  8 12:40 square

./square:
total 4
drwxr-xr-x 3 root     root      96 Oct  8 12:40 .
drwxr-xr-x 5 root     root     160 Oct 11 15:30 ..
-rw-r--r-- 1 zokrates zokrates 123 Oct 11 15:24 square.code


# setup
zokrates@21e88b35a5a3:~/code$ zokrates setup
Performing setup...
WARNING: You are using the G16 scheme which is subject to malleability. See zokrates.github.io/toolbox/proving_schemes.html#g16-malleability for implications.
Has generated 7 points
Verification key written to 'verification.key'
Proving key written to 'proving.key'
Setup completed
zokrates@21e88b35a5a3:~/code$ ls -laR
.:
total 20
drwxr-xr-x 7 zokrates zokrates  224 Oct 11 15:30 .
drwxr-xr-x 1 zokrates zokrates 4096 Oct 11 13:57 ..
-rw-r--r-- 1 root     root      227 Oct 11 15:30 abi.json
-rw-r--r-- 1 zokrates zokrates  760 Oct 11 15:30 out
-rw-r--r-- 1 root     root     3032 Oct 11 15:30 proving.key
drwxr-xr-x 3 root     root       96 Oct  8 12:40 square
-rw-r--r-- 1 zokrates zokrates 1714 Oct 11 15:30 verification.key

./square:
total 4
drwxr-xr-x 3 root     root      96 Oct  8 12:40 .
drwxr-xr-x 7 zokrates zokrates 224 Oct 11 15:30 ..
-rw-r--r-- 1 zokrates zokrates 123 Oct 11 15:24 square.code


# compute witness
# ref: https://blog.gnosis.pm/getting-started-with-zksnarks-zokrates-61e4f8e66bcc
zokrates@21e88b35a5a3:~/code$ zokrates compute-witness -a 5 25
Computing witness...
Witness file written to 'witness'

zokrates@21e88b35a5a3:~/code$ ls -laR
.:
total 24
drwxr-xr-x 8 root     root      256 Oct 11 15:31 .
drwxr-xr-x 1 zokrates zokrates 4096 Oct 11 13:57 ..
-rw-r--r-- 1 root     root      227 Oct 11 15:30 abi.json
-rw-r--r-- 1 zokrates zokrates  760 Oct 11 15:30 out
-rw-r--r-- 1 root     root     3032 Oct 11 15:30 proving.key
drwxr-xr-x 3 root     root       96 Oct  8 12:40 square
-rw-r--r-- 1 zokrates zokrates 1714 Oct 11 15:30 verification.key
-rw-r--r-- 1 root     root       43 Oct 11 15:31 witness

./square:
total 4
drwxr-xr-x 3 root     root      96 Oct  8 12:40 .
drwxr-xr-x 8 root     root     256 Oct 11 15:31 ..
-rw-r--r-- 1 zokrates zokrates 123 Oct 11 15:24 square.code

# generate proof
zokrates@21e88b35a5a3:~/code$ zokrates generate-proof
Generating proof...
WARNING: You are using the G16 scheme which is subject to malleability. See zokrates.github.io/toolbox/proving_schemes.html#g16-malleability for implications.
Proof written to 'proof.json'

zokrates@21e88b35a5a3:~/code$ ls -laR
.:
total 28
drwxr-xr-x 9 root     root      288 Oct 11 15:36 .
drwxr-xr-x 1 zokrates zokrates 4096 Oct 11 13:57 ..
-rw-r--r-- 1 root     root      227 Oct 11 15:30 abi.json
-rw-r--r-- 1 zokrates zokrates  760 Oct 11 15:30 out
-rw-r--r-- 1 root     root      884 Oct 11 15:36 proof.json
-rw-r--r-- 1 root     root     3032 Oct 11 15:30 proving.key
drwxr-xr-x 3 root     root       96 Oct  8 12:40 square
-rw-r--r-- 1 zokrates zokrates 1714 Oct 11 15:30 verification.key
-rw-r--r-- 1 root     root       43 Oct 11 15:31 witness

./square:
total 4
drwxr-xr-x 3 root     root      96 Oct  8 12:40 .
drwxr-xr-x 9 root     root     288 Oct 11 15:36 ..
-rw-r--r-- 1 zokrates zokrates 123 Oct 11 15:24 square.code

# export verifier

zokrates@21e88b35a5a3:~/code$ zokrates export-verifier
Exporting verifier...
Verifier exported to 'verifier.sol'

zokrates@21e88b35a5a3:~/code$ ls -laR
.:
total 40
drwxr-xr-x 10 root     root      320 Oct 11 15:37 .
drwxr-xr-x  1 zokrates zokrates 4096 Oct 11 13:57 ..
-rw-r--r--  1 root     root      227 Oct 11 15:30 abi.json
-rw-r--r--  1 zokrates zokrates  760 Oct 11 15:30 out
-rw-r--r--  1 root     root      884 Oct 11 15:36 proof.json
-rw-r--r--  1 root     root     3032 Oct 11 15:30 proving.key
drwxr-xr-x  3 root     root       96 Oct  8 12:40 square
-rw-r--r--  1 root     root     1714 Oct 11 15:30 verification.key
-rw-r--r--  1 root     root     9866 Oct 11 15:37 verifier.sol
-rw-r--r--  1 root     root       43 Oct 11 15:31 witness

./square:
total 4
drwxr-xr-x  3 root     root      96 Oct  8 12:40 .
drwxr-xr-x 10 root     root     320 Oct 11 15:37 ..
-rw-r--r--  1 zokrates zokrates 123 Oct 11 15:24 square.code


```

### Tests

```bash

truffle(develop)> test
Using network 'develop'.


Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.



  Contract: TestERC721Mintable
    match erc721 spec
      ✓ should return total supply (74ms)
      ✓ should get token balance (94ms)
      ✓ should return token uri (63ms)
      ✓ should transfer token from one owner to another (602ms)
    have ownership properties
      ✓ should fail when minting when address is not contract owner (2405ms)
      ✓ should return contract owner (1060ms)

  Contract: SolnSquareVerifier
    Test SolnSquareVerifier
isTokenMinted 1 : true
      ✓ Test mint token with solution added (3610ms)

  Contract: Verifier
    Test square verifier
      ✓ Test verification with correct proof (3318ms)
      ✓ Test verification with incorrect proof (3667ms)


  9 passing (31s)


```

### How to deploy to Rinkeby

- from root folder of your project,

  ```bash
  # only if you have not done this before.
  $ npm install truffle-hdwallet-provider
  ```

- Create account or login to infra.io
- Go to project settings and get project id. That is your infuraKey
- Get your recovery phrase from metamask. that is mnemonic. Keep it safe and secure. nobody should see it.
- Update your truffle-config.js with rinkeby network info. Refer truffle-config.js for configurations
- run command

```bash
#Note the contract address during migrate command
$ truffle migrate --network rinkeby
```

- Go to https://rinkeby.etherscan.io/, search by the contract addresses

#### Reference - Contract addresses from rinkeby

```bash
truffle(develop)> migrate --network rinkeby

Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.



Migrations dry-run (simulation)
===============================
> Network name:    'rinkeby-fork'
> Network id:      4
> Block gas limit: 29999915 (0x1c9c32b)


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > block number:        9457800
   > block timestamp:     1634126406
   > account:             0x4d9601C68BC360Bc1B194cC349878DDD07dfFE72
   > balance:             4.93243967
   > gas used:            149175 (0x246b7)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00149175 ETH

   -------------------------------------
   > Total cost:          0.00149175 ETH


2_deploy_contracts.js
=====================

   Deploying 'Verifier'
   --------------------
   > block number:        9457802
   > block timestamp:     1634126411
   > account:             0x4d9601C68BC360Bc1B194cC349878DDD07dfFE72
   > balance:             4.92248755
   > gas used:            967871 (0xec4bf)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00967871 ETH


   Deploying 'SolnSquareVerifier'
   ------------------------------
   > block number:        9457803
   > block timestamp:     1634126422
   > account:             0x4d9601C68BC360Bc1B194cC349878DDD07dfFE72
   > balance:             4.89237769
   > gas used:            3010986 (0x2df1aa)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.03010986 ETH

   -------------------------------------
   > Total cost:          0.03978857 ETH


Summary
=======
> Total deployments:   3
> Final cost:          0.04128032 ETH





Starting migrations...
======================
> Network name:    'rinkeby'
> Network id:      4
> Block gas limit: 30000000 (0x1c9c380)


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0x628550cf2e13bb7c9babb7d9b1aa84e5f8df489c665e31703b3f173bb4a3135e
   > Blocks: 0            Seconds: 8
   > contract address:    0x2295C272503a1a0d035447e2CADeb9CdED7DA7b2
   > block number:        9457801
   > block timestamp:     1634126442
   > account:             0x4d9601C68BC360Bc1B194cC349878DDD07dfFE72
   > balance:             4.93227667
   > gas used:            165475 (0x28663)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00165475 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00165475 ETH


2_deploy_contracts.js
=====================

   Deploying 'Verifier'
   --------------------
   > transaction hash:    0x3867246b6875f8128ba69d8d2382140f5721fe23e87ea043c33538feae1534ae
   > Blocks: 0            Seconds: 8
   > contract address:    0xDfA347786B156a186DE9fF76c89c1FF8c494669c
   > block number:        9457803
   > block timestamp:     1634126472
   > account:             0x4d9601C68BC360Bc1B194cC349878DDD07dfFE72
   > balance:             4.92214055
   > gas used:            967871 (0xec4bf)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00967871 ETH


   Deploying 'SolnSquareVerifier'
   ------------------------------
   > transaction hash:    0x54090a8198ba1e34ed7efddd0c24b6e9c0a8d351b97b2a9b242decd7aac1d382
   > Blocks: 1            Seconds: 12
   > contract address:    0xe9651b66A9d1bC90653Cca1edD11a1BABEC79570
   > block number:        9457804
   > block timestamp:     1634126487
   > account:             0x4d9601C68BC360Bc1B194cC349878DDD07dfFE72
   > balance:             4.89023569
   > gas used:            3190486 (0x30aed6)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.03190486 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.04158357 ETH


Summary
=======
> Total deployments:   3
> Final cost:          0.04323832 ETH



(node:3258) MaxListenersExceededWarning: Possible EventEmitter memory leak detected. 11 data listeners added to [Provider]. Use emitter.setMaxListeners() to increase limit
(Use `node --trace-warnings ...` to show where the warning was created)
(node:3258) MaxListenersExceededWarning: Possible EventEmitter memory leak detected. 11 connect listeners added to [Provider]. Use emitter.setMaxListeners() to increase limit
(node:3258) MaxListenersExceededWarning: Possible EventEmitter memory leak detected. 11 error listeners added to [Provider]. Use emitter.setMaxListeners() to increase limit
(node:3258) MaxListenersExceededWarning: Possible EventEmitter memory leak detected. 11 close listeners added to [Provider]. Use emitter.setMaxListeners() to increase limit
(node:3258) MaxListenersExceededWarning: Possible EventEmitter memory leak detected. 11 disconnect listeners added to [Provider]. Use emitter.setMaxListeners() to increase limit
- Blocks: 0            Seconds: 0
- Saving migration to chain.
- Blocks: 0            Seconds: 0
- Blocks: 0            Seconds: 0
- Saving migration to chain.

```

### References

- https://docs.openzeppelin.com/contracts/3.x/api/utils
- [Getting Started with zkSnarks on ZoKrates](https://blog.gnosis.pm/getting-started-with-zksnarks-zokrates-61e4f8e66bcc)
