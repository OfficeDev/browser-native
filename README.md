# browser-native

## [Browse the samples here](https://OfficeDev.github.io/browser-native)

Each sample is in its own folder under /samples, and needs to include all source code needed by the sample and a **details.json** file as follows:

~~~json
{
    "title": "Title of the sample as text",
    "description": "Description of the sample as HTML",
    "files": ["index.html", "index.js"]
}
~~~

When this is set up, you can browse the sample at [https://officedev.github.io/browser-native/listing/?sample=<(folder name containing the sample)>](https://officedev.github.io/browser-native/listing/?sample=classes). Note that all source code must work on a completely static site, and should NOT depend on a particular path since the /browser-native path will not be present when debugging locally.

To debug locally,

~~~shell
npm install
npm run start
~~~

## Contributing

This project welcomes contributions and suggestions.  Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit <https://cla.opensource.microsoft.com>.

When you submit a pull request, a CLA bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., status check, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

## Trademarks

This project may contain trademarks or logos for projects, products, or services. Authorized use of Microsoft
trademarks or logos is subject to and must follow
[Microsoft's Trademark & Brand Guidelines](https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks/usage/general).
Use of Microsoft trademarks or logos in modified versions of this project must not cause confusion or imply Microsoft sponsorship.
Any use of third-party trademarks or logos are subject to those third-party's policies.
