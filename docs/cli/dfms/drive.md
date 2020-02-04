---
id: drive
title: dfms drive
---

Allows interact with drive file system.

## Child commands
| Command | Description  |
|:-:|:-:|
| [dfms drive add](#dfms-drive-add) | allows add a new file |
| [dfms drive get](#dfms-drive-get) | allows get a file from the drive |
| [dfms drive cp](#dfms-drive-copy) | allows to copy a file on the drive |
| [dfms drive ls](#dfms-drive-ls) | allows list the drive content |
| [dfms drive mkdir](#dfms-drive-mkdir) | allows to create a new folder |
| [dfms drive mv](#dfms-drive-move) | allows move a file (also uses for renaming) |
| [dfms drive rm](#dfms-drive-remove) | allows delete a file from the drive |
| [dfms drive stat](#dfms-drive-stat) | allows get a file state |
| [dfms drive flush](#dfms-drive-flush) |  allows update remote drive |

-----------------------
## `dfms drive add`
Allows you to add a new file on the drive, returns a new drive's root hash. Makes changes only locally. To synchronize with the remote drive you can use the `-f` option.
### Arguments 
| Name | Description  |
|:-:|:-:|
| contract | the drive id |
| src | the local source path of the file to be added in the drive |
| dst | the destination path of the adding file in the drive (defaults to root) |
### Options
| Name | Description  |
|:-:|:-:|
| `-f` | flushes changes to remote replicators after succeeding result |
| `-r` | add directory paths recursively |
### Sample
Let's add test file on the drive:
```console
$ dfms drive add baegaajaiaqjcahaxr4ry4styn74ronvr2nvfdmgxtrzyhsci2xqpw5eisrisrgn5 ~/forDfms/test.txt /

Hash: bafkreihhh73b5lecmgbk3ufy5qfgnheunxg6sfw3rrztq6bwfskgpufxu4 
```
With `-f` flag automatically update the remote drive. Use the flag `-r` for directories.

-----------------------
## `dfms drive get`
Allows get a file or a directory from the given path of the contract.
### Arguments 
| Name | Description  |
|:-:|:-:|
| contract | the drive ID |
| src | the drive's source path of the file |
| dst | the local destination path of the getting file (default “/”) |
### Sample
```console
$ dfms drive get baegaajaiaqjcahaxr4ry4styn74ronvr2nvfdmgxtrzyhsci2xqpw5eisrisrgn5 /test.txt ~/localDrive/
 14 B / 14 B [======================================================================] 100.00% 0s
$ ls localDrive
test.txt
```

-----------------------
## `dfms drive cp`
Allows copy a file or a directory from the source path to the given destination path. It does not make the full copy of the file or directory, it just copies the reference. Makes changes only locally. To synchronize with the remote drive you can use the `-f` option.
### Arguments 
| Name | Description  |
|:-:|:-:|
| contract | the drive ID |
| src | the source path of the file that will copy |
| dst | the destination path of the file |
### Options
| Name | Description  |
|:-:|:-:|
| `-f` | flushes changes to remote replicators after succeeding result |
### Sample
```console
$ dfms drive cp baegaajaiaqjcahaxr4ry4styn74ronvr2nvfdmgxtrzyhsci2xqpw5eisrisrgn5 /test.txt /copy_file.txt
```
Check it:
```console
$ dfms drive ls baegaajaiaqjcahaxr4ry4styn74ronvr2nvfdmgxtrzyhsci2xqpw5eisrisrgn5 -v
file    test.txt        bafkreihhh73b5lecmgbk3ufy5qfgnheunxg6sfw3rrztq6bwfskgpufxu4     14
file    copy_file.txt   bafkreihhh73b5lecmgbk3ufy5qfgnheunxg6sfw3rrztq6bwfskgpufxu4     14

```

-----------------------
## `dfms drive ls`
Allows return information about files and directories under the given path.
### Arguments 
| Name | Description  |
|:-:|:-:|
| contract | the drive ID |
| path | the path to list (default “/”) |
### Options
| Name | Description  |
|:-:|:-:|
| `-v` | return verbose information of files/directories |
| `-s` | sorts the results |
### Sample
```console
$ dfms drive ls baegaajaiaqjcahaxr4ry4styn74ronvr2nvfdmgxtrzyhsci2xqpw5eisrisrgn5 -v

file    test.txt        bafkreihhh73b5lecmgbk3ufy5qfgnheunxg6sfw3rrztq6bwfskgpufxu4     14
```

-----------------------
## `dfms drive mkdir`
Allows create a new directory on the given path. Makes changes only locally. To synchronize with the remote drive you can use the `-f` option.
### Arguments 
| Name | Description  |
|:-:|:-:|
| contract | the drive ID |
| path | the path of the directory to be created |
### Options
| Name | Description  |
|:-:|:-:|
| `-f` | flushes changes to remote replicators after succeeding result |
### Sample
```console
$ dfms drive mkdir baegaajaiaqjcahaxr4ry4styn74ronvr2nvfdmgxtrzyhsci2xqpw5eisrisrgn5 /sampleDir
```
Check if the directory is created:
```console
$ dfms drive ls baegaajaiaqjcahaxr4ry4styn74ronvr2nvfdmgxtrzyhsci2xqpw5eisrisrgn5 -v

dir     sampleDir       QmUv7FuyKPrDzkDoiHon9qKaFmasfXToRbxHEyd9DQiWLG  np
```

-----------------------
## `dfms drive mv`
Move moves a file or a directory from the given source path to the given destination path (use also to rename). Makes changes only locally. To synchronize with the remote drive you can use the `-f` option.
### Arguments 
| Name | Description  |
|:-:|:-:|
| contract | the drive ID |
| src | the source path of the file that will move |
| dst | the destination path of the file |
### Options
f - flush; flushes changes to remote replicators after succeeding result;
### Sample
```console
$ dfms drive mv baegaajaiaqjcahaxr4ry4styn74ronvr2nvfdmgxtrzyhsci2xqpw5eisrisrgn5 /test.txt /sampleDir
```
And now get content of `/sampleDir`
```console
$ dfms drive ls baegaajaiaqjcahaxr4ry4styn74ronvr2nvfdmgxtrzyhsci2xqpw5eisrisrgn5 /sampleDir

test.txt
```

-----------------------
## `dfms drive rm`
Allows remove a file or a directory from the given source path. Makes changes only locally. To synchronize with the remote drive you can use the `-f` option.
### Arguments 
| Name | Description  |
|:-:|:-:|
| contract | the drive ID |
| path | the path to the file to be removed |
### Options
| Name | Description  |
|:-:|:-:|
| `-f` | flushes changes to remote replicators after succeeding result |
| `-l` | delete the file from local drive only |
### Sample
```console
$> dfms drive rm baegaajaiaqjcahaxr4ry4styn74ronvr2nvfdmgxtrzyhsci2xqpw5eisrisrgn5 /sampleDir/test.txt
```

-----------------------
## `dfms drive stat`
Allows return information about a file or a directory under the given path.
### Arguments 
| Name | Description  |
|:-:|:-:|
| contract | the drive ID |
| path | the path to the file to get the stat |
### Sample
```console
$ dfms drive stat baegaajaiaqjcahaxr4ry4styn74ronvr2nvfdmgxtrzyhsci2xqpw5eisrisrgn5 /sampleDir

dir     sampleDir       QmUv7FuyKPrDzkDoiHon9qKaFmasfXToRbxHEyd9DQiWLG  np
```

-----------------------
## `dfms drive flush`
Allows pushing the state of the local drive to the remote one.
### Arguments 
| Name | Description  |
|:-:|:-:|
| contract | the drive ID |
### Sample
```console
$ dfms drive flush baegaajaiaqjcahaxr4ry4styn74ronvr2nvfdmgxtrzyhsci2xqpw5eisrisrgn5
```