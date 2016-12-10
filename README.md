# adblocker-detection

Simple jQuery snippet that will detect if an AdBlocker is active and sends an event to Google Analytics.

<b>Motivation:</b>

I wanted to know how many visitors on my sites actually had an AdBlocker installed. I searched for some snippets online but none of them worked correctly as they didn't wait until the page was fully loaded and AdBlock was not finished altering the DOM thus reporting false positive/negatives. So I came up with my own solution.

<b>Requirements:</b>

jQuery, Google Analytics and AdSense.

<b>Implementation:</b>

Put the code snippet before the closing <b>body</b> tag into your html page.
Add a <b>class="ohDear"</b> into a AdSense <b>div</b> tag. That's all. :)

<i>note: In production you may want to remove the console.log lines as they are solely ment for debugging purposes.<br /><br />
If you want you can replace the jQuery calls with $ for abbrivation I just left it in there for clarity.</i>
