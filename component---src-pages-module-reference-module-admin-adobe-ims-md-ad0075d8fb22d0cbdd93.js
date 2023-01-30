"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[87440],{44249:function(e,n,i){i.r(n),i.d(n,{_frontmatter:function(){return l},default:function(){return h}});var t=i(87462),a=i(63366),o=(i(15007),i(64983)),d=i(91515),s=["components"],l={},r={_frontmatter:l},m=d.Z;function h(e){var n=e.components,i=(0,a.Z)(e,s);return(0,o.mdx)(m,(0,t.Z)({},r,i,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"magento_admin_adobe_ims-module"},"Magento_Admin_Adobe_Ims module"),(0,o.mdx)("p",null,"The Magento_Admin_Adobe_Ims module contains integration with Adobe IMS for backend authentication."),(0,o.mdx)("p",null,"For information about module installation in Magento 2, see ",(0,o.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.4/install-gde/install/cli/install-cli-subcommands-enable.html"},"Enable or disable modules"),"."),(0,o.mdx)("h1",{id:"cli-command-usage"},"CLI command usage:"),(0,o.mdx)("h2",{id:"binmagento-adminadobe-imsenable"},"bin/magento admin:adobe-ims:enable"),(0,o.mdx)("p",null,"Enables the AdminAdobeIMS Module. \\\nRequired values are ",(0,o.mdx)("inlineCode",{parentName:"p"},"Organization ID"),", ",(0,o.mdx)("inlineCode",{parentName:"p"},"Client ID"),", ",(0,o.mdx)("inlineCode",{parentName:"p"},"Client Secret")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"2FA enabled")),(0,o.mdx)("h3",{id:"argument-validation"},"Argument Validation"),(0,o.mdx)("p",null,"On enabling the AdminAdobeIMS Module, the input arguments will be validated. \\\nThe pattern for the validation are configured in the di.xml"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-xml"},'<type name="Magento\\AdminAdobeIms\\Service\\ImsCommandValidationService">\n    <arguments>\n        <argument name="organizationIdRegex" xsi:type="string"><![CDATA[/^([A-Z0-9]{24})(@AdobeOrg)?$/i]]></argument>\n        <argument name="clientIdRegex" xsi:type="string"><![CDATA[/[^a-z_\\-0-9]/i]]></argument>\n        <argument name="clientSecretRegex" xsi:type="string"><![CDATA[/[^a-z_\\-0-9]/i]]></argument>\n        <argument name="twoFactorAuthRegex" xsi:type="string"><![CDATA[/^y/i]]></argument>\n    </arguments>\n</type>\n')),(0,o.mdx)("p",null,"We check if the arguments are not empty, as they are all required."),(0,o.mdx)("p",null,"For the Organization ID, Client ID and Client Secret, we check if they contain only alphanumeric characters. \\\nAdditionally for the Organization ID, we check if it matches 24 characters and optional has the suffix ",(0,o.mdx)("inlineCode",{parentName:"p"},"@AdobeOrg"),". But we only store the ID and ignore the suffix.\nAlso make sure 2FA is enabled for the Organization in Adobe Admin Console."),(0,o.mdx)("h2",{id:"binmagento-adminadobe-imsdisable"},"bin/magento admin:adobe-ims:disable"),(0,o.mdx)("p",null,"Disables the AdminAdobeIMS Module.\nWhen disabling, the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Organization ID"),", ",(0,o.mdx)("inlineCode",{parentName:"p"},"Client ID")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"Client Secret")," values will be deleted from the config."),(0,o.mdx)("h2",{id:"binmagento-adminadobe-imsstatus"},"bin/magento admin:adobe-ims:status"),(0,o.mdx)("p",null,"Shows if the AdminAdobeIMS Module is enabled or disabled"),(0,o.mdx)("h2",{id:"binmagento-adminadobe-imsinfo"},"bin/magento admin:adobe-ims:info"),(0,o.mdx)("p",null,"Example of getting data if Admin Adobe Ims module is enabled:\\\nClient ID: 1234567890a \\\nOrganization ID: 1234567890@org \\\nClient Secret configured"),(0,o.mdx)("p",null,'If Admin Adobe Ims module is disabled, cli command will show message "Module is disabled"'),(0,o.mdx)("h1",{id:"admin-login-design"},"Admin Login design"),(0,o.mdx)("p",null,"The admin login design changes when the AdminAdobeIms module is enabled and configured correctly via the CLI command.\nWe have added the customer layout handle ",(0,o.mdx)("inlineCode",{parentName:"p"},"adobe_ims_login")," to deal with all the design changes.\nThis handle is added via ",(0,o.mdx)("inlineCode",{parentName:"p"},"\\Magento\\AdminAdobeIms\\Plugin\\AddAdobeImsLayoutHandlePlugin::afterAddDefaultHandle"),"."),(0,o.mdx)("p",null,"The layout file ",(0,o.mdx)("inlineCode",{parentName:"p"},"view/adminhtml/layout/adobe_ims_login.xml")," adds:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"The bundled ",(0,o.mdx)("a",{parentName:"li",href:"https://opensource.adobe.com/spectrum-css/"},"Adobe Spectrum CSS"),"."),(0,o.mdx)("li",{parentName:"ul"},"New classes to current Magento html items,"),(0,o.mdx)("li",{parentName:"ul"},'Our new "Login with Adobe ID" button template,'),(0,o.mdx)("li",{parentName:"ul"},"A custom error message wrapper,")),(0,o.mdx)("p",null,"We have included the minified css and the used svgs from Spectrum CSS with our module, but you can also use npm to install the latest versions.\nTo rebuild the minified css run the command ",(0,o.mdx)("inlineCode",{parentName:"p"},"./node_modules/.bin/postcss -o dist/index.min.css index.css")," after npm install from inside the web directory."),(0,o.mdx)("h1",{id:"adminadobeims-callback"},"AdminAdobeIMS Callback"),(0,o.mdx)("p",null,"For the AdobeIMS Login we provide a redirect_uri on the request. After a successful Login in AdobeIMS, we get redirected to provided redirect_uri."),(0,o.mdx)("p",null,"In the ImsCallback Controller we get the access_token and then the user profile.\nWe then check if the assigned organization is valid and if the user does exist in the Magento database, before we complete the user login in Magento."),(0,o.mdx)("p",null,"If there went something wrong during the authorization, the user gets redirected to the admin login page and an error message is shown."),(0,o.mdx)("h1",{id:"organization-id-validation"},"Organization ID Validation"),(0,o.mdx)("p",null,"During the authorization we check if the configured ",(0,o.mdx)("inlineCode",{parentName:"p"},"Organization ID")," provided on the enabling CLI command is assigned to the user."),(0,o.mdx)("p",null,"In the profile response from Adobe IMS must be a ",(0,o.mdx)("inlineCode",{parentName:"p"},"roles")," array. There we have all assigned organizations to the user."),(0,o.mdx)("p",null,"We compare if the configured organization ID does exist in this array and also the structure of the organization ID is valid."),(0,o.mdx)("h1",{id:"admin-backend-login"},"Admin Backend Login"),(0,o.mdx)("p",null,"Login with the help Adobe IMS Service is implemented. The redirect to Adobe IMS Service is performed-\nThe redirect from Adobe IMS is done to \\Magento\\AdminAdobeIms\\Controller\\Adminhtml\\OAuth\\ImsCallback controller."),(0,o.mdx)("p",null,"The access code comes from Adobe, the token response is got on the basis of the access code,\nclient id (api key) and client secret (private key).\nThe token response access token is used for getting user profile information.\nIf this is successful, the admin user will be logged in and the access tokens is added to session as well as token_last_check_time value."),(0,o.mdx)("h1",{id:"access_token-saving-in-session-and-validation"},"ACCESS_TOKEN saving in session and validation"),(0,o.mdx)("p",null,"When AdminAdobeIms module is enabled, we check each 10 minutes if ACCESS_TOKEN is still valid.\nFor this when admin user login and when session is started, we add 2 extra variables to the session:\ntoken_last_check_time is current time\nadobe_access_token is ACCESS_TOKEN that we receive during authorization"),(0,o.mdx)("p",null,"There is a plugin \\Magento\\AdminAdobeIms\\Plugin\\BackendAuthSessionPlugin where we check if token_last_check_time was updated 10 min ago.\nIf yes, then we make call to IMS to validate access_token.\nIf token is valid, value token_last_check_time will be updated to current time and session prolong.\nIf token is not valid, session will be destroyed."),(0,o.mdx)("h1",{id:"admin-backend-logout"},"Admin Backend Logout"),(0,o.mdx)("p",null,"The logout from Adobe IMS Service is performed when Magento Admin User is logged out.\nIt's triggered by the event ",(0,o.mdx)("inlineCode",{parentName:"p"},"controller_action_predispatch_adminhtml_auth_logout")),(0,o.mdx)("p",null,"We do external LogOut by call to IMS. Session revoke is standard Magento behavior"),(0,o.mdx)("h1",{id:"admin-created-email"},"Admin Created Email"),(0,o.mdx)("p",null,"We created an Observer for the ",(0,o.mdx)("inlineCode",{parentName:"p"},"admin_user_save_after")," event. \\\nThere we check if the customer object is newly created or not. \\\nWhen a new admin user got created in Magento, he will then receive an email with further information on how to login."),(0,o.mdx)("p",null,"We use the ",(0,o.mdx)("inlineCode",{parentName:"p"},"admin_emails_new_user_created_template")," Template for the content, and also created a new header and footer template for the Admin Adobe IMS module templates.\nThey are called ",(0,o.mdx)("inlineCode",{parentName:"p"},"admin_adobe_ims_email_header_template")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"admin_adobe_ims_email_footer_template"),"."),(0,o.mdx)("p",null,"The notification mail will be sent inside our ",(0,o.mdx)("inlineCode",{parentName:"p"},"AdminNotificationService")," where we can add and modify the template variables."),(0,o.mdx)("h1",{id:"error-handling"},"Error Handling"),(0,o.mdx)("p",null,"For the AdminAdobeIms Module we have two specific error messages and one general error message which are shown on the Admin Login page when an error occured."),(0,o.mdx)("h3",{id:"adobeimstokenauthorizationexception"},"AdobeImsTokenAuthorizationException"),(0,o.mdx)("p",null,"Will be thrown when there was an error during the authorization. \\\ne. g. a call to AdobeIMS fails or there was no matching admin found in the Magento database."),(0,o.mdx)("h3",{id:"adobeimsorganizationauthorizationexception"},"AdobeImsOrganizationAuthorizationException"),(0,o.mdx)("p",null,"Will be thrown when the admin user who wants to log in does not have the configured organization ID assigned to his AdobeIMS Profile."),(0,o.mdx)("h3",{id:"error-logging"},"Error logging"),(0,o.mdx)("p",null,"Whenever an exception is thrown during the Adobe IMS Login, we will log the specific exception message but show a general error message on the admin login form."),(0,o.mdx)("p",null,"Errors are logged into the ",(0,o.mdx)("inlineCode",{parentName:"p"},"/var/log/admin_adobe_ims.log")," file."),(0,o.mdx)("p",null,"Logging can be enabled or disabled in the config on changing the value for ",(0,o.mdx)("inlineCode",{parentName:"p"},"adobe_ims\\integration\\logging_enabled")," or in the Magento Admin Configuration under ",(0,o.mdx)("inlineCode",{parentName:"p"},"Advanced > Developer > Debug"),". \\\nThere you can switch the toggle for ",(0,o.mdx)("inlineCode",{parentName:"p"},"Enable Logging for Admin Adobe IMS Module")),(0,o.mdx)("h1",{id:"password-usage-in-admin-ui"},"Password usage in Admin UI"),(0,o.mdx)("p",null,"When the AdobeAdminIMS Module is enabled, we do not need any password fields in the Magento admin backend anymore."),(0,o.mdx)("p",null,'So we removed the "Password" and "Password Confirmation" fields of the user forms.\nThis is done by the plugin ',(0,o.mdx)("inlineCode",{parentName:"p"},"\\Magento\\AdminAdobeIms\\Plugin\\RemovePasswordAndUserConfirmationFormFieldsPlugin"),".\nHere we remove the password and password confirmation field.\nAs the verification field is just hidden, we set a random password to bypass the input filters of the Save and Delete user Classes.\nThe ",(0,o.mdx)("inlineCode",{parentName:"p"},"\\Magento\\AdminAdobeIms\\Plugin\\RemoveUserValidationRulesPlugin"),' plugin is required to remove the password fields from the form validation.\nWe update the "Current User Identity Verification" fieldset to add "Verify Identity with Adobe IMS" button instead "Your Password" field.\nThis is done by the plugins: ',(0,o.mdx)("inlineCode",{parentName:"p"},"Magento\\AdminAdobeIms\\Plugin\\Block\\Adminhtml\\User\\Edit\\Tab\\AddReAuthVerification"),", ",(0,o.mdx)("inlineCode",{parentName:"p"},"Magento\\AdminAdobeIms\\Plugin\\Block\\Adminhtml\\System\\Account\\Edit\\AddReAuthVerification"),", ",(0,o.mdx)("inlineCode",{parentName:"p"},"Magento\\AdminAdobeIms\\Plugin\\Block\\Adminhtml\\User\\Role\\Tab\\AddReAuthVerification")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"Magento\\AdminAdobeIms\\Plugin\\Block\\Adminhtml\\Integration\\Edit\\Tab\\AddReAuthVerification"),"."),(0,o.mdx)("p",null,"As we update the current user verification field, we have the ",(0,o.mdx)("inlineCode",{parentName:"p"},"\\Magento\\AdminAdobeIms\\Plugin\\ReplaceVerifyIdentityWithImsPlugin")," plugin to verify the ",(0,o.mdx)("inlineCode",{parentName:"p"},"AdobeReAuthToken")," of the current admin user in AdobeIMS and only proceed when it is valid."),(0,o.mdx)("p",null,"For the newly created user will be a random password generated, as we did not modify the admin_user table, where the password field can not be null.\nThis is done in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"\\Magento\\AdminAdobeIms\\Plugin\\UserSavePlugin"),"."),(0,o.mdx)("p",null,'We also disabled the "Change password in 30 days" functionally, as we don\'t need the Magento admin user password for the login.\nThis can be found in the ',(0,o.mdx)("inlineCode",{parentName:"p"},"\\Magento\\AdminAdobeIms\\Plugin\\DisableForcedPasswordChangePlugin")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"\\Magento\\AdminAdobeIms\\Plugin\\DisablePasswordResetPlugin")," Plugins."),(0,o.mdx)("p",null,"When the AdminAdobeIMS Module is disabled, the user can not be log in when using an empty password.\nInstead, the forgot password function must be used to reset the password."),(0,o.mdx)("h1",{id:"web-api-authentication-using-ims-access_token"},"WEB API authentication using IMS ACCESS_TOKEN"),(0,o.mdx)("p",null,"When Admin Adobe IMS is enabled, Adobe Commerce admin users will stop having credentials (username and password).\nThese admin user credentials are needed for getting token that can be used to make requests to admin web APIs.\nIt means that will be not possible to create token because admin doesn't have credentials. In these case we have to use IMS access token."),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"\\Magento\\AdminAdobeIms\\Model\\Authorization\\AdobeImsTokenUserContext")," new implementation for ",(0,o.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Authorization\\Model\\UserContextInterface")," was created.\nIn the implementation IMS access token is validated and read to get created_at and expires_in data.\nIf access_token_hash already exists in admin_adobe_ims_webapi table, then we can get admin_user_id.\nIf access_token_hash does not exist in admin_adobe_ims_webapi table, then we have to make request to IMS service to get Adobe user profile, that contain email.\nUsing email from Adobe user profile we can check if admin user with these email exists in Magento. If so, we save relevant data into admin_adobe_ims_webapi table.\nIf admin user with the email is not found, authentication will fail."),(0,o.mdx)("p",null,"Web Api Token validation via IMS request.\nEach new token (access_token_hash is not exist in admin_adobe_ims_webapi) is validated by using Adobe IMS endpoint validate_token.\nFor already existing access_token_hash in admin_adobe_ims_webapi table, validation happens only if last validation was more than 10 min ago.\nLast time validation is saved as last_check_time in admin_adobe_ims_webapi table."),(0,o.mdx)("p",null,"Check if token has expired.\nAccess token itself has expires_in value (by default is 24h, but can be adjusted in Adobe side settings).\nMagento has setting: Stores > Settings > Configuration > Services > OAuth > Access Token Expiration (default is 4h).\nBoth of values are checked in function isTokenExpired \\Magento\\AdminAdobeIms\\Model\\TokenReader.\nit means that with default values is not possible to use tokens that older than 4h."),(0,o.mdx)("h3",{id:"ims-access-token-verification"},"IMS access token verification."),(0,o.mdx)("p",null,"To verify token a public key is required. For more info ",(0,o.mdx)("a",{parentName:"p",href:"https://wiki.corp.adobe.com/display/ims/IMS+public+key+retrieval"},"https://wiki.corp.adobe.com/display/ims/IMS+public+key+retrieval"),"\nIn Admin Adobe Ims module was defined path where certificate has to be downloaded from.\nBy default, in config.xml, these value for production.\nFor testing reasons, developers can override this value, for example in env.php file like this:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-php"},"'system' => [\n        'default' => [\n            'adobe_ims' => [\n                'integration' => [\n                    'certificate_path' => 'https://static.adobelogin.com/keys/nonprod/',\n                ]\n            ]\n        ]\n    ]\n")),(0,o.mdx)("p",null,"Certificate value is cached."),(0,o.mdx)("p",null,"This authentication mechanism enabled for REST and SOAP web API areas."),(0,o.mdx)("p",null,'Examples, how developers can test functionality:\ncurl -X GET "{domain}/rest/V1/customers/2" -H "Authorization: Bearer AddAdobeImsAccessToken"\ncurl -X GET "{domain}/rest/V1/products/24-MB01" -H "Authorization: Bearer AddAdobeImsAccessToken"'),(0,o.mdx)("h3",{id:"two-factor-authentication"},"Two-factor authentication."),(0,o.mdx)("p",null,"During CLI enablement of the module, the admin user is asked, whether 2FA is enabled for Organization in Adobe Admin Console.\nIf the answer is yes, Magento TFA module (if it's present in the code base), should be disable."),(0,o.mdx)("p",null,"For this purpose the additional config value was added, this config value is read by Magento_TwoFactorAuth module.\nIf the config value is not there, the Magento_TwoFactorAuth functionality works by default."),(0,o.mdx)("h1",{id:"updated-current-user-identity-verification"},"Updated Current User Identity Verification"),(0,o.mdx)("p",null,"The AdobeAdminIms Module updates the handling of the current user identity verification."),(0,o.mdx)("p",null,'Instead of providing the current user password, the user needs to call the AdobeIms reAuth function.\nWe replaced the password field with a "verify identity" button.'),(0,o.mdx)("p",null,"By clicking on this button a popup opens with the AdobeIms Login, where the current user must enter his adobe ims password again to verify his identity.\nAfter successfully validate his identity, we are redirecting to the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Magento/AdminAdobeIms/Controller/Adminhtml/OAuth/ImsReauthCallback.php")," Controller and update the ",(0,o.mdx)("inlineCode",{parentName:"p"},"ims_verified")," field."),(0,o.mdx)("p",null,"When the form will be submitted, we verify the identity with the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Magento/AdminAdobeIms/Plugin/ReplaceVerifyIdentityWithImsPlugin.php")," Plugin.\nHere the existence of the ",(0,o.mdx)("inlineCode",{parentName:"p"},"AdobeAccessToken")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"AdobeReAuthToken")," will be checked.\nThe reauth_token will be used to call the AdobeIms validateToken Endpoint."),(0,o.mdx)("p",null,"When this call is successful, the form will be submitted, otherwise we update the Message of the thrown ",(0,o.mdx)("inlineCode",{parentName:"p"},"AuthenticationException")," to return a matching error message, done by the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Magento/AdminAdobeIms/Plugin/PerformIdentityCheckMessagePlugin.php")," Plugin."))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-module-reference-module-admin-adobe-ims-md-ad0075d8fb22d0cbdd93.js.map