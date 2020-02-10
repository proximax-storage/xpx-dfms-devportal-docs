---
id: drive
title: Interface with Drive file system.
sidebar_label: dfms drive
---

DriveFS is an API which implements Unix like file system over Drive to manipulate over the content of any Drive
in the network with an ability to alter it with write access.

## Subcommands

|                 Command                 |                        Description                         |
| :-------------------------------------: | :--------------------------------------------------------: |
|   [`dfms drive add`](#dfms-drive-add)   |            Add a file or directory to a Drive.             |
|   [`dfms drive get`](#dfms-drive-get)   |          Get a file or directory from any Drive.           |
|  [`dfms drive rm`](#dfms-drive-remove)  |          Remove a file or directory from a Drive.          |
|   [`dfms drive mv`](#dfms-drive-move)   |     Move and/or rename a file or directory in a Drive.     |
|   [`dfms drive cp`](#dfms-drive-copy)   |            Copy a file or directory in a Drive.            |
| [`dfms drive mkdir`](#dfms-drive-mkdir) |                 Make directory in a Drive.                 |
|    [`dfms drive ls`](#dfms-drive-ls)    |           List files under directory in a Drive.           |
|  [`dfms drive stat`](#dfms-drive-stat)  |      Show stats about a file or directory in a Drive.      |
| [`dfms drive flush`](#dfms-drive-flush) | Upload local changes from cache to replicators of a Drive. |

---

## `dfms drive add`

Adds a file or directory under `src` to `dst` of a specific `drive`. Forms a reference to new content in the Drive
and copies data to a local cache. Does not upload, thus to replicate content and reference should be followed
with flushing.

Use `--recursive(r)` to add sub/directories.  
Use `--flush(f)` to flush after execution immediately.

### Arguments

|   Name    |                             Description                             |
| :-------: | :-----------------------------------------------------------------: |
| **drive** |                              Drive ID.                              |
|  **src**  |                   The file to be added to Drive.                    |
|  **dst**  | The destination in Drive of the file to be added. Defaults to root. |

### Options

|        Name        |                        Description                         |
| :----------------: | :--------------------------------------------------------: |
| **recursive(_r_)** |              Add directory paths recursively.              |
|   **flush(_f_)**   | Upload local changes from cache to replicators of a Drive. |

### Examples

- _Add a file from pwd to a root directory in a Drive with the same name:_

  ```shell
  $ dfms drive baegbeibondkkrhxfprzwrlgxxltavqhweh2ylhu4hgo5lxjxpqbpfsw2lu add image.jpg
  ```

- _Add a directory from \$HOME to a subdirectory in a Drive with the same name:_

  ```shell
  $ dfms drive baegbeibondkkrhxfprzwrlgxxltavqhweh2ylhu4hgo5lxjxpqbpfsw2lu add ~/kittens /images/ -r
  ```

  > **NOTE:**  
  > 'images' - is not created automatically and should be created before addition. The '/' right after
  > the 'images' is required to show that a file or a directory should be put inside.

- _Add a web file to a subdirectory in a Drive with a custom_
  name:

  ```shell
  $ dfms drive baegbeibondkkrhxfprzwrlgxxltavqhweh2ylhu4hgo5lxjxpqbpfsw2lu add http://placekitten.com/200/300 /images/kitten.jpg
  ```

- _Add a file from stdin to a root directory in a Drive with a custom name:_

  ```shell
  $ curl http://placekitten.com/200/300 | dfms drive baegbeibondkkrhxfprzwrlgxxltavqhweh2ylhu4hgo5lxjxpqbpfsw2lu add - /kitten.jpg
  ```

---

## `dfms drive get`

Gets a referenced file or directory under `src` to `dst` of any `drive`. If some or all requested content
is not cached locally, 'get' retrieves it from replicators, caches locally and saves to `dst`. In the opposite case,
copies cached content from Drive to `dst`.

### Arguments

|   Name    |                             Description                             |
| :-------: | :-----------------------------------------------------------------: |
| **drive** |                              Drive ID.                              |
|  **src**  |        The source path of the file to be gotten from Drive.         |
|  **dst**  | The destination path for the file to be outputted. Defaults to '/'. |

### Examples

- _Get a file from root directory in a Drive to pwd with a same name:_

  ```shell
  $ dfms drive baegbeibondkkrhxfprzwrlgxxltavqhweh2ylhu4hgo5lxjxpqbpfsw2lu get image.jpg
  ```

- _Get a directory from sub directory in a Drive to \$HOME with a custom name:_

  ```shell
  $ dfms drive baegbeibondkkrhxfprzwrlgxxltavqhweh2ylhu4hgo5lxjxpqbpfsw2lu get images/kittens ~/kitten_images
  ```

---

## `dfms drive rm`

Removes a file or directory under `path` from a specific `drive`. Cleans the reference locally along with cached data.
Should be forward with flushing to upload reference changes.

Use `--locally(l)` to remove data from local cache, but still keep a content reference in a Drive.  
Use `--flush(f)` to flush after execution immediately.

### Arguments

|   Name    |                  Description                   |
| :-------: | :--------------------------------------------: |
| **drive** |                   Drive ID.                    |
| **path**  | The path of the file in a Drive to be removed. |

### Options

|       Name       |                        Description                         |
| :--------------: | :--------------------------------------------------------: |
| **locally(_l_)** |       Clean file only locally and keep it on track.        |
|  **flush(_f_)**  | Upload local changes from cache to replicators of a Drive. |

### Examples

- _Remove file reference and clean data from cache:_

  ```shell
  $ dfms drive baegbeibondkkrhxfprzwrlgxxltavqhweh2ylhu4hgo5lxjxpqbpfsw2lu ls
  image.jpg
  kitten.jpg
  $ dfms drive baegbeibondkkrhxfprzwrlgxxltavqhweh2ylhu4hgo5lxjxpqbpfsw2lu rm kitten.jpg
  $ dfms drive baegbeibondkkrhxfprzwrlgxxltavqhweh2ylhu4hgo5lxjxpqbpfsw2lu ls
  image.jpg
  ```

  > **NOTE:**  
  > In this case file fully removed locally and could not be got.

- _Remove directory and everything inside only from the local cache, while keeping reference._

  ```shell
  $ dfms drive baegbeibondkkrhxfprzwrlgxxltavqhweh2ylhu4hgo5lxjxpqbpfsw2lu ls /images
  image.jpg
  kitten.jpg
  $ dfms drive baegbeibondkkrhxfprzwrlgxxltavqhweh2ylhu4hgo5lxjxpqbpfsw2lu rm /images -l
  $ dfms drive baegbeibondkkrhxfprzwrlgxxltavqhweh2ylhu4hgo5lxjxpqbpfsw2lu ls /images
  image.jpg
  kitten.jpg
  ```

  > **NOTE:**  
  > Files are removed from a local cache, but they still can be accessed from replicators as if their content is stored locally.

---

## `dfms drive mv`

Move and/or rename a file or directory under `src` to `dst` in a specific `drive`. Should be forward with flushing to upload reference changes.

Use `--flush(f)` to flush after execution immediately.

### Arguments

|   Name    |                      Description                      |
| :-------: | :---------------------------------------------------: |
| **drive** |                       Drive ID.                       |
|  **src**  |   The source path of the file to be moved/renamed.    |
|  **dst**  | The destination path of the file to be moved/renamed. |

### Options

|      Name      |                        Description                         |
| :------------: | :--------------------------------------------------------: |
| **flush(_f_)** | Upload local changes from cache to replicators of a Drive. |

### Examples

- _Move file from root directory to subdirectory:_

  ```shell
  $ dfms drive baegbeibondkkrhxfprzwrlgxxltavqhweh2ylhu4hgo5lxjxpqbpfsw2lu ls
  images/
  kitten.jpg
  $ dfms drive baegbeibondkkrhxfprzwrlgxxltavqhweh2ylhu4hgo5lxjxpqbpfsw2lu mv kitten.jpg images/
  $ dfms drive baegbeibondkkrhxfprzwrlgxxltavqhweh2ylhu4hgo5lxjxpqbpfsw2lu ls images
  kitten.jpg
  ```

- _Rename directory:_

  ```shell
  $ dfms drive baegbeibondkkrhxfprzwrlgxxltavqhweh2ylhu4hgo5lxjxpqbpfsw2lu ls
  images/
  $ dfms drive baegbeibondkkrhxfprzwrlgxxltavqhweh2ylhu4hgo5lxjxpqbpfsw2lu mv images kitten_images
  $ dfms drive baegbeibondkkrhxfprzwrlgxxltavqhweh2ylhu4hgo5lxjxpqbpfsw2lu ls
  kitten_images/
  ```

---

## `dfms drive cp`

Copies a reference of a file or directory under `src` to `dst` in a specific `drive`. Does not copy actual data
and makes it accessible from different places, like symlink. Should be forward with flushing to upload
reference changes.

Use `--flush(f)` to flush after execution immediately.

### Arguments

|   Name    |                  Description                   |
| :-------: | :--------------------------------------------: |
| **drive** |                   Drive ID.                    |
|  **src**  |   The source path of the file to be copied.    |
|  **dst**  | The destination path of the file to be copied. |

### Options

|      Name      |                        Description                         |
| :------------: | :--------------------------------------------------------: |
| **flush(_f_)** | Upload local changes from cache to replicators of a Drive. |

### Examples

- _Copy file from root directory to subdirectory with the a same name:_

  ```shell
  $ dfms drive baegbeibondkkrhxfprzwrlgxxltavqhweh2ylhu4hgo5lxjxpqbpfsw2lu ls
  images/
  kitten.jpg
  $ dfms drive baegbeibondkkrhxfprzwrlgxxltavqhweh2ylhu4hgo5lxjxpqbpfsw2lu cp kitten.jpg images/
  $ dfms drive baegbeibondkkrhxfprzwrlgxxltavqhweh2ylhu4hgo5lxjxpqbpfsw2lu ls images
  kitten.jpg
  $ dfms drive baegbeibondkkrhxfprzwrlgxxltavqhweh2ylhu4hgo5lxjxpqbpfsw2lu ls
  images/
  kitten.jpg
  ```

- _Copy directory with a custom name:_

  ```shell
  $ dfms drive baegbeibondkkrhxfprzwrlgxxltavqhweh2ylhu4hgo5lxjxpqbpfsw2lu ls
  images/
  $ dfms drive baegbeibondkkrhxfprzwrlgxxltavqhweh2ylhu4hgo5lxjxpqbpfsw2lu cp images kitten_images
  $ dfms drive baegbeibondkkrhxfprzwrlgxxltavqhweh2ylhu4hgo5lxjxpqbpfsw2lu ls
  images/
  kitten_images/
  ```

---

## `dfms drive mkdir`

Makes a directory under `path` in a specific `drive`. Should be forward with flushing to upload
reference changes.

Use `--flush(f)` to flush after execution immediately.

### Arguments

|   Name    |               Description                |
| :-------: | :--------------------------------------: |
| **drive** |                Drive ID.                 |
| **path**  | The path to the directory to be created. |

### Options

|      Name      |                        Description                         |
| :------------: | :--------------------------------------------------------: |
| **flush(_f_)** | Upload local changes from cache to replicators of a Drive. |

### Example

```shell
$ dfms drive baegbeibondkkrhxfprzwrlgxxltavqhweh2ylhu4hgo5lxjxpqbpfsw2lu ls
image.jpg
$ dfms drive baegbeibondkkrhxfprzwrlgxxltavqhweh2ylhu4hgo5lxjxpqbpfsw2lu mkdir images
$ dfms drive baegbeibondkkrhxfprzwrlgxxltavqhweh2ylhu4hgo5lxjxpqbpfsw2lu ls
images/
image.jpg
```

---

## `dfms drive ls`

Lists content of a directory under `path` in a specific `drive`.

Use `--verbose(v)` to show additional details.  
Use `--sort(s)` to sort list lexicographically.

### Arguments

|   Name    |                      Description                       |
| :-------: | :----------------------------------------------------: |
| **drive** |                       Drive ID.                        |
| **path**  | The path to a directory to be listed. Defaults to '/'. |

### Options

|       Name       |       Description        |
| :--------------: | :----------------------: |
| **verbose(_v_)** | Use long listing format. |
|  **sort(_s_)**   |    Sort list entries.    |

---

## `dfms drive stat`

Shows stats about a file or directory under `path` in a specific `drive`.

### Arguments

|   Name    |               Description                |
| :-------: | :--------------------------------------: |
| **drive** |                Drive ID.                 |
| **path**  | The path of the file to get stats about. |

---

## `dfms drive flush`

Uploads all local reference changes with data to replicators of `drive`. Require write access.

> **NOTE:**  
> Flushing is not done automatically to aggregate multiple changes in the cache allowing uploading them at once and to
> make that behavior default. Use `--flush` flag with any Drive state-changing command to upload **immediately** after
> any change.

### Arguments

|   Name    | Description |
| :-------: | :---------: |
| **drive** |  Drive ID.  |
