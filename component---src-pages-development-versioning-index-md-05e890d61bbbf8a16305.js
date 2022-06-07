"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[93242],{10201:function(e,n,a){a.r(n),a.d(n,{_frontmatter:function(){return l},default:function(){return u}});var o,i=a(87462),t=a(63366),r=(a(15007),a(64983)),m=a(91515),d=["components"],l={},s=(o="InlineAlert",function(e){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",e)}),p={_frontmatter:l},c=m.Z;function u(e){var n=e.components,a=(0,t.Z)(e,d);return(0,r.mdx)(c,(0,i.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"versioning-schema"},"Versioning schema"),(0,r.mdx)("p",null,"Adobe Commerce and Magento Open Source application and module releases have their own unique version number."),(0,r.mdx)("h2",{id:"application-version-format"},"Application version format"),(0,r.mdx)("p",null,"A change in the version for the application indicates a patch or feature release.\nThis version change does not reflect the nature of the changes in the code base."),(0,r.mdx)("h2",{id:"module-version-format"},"Module version format"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"version")," field in a modules ",(0,r.mdx)("a",{parentName:"p",href:"../build/composer-integration.md"},(0,r.mdx)("inlineCode",{parentName:"a"},"composer.json"))," file specifies the module version and consists of three numbers in the following format:"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"MAJOR.MINOR.PATCH")),(0,r.mdx)("p",null,"The format follows ",(0,r.mdx)("a",{parentName:"p",href:"http://semver.org/"},"Semantic Versioning")," rules for any ",(0,r.mdx)("inlineCode",{parentName:"p"},"@api")," annotated by ",(0,r.mdx)("inlineCode",{parentName:"p"},"code"),":"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"The MAJOR version increments when incompatible API changes are made."),(0,r.mdx)("li",{parentName:"ul"},"The MINOR version increments when backward-compatible functionality has been added or if the module's customization points have changed."),(0,r.mdx)("li",{parentName:"ul"},"The PATCH version increments when backward-compatible bug fixes occur.")),(0,r.mdx)(s,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,r.mdx)("p",null,"On an exceptional basis, breaking changes or additional patches or hotfixes may be released on a PATCH version to address security or compliance issues and high-impact quality issues."),(0,r.mdx)("h3",{id:"pre-release-versions"},"Pre-release versions"),(0,r.mdx)("p",null,"For pre-release versions, the format is:"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"MAJOR.MINOR.PATCH-<alpha | beta | rc>n")),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null}),(0,r.mdx)("th",{parentName:"tr",align:null}))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"alpha"),", ",(0,r.mdx)("inlineCode",{parentName:"td"},"beta")," or ",(0,r.mdx)("inlineCode",{parentName:"td"},"rc")),(0,r.mdx)("td",{parentName:"tr",align:null},"Stability indicators, as described in the ",(0,r.mdx)("a",{parentName:"td",href:"http://php.net/version_compare"},(0,r.mdx)("inlineCode",{parentName:"a"},"version_compare()"))," specification")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"n")),(0,r.mdx)("td",{parentName:"tr",align:null},"An increment number to distinguish releases of the non-stable versions")))),(0,r.mdx)("p",null,"Adobe's module versioning policy complies with the following specifications:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"http://semver.org/"},"Semantic Versioning")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://getcomposer.org/doc/04-schema.md#version"},"Composer version specification")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"http://php.net/version_compare"},"PHP ",(0,r.mdx)("inlineCode",{parentName:"a"},"version_compare()")," specification"))),(0,r.mdx)("h2",{id:"where-versioning-is-used"},"Where versioning is used"),(0,r.mdx)("p",null,"The application version can be found in the source code of any ",(0,r.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/magento-component"},"component")," or bundle inside the ",(0,r.mdx)("inlineCode",{parentName:"p"},"composer.json")," file."),(0,r.mdx)("p",null,"It can be declared as the version of the component:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'"name": "acme/foo",\n"version": 1.2.0\n')),(0,r.mdx)("p",null,"Or it can be used to declare a dependency on a particular version of a component:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'"require": {\n    "acme/foo": "1.2.*",\n    "acme/bar": "2.2.0"\n}\n')),(0,r.mdx)(s,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,r.mdx)("p",null,"If you installed the application from GitHub without using Composer, the ",(0,r.mdx)("inlineCode",{parentName:"p"},"version")," is not included. The Admin displays the version as ",(0,r.mdx)("inlineCode",{parentName:"p"},"Magento ver. dev-<GitHub-branch-name>"),". In addition, modules inside the ",(0,r.mdx)("inlineCode",{parentName:"p"},"require")," declaration list a version of ",(0,r.mdx)("inlineCode",{parentName:"p"},"*"),". For example, ",(0,r.mdx)("inlineCode",{parentName:"p"},'"magento/framework": "*"'),"."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Related topics:")),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"../versioning/dependencies.md"},"Module version dependencies")," - Information about how your module can depend on the version of other modules."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"../versioning/code-changes.md"},"Codebase changes")," - Information on how changes in a module's codebase affect versions."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://developer.adobe.com/commerce/contributor/guides/code-contributions/backward-compatibility-policy/"},"Backward compatible development")," - Information about MAJOR and MINOR changes and how they impact extension developers.")))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-development-versioning-index-md-05e890d61bbbf8a16305.js.map