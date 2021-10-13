# Development Notes

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

### References

- https://docs.openzeppelin.com/contracts/3.x/api/utils
- [Getting Started with zkSnarks on ZoKrates](https://blog.gnosis.pm/getting-started-with-zksnarks-zokrates-61e4f8e66bcc)
