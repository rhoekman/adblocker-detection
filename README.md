# adblocker-detection

Simple jQuery snippet that will detect if an AdBlocker is active and sends an event to Google Analytics.

<b>Motivation:</b>

I found some snippets online but none of them worked correctly as they didn't wait until the page was fully loaded and AdBlock was not finished altering the DOM. Giving false positive/negatives.

<b>Requirements:</b>

jQuery, Google Analytics and AdSense.

<b>Implementation:</b>

Put the code snippet before the closing <b>body</b> tag into your html page.
Add a <b>class="ohDear"</b> into a AdSense <b>div</b> tag.

<i>note: In production you may want to remove the console.log lines as they are solely ment for debugging purposes.</i>
