The script is a fork of [this script](https://greasyfork.org/en/scripts/6779-markdown-toolbar-for-gf-and-uso/code?version=179573) by wOxxOm, to work with the new GF layout.  
Thanks for his work making such an essential script.

- Common formatting buttons (markdown only)
- (forum) HTML & markdown formatting help links
- CODE markdown button that wraps selected text in ` or ``` if multiple lines are selected.
- MARKDOWN format by default for new comments - also can be set in your profile settings.

The script works and is tested on Tampermonkey and Violentmonkey.  
Greasemonkey -any version- is not supported (the script might work, but is not tested).

**Notes:**

- If you have an issue with the script, please report it in the [repo](https://github.com/darkred/Userscripts/issues), always open for PRs.  
- Also, please keep in mind that I didn't write the script myself:  
  I put an effort to make this script, written by someone else, much more experienced than me, work in the new GF layout.  
  My aim is to restore the functionality. That's all.  
- The `.markup_choice` radio buttons are of the site, not of the script!  
  ![markup_choice](https://i.imgur.com/fUkqf9I.jpg)
- Known issues:  
  - the method currently used to hide the toolbar when switching to the Preview tab is unfortunately flawed:  
    sometimes the toolbar might not be hidden, or isn't restored afterwards.  
    And it's hidden earlier than expected: it's hidden immediately, as you click Preview - not when the Preview tab itself gets the red focus.

**Modification:**
[GreasyFork markdown](https://greasyfork.org/scripts/422887) 
- 2024-08-04T08:59:11 `DOMContentLoaded` sometimes conflicts with other scripts, causing the listener to fail. Changed to `load`.


**Screenshots:** (see attachments)

If you have any bugs, bug fixes or ideas, please report at my [GitHub repo](https://github.com/darkred/Userscripts)

![Screenshot 1](https://greasyfork.s3.us-east-2.amazonaws.com/ovrm7oyb7emsuy02mder765txu9d)  
![Screenshot 2](https://greasyfork.s3.us-east-2.amazonaws.com/2y6vh1wst0mm2o24ywoyqc4fxqy2)  
![Screenshot 3](https://greasyfork.s3.us-east-2.amazonaws.com/p3zqbf7mpmv06wqpc9ffnzdi74sz)  
![Screenshot 4](https://greasyfork.s3.us-east-2.amazonaws.com/d2h03acaewidd0duft297r1g732c)
