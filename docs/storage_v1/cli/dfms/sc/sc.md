---
id: sc
title: Interface with SuperContracts
sidebar_label: dfms-client sc
---

## Description

This command allows interacting with [SC](../../../built_in_features/supercontract/overview.md).

## Child commands

| Command                                      | Description                                                                                                                                                                                    |
| :------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`dfms-client sc deploy`](#dfms-client-net-deploy)         | Deploys [SuperContract](../../../built_in_features/supercontract/overview.md) to [Drive](../../../built_in_features/drive/overview.md)                                                               |
| [`dfms-client sc exec`](#dfms-client-net-exec)             | Executes [SuperContract](../../../built_in_features/supercontract/overview.md)                                                                                                                    |
| [`dfms-client-client sc get`](#dfms-client-net-get)               | Gets [SuperContract](../../../built_in_features/supercontract/overview.md)                                                                                                                        |
| [`dfms-client sc ls`](#dfms-client-net-ls)                 | Lists all [SuperContracts](../../../built_in_features/supercontract/overview.md) for [Drive](../../../built_in_features/drive/overview.md)                                                           |
| [`dfms-client sc results`](#dfms-client-net-results)       | Lists [SuperContracts](../../../built_in_features/supercontract/overview.md) results for specific Execution transaction hash                                                                      |
| [`dfms-client sc executions`](#dfms-client-net-executions) | Lists [SuperContracts](../../../built_in_features/supercontract/overview.md) result Execution hashes                                                                                              |
| [`dfms-client sc deactivate`](#dfms-client-sc-deactivate)  | Deactivates [SuperContracts](../../../built_in_features/supercontract/overview.md). After that, [SuperContracts](../../../built_in_features/supercontract/overview.md) will be impossible to execute |

## `dfms-client sc deploy`

Deploys [SuperContract](../../../built_in_features/supercontract/overview.md) to [Drive](../../../built_in_features/drive/overview.md).

### Arguments

| Name         | Description                                                                                                                                   |
| :----------- | :-------------------------------------------------------------------------------------------------------------------------------------------- |
| **contract** | [Drive](../../../built_in_features/drive/overview.md) Contract CID                                                                               |
| **file**     | [Drive](../../../built_in_features/drive/overview.md) path to [SuperContract](../../../built_in_features/supercontract/overview.md) WAT source file |

### Examples

- _Deploy a new [SC](../../../built_in_features/supercontract/overview.md):_
  
    ```shell
    $ dfms sc deploy baegaajaiaqjcacr4daqz4bcjw67md3dws6rtjqklxeyeetjxzputgpgrg6ivzabg newSC.wat

    SuperContract ID: baegqajaiaqjcbpxt6l4e3lbvkityq5q673j4v4tcyst34xzxtfkot65a5nmjbjem
    ```

## `dfms-client sc exec`

Executes [SuperContract](../../../built_in_features/supercontract/overview.md).

### Arguments

| Name              | Description                                                                                                                                            |
| :---------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------- |
| **superContract** | [SuperContract](../../../built_in_features/supercontract/overview.md) CID                                                                                 |
| **gas**           | [SuperContract](../../../built_in_features/supercontract/overview.md) [GAS](../../../getting_started/economy.md#supercontract-units-gas) units for execution |
| **func**          | [SuperContract](../../../built_in_features/supercontract/overview.md) function                                                                            |
| **params**        | Execution function parameters (if required)                                                                                                            |

### Examples

- _Execute some func from the [SC](../../../built_in_features/supercontract/overview.md):_
  
    ```shell
    $ dfms sc exec baegqajaiaqjcbpxt6l4e3lbvkityq5q673j4v4tcyst34xzxtfkot65a5nmjbjem 1000 test

    Started execution SuperContract(baegqajaiaqjcbpxt6l4e3lbvkityq5q673j4v4tcyst34xzxtfkot65a5nmjbjem)
    txID: bafybeifbqukufovlk5oyjujzgev6t7co2ygtfcavcgvj5onph6v2mvwujm
    ```

## `dfms-client sc get`

Gets [SuperContract](../../../built_in_features/supercontract/overview.md).

### Arguments

| Name              | Description                                                            |
| :---------------- | :--------------------------------------------------------------------- |
| **superContract** | [SuperContract](../../../built_in_features/supercontract/overview.md) CID |

### Examples

- _Show [SC](../../../built_in_features/supercontract/overview.md) info_:
  
  ```shell
    $ dfms sc get baegqajaiaqjcbpxt6l4e3lbvkityq5q673j4v4tcyst34xzxtfkot65a5nmjbjem
    {
        "id": "baegqajaiaqjcbpxt6l4e3lbvkityq5q673j4v4tcyst34xzxtfkot65a5nmjbjem",
        "drive": {
            "drive": "baegaajaiaqjcacr4daqz4bcjw67md3dws6rtjqklxeyeetjxzputgpgrg6ivzabg",
            "owner": "08041220ad54820387c3e27c7ecb97c8d69866aa5917bb9c0b675e18f9506c9697f8dddb",
            "replicators": [
                "080412200eb448d07c7ccb312989ac27aa052738ff589e2f83973f909b506b450dc5c4e2",
                "0804122068f50e10e5b8be2b7e9ddb687a667d6e94dd55fe02b4aed8195f51f9a242558b",
                "0804122073472a2e9dcea5c2a36eb7f6a34a634010391ec89e883d67360db16f28b9443c",
                "08041220d03918e35573c66578b5a0eed723fe2a46208783e13498751d9315115ca06d4b"
            ],
            "root": "bafybeif6nnag4e3fsgmc5bli3if2sfdjmtz3tflz2dzmohuj2cwbj7j26e",
            "created": 340,
            "duration": 518400,
            "space": 1000000000,
            "replicas": 5,
            "minReplicators": 3,
            "percentApprovers": 66,
            "billingPrice": 1,
            "billingPeriod": 172800
        },
        "file": "bafybeicx4cqljrdbjlzdohdumds7vfsm4jpuvijsv4hqbltztpdkgx2hme",
        "vmversion": 1,
        "functions": null
    }
  ```

## `dfms-client sc ls`

Lists all [SuperContracts](../../../built_in_features/supercontract/overview.md) for [Drive](../../../built_in_features/drive/overview.md).

### Arguments

| Name      | Description                                            |
| :-------- | :----------------------------------------------------- |
| **drive** | [Drive](../../../built_in_features/drive/overview.md) CID |

### Examples

- _Show all drive's SC_:
  
    ```shell
    $ dfms sc ls baegaajaiaqjcb62j535f4p6ukuo5pagrdq2r2dcxvinxrn2u7rs7mh3lo5h3ph3w
    baegqajaiaqjca6p6kxxvuz4uw4ftf2e6emdmgj3i3peoyh277kz3dzzlfitsyqdj
    baegqajaiaqjcbaeg5bvbkp6m4zqvavvfrsklf6nuxcrooj6coywpiffs2wdvqxcf
    ```

## `dfms-client sc results`

Lists [SuperContracts](../../../built_in_features/supercontract/overview.md) results for specific Execution transaction hash.

### Arguments

| Name     | Description                |
| :------- | :------------------------- |
| **hash** | Execution transaction hash |

### Examples

- _Show results of some execute transaction_:
  
    ```shell
    $ dfms sc results bafybeiblduyqqlpuvwfl4dotuxebexqdhjzcovi4537ytxttl5ppvxwy6y
    /supercontracts/data32.txt bafybeihx52ggdr7izy6upoo4leackhoqogvbpu3ytufgpstesshpuulgli
    ```

## `dfms-client sc executions`

Lists [SuperContracts](../../../built_in_features/supercontract/overview.md) result Execution hashes.

### Examples

- _Show all results of some SC_:
  
    ```shell
    $ dfms sc executions
    bafybeihx52ggdr7izy6upoo4leackhoqogvbpu3ytufgpstesshpuulgli
    ```

## `dfms-client sc deactivate`

Deactivates [SuperContracts](../../../built_in_features/supercontract/overview.md). After that, [SuperContracts](../../../built_in_features/supercontract/overview.md) will be impossible to execute.

### Arguments

### Examples

- _Deactivate some SC_:
  
    ```shell
    $ dfms sc deactivate baegqajaiaqjcbgiy66ue6nlrzwmvfni5ad77qj5xyblazeg3rqgrfdapvjysw5ir
    Deactivated SuperContract ID: baegqajaiaqjcbgiy66ue6nlrzwmvfni5ad77qj5xyblazeg3rqgrfdapvjysw5ir
    ```
