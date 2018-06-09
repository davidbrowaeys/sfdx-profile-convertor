# Profile convertor for SFDX

<img src="profile folder example.png"/>

Convert
```shell
Usage: sfdx dbx:profile:convert 

Convert profile.meta-xml into json files grouped by category

Flags:
 -p, --profilename PROFILENAME    Convert specified profile. If not used, will convert all profiles into profile folders
 -r, --resourcepath RESOURCEPATH  profile resource directory path, default to ./force-app/main/default/profiles

help text for dbx:profile:convert

```

Build
```shell
Usage: sfdx dbx:profile:build 

Reconstruct profile.meta-xml from all json files.

Flags:
 -p, --profilename PROFILENAME    Rebuild specified profile into meta-xml. If not used, will rebuild all profiles into profile folders
 -r, --resourcepath RESOURCEPATH  Profile resource directory path, default to ./force-app/main/default/profiles

help text for dbx:profile:build

```